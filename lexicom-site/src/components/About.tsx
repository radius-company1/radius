import { aboutConsequences, aboutRoadmapNote, aboutTheses } from '../data/about';
import { GlassSurface } from './ui/GlassSurface';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';

const teamThesis = aboutTheses[3];
const cardTheses = aboutTheses.slice(0, 3);

export function About() {
  return (
    <section className="section section-zone section-zone--about about" id="about" aria-labelledby="about-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Почему Lexicom"
            titleId="about-title"
            description="Собственное ПО, команда 60+ специалистов, контроль развития продукта и полный цикл внедрения. Резидент ИТ-кластера Фонда «Сколково». Lexicom Omnichannel Platform — в Реестре российского ПО №11115."
          />
        </Reveal>

        <div className="about__layout">
          <Reveal>
            <GlassSurface className="about__stat" radius="xl" depth="float" tier="matte" tint="yellow">
              <p className="about__stat-value">60+</p>
              <h3 className="about__stat-title">{teamThesis.title}</h3>
              <p className="about__stat-text">{teamThesis.description}</p>
            </GlassSurface>
          </Reveal>
          <div className="about__cards">
            {cardTheses.map((thesis, index) => (
              <Reveal key={thesis.title} delay={index * 70}>
                <div className="surface-plain about-card">
                  <h3>{thesis.title}</h3>
                  <p>{thesis.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <ul className="about__consequences">
            {aboutConsequences.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <p className="about__roadmap" id="roadmap">
            {aboutRoadmapNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
