import { governmentItems } from '../data/government';
import { GlassSurface } from './ui/GlassSurface';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';

const featuredItem = governmentItems[0];
const quartetItems = governmentItems.slice(1);

function GovCard({
  item,
  className = '',
}: {
  item: (typeof governmentItems)[number];
  className?: string;
}) {
  return (
    <GlassSurface as="article" className={`gov-card ${className}`.trim()} variant="dark" radius="lg" depth="raised">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </GlassSurface>
  );
}

export function Government() {
  return (
    <section className="section section--dark section-zone section-zone--gov government" id="gov" aria-labelledby="gov-title">
      <div className="section--dark__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="Государственный контур"
            title="Государственный сектор — одна из ключевых специализаций Lexicom"
            titleId="gov-title"
            light
            description="Мы понимаем не только технологические задачи государственных организаций, но и весь путь проекта: от закупочной процедуры и проектирования решения до развёртывания в инфраструктуре заказчика, приёмки и промышленной эксплуатации."
          />
        </Reveal>

        <div className="government__mosaic">
          <Reveal className="government__featured-wrap">
            <GovCard item={featuredItem} className="gov-card--featured" />
          </Reveal>

          <div className="government__quartet">
            {quartetItems.map((item, index) => (
              <Reveal key={item.title} className="government__quartet-item" delay={index * 70}>
                <GovCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <p className="government__closing">
            Государственный сектор для нас — не новое направление, а привычная среда, в которой мы умеем доводить
            технологическое решение до промышленной эксплуатации.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
