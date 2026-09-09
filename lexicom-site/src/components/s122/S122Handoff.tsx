import { s122LexaDoes, s122OperatorGets } from '../../data/directions/s122';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function S122Handoff() {
  return (
    <section
      className="section section--dark s122-handoff s122-section--tech"
      id="s122-handoff"
      aria-labelledby="s122-handoff-title"
    >
      <div className="section--dark__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Автоматизация там, где она эффективна. Человек — там, где он нужен."
            titleId="s122-handoff-title"
            description="ИИ снимает повторяющуюся работу. Жителю не приходится начинать разговор заново."
            light
          />
        </Reveal>

        <div className="s122-handoff__roles">
          <Reveal>
            <GlassSurface className="s122-handoff__role" radius="lg" depth="raised" tint="cyan" variant="dark">
              <h3>Лекса</h3>
              <ul>
                {s122LexaDoes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </GlassSurface>
          </Reveal>
          <Reveal delay={80}>
            <GlassSurface className="s122-handoff__role" radius="lg" depth="raised" tint="yellow" variant="dark">
              <h3>Оператор</h3>
              <ul>
                {s122OperatorGets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </GlassSurface>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
