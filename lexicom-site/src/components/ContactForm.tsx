import { useState, type FormEvent } from 'react';
import { Button } from './ui/Button';

type ContactFormProps = {
  id?: string;
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

export function ContactForm({ id = 'contact' }: ContactFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact-form contact-form--success" id={id}>
        <p className="contact-form__success-title">Заявка отправлена</p>
        <p className="contact-form__success-text">
          Спасибо за обращение. Мы свяжемся с вами, чтобы обсудить задачу и возможную конфигурацию платформы.
        </p>
        <Button variant="secondary" onClick={() => { setSubmitted(false); setForm(initialState); }}>
          Отправить ещё одну заявку
        </Button>
      </div>
    );
  }

  return (
    <form className="contact-form" id={id} onSubmit={handleSubmit} noValidate>
      <div className="contact-form__grid">
        <label className="field">
          <span>Организация</span>
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
          <span>Краткое описание задачи</span>
          <textarea
            name="message"
            rows={4}
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </label>
      </div>
      <Button type="submit">Отправить заявку</Button>
    </form>
  );
}
