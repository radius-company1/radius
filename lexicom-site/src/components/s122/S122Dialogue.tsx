import { Button } from '../ui/Button';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';
import { s122DemoState, s122DialogueContext, s122DialogueTurns } from '../../data/directions/s122';

type S122DialogueProps = {
  onRequestDemo: () => void;
};

export function S122Dialogue({ onRequestDemo }: S122DialogueProps) {
  return (
    <section
      className="section s122-dialogue s122-section--dense"
      id={s122DemoState.dialogueAnchor}
      aria-labelledby="s122-dialogue-title"
    >
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Как выглядит работа сценария"
            titleId="s122-dialogue-title"
            description="Демонстрация принципа: диалог собирает контекст. Реальные операции в медицинских системах выполняются только при промышленной интеграции."
          />
        </Reveal>

        <div className="s122-dialogue__layout">
          <Reveal>
            <GlassSurface className="s122-dialogue__chat" radius="xl" depth="raised" tint="s122">
              <p className="s122-dialogue__label">Диалог</p>
              <ul className="s122-dialogue__turns">
                {s122DialogueTurns.map((turn) => (
                  <li key={`${turn.role}-${turn.text}`} className={`s122-dialogue__turn s122-dialogue__turn--${turn.side}`}>
                    <span className="s122-dialogue__role">{turn.role}</span>
                    <p>{turn.text}</p>
                  </li>
                ))}
              </ul>
            </GlassSurface>
          </Reveal>

          <Reveal delay={80}>
            <GlassSurface className="s122-dialogue__context" radius="xl" depth="float" tint="cyan">
              <p className="s122-dialogue__label">Структурированный контекст</p>
              <dl className="s122-dialogue__facts">
                {s122DialogueContext.map((fact) => (
                  <div key={fact.label} className="s122-dialogue__fact">
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="s122-dialogue__note">* при наличии интеграции с информационной системой</p>
            </GlassSurface>
          </Reveal>
        </div>

        <Reveal>
          <div className="s122-dialogue__actions">
            <Button onClick={onRequestDemo}>{s122DemoState.demoCtaLabel}</Button>
            <p className="s122-dialogue__disclaimer">
              Это демонстрация логики сценария, а не подключение к действующей медицинской системе.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
