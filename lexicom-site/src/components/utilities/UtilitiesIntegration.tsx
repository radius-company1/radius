import {
  utilitiesIntegrationKb,
  utilitiesIntegrationNote,
  utilitiesIntegrationSources,
  utilitiesIntegrationSystems,
} from '../../data/directions/utilities';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function UtilitiesIntegration() {
  return (
    <section
      className="section utilities-integration"
      id="utilities-integration"
      aria-labelledby="utilities-integration-title"
    >
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Работаем с вашей инфраструктурой"
            titleId="utilities-integration-title"
            description={utilitiesIntegrationNote}
          />
        </Reveal>

        <Reveal>
          <GlassSurface className="utilities-integration__sources" radius="xl" depth="raised" tint="utilities">
            <p className="utilities-integration__label">Возможные источники и системы</p>
            <ul>
              {utilitiesIntegrationSources.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </GlassSurface>
        </Reveal>

        <div className="utilities-integration__cols">
          <Reveal>
            <article className="utilities-integration__col surface-plain">
              <h3>На базе знаний</h3>
              <ul>
                {utilitiesIntegrationKb.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </Reveal>
          <Reveal delay={80}>
            <article className="utilities-integration__col utilities-integration__col--accent surface-plain">
              <h3>При интеграции</h3>
              <ul>
                {utilitiesIntegrationSystems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
