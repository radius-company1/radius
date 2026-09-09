import { mfcEmployeeRoles, mfcLexaRoles } from '../../data/directions/mfc';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

const routingStages = [
  {
    id: 'intake',
    title: 'Лекса принимает обращение',
    text: 'Понимает свободную речь или текст, определяет тему и задаёт уточняющие вопросы.',
  },
  {
    id: 'resolve',
    title: 'Закрывает типовое',
    text: 'Консультирует по базе знаний и выполняет согласованное действие только при наличии интеграции.',
  },
  {
    id: 'handoff',
    title: 'Передаёт сложное сотруднику',
    text: 'Сотрудник получает историю, собранные данные и подсказки суфлёра — без повторных вопросов гражданину.',
  },
] as const;

export function MfcFlow() {
  return (
    <section className="section section--dark mfc-flow mfc-section--tech" id="mfc-flow" aria-labelledby="mfc-flow-title">
      <div className="section--dark__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Гражданину не нужно знать внутреннюю структуру МФЦ"
            titleId="mfc-flow-title"
            description="Как распределяется работа между Лексой и сотрудником и какой контекст сохраняется при передаче."
            light
          />
        </Reveal>

        <Reveal>
          <ol className="mfc-flow__routing">
            {routingStages.map((stage, index) => (
              <li key={stage.id} className="mfc-flow__routing-step">
                <span className="mfc-flow__routing-num" aria-hidden="true">
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

        <div className="mfc-flow__roles">
          <Reveal>
            <GlassSurface className="mfc-flow__role" radius="lg" depth="raised" tint="cyan" variant="dark">
              <h3>Что делает Лекса</h3>
              <ul>
                {mfcLexaRoles.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </GlassSurface>
          </Reveal>
          <Reveal delay={80}>
            <GlassSurface className="mfc-flow__role" radius="lg" depth="raised" tint="yellow" variant="dark">
              <h3>Что получает сотрудник</h3>
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
            Lexicom не заменяет сотрудников. Платформа снимает типовые задачи, а суфлёр помогает человеку быстрее
            включиться в сложное обращение.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
