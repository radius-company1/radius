import { flexibilityCards } from '../data/flexibility';
import { GlassSurface } from './ui/GlassSurface';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';

export function Flexibility() {
  const [core, ...orbit] = flexibilityCards;

  return (
    <section className="section section-zone section-zone--flex flexibility" aria-labelledby="flexibility-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Платформа подстраивается под процессы заказчика — не наоборот"
            titleId="flexibility-title"
            description="Lexicom самостоятельно разрабатывает и развивает платформу, поэтому мы можем оперативно адаптировать её под регламенты, инфраструктуру и задачи конкретной организации. Заказчику не приходится перестраивать свои процессы под ограничения готовой коробки."
          />
        </Reveal>

        <div className="flexibility__hub">
          <Reveal>
            <GlassSurface className="flexibility__core" radius="xl" depth="float" tint="violet">
              <h3>{core.title}</h3>
              <p>{core.description}</p>
            </GlassSurface>
          </Reveal>
          {orbit.map((card, index) => (
            <Reveal key={card.title} delay={index * 70}>
              <GlassSurface className={`flexibility__orbit flexibility__orbit--${index + 1}`} radius="lg" depth="raised">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </GlassSurface>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="callout callout--accent">
            <p className="callout__accent">
              Можно начать с одного процесса или подразделения, а затем масштабировать решение на всю организацию
              или регион.
            </p>
            <p className="callout__text">
              Это не заказная разработка с нуля, а гибкая конфигурация и развитие собственной промышленной платформы
              Lexicom.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
