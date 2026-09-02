import { mfcTopics } from '../../data/directions/mfc';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function MfcCitizenTopics() {
  return (
    <section className="section mfc-topics" id="mfc-topics" aria-labelledby="mfc-topics-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Типовые вопросы не должны занимать время первой линии"
            titleId="mfc-topics-title"
            description="Большая часть справочных обращений строится вокруг повторяющихся тем. Lexicom помогает принять такой вопрос, уточнить контекст и дать согласованную информацию либо направить гражданина к нужному сотруднику."
          />
        </Reveal>

        <div className="mfc-topics__mosaic">
          {mfcTopics.map((topic, index) => (
            <Reveal key={topic.title} delay={index * 50} className={`mfc-topics__cell mfc-topics__cell--${topic.size}`}>
              <GlassSurface
                as="article"
                className="mfc-topics__card"
                radius="lg"
                depth="raised"
                tint="mfc"
              >
                {'note' in topic && topic.note ? <span className="mfc-topics__note">{topic.note}</span> : null}
                <h3>{topic.title}</h3>
                <p>{topic.text}</p>
              </GlassSurface>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
