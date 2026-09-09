import { governmentItems } from '../data/government';
import { GlassSurface } from './ui/GlassSurface';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';

function GovCard({ item }: { item: (typeof governmentItems)[number] }) {
  return (
    <GlassSurface as="article" className="gov-card" variant="dark" radius="lg" depth="raised">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </GlassSurface>
  );
}

export function Government() {
  return (
    <section
      className="section section--dark section-zone section-zone--gov government"
      id="gov"
      aria-labelledby="gov-title"
    >
      <div className="section--dark__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="Государственный контур"
            title="Государственный сектор — одна из ключевых специализаций Lexicom"
            titleId="gov-title"
            light
            description="Мы понимаем технологические задачи государственных организаций и путь проекта: от закупочной процедуры до развёртывания, приёмки и промышленной эксплуатации."
          />
        </Reveal>

        <div className="government__grid">
          {governmentItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 50} className="government__cell">
              <GovCard item={item} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="government__closing">
            Государственный сектор для нас — привычная среда, в которой мы доводим технологическое решение до
            промышленной эксплуатации.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
