import { s122ContactCenterPoints } from '../../data/directions/s122';
import { ProductPageLink } from '../ProductPageLink';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function S122Handoff() {
  return (
    <section
      className="section section--dark s122-handoff s122-section--compact"
      id="s122-handoff"
      aria-labelledby="s122-handoff-title"
    >
      <div className="section--dark__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Контактный центр, оператор и ИИ-суфлёр"
            titleId="s122-handoff-title"
            description="Здесь — рабочее место сотрудника: очереди, история обращения и подсказки суфлёра."
            light
          />
        </Reveal>

        <div className="s122-handoff__points">
          {s122ContactCenterPoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 50}>
              <GlassSurface className="s122-handoff__point" radius="lg" depth="raised" tint="cyan" variant="dark">
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </GlassSurface>
            </Reveal>
          ))}
        </div>

        <div className="s122-handoff__links">
          <ProductPageLink id="neurobot" />
          <ProductPageLink id="contact-center" />
          <ProductPageLink id="speech-analytics" />
        </div>
      </div>
    </section>
  );
}
