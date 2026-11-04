import nodemailer from 'nodemailer';
import { resolve, isAbsolute } from 'node:path';
import { createContactServer, validEmail } from './contact.mjs';

const env = process.env;
for (const key of ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'SMTP_FROM', 'DATA_DIR', 'IDEMPOTENCY_SECRET', 'ALLOWED_ORIGINS']) {
  if (!env[key]?.trim()) throw new Error(`Required setting: ${key}`);
}
if (!validEmail(env.SMTP_FROM)) throw new Error('SMTP_FROM must be a bare email address');
if (env.IDEMPOTENCY_SECRET.length < 32) throw new Error('IDEMPOTENCY_SECRET must contain at least 32 characters');
if (!isAbsolute(env.DATA_DIR) || resolve(env.DATA_DIR) === '/' || resolve(env.DATA_DIR).startsWith(resolve('../dist'))) throw new Error('DATA_DIR must be a private absolute directory outside dist');
if (!['465', '587'].includes(env.SMTP_PORT)) throw new Error('Use authenticated TLS SMTP on port 465 or 587');
if ((env.SMTP_PORT === '465') !== (env.SMTP_SECURE === 'true')) throw new Error('Use SMTP_SECURE=true for 465, false for 587');
const origins = env.ALLOWED_ORIGINS.split(',').map(value => value.trim());
for (const origin of origins) {
  const url = new URL(origin);
  if (url.origin !== origin || url.protocol !== 'https:') throw new Error('ALLOWED_ORIGINS requires exact HTTPS origins without trailing slash');
}
const mailer = nodemailer.createTransport({ host: env.SMTP_HOST, port: Number(env.SMTP_PORT), secure: env.SMTP_SECURE === 'true', requireTLS: true,
  auth: { user: env.SMTP_USER, pass: env.SMTP_PASS }, connectionTimeout: 10000, greetingTimeout: 10000, socketTimeout: 15000,
  disableFileAccess: true, disableUrlAccess: true });
await mailer.verify();
if (process.argv.includes('--check-smtp')) { console.log('SMTP connection and authentication OK; no email sent.'); mailer.close(); }
else {
  if (env.HOST && env.HOST !== '127.0.0.1') throw new Error('Bind this service to 127.0.0.1 behind the local HTTPS proxy');
  const server = createContactServer({ origins, dataDir: env.DATA_DIR, secret: env.IDEMPOTENCY_SECRET, from: env.SMTP_FROM,
    sendMail: mail => mailer.sendMail(mail), trustLocalProxy: env.TRUST_LOCAL_PROXY === 'true' });
  server.listen(Number(env.PORT || 8787), '127.0.0.1', () => console.log('Lexicom contact API listening on loopback'));
  for (const signal of ['SIGTERM', 'SIGINT']) process.on(signal, () => { server.close(() => mailer.close()); });
}
