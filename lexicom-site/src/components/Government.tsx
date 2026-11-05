import { MobileDetails } from './ui/MobileDetails';
import { governmentItems } from '../data/government';
import { GlassSurface } from './ui/GlassSurface';
import { MotionLink as Link } from './ui/MotionLink';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';

function GovCard({ item }: { item: (typeof governmentItems)[number] }) {
  return (
    <GlassSurface as="article" className="gov-card" variant="dark" radius="lg" depth="raised">
      <MobileDetails title={<h3>{item.title}</h3>}><p>{item.description}</p></MobileDetails>
    </GlassSurface>
  );
}

export function Government() {
  return (
    <section
      className="section section--dark section-zone section-zone--gov government"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="section--dark__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="Российский разработчик для госсектора"
            title="Почему Lexicom"
            titleId="about-title"
            light
            description="Резидент ИТ-кластера Фонда «Сколково» и разработчик собственного ПО из реестра №11115. Ведём проект от закупочной процедуры до приёмки и промышленной эксплуатации."
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
            <Link to="/company">Сведения о компании и реквизиты <span aria-hidden="true">→</span></Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
