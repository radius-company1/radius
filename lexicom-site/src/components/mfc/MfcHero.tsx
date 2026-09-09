import { Button } from '../ui/Button';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { mfcDemoState, mfcHeroMetrics } from '../../data/directions/mfc';

type MfcHeroProps = {
  onRequestDemo: () => void;
  onDiscuss: () => void;
};

const heroScenario = [
  {
    role: 'Гражданин',
    text: 'Какие документы нужны для пособия?',
    tone: 'citizen' as const,
  },
  {
    role: 'Лекса',
    text: 'Уточняет ситуацию и проверяет базу знаний МФЦ',
    tone: 'lexa' as const,
  },
  {
    role: 'Результат',
    text: 'Согласованный ответ или сотрудник с историей и контекстом',
    tone: 'result' as const,
  },
];

export function MfcHero({ onRequestDemo, onDiscuss }: MfcHeroProps) {
  return (
    <>
      <section className="mfc-hero section-zone" id="mfc-top" aria-labelledby="mfc-hero-title">
        <div className="container mfc-hero__grid">
          <div className="mfc-hero__content">
            <Reveal>
              <p className="mfc-hero__eyebrow">Lexicom для МФЦ</p>
            </Reveal>
            <Reveal delay={60}>
              <h1 id="mfc-hero-title" className="mfc-hero__title" style={{ viewTransitionName: 'hero-title' } as React.CSSProperties}>
                От вопроса гражданина — к понятному следующему шагу
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mfc-hero__lead">
                Нейробот для входящих и исходящих звонков, текстовый ИИ-ассистент в MAX и на сайте, контактный центр с
                суфлёром и речевая аналитика — на собственной платформе Lexicom для задач МФЦ.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mfc-hero__actions">
                <Button onClick={onRequestDemo}>{mfcDemoState.heroCtaLabel}</Button>
                <Button variant="secondary" onClick={onDiscuss}>
                  Обсудить проект
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <GlassSurface
              className="mfc-hero__viz"
              radius="xl"
              depth="raised"
              tint="mfc"
              style={{ viewTransitionName: 'hero-viz' } as React.CSSProperties}
            >
              <p className="mfc-hero__viz-label">Сценарий обращения</p>
              <ol className="mfc-hero__scenario" aria-label="Короткий сценарий обращения">
                {heroScenario.map((step, index) => (
                  <li key={step.role} className={`mfc-hero__scenario-step mfc-hero__scenario-step--${step.tone}`}>
                    <span className="mfc-hero__scenario-index" aria-hidden="true">
                      {index + 1}
                    </span>
                    <div className="mfc-hero__scenario-body">
                      <span className="mfc-hero__scenario-role">{step.role}</span>
                      <span className="mfc-hero__scenario-text">{step.text}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </GlassSurface>
          </Reveal>
        </div>
      </section>

      <section className="mfc-hero-trust" aria-label="Гарантии размещения">
        <div className="container">
          <p className="mfc-hero__trust">Собственное ПО · On-prem · Данные в контуре заказчика</p>
        </div>
      </section>

      <section className="mfc-hero-metrics" aria-label="Показатели Lexicom">
        <div className="container mfc-hero-metrics__grid">
          {mfcHeroMetrics.map((metric, index) => (
            <Reveal key={metric.value} delay={index * 60}>
              <article className="mfc-hero-metrics__card surface-plain">
                <p className="mfc-hero-metrics__value">{metric.value}</p>
                <p className="mfc-hero-metrics__label">{metric.label}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
