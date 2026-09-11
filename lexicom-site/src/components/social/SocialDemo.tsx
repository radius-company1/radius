import {
  socialDemoSituation,
  socialDemoState,
  socialDemoSteps,
  socialDemoTurns,
} from '../../data/directions/social';
import { Button } from '../ui/Button';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

type SocialDemoProps = {
  onRequestDemo: () => void;
};

export function SocialDemo({ onRequestDemo }: SocialDemoProps) {
  return (
    <section
      className="section social-demo social-section--compact"
      id={socialDemoState.demoAnchor}
      aria-labelledby="social-demo-title"
    >
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Посмотрите, как проходит консультация"
            titleId="social-demo-title"
            description={`Пример сценария: «${socialDemoSituation}»`}
          />
        </Reveal>

        <div className="social-demo__layout">
          <Reveal>
            <GlassSurface className="social-demo__chat" radius="xl" depth="raised" tint="social">
              <p className="social-demo__badge">Пример сценария</p>
              <ul className="social-demo__turns">
                {socialDemoTurns.map((turn) => (
                  <li key={`${turn.role}-${turn.text}`} className={`social-demo__turn social-demo__turn--${turn.side}`}>
                    <span className="social-demo__role">{turn.role}</span>
                    <p>{turn.text}</p>
                  </li>
                ))}
              </ul>
            </GlassSurface>
          </Reveal>

          <Reveal delay={80}>
            <GlassSurface className="social-demo__steps" radius="xl" depth="float" tint="cyan">
              <p className="social-demo__label">Последовательность</p>
              <ol className="social-demo__pipeline">
                {socialDemoSteps.map((step, index) => (
                  <li key={step.label}>
                    <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <strong>{step.label}</strong>
                      <p>{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </GlassSurface>
          </Reveal>
        </div>

        <Reveal>
          <div className="social-demo__actions">
            <Button onClick={onRequestDemo}>{socialDemoState.demoCtaLabel}</Button>
            <p className="social-demo__note">Иллюстративный сценарий — без имитации работающего звонка или ИИ-чата.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
