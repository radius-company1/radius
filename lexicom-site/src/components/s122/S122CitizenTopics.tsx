import { s122Topics } from '../../data/directions/s122';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function S122CitizenTopics() {
  return (
    <section className="section s122-topics s122-section--airy" id="s122-topics" aria-labelledby="s122-topics-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Типовые вопросы не должны занимать операторов первой линии"
            titleId="s122-topics-title"
            description="Массовые обращения часто повторяются. Ниже — примеры тем, которые служба 122 может закрывать автоматически или быстро направлять в нужную службу."
          />
        </Reveal>

        <div className="s122-topics__mosaic">
          {s122Topics.map((topic, index) => (
            <Reveal key={topic.title} delay={index * 40} className={`s122-topics__cell s122-topics__cell--${topic.size}`}>
              <article className={`s122-topics__card${'note' in topic && topic.note ? ' s122-topics__card--note' : ''}`}>
                {'note' in topic && topic.note ? <span className="s122-topics__note">{topic.note}</span> : null}
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
