import { Button } from '../ui/Button';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { s122DemoState, s122HeroPipeline } from '../../data/directions/s122';

type S122HeroProps = {
  onRequestDemo: () => void;
  onDiscuss: () => void;
};

export function S122Hero({ onRequestDemo, onDiscuss }: S122HeroProps) {
  return (
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
              ИИ-платформа для службы 122
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="s122-hero__lead">
              Автоматизируем запись к врачу, вызов врача на дом, проверку статуса заявки и типовые медицинские обращения
              — от первой фразы жителя до результата в подключённой системе.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="s122-hero__pillars">
              Голосовые и цифровые каналы · операторский контур · интеграции · речевая аналитика · on-prem
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="s122-hero__actions">
              <Button onClick={onRequestDemo}>{s122DemoState.heroCtaLabel}</Button>
              <Button variant="secondary" onClick={onDiscuss}>
                {s122DemoState.discussCtaLabel}
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
            <p className="s122-hero__viz-label">Мини-демонстрация сценария</p>
            <ol className="s122-hero__pipeline" aria-label="Путь обращения от звонка до результата">
              {s122HeroPipeline.map((step, index) => (
                <li key={step.label} className="s122-hero__pipeline-step">
                  <span className="s122-hero__pipeline-index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="s122-hero__pipeline-body">
                    <span className="s122-hero__pipeline-label">{step.label}</span>
                    <span className="s122-hero__pipeline-text">{step.text}</span>
                  </div>
                </li>
              ))}
            </ol>
            <p className="s122-hero__viz-note">* при наличии интеграции</p>
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}
