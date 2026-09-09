import { s122EmployeeRoles, s122LexaRoles, s122RoutingStages } from '../../data/directions/s122';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function S122Flow() {
  return (
    <section className="section section--dark s122-flow s122-section--tech" id="s122-flow" aria-labelledby="s122-flow-title">
      <div className="section--dark__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Жителю не нужно знать внутреннюю структуру служб"
            titleId="s122-flow-title"
            description="Как распределяется работа между Лексой и оператором и какой контекст сохраняется при передаче в службу."
            light
          />
        </Reveal>

        <Reveal>
          <ol className="s122-flow__routing">
            {s122RoutingStages.map((stage, index) => (
              <li key={stage.id} className="s122-flow__routing-step">
                <span className="s122-flow__routing-num" aria-hidden="true">
                  {index + 1}
                </span>
                <div>
                  <h3>{stage.title}</h3>
                  <p>{stage.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="s122-flow__roles">
          <Reveal>
            <GlassSurface className="s122-flow__role" radius="lg" depth="raised" tint="cyan" variant="dark">
              <h3>Что делает Лекса</h3>
              <ul>
                {s122LexaRoles.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </GlassSurface>
          </Reveal>
          <Reveal delay={80}>
            <GlassSurface className="s122-flow__role" radius="lg" depth="raised" tint="yellow" variant="dark">
              <h3>Что получает оператор</h3>
              <ul>
                {s122EmployeeRoles.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </GlassSurface>
          </Reveal>
        </div>

        <Reveal>
          <p className="s122-flow__closing">
            Lexicom не заменяет операторов службы 122. Платформа снимает типовые задачи, а суфлёр помогает человеку
            быстрее включиться в сложное обращение.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
