import { implementationSteps } from '../data/implementation';
import { GlassSurface } from './ui/GlassSurface';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';

export function Implementation() {
  return (
    <section className="section section-zone section-zone--implementation implementation" id="implementation" aria-labelledby="implementation-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="От первой задачи до промышленной эксплуатации"
            titleId="implementation-title"
            description="Каждое внедрение Lexicom проектируется под процессы, инфраструктуру и требования конкретной организации. Мы можем начать с одного сценария или пилотного контура, проверить результат и последовательно масштабировать решение."
          />
        </Reveal>

        <ol className="implementation-route">
          {implementationSteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 50}>
              <li className="implementation-route__step">
                <span className="implementation-route__node" aria-hidden="true">
                  {step.step}
                </span>
                <GlassSurface className="implementation-route__card" radius="lg" depth="raised">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </GlassSurface>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <div className="callout callout--accent">
            <p className="callout__accent">Прямая работа с вендором</p>
            <p>
              Заказчик взаимодействует с командой, которая разрабатывает платформу и может самостоятельно принимать
              продуктовые и технические решения — без длинной цепочки посредников и сторонних поставщиков.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <p className="implementation__closing">
            Мы не ограничиваемся поставкой лицензии. Lexicom отвечает за то, чтобы решение было внедрено, работало в
            реальных процессах и развивалось вместе с задачами заказчика.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
