import { s122OutcomePoints } from '../../data/directions/s122';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function S122Outcome() {
  return (
    <section className="section s122-outcome s122-section--airy" id="s122-outcome" aria-labelledby="s122-outcome-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Обращение должно закончиться результатом"
            titleId="s122-outcome-title"
            description="Большая часть нагрузки 122 возникает не из‑за длинного разговора. Жителю нужно выполнить конкретное действие."
          />
        </Reveal>

        <div className="s122-outcome__needs" role="list">
          {s122OutcomePoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 50}>
              <article className="s122-outcome__need surface-plain" role="listitem">
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="s122-outcome__contrast">
            <div className="s122-outcome__side s122-outcome__side--low surface-plain">
              <p className="s122-outcome__side-label">Обычный голосовой робот</p>
              <p>Распознать несколько команд или воспроизвести справку</p>
            </div>
            <span className="s122-outcome__arrow" aria-hidden="true">
              →
            </span>
            <div className="s122-outcome__side s122-outcome__side--high surface-plain">
              <p className="s122-outcome__side-label">Lexicom</p>
              <p>понять → уточнить → получить данные → обратиться к системе → выполнить доступное действие → подтвердить результат</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
