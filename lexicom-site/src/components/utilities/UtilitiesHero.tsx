import { utilitiesDemoState, utilitiesHeroViz } from '../../data/directions/utilities';
import { Button } from '../ui/Button';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';

type UtilitiesHeroProps = {
  onDiscuss: () => void;
  onViewDemo: () => void;
};

export function UtilitiesHero({ onDiscuss, onViewDemo }: UtilitiesHeroProps) {
  return (
    <section className="utilities-hero section-zone" id="utilities-top" aria-labelledby="utilities-hero-title">
      <div className="container utilities-hero__grid">
        <div className="utilities-hero__content">
          <Reveal>
            <p className="utilities-hero__eyebrow">Энергосбыт · Теплоснабжение · Водоснабжение</p>
          </Reveal>
          <Reveal delay={60}>
            <h1
              id="utilities-hero-title"
              className="utilities-hero__title"
              style={{ viewTransitionName: 'hero-title' } as React.CSSProperties}
            >
              ИИ для обращений в ресурсоснабжающие компании
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="utilities-hero__lead">
              Автоматизируйте типовые вопросы о показаниях, начислениях и отключениях. Объединяйте каналы, помогайте
              операторам и анализируйте обращения на собственной платформе Lexicom.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="utilities-hero__actions">
              <Button onClick={onViewDemo}>{utilitiesDemoState.demoSectionCtaLabel}</Button>
              <Button variant="secondary" onClick={onDiscuss}>
                {utilitiesDemoState.discussCtaLabel}
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <GlassSurface
            className="utilities-hero__viz"
            radius="xl"
            depth="raised"
            tint="utilities"
            style={{ viewTransitionName: 'hero-viz' } as React.CSSProperties}
          >
            <p className="utilities-hero__viz-label">От обращения — к действию</p>
            <div className="utilities-hero__flow" aria-hidden="true">
              <span className="utilities-hero__icon utilities-hero__icon--call" />
              <span className="utilities-hero__link" />
              <span className="utilities-hero__icon utilities-hero__icon--bot" />
              <span className="utilities-hero__link" />
              <span className="utilities-hero__icon utilities-hero__icon--system" />
              <span className="utilities-hero__link" />
              <span className="utilities-hero__icon utilities-hero__icon--person" />
            </div>
            <ol className="utilities-hero__pipeline" aria-label="Обращение, нейробот, учётная система и сотрудник">
              {utilitiesHeroViz.map((step, index) => (
                <li key={step.label} className="utilities-hero__pipeline-step">
                  <span className="utilities-hero__pipeline-index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="utilities-hero__pipeline-body">
                    <span className="utilities-hero__pipeline-label">{step.label}</span>
                    <span className="utilities-hero__pipeline-text">{step.text}</span>
                  </div>
                </li>
              ))}
            </ol>
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}
