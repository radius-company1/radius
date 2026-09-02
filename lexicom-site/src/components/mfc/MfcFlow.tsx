import {
  mfcEmployeeRoles,
  mfcFlowSteps,
  mfcLexaRoles,
} from '../../data/directions/mfc';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function MfcFlow() {
  return (
    <section className="section section--dark mfc-flow" id="mfc-flow" aria-labelledby="mfc-flow-title">
      <div className="section--dark__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Гражданину не нужно знать внутреннюю структуру МФЦ"
            titleId="mfc-flow-title"
            light
          />
        </Reveal>

        <Reveal>
          <ol className="mfc-flow__path">
            {mfcFlowSteps.map((step, index) => (
              <li key={step}>
                <span className="mfc-flow__path-num">{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="mfc-flow__roles">
          <Reveal>
            <GlassSurface className="mfc-flow__role" radius="lg" depth="raised" tint="cyan" variant="dark">
              <h3>Лекса</h3>
              <ul>
                {mfcLexaRoles.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </GlassSurface>
          </Reveal>
          <Reveal delay={80}>
            <GlassSurface className="mfc-flow__role" radius="lg" depth="raised" tint="blue" variant="dark">
              <h3>Сотрудник</h3>
              <ul>
                {mfcEmployeeRoles.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </GlassSurface>
          </Reveal>
        </div>

        <Reveal>
          <p className="mfc-flow__closing">
            Lexicom не исключает сотрудника из процесса. Платформа снимает повторяющиеся задачи и помогает человеку
            быстрее включиться в сложное обращение.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
