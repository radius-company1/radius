import { Button } from '../ui/Button';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { eddsDemoState, eddsHeroAccents, eddsHeroViz } from '../../data/directions/edds';

type EddsHeroProps = {
  onDiscuss: () => void;
  onViewScenarios: () => void;
};

export function EddsHero({ onDiscuss, onViewScenarios }: EddsHeroProps) {
  return (
    <section className="edds-hero section-zone" id="edds-top" aria-labelledby="edds-hero-title">
      <div className="container edds-hero__grid">
        <div className="edds-hero__content">
          <Reveal>
            <p className="edds-hero__eyebrow">Lexicom для ЕДДС</p>
          </Reveal>
          <Reveal delay={60}>
            <h1
              id="edds-hero-title"
              className="edds-hero__title"
              style={{ viewTransitionName: 'hero-title' } as React.CSSProperties}
            >
              Приём обращений и поддержка диспетчеров ЕДДС
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="edds-hero__lead">
              Нейробот, контактный центр с ИИ-суфлёром и речевая аналитика для единой дежурно-диспетчерской службы.
              Автоматизируем типовые коммуникации, помогаем собирать сведения и передавать диспетчеру контекст обращения.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="edds-hero__actions">
              <Button onClick={onDiscuss}>{eddsDemoState.discussCtaLabel}</Button>
              <Button variant="secondary" onClick={onViewScenarios}>
                {eddsDemoState.scenariosCtaLabel}
              </Button>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <ul className="edds-hero__accents">
              {eddsHeroAccents.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <GlassSurface
            className="edds-hero__viz"
            radius="xl"
            depth="raised"
            tint="edds"
            style={{ viewTransitionName: 'hero-viz' } as React.CSSProperties}
          >
            <p className="edds-hero__viz-label">Контур работы ЕДДС</p>
            <ol className="edds-hero__pipeline" aria-label="Входящие, диспетчер и аналитика">
              {eddsHeroViz.map((step, index) => (
                <li key={step.label} className="edds-hero__pipeline-step">
                  <span className="edds-hero__pipeline-index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="edds-hero__pipeline-body">
                    <span className="edds-hero__pipeline-label">{step.label}</span>
                    <span className="edds-hero__pipeline-text">{step.text}</span>
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
