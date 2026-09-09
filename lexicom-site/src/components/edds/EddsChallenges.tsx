import { eddsChallenges } from '../../data/directions/edds';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function EddsChallenges() {
  return (
    <section className="section edds-challenges edds-section--compact" id="edds-challenges" aria-labelledby="edds-challenges-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Когда обращений становится больше, диспетчеру нужен контекст"
            titleId="edds-challenges-title"
          />
        </Reveal>
        <div className="edds-challenges__grid">
          {eddsChallenges.map((item, index) => (
            <Reveal key={item.title} delay={index * 50}>
              <article className="edds-challenges__card surface-plain">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
