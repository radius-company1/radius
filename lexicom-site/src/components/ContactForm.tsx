import { useClientReady } from '../hooks/useClientReady';
import { useRef, useState, type FormEvent } from 'react';
import { companyContacts } from '../data/company';
import contract from '../../server/contract.json';
import { Button } from './ui/Button';
import { MotionLink as Link } from './ui/MotionLink';

type ContactFormProps = {
  id?: string;
  organizationLabel?: string;
  messageRequired?: boolean;
  submitLabel?: string;
  direction?: string;
  product?: string;
  contactFields?: 'separate' | 'combined';
};
const initialState = { organization: '', name: '', phone: '', email: '', contact: '', message: '' };
const endpoint = (import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined)?.trim();

function ContactLinks() {
  return <>Напишите на <a href={`mailto:${companyContacts.email}`}>{companyContacts.email}</a> или позвоните <a href={companyContacts.phoneHref}>{companyContacts.phone}</a>.</>;
}

export function ContactForm({ id = 'contact-form', organizationLabel = 'Организация', messageRequired = false,
  submitLabel = 'Отправить заявку', direction, product, contactFields = 'combined' }: ContactFormProps) {
  const ready = useClientReady();
  const [form, setForm] = useState(initialState);
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
  const [notice, setNotice] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const attempt = useRef({ payload: '', id: '' });
  const busy = useRef(false);
  const honeypot = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!endpoint || busy.current || !consent) return;
    const element = event.currentTarget;
    const contact = (contactFields === 'combined' ? form.contact : [form.phone, form.email].filter(Boolean).join(' / ')).trim();
    const payload = JSON.stringify({ organization: form.organization.trim(), name: form.name.trim(), contact,
      message: form.message.trim(), direction: direction ?? '', product: product ?? '', page: window.location.pathname,
      consent: true, consentVersion: contract.consentVersion, website: honeypot.current?.value ?? '' });
    if (attempt.current.payload !== payload) attempt.current = { payload, id: crypto.randomUUID() };
    busy.current = true;
    setStatus('pending'); setErrors({}); setNotice('');
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 25000);
    try {
      const response = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...JSON.parse(payload), requestId: attempt.current.id }),
        credentials: 'omit', signal: controller.signal });
      const data = await response.json();
      if (!response.ok || data.accepted !== true) {
        setErrors(data.fields ?? {});
        setStatus('error');
        setNotice(data.message || 'Не удалось отправить заявку. Повторите попытку или свяжитесь с нами напрямую.');
        const first = Object.keys(data.fields ?? {})[0];
        if (first) requestAnimationFrame(() => (element.elements.namedItem(first) as HTMLElement | null)?.focus());
        return;
      }
      setStatus('success'); setNotice('Заявка принята. Команда Lexicom свяжется с вами по указанному контакту.');
      setForm(initialState); setConsent(false); attempt.current = { payload: '', id: '' };
    } catch {
      setStatus('error');
      setNotice('Не удалось получить подтверждение. Повторите попытку в этой форме — проверим статус заявки без повторной отправки.');
    } finally {
      window.clearTimeout(timeout); busy.current = false;
    }
  };

  if (!endpoint) return <div className="contact-form contact-form--direct" id={id}>
    <p>Расскажите, что хотите автоматизировать, и оставьте контакт для ответа.</p>
    <a className="btn btn--primary" href={`mailto:${companyContacts.email}`}>Написать в Lexicom</a>
    <p><ContactLinks /></p>
  </div>;

  const field = (name: keyof typeof initialState, label: string, options: { type?: string; autoComplete?: string; required?: boolean; full?: boolean; maxLength?: number } = {}) => <label className={`field${options.full ? ' field--full' : ''}`}>
    <span>{label}</span>
    <input name={name} type={options.type ?? 'text'} autoComplete={options.autoComplete} required={options.required ?? true}
      maxLength={options.maxLength ?? contract.limits.contact} value={form[name]}
      aria-invalid={errors[name] ? true : undefined} aria-describedby={errors[name] ? `${id}-${name}-error` : undefined}
      onChange={event => { setForm({ ...form, [name]: event.target.value }); setErrors({ ...errors, [name]: '' }); }} />
    {errors[name] && <span className="field__error" id={`${id}-${name}-error`}>{errors[name]}</span>}
  </label>;

  return <form className="contact-form" id={id} onSubmit={handleSubmit} aria-busy={status === 'pending'}>
    <fieldset disabled={!ready || status === 'pending'} style={{ border: 0, padding: 0, margin: 0, minWidth: 0 }}>
      <div className="contact-form__trap" aria-hidden="true"><label>Website<input ref={honeypot} name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <div className="contact-form__grid">
        {field('organization', organizationLabel, { autoComplete: 'organization', maxLength: contract.limits.organization })}
        {field('name', 'Имя', { autoComplete: 'name', maxLength: contract.limits.name })}
        {contactFields === 'combined' ? field('contact', 'Телефон или email', { full: true, autoComplete: 'email' }) : <>
          {field('phone', 'Телефон', { type: 'tel', autoComplete: 'tel', required: !form.email })}
          {field('email', 'Email', { type: 'email', autoComplete: 'email', required: !form.phone })}
          {errors.contact && <p className="field__error">{errors.contact}</p>}
        </>}
        <label className="field field--full"><span>Краткое описание задачи{messageRequired ? '' : ' — необязательно'}</span>
          <textarea name="message" rows={3} required={messageRequired} maxLength={contract.limits.message} value={form.message}
            onChange={event => setForm({ ...form, message: event.target.value })} />
        </label>
      </div>
      <label className="contact-form__consent"><input type="checkbox" name="consent" required checked={consent} onChange={event => setConsent(event.target.checked)} />
        <span>Даю <Link to="/consent" target="_blank" rel="noopener">согласие на обработку персональных данных</Link> и подтверждаю, что ознакомлен(а) с <Link to="/privacy" target="_blank" rel="noopener">Политикой обработки персональных данных</Link>.</span>
      </label>
      <Button type="submit" disabled={!ready || !consent || status === 'pending'}>{status === 'pending' ? 'Отправляем…' : submitLabel}</Button>
    </fieldset>
    {notice && <div className={`contact-form__notice contact-form__notice--${status}`} role={status === 'error' ? 'alert' : 'status'}><p>{notice}</p>{status === 'error' && <p><ContactLinks /></p>}</div>}
    <noscript><p><ContactLinks /></p></noscript>
  </form>;
}
