import { utilitiesDemoState, utilitiesHeroViz } from '../../data/directions/utilities';
import { Button } from '../ui/Button';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';

type UtilitiesHeroProps = {
  onDiscuss: () => void;
  onViewDemo: () => void;
};

const flowSteps = [
  {
    id: 'call',
    label: 'Обращение',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5.5 7.2c0-1.5 1.2-2.7 2.7-2.7h7.6c1.5 0 2.7 1.2 2.7 2.7v6.2c0 1.5-1.2 2.7-2.7 2.7h-3.2L9.2 19.5v-3.4H8.2c-1.5 0-2.7-1.2-2.7-2.7V7.2z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M9 9.5h6M9 12.5h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'bot',
    label: 'Нейробот',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="5" y="7" width="14" height="11" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="9.5" cy="12" r="1.4" fill="currentColor" />
        <circle cx="14.5" cy="12" r="1.4" fill="currentColor" />
        <path d="M12 4v3M9 18.5v1.5M15 18.5v1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8.5 15h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'system',
    label: 'Учётная система',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <ellipse cx="12" cy="6.5" rx="6.5" ry="2.3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M5.5 6.5v4c0 1.3 2.9 2.3 6.5 2.3s6.5-1 6.5-2.3v-4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M5.5 10.5v4c0 1.3 2.9 2.3 6.5 2.3s6.5-1 6.5-2.3v-4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M5.5 14.5v3c0 1.3 2.9 2.3 6.5 2.3s6.5-1 6.5-2.3v-3" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    id: 'person',
    label: 'Сотрудник',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M5.5 19c1.2-3.2 3.5-4.8 6.5-4.8s5.3 1.6 6.5 4.8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
] as const;

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
            <ol className="utilities-hero__flow" aria-hidden="true">
              {flowSteps.map((step, index) => (
                <li key={step.id} className="utilities-hero__flow-item">
                  {index > 0 ? (
                    <span className="utilities-hero__flow-arrow">
                      <svg viewBox="0 0 24 12" fill="none" aria-hidden="true">
                        <path
                          d="M1 6h18M15 2l5 4-5 4"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  ) : null}
                  <div className="utilities-hero__flow-step">
                    <span className={`utilities-hero__glyph utilities-hero__glyph--${step.id}`}>{step.icon}</span>
                    <span className="utilities-hero__flow-label">{step.label}</span>
                  </div>
                </li>
              ))}
            </ol>
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
