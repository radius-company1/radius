import { Button } from '../ui/Button';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { s122DemoState, s122HeroMetrics, s122HeroScenario } from '../../data/directions/s122';

type S122HeroProps = {
  onRequestDemo: () => void;
  onDiscuss: () => void;
};

export function S122Hero({ onRequestDemo, onDiscuss }: S122HeroProps) {
  return (
    <>
      <section className="s122-hero section-zone" id="s122-top" aria-labelledby="s122-hero-title">
        <div className="container s122-hero__grid">
          <div className="s122-hero__content">
            <Reveal>
              <p className="s122-hero__eyebrow">Lexicom для службы 122</p>
            </Reveal>
            <Reveal delay={60}>
              <h1
                id="s122-hero-title"
                className="s122-hero__title"
                style={{ viewTransitionName: 'hero-title' } as React.CSSProperties}
              >
                От звонка жителя — к нужному маршруту
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="s122-hero__lead">
                Нейробот для входящих и исходящих обращений, текстовый ИИ-ассистент в MAX и на сайте, контактный центр с
                суфлёром и речевая аналитика — на собственной платформе Lexicom для задач службы 122.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="s122-hero__actions">
                <Button onClick={onRequestDemo}>{s122DemoState.heroCtaLabel}</Button>
                <Button variant="secondary" onClick={onDiscuss}>
                  Обсудить проект
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <GlassSurface
              className="s122-hero__viz"
              radius="xl"
              depth="raised"
              tint="s122"
              style={{ viewTransitionName: 'hero-viz' } as React.CSSProperties}
            >
              <p className="s122-hero__viz-label">Сценарий обращения</p>
              <ol className="s122-hero__scenario" aria-label="Короткий сценарий обращения">
                {s122HeroScenario.map((step, index) => (
                  <li key={step.role} className={`s122-hero__scenario-step s122-hero__scenario-step--${step.tone}`}>
                    <span className="s122-hero__scenario-index" aria-hidden="true">
                      {index + 1}
                    </span>
                    <div className="s122-hero__scenario-body">
                      <span className="s122-hero__scenario-role">{step.role}</span>
                      <span className="s122-hero__scenario-text">{step.text}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </GlassSurface>
          </Reveal>
        </div>
      </section>

      <section className="s122-hero-trust" aria-label="Гарантии размещения">
        <div className="container">
          <p className="s122-hero__trust">Собственное ПО · On-prem · Данные в контуре заказчика</p>
        </div>
      </section>

      <section className="s122-hero-metrics" aria-label="Показатели Lexicom">
        <div className="container s122-hero-metrics__grid">
          {s122HeroMetrics.map((metric, index) => (
            <Reveal key={metric.value} delay={index * 60}>
              <article className="s122-hero-metrics__card surface-plain">
                <p className="s122-hero-metrics__value">{metric.value}</p>
                <p className="s122-hero-metrics__label">{metric.label}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
