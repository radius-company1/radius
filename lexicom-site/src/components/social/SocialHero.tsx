import { socialDemoState, socialHeroViz } from '../../data/directions/social';
import { Button } from '../ui/Button';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';

type SocialHeroProps = {
  onDiscuss: () => void;
  onViewDemo: () => void;
};

export function SocialHero({ onDiscuss, onViewDemo }: SocialHeroProps) {
  return (
    <section className="social-hero section-zone" id="social-top" aria-labelledby="social-hero-title">
      <div className="container social-hero__grid">
        <div className="social-hero__content">
          <Reveal>
            <p className="social-hero__eyebrow">Для органов социальной защиты</p>
          </Reveal>
          <Reveal delay={60}>
            <h1
              id="social-hero-title"
              className="social-hero__title"
              style={{ viewTransitionName: 'hero-title' } as React.CSSProperties}
            >
              ИИ-коммуникации для социальной защиты
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="social-hero__lead">
              Помогайте жителям разобраться в мерах поддержки, автоматизируйте типовые обращения и объединяйте работу
              специалистов. Нейробот, контактный центр и речевая аналитика на собственной платформе Lexicom.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="social-hero__actions">
              <Button onClick={onViewDemo}>{socialDemoState.demoSectionCtaLabel}</Button>
              <Button variant="secondary" onClick={onDiscuss}>
                {socialDemoState.discussCtaLabel}
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <GlassSurface
            className="social-hero__viz"
            radius="xl"
            depth="raised"
            tint="social"
            style={{ viewTransitionName: 'hero-viz' } as React.CSSProperties}
          >
            <p className="social-hero__viz-label">От ситуации — к следующему шагу</p>
            <ol className="social-hero__pipeline" aria-label="Обращение, помощник, база знаний и специалист">
              {socialHeroViz.map((step, index) => (
                <li key={step.label} className="social-hero__pipeline-step">
                  <span className="social-hero__pipeline-index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="social-hero__pipeline-body">
                    <span className="social-hero__pipeline-label">{step.label}</span>
                    <span className="social-hero__pipeline-text">{step.text}</span>
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
