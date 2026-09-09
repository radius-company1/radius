import { mfcTopics } from '../../data/directions/mfc';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function MfcCitizenTopics() {
  return (
    <section className="section mfc-topics mfc-section--airy" id="mfc-topics" aria-labelledby="mfc-topics-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Типовые вопросы не должны занимать время первой линии"
            titleId="mfc-topics-title"
            description="Справочные обращения часто повторяются. Ниже — примеры тем, которые можно закрывать автоматически или быстро направлять нужному сотруднику."
          />
        </Reveal>

        <div className="mfc-topics__mosaic">
          {mfcTopics.map((topic, index) => (
            <Reveal key={topic.title} delay={index * 40} className={`mfc-topics__cell mfc-topics__cell--${topic.size}`}>
              <article className={`mfc-topics__card${'note' in topic && topic.note ? ' mfc-topics__card--note' : ''}`}>
                {'note' in topic && topic.note ? <span className="mfc-topics__note">{topic.note}</span> : null}
                <h3>{topic.title}</h3>
                <p>{topic.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
