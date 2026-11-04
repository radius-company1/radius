import { useClientReady } from '../hooks/useClientReady';
import { useState, type FormEvent } from 'react';
import { companyContacts } from '../data/company';
import { Button } from './ui/Button';
import { MotionLink as Link } from './ui/MotionLink';

type ContactFormProps = {
  id?: string;
  organizationLabel?: string;
  messageRequired?: boolean;
  submitLabel?: string;
  direction?: string;
  /** Lead source when the form lives on a product page */
  product?: string;
  /** `combined` asks for one «Телефон или email» field instead of two required ones */
  contactFields?: 'separate' | 'combined';
};

type FormState = {
  organization: string;
  name: string;
  phone: string;
  email: string;
  contact: string;
  message: string;
};

const initialState: FormState = {
  organization: '',
  name: '',
  phone: '',
  email: '',
  contact: '',
  message: '',
};

export function ContactForm({
  id = 'contact-form',
  organizationLabel = 'Организация',
  messageRequired = true,
  submitLabel = 'Отправить заявку',
  direction,
  product,
  contactFields = 'separate',
}: ContactFormProps) {
  const clientReady = useClientReady();
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'error'>('idle');
  const [consent, setConsent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Backend endpoint is not connected yet — do not claim the request was sent.
    setStatus('error');
  };

  return (
    <form className="contact-form" id={id} onSubmit={handleSubmit} method="post" noValidate>
      <fieldset disabled={!clientReady} style={{ border: 0, padding: 0, margin: 0, minWidth: 0 }}>
        {direction ? <input type="hidden" name="direction" value={direction} /> : null}
        {product ? (
          <>
            <input type="hidden" name="product" value={product} />
            <input type="hidden" name="page" value={clientReady ? window.location.origin + window.location.pathname : ''} />
          </>
        ) : null}
        <div className="contact-form__grid">
          <label className="field">
            <span>{organizationLabel}</span>
            <input
              type="text"
              name="organization"
              required
              value={form.organization}
              onChange={(e) => setForm({ ...form, organization: e.target.value })}
              autoComplete="organization"
            />
          </label>
          <label className="field">
            <span>Имя</span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              autoComplete="name"
            />
          </label>
          {contactFields === 'combined' ? (
            <label className="field field--full">
              <span>Телефон или email</span>
              <input
                type="text"
                name="contact"
                required
                value={form.contact}
                onChange={(e) => setForm({ ...form, contact: e.target.value })}
                autoComplete="email"
              />
            </label>
          ) : (
            <>
              <label className="field">
                <span>Телефон</span>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  autoComplete="tel"
                />
              </label>
              <label className="field">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  autoComplete="email"
                />
              </label>
            </>
          )}
          <label className="field field--full">
            <span>Краткое описание задачи{messageRequired ? '' : ' — необязательно'}</span>
            <textarea
              name="message"
              rows={4}
              required={messageRequired}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </label>
        </div>
        <label className="contact-form__consent">
          <input
            type="checkbox"
            name="consent"
            required
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
          <span>
            Даю{' '}
            <Link to="/consent" target="_blank" rel="noopener">
              согласие на обработку персональных данных
            </Link>{' '}
            и подтверждаю, что ознакомлен(а) с{' '}
            <Link to="/privacy" target="_blank" rel="noopener">
              Политикой обработки персональных данных
            </Link>
            .
          </span>
        </label>
        {status === 'error' ? (
          <p className="contact-form__notice" role="status">
            Форма заявки пока не подключена к отправке. Напишите на{' '}
            <a href={`mailto:${companyContacts.email}`}>{companyContacts.email}</a> или позвоните по телефону{' '}
            <a href={companyContacts.phoneHref}>{companyContacts.phone}</a>.
          </p>
        ) : null}
        <Button type="submit" disabled={!clientReady || !consent}>{submitLabel}</Button>
      </fieldset>
      <noscript><p>Отправка через форму пока недоступна. Напишите на <a href={`mailto:${companyContacts.email}`}>{companyContacts.email}</a> или позвоните <a href={companyContacts.phoneHref}>{companyContacts.phone}</a>.</p></noscript>
    </form>
  );
}
