import {
  utilitiesDemoCaption,
  utilitiesDemoNote,
  utilitiesDemoResult,
  utilitiesDemoState,
  utilitiesDemoTurns,
} from '../../data/directions/utilities';
import { Button } from '../ui/Button';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

type UtilitiesDemoProps = {
  onRequestDemo: () => void;
};

export function UtilitiesDemo({ onRequestDemo }: UtilitiesDemoProps) {
  return (
    <section
      className="section utilities-demo utilities-section--compact"
      id={utilitiesDemoState.demoAnchor}
      aria-labelledby="utilities-demo-title"
    >
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Показания переданы — результат подтверждён"
            titleId="utilities-demo-title"
            description={utilitiesDemoCaption}
          />
        </Reveal>

        <div className="utilities-demo__layout">
          <Reveal>
            <GlassSurface className="utilities-demo__chat" radius="xl" depth="raised" tint="utilities">
              <p className="utilities-demo__badge">Иллюстрация сценария</p>
              <ul className="utilities-demo__turns">
                {utilitiesDemoTurns.map((turn) => (
                  <li
                    key={`${turn.role}-${turn.text}`}
                    className={`utilities-demo__turn utilities-demo__turn--${turn.side}`}
                  >
                    <span className="utilities-demo__role">{turn.role}</span>
                    <p>{turn.text}</p>
                  </li>
                ))}
              </ul>
            </GlassSurface>
          </Reveal>

          <Reveal delay={80}>
            <GlassSurface className="utilities-demo__result" radius="xl" depth="float" tint="yellow">
              <p className="utilities-demo__label">Карточка результата</p>
              <ul className="utilities-demo__result-list">
                {utilitiesDemoResult.map((item) => (
                  <li key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </li>
                ))}
              </ul>
              <p className="utilities-demo__meaning">
                Свободная речь, уточнение, исправление по ходу разговора и подтверждённое действие.
              </p>
            </GlassSurface>
          </Reveal>
        </div>

        <Reveal>
          <div className="utilities-demo__actions">
            <Button onClick={onRequestDemo}>{utilitiesDemoState.demoCtaLabel}</Button>
            <p className="utilities-demo__note">{utilitiesDemoNote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
