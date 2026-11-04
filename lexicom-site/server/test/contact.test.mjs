import test from 'node:test';
import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { mkdtemp, rm, readFile, readdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import nodemailer from 'nodemailer';
import { createContactServer } from '../contact.mjs';
import contract from '../contract.json' with { type: 'json' };
import { smtpFixture } from './smtp-fixture.mjs';

const origin = 'https://lexicom.ai';
const payload = () => ({ organization: 'Проверка Lexicom', name: 'Проверка', contact: 'qa@example.com', message: 'Проверка подключения',
  page: '/mfc/', direction: 'МФЦ', product: '', consent: true, consentVersion: contract.consentVersion, requestId: randomUUID(), website: '' });
async function fixture(t, options = {}) {
  const dataDir = await mkdtemp(join(tmpdir(), 'lexicom-contact-test-'));
  const sent = [];
  const server = createContactServer({ origins: [origin], dataDir, secret: 'test-only-secret-never-used-in-production', from: 'forms@example.com',
    sendMail: async mail => { sent.push(mail); return { accepted: [contract.recipient] }; }, ...options });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const url = `http://127.0.0.1:${server.address().port}/api/contact`;
  t.after(async () => { await new Promise(resolve => server.close(resolve)); await rm(dataDir, { recursive: true }); });
  const post = async (body, headers = {}) => fetch(url, { method: 'POST', headers: { origin, 'content-type': 'application/json', ...headers }, body: JSON.stringify(body) });
  return { url, post, sent, dataDir };
}

test('valid lead: fixed recipient, contact/source/consent, private ledger without personal details, idempotent retry', async t => {
  const f = await fixture(t), data = payload();
  assert.equal((await f.post({ ...data, to: 'attacker@example.com' })).status, 200);
  assert.equal((await f.post(data)).status, 200);
  assert.equal(f.sent.length, 1);
  assert.equal(f.sent[0].to, 'info@lexicom-ai.ru');
  assert.equal(f.sent[0].replyTo, data.contact);
  assert.match(f.sent[0].text, /МФЦ/); assert.match(f.sent[0].text, /Согласие: 2026-11-04/);
  const ledger = await readFile(join(f.dataDir, (await readdir(f.dataDir))[0]), 'utf8');
  assert.ok(!ledger.includes(data.contact)); assert.ok(!ledger.includes(data.organization));
  assert.equal(JSON.parse(ledger).state, 'sent');
  assert.equal((await f.post({ ...data, message: 'Изменено' })).status, 409);
});
test('validation rejects missing consent, stale revision, empty data, header injection, invalid contact, honeypot, excess lengths', async t => {
  const f = await fixture(t);
  for (const change of [{ consent: false }, { consentVersion: 'old' }, { organization: ' ' }, { name: '' }, { contact: 'test' },
    { contact: 'a@b.ru\r\nBcc: bad@b.ru' }, { website: 'spam' }, { message: 'a'.repeat(4001) }, { page: '//elsewhere' }, { requestId: '../bad' }]) {
    assert.equal((await f.post({ ...payload(), ...change })).status, 422, JSON.stringify(change).slice(0,100));
  }
  assert.equal(f.sent.length, 0);
});
test('CORS, method, body type, malformed and oversized requests', async t => {
  const f = await fixture(t);
  assert.equal((await f.post(payload(), { origin: 'https://evil.example' })).status, 403);
  assert.equal((await f.post(payload(), { 'content-type': 'text/plain' })).status, 415);
  assert.equal((await fetch(f.url, { headers: { origin } })).status, 405);
  assert.equal((await fetch(f.url, { method: 'OPTIONS', headers: { origin } })).headers.get('access-control-allow-origin'), origin);
  assert.equal((await f.post({ message: 'a'.repeat(17000) })).status, 413);
  assert.equal((await fetch(f.url, { method: 'POST', headers: { origin, 'content-type': 'application/json' }, body: '{' })).status, 400);
  assert.equal(f.sent.length, 0);
});
test('rate limit returns Retry-After, does not send excess mail', async t => {
  const f = await fixture(t, { rateLimit: 2 });
  await f.post(payload()); await f.post(payload());
  const response = await f.post(payload());
  assert.equal(response.status, 429); assert.ok(Number(response.headers.get('retry-after')) > 0); assert.equal(f.sent.length, 2);
});
test('explicit SMTP rejection can retry; uncertain SMTP timeout is never silently resent', async t => {
  let count = 0;
  const f = await fixture(t, { sendMail: async () => { count++; if (count === 1) throw Object.assign(new Error('rejected'), { responseCode: 451 }); return { accepted: [contract.recipient] }; } });
  const data = payload(); assert.equal((await f.post(data)).status, 503); assert.equal((await f.post(data)).status, 200); assert.equal(count, 2);
  let ambiguousCount = 0;
  const g = await fixture(t, { sendMail: async () => { ambiguousCount++; throw Object.assign(new Error('timeout'), { code: 'ETIMEDOUT' }); } });
  const other = payload(); assert.equal((await g.post(other)).status, 503); assert.equal((await g.post(other)).status, 409); assert.equal(ambiguousCount, 1);
});
test('concurrent duplicate cannot send twice', async t => {
  let finish, start;
  const started = new Promise(resolve => { start = resolve; });
  const waiting = new Promise(resolve => { finish = resolve; });
  const f = await fixture(t, { sendMail: async () => { start(); await waiting; return { accepted: [contract.recipient] }; } });
  const data = payload(), first = f.post(data);
  await started;
  assert.equal((await f.post(data)).status, 202);
  finish(); assert.equal((await first).status, 200);
});
test('HTTP request reaches real Nodemailer SMTP transport and local receiver only', async t => {
  const smtp = await smtpFixture(); t.after(smtp.close);
  const mailer = nodemailer.createTransport({ host: '127.0.0.1', port: smtp.port, secure: false, ignoreTLS: true });
  const f = await fixture(t, { sendMail: mail => mailer.sendMail(mail) });
  assert.equal((await f.post(payload())).status, 200);
  assert.equal(smtp.messages.length, 1);
  assert.deepEqual(smtp.messages[0].recipients, ['RCPT TO:<info@lexicom-ai.ru>']);
  assert.match(smtp.messages[0].message, /Reply-To: qa@example.com/);
});
