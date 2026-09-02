import { Button } from '../ui/Button';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { mfcHeroMetrics } from '../../data/directions/mfc';

type MfcHeroProps = {
  onTalkToLexa: () => void;
  onDiscuss: () => void;
};

export function MfcHero({ onTalkToLexa, onDiscuss }: MfcHeroProps) {
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
                От вопроса гражданина к следующему шагу
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mfc-hero__lead">
                Лекса принимает обращения, уточняет контекст по базе знаний МФЦ и передаёт сотруднику готовую историю диалога.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mfc-hero__actions">
                <Button onClick={onTalkToLexa}>Поговорить с Лексой</Button>
                <Button variant="secondary" onClick={onDiscuss}>
                  Обсудить проект
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <GlassSurface className="mfc-hero__flow" radius="xl" depth="raised" tint="mfc" style={{ viewTransitionName: 'hero-viz' } as React.CSSProperties}>
              <p className="mfc-hero__flow-label">Процесс</p>
              <div className="mfc-hero__flow-track" aria-hidden="true">
                <div className="mfc-hero__flow-node">обращение</div>
                <span className="mfc-hero__flow-line" />
                <div className="mfc-hero__flow-node mfc-hero__flow-node--core">Лекса</div>
                <span className="mfc-hero__flow-line" />
                <div className="mfc-hero__flow-node">ответ или сотрудник</div>
              </div>
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
