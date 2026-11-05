import { useOnceInView } from '../hooks/useOnceInView';
import { useCopyText } from '../hooks/useCopyText';
import { Button } from './ui/Button';
import { GlassSurface } from './ui/GlassSurface';
import { PhoneIcon } from './LexaDemo';
import { lexaDemoLine } from '../data/lexaDemo';
import { metrics } from '../data/metrics';

const waveBars = [10, 18, 28, 16, 34, 22, 40, 26, 14, 30, 44, 24, 36, 18, 28, 12, 32, 20, 38, 16, 26, 12, 22, 10];

function HeroCallCard() {
  const ref = useOnceInView<HTMLElement>('is-in-view');
  const { displayNumber, tel, callAvailable } = lexaDemoLine;
  const { copied, copy } = useCopyText(displayNumber);

  return (
    <GlassSurface ref={ref} as="aside" className="hero-call" radius="xl" tint="yellow" aria-labelledby="hero-call-title">
      <div className="hero-call__head">
        <span className="hero-call__avatar" aria-hidden="true">Л</span>
        <div>
          <p className="hero-call__name">Лекса</p>
          <p className="hero-call__line">Демонстрационная линия ИИ-агента</p>
        </div>
      </div>
      <div className="hero-call__wave" aria-hidden="true">
        {waveBars.map((height, index) => (
          <i key={index} style={{ height, animationDelay: `${(index % 8) * 90}ms` } as React.CSSProperties} />
        ))}
      </div>
      <p className="hero-call__title" id="hero-call-title">Позвоните и поговорите с ИИ-агентом</p>
      <p className="hero-call__text">Задайте вопрос своими словами: Лекса распознает речь, ответит и поддержит диалог.</p>
      <p className="hero-call__number">{displayNumber}</p>
      {callAvailable ? (
        <div className="hero-call__actions">
          <a className="btn btn--primary hero-call__button" href={`tel:${tel}`}>
            <PhoneIcon />
            Позвонить Лексе
          </a>
          <button type="button" className="hero-call__copy" onClick={copy}>
            {copied ? 'Номер скопирован' : 'Скопировать номер'}
          </button>
        </div>
      ) : (
        <p className="hero-call__note">Тестовый номер. Звонок пока недоступен</p>
      )}
      <p className="hero-call__note">Обычный телефонный звонок. Регистрация и заявка не нужны.</p>
      <p className="visually-hidden" role="status">{copied ? 'Номер скопирован' : ''}</p>
    </GlassSurface>
  );
}

export function DesignHero() {
  const ref = useOnceInView<HTMLElement>('is-in-view');
  return <>
    <section ref={ref} className="design-hero" id="top" aria-labelledby="hero-title">
      <div className="container design-hero__grid">
        <div className="design-hero__copy">
          <h1 id="hero-title">ИИ-платформа<br />для обработки<br />обращений</h1>
          <p className="design-hero__lead">Автоматизируйте звонки и сообщения, помогайте операторам и анализируйте диалоги. ИИ-агент, контактный центр, речевая аналитика и протоколирование — в инфраструктуре вашей организации.</p>
          <div className="design-hero__actions">
            <Button href="#products">Выбрать решение <span aria-hidden="true">↗</span></Button>
            <a href="#product-demos" className="design-text-link">Смотреть видео продуктов <span aria-hidden="true">↓</span></a>
          </div>
          <div className="design-hero__credentials">
            <a className="design-hero__skolkovo" href="https://sk.ru/" target="_blank" rel="noopener noreferrer" aria-label="Lexicom — участник проекта «Сколково» (сайт фонда, новая вкладка)">
              <img src={`${import.meta.env.BASE_URL}brand/skolkovo-participant.png`} width="702" height="206" alt="Сколково — участник проекта" />
            </a>
            <p className="design-hero__trust">Собственное российское ПО<br /><span>Данные в контуре заказчика · Реестр ПО №11115</span><br /><a href="#cases" className="design-hero__award">1-е место — конкурс «Лучший МФЦ России» 2025 <span aria-hidden="true">→</span></a></p>
          </div>
        </div>
        <HeroCallCard />
      </div>
    </section>
    <section className="design-metrics container" aria-label="Ключевые показатели">
      {metrics.map(m => <div key={m.label}><strong>{m.value}</strong><span>{m.label}</span></div>)}
    </section>
  </>;
}
