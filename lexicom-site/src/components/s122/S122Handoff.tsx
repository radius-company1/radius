import { s122ContactCenterPoints, s122LexaDoes, s122OperatorGets } from '../../data/directions/s122';
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
            title="Контактный центр, оператор и ИИ-суфлёр"
            titleId="s122-handoff-title"
            description="Нейробот снимает типовые обращения. Сложные случаи принимает оператор в контактном центре с историей диалога и подсказками из базы знаний."
            light
          />
        </Reveal>

        <div className="s122-handoff__points">
          {s122ContactCenterPoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 50}>
              <GlassSurface className="s122-handoff__point" radius="lg" depth="raised" tint="cyan" variant="dark">
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </GlassSurface>
            </Reveal>
          ))}
        </div>

        <div className="s122-handoff__roles">
          <Reveal>
            <GlassSurface className="s122-handoff__role" radius="lg" depth="raised" tint="cyan" variant="dark">
              <h3>Нейробот</h3>
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
