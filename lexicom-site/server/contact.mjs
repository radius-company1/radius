import { createServer } from 'node:http';
import { createHmac } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync, renameSync, readdirSync, statSync, unlinkSync } from 'node:fs';
import { join } from 'node:path';
import { isIP } from 'node:net';
import contract from './contract.json' with { type: 'json' };

const emailPattern = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9.-]*[A-Za-z0-9])?\.[A-Za-z]{2,63}$/;
const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
export const validEmail = value => typeof value === 'string' && value.length <= 254 && emailPattern.test(value);

export function validate(input) {
  const fields = {};
  if (!input || typeof input !== 'object' || Array.isArray(input)) return { fields: { form: 'Некорректные данные.' } };
  const data = {};
  for (const [key, limit] of Object.entries(contract.limits)) {
    const value = input[key] ?? '';
    // Intentionally reject control characters and header newlines from public input.
    // eslint-disable-next-line no-control-regex
    if (typeof value !== 'string' || value.length > limit || /[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/.test(value) || (key !== 'message' && /[\r\n]/.test(value))) fields[key] = 'Проверьте значение поля.';
    data[key] = typeof value === 'string' ? value.trim() : '';
  }
  if (!data.organization) fields.organization = 'Укажите организацию.';
  if (!data.name) fields.name = 'Укажите имя.';
  const contacts = data.contact.split(' / ');
  if (!contacts.length || contacts.length > 2 || contacts.some(value => !(validEmail(value) || (/^\+?[\d ()-]+$/.test(value) && value.replace(/\D/g, '').length >= 10 && value.replace(/\D/g, '').length <= 15)))) fields.contact = 'Укажите email или телефон с кодом города/страны.';
  if (input.consent !== true || input.consentVersion !== contract.consentVersion) fields.consent = 'Подтвердите согласие. При необходимости обновите страницу.';
  if (!uuidPattern.test(input.requestId ?? '')) fields.form = 'Обновите страницу и повторите отправку.';
  if (!/^\/(?!\/)[^?#\s]*$/.test(data.page)) fields.page = 'Обновите страницу и повторите отправку.';
  if (input.website) fields.form = 'Не удалось отправить заявку. Свяжитесь с нами по email.';
  return { fields, data: { ...data, requestId: input.requestId } };
}

export function createContactServer({ origins, dataDir, secret, from, sendMail, trustLocalProxy = false, rateLimit = 20, globalLimit = 200 }) {
  mkdirSync(dataDir, { recursive: true, mode: 0o700 });
  const rates = new Map(), inFlight = new Set();
  const digest = value => createHmac('sha256', secret).update(value).digest('hex');
  const save = (file, record) => { writeFileSync(file + '.tmp', JSON.stringify(record), { mode: 0o600 }); renameSync(file + '.tmp', file); };
  const prune = () => {
    const cutoff = Date.now() - 30 * 86400000;
    for (const name of readdirSync(dataDir)) {
      if (!/^[0-9a-f-]+\.json(?:\.tmp)?$/.test(name)) continue;
      const file = join(dataDir, name);
      if (statSync(file).mtimeMs < cutoff) unlinkSync(file);
    }
    for (const [key, value] of rates) if (value.until < Date.now()) rates.delete(key);
  };
  prune();
  const cleanup = setInterval(prune, 3600000); cleanup.unref();
  const server = createServer(async (req, res) => {
    const reply = (status, body) => { if (!res.destroyed) res.writeHead(status).end(JSON.stringify(body)); };
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Vary', 'Origin');
    if (req.url !== '/api/contact') return reply(404, { message: 'Не найдено.' });
    const origin = req.headers.origin;
    if (!origins.includes(origin)) return reply(403, { message: 'Источник запроса не разрешён.' });
    res.setHeader('Access-Control-Allow-Origin', origin);
    if (req.method === 'OPTIONS') {
      res.setHeader('Access-Control-Allow-Methods', 'POST');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      res.setHeader('Access-Control-Max-Age', '600');
      return res.writeHead(204).end();
    }
    if (req.method !== 'POST') { res.setHeader('Allow', 'POST, OPTIONS'); return reply(405, { message: 'Метод не поддерживается.' }); }
    if (!/^application\/json(?:;|$)/i.test(req.headers['content-type'] ?? '')) return reply(415, { message: 'Ожидается JSON.' });
    const remote = req.socket.remoteAddress;
    const local = ['127.0.0.1', '::1', '::ffff:127.0.0.1'].includes(remote);
    const forwarded = req.headers['x-real-ip'];
    const ip = trustLocalProxy && local && typeof forwarded === 'string' && isIP(forwarded) ? forwarded : remote ?? '';
    for (const [key, limit] of [[digest(ip), rateLimit], ['global', globalLimit]]) {
      let rate = rates.get(key);
      if (!rate || rate.until < Date.now()) rate = { count: 0, until: Date.now() + 3600000 };
      if (rate.count >= limit || rates.size > 10000) {
        res.setHeader('Retry-After', String(Math.ceil((rate.until - Date.now()) / 1000)));
        return reply(429, { message: 'Слишком много попыток. Свяжитесь с нами по email или попробуйте позже.' });
      }
      rate.count++; rates.set(key, rate);
    }
    if (Number(req.headers['content-length']) > 16384) return reply(413, { message: 'Слишком большой запрос.' });
    const chunks = []; let size = 0;
    try {
      for await (const chunk of req) {
        size += chunk.length;
        if (size > 16384) { reply(413, { message: 'Слишком большой запрос.' }); req.resume(); return; }
        chunks.push(chunk);
      }
      // Decode once below: a multibyte character can cross network chunks.
    } catch { return reply(400, { message: 'Не удалось прочитать запрос.' }); }
    let input;
    try { input = JSON.parse(Buffer.concat(chunks).toString('utf8')); } catch { return reply(400, { message: 'Некорректный JSON.' }); }
    const { data, fields } = validate(input);
    if (Object.keys(fields).length) return reply(422, { message: 'Проверьте поля формы.', fields });
    const file = join(dataDir, `${data.requestId.toLowerCase()}.json`);
    const hash = digest(JSON.stringify(data));
    let record;
    try {
      try { record = JSON.parse(readFileSync(file, 'utf8')); } catch (error) { if (error.code !== 'ENOENT') throw error; }
      if (record) {
        if (record.hash !== hash) return reply(409, { message: 'Заявка изменилась. Обновите страницу перед отправкой.' });
        if (record.state === 'sent') return reply(200, { accepted: true, requestId: data.requestId });
        if (inFlight.has(data.requestId)) return reply(202, { message: 'Заявка ещё отправляется. Повторите проверку через несколько секунд.' });
        if (record.state !== 'failed') return reply(409, { message: 'Статус отправки уточняется. Свяжитесь с нами по email и укажите номер заявки: ' + data.requestId });
      }
      record = { hash, state: 'sending', receivedAt: new Date().toISOString(), consentVersion: contract.consentVersion };
      save(file, record); inFlight.add(data.requestId);
      const replyTo = data.contact.split(' / ').find(validEmail);
      const result = await sendMail({ from, to: contract.recipient, replyTo,
        subject: 'Заявка с сайта Lexicom', messageId: `<${data.requestId}@lexicom.ai>`,
        text: `Организация: ${data.organization}\nИмя: ${data.name}\nКонтакт: ${data.contact}\nЗадача: ${data.message || 'Не указана'}\nНаправление: ${data.direction || '—'}\nПродукт: ${data.product || '—'}\nСтраница: ${data.page}\n\nСогласие: ${contract.consentVersion}\nВремя: ${record.receivedAt}\nНомер заявки: ${data.requestId}`,
        disableFileAccess: true, disableUrlAccess: true });
      if (!result.accepted?.includes(contract.recipient)) { const error = new Error('Recipient rejected'); error.responseCode = 550; throw error; }
      record.state = 'sent'; save(file, record);
      return reply(200, { accepted: true, requestId: data.requestId });
    } catch (error) {
      // Retry only explicit SMTP rejection or failure before sending DATA.
      const safe = error.responseCode >= 400 || ['EAUTH', 'ECONNECTION', 'EDNS'].includes(error.code);
      if (record) {
        record.state = safe ? 'failed' : 'uncertain';
        try { save(file, record); } catch { /* Operational log below, never return false success. */ }
      }
      console.error(JSON.stringify({ event: 'contact_error', requestId: data.requestId, code: error.code ?? 'SEND_OR_STORAGE', state: record?.state }));
      return reply(503, { message: safe ? 'Не удалось отправить заявку. Повторите попытку или напишите нам по email.' : 'Не удалось подтвердить отправку. Повторите проверку или свяжитесь с нами по email.' });
    } finally { inFlight.delete(data.requestId); }
  });
  server.requestTimeout = 15000; server.headersTimeout = 10000;
  server.on('close', () => clearInterval(cleanup));
  return server;
}
