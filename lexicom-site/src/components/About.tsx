import { aboutPoints, aboutRoadmapNote } from '../data/about';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';

export function About() {
  return (
    <section className="section section-zone section-zone--about about" id="about" aria-labelledby="about-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Почему Lexicom"
            titleId="about-title"
            description="Резидент ИТ-кластера Фонда «Сколково». Lexicom Omnichannel Platform — в Реестре российского ПО №11115."
          />
        </Reveal>

        <div className="about__points">
          {aboutPoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 40}>
              <article className="surface-plain about-card">
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="about__roadmap" id="roadmap">
            {aboutRoadmapNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
