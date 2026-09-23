import {
  utilitiesCcCapabilities,
  utilitiesSpecialistExample,
  utilitiesSpecialistStages,
} from '../../data/directions/utilities';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function UtilitiesSpecialist() {
  return (
    <section
      className="section section--dark utilities-specialist utilities-section--tech"
      id="utilities-specialist"
      aria-labelledby="utilities-specialist-title"
    >
      <div className="section--dark__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Оператор продолжает разговор с готовым контекстом"
            titleId="utilities-specialist-title"
            description={`Пример: «${utilitiesSpecialistExample.question}»`}
            light
          />
        </Reveal>

        <Reveal>
          <GlassSurface className="utilities-specialist__workspace" radius="xl" depth="raised" tint="cyan" variant="dark">
            <p className="utilities-specialist__badge">Пример рабочего места</p>
            <div className="utilities-specialist__card-grid">
              {utilitiesSpecialistExample.card.map((item) => (
                <div key={item.label} className="utilities-specialist__field">
                  <p className="utilities-specialist__col-label">{item.label}</p>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
          </GlassSurface>
        </Reveal>

        <div className="utilities-specialist__stages">
          {utilitiesSpecialistStages.map((stage, index) => (
            <Reveal key={stage.title} delay={index * 40}>
              <GlassSurface className="utilities-specialist__stage" radius="lg" depth="raised" tint="utilities" variant="dark">
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
              </GlassSurface>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <ul className="utilities-specialist__caps" aria-label="Возможности контактного центра">
            {utilitiesCcCapabilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
