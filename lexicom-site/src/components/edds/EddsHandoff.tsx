import { eddsDispatcherOwns, eddsPlatformHelps } from '../../data/directions/edds';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function EddsHandoff() {
  return (
    <section
      className="section section--dark edds-handoff edds-section--tech"
      id="edds-handoff"
      aria-labelledby="edds-handoff-title"
    >
      <div className="section--dark__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Типовые действия — платформе. Оперативные решения — диспетчеру"
            titleId="edds-handoff-title"
            light
          />
        </Reveal>

        <div className="edds-handoff__roles">
          <Reveal>
            <GlassSurface className="edds-handoff__role" radius="lg" depth="raised" tint="cyan" variant="dark">
              <h3>Платформа помогает</h3>
              <ul>
                {eddsPlatformHelps.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </GlassSurface>
          </Reveal>
          <Reveal delay={80}>
            <GlassSurface className="edds-handoff__role" radius="lg" depth="raised" tint="yellow" variant="dark">
              <h3>Диспетчер управляет</h3>
              <ul>
                {eddsDispatcherOwns.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </GlassSurface>
          </Reveal>
        </div>

        <Reveal>
          <p className="edds-handoff__closing">
            Правила передачи сотруднику и границы автоматизации определяются при настройке решения.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
