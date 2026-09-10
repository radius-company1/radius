import { useState, type FormEvent } from 'react';
import { Button } from './ui/Button';

type ContactFormProps = {
  id?: string;
  organizationLabel?: string;
  messageRequired?: boolean;
  submitLabel?: string;
  direction?: string;
};

type FormState = {
  organization: string;
  name: string;
  phone: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  organization: '',
  name: '',
  phone: '',
  email: '',
  message: '',
};

export function ContactForm({
  id = 'contact',
  organizationLabel = 'Организация',
  messageRequired = true,
  submitLabel = 'Отправить заявку',
  direction,
}: ContactFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'error'>('idle');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Backend endpoint is not connected yet — do not claim the request was sent.
    setStatus('error');
  };

  return (
    <form className="contact-form" id={id} onSubmit={handleSubmit} noValidate>
      {direction ? <input type="hidden" name="direction" value={direction} /> : null}
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
      {status === 'error' ? (
        <p className="contact-form__notice" role="status">
          Форма заявки пока не подключена к отправке. Напишите на{' '}
          <a href="mailto:info@lexicom.ai">info@lexicom.ai</a> или позвоните по телефону{' '}
          <a href="tel:+74999578132">+7 (499) 957-81-32</a>.
        </p>
      ) : null}
      <Button type="submit">{submitLabel}</Button>
    </form>
  );
}
