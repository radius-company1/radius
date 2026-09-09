import { flexibilityCards, flexibilityCore } from '../data/flexibility';
import { GlassSurface } from './ui/GlassSurface';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';

export function Flexibility() {
  return (
    <section className="section section-zone section-zone--flex flexibility" aria-labelledby="flexibility-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Платформа подстраивается под процессы заказчика"
            titleId="flexibility-title"
            description="Настраиваем сценарии, бизнес-логику, интеграции, отчётность и дальнейшее развитие — под регламенты и инфраструктуру организации, а не наоборот."
          />
        </Reveal>

        <div className="flexibility__hub">
          <Reveal>
            <GlassSurface className="flexibility__core" radius="xl" depth="float" tint="violet">
              <h3>{flexibilityCore.title}</h3>
              <p>{flexibilityCore.description}</p>
            </GlassSurface>
          </Reveal>
          {flexibilityCards.map((card, index) => (
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
              Можно начать с одного процесса или подразделения, а затем масштабировать решение на всю организацию или
              регион.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
