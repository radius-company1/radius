import { useState } from 'react';
import { lexaDemoId, lexaDemoLine } from '../data/lexaDemo';
import { GlassSurface } from './ui/GlassSurface';
import { Reveal } from './ui/Reveal';

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        d="M7.2 3.8h2.1l1.1 3.2-1.7 1.1a9.2 9.2 0 004.2 4.2l1.1-1.7 3.2 1.1v2.1c0 .9-.7 1.6-1.6 1.6C10.2 15.4 5.6 10.8 5.6 5.4c0-.9.7-1.6 1.6-1.6z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WaveMark() {
  return (
    <svg className="lexa-card__wave" viewBox="0 0 64 28" width="64" height="28" aria-hidden="true">
      <path
        d="M2 16c4-8 6-8 8 0s4 8 8 0 4-8 8 0 4 8 8 0 4-8 8 0 4 8 8 0 4-8 8 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LexaDemo() {
  const [copied, setCopied] = useState(false);
  const { displayNumber, tel, callAvailable } = lexaDemoLine;

  const copyWithFallback = () => {
    const field = document.createElement('textarea');
    field.value = displayNumber;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.left = '-999px';
    document.body.append(field);
    field.select();
    const ok = document.execCommand('copy');
    field.remove();
    return ok;
  };

  const copyNumber = async () => {
    if (copyWithFallback()) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
      return;
    }
    try {
      await navigator.clipboard.writeText(displayNumber);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="section lexa-demo" id={lexaDemoId} aria-labelledby="lexa-demo-title">
      <div className="container lexa-demo__grid">
        <Reveal>
          <div className="lexa-demo__copy">
            <p className="lexa-demo__eyebrow">Голосовой нейробот Lexicom</p>
            <h2 id="lexa-demo-title" className="lexa-demo__title">
              Познакомьтесь с Лексой
            </h2>
            <p className="lexa-demo__lead">
              Позвоните и поговорите с нашим ИИ-ассистентом. Оцените, как Лекса распознаёт речь, отвечает на вопросы
              и ведёт диалог.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <GlassSurface className="lexa-card" radius="xl" depth="raised" tint="yellow">
            <WaveMark />
            <p className="lexa-card__name">Лекса</p>
            <p className="lexa-card__line">Демонстрационная линия</p>
            <p className="lexa-card__number">{displayNumber}</p>
            {callAvailable ? (
              <a className="btn btn--primary lexa-card__call" href={`tel:${tel}`}>
                <PhoneIcon />
                Позвонить Лексе
              </a>
            ) : (
              <button
                type="button"
                className="btn btn--primary lexa-card__call"
                disabled
                aria-describedby="lexa-demo-unavailable"
              >
                <PhoneIcon />
                Позвонить Лексе
              </button>
            )}
            {callAvailable ? (
              <button type="button" className="lexa-card__copy" onClick={copyNumber}>
                Скопировать номер
              </button>
            ) : (
              <p className="lexa-card__unavailable" id="lexa-demo-unavailable">
                Тестовый номер. Звонок пока недоступен
              </p>
            )}
            <p className="lexa-card__note">Обычный телефонный звонок. Регистрация и заявка не нужны.</p>
            {callAvailable ? (
              <p className="lexa-card__copied" role="status">
                {copied ? 'Номер скопирован' : ''}
              </p>
            ) : null}
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}
