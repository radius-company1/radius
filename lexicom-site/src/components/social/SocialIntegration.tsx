import { socialIntegrationKb, socialIntegrationNote, socialIntegrationSystems } from '../../data/directions/social';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function SocialIntegration() {
  return (
    <section className="section social-integration" id="social-integration" aria-labelledby="social-integration-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="От консультации — к действиям в вашей системе"
            titleId="social-integration-title"
            description={socialIntegrationNote}
          />
        </Reveal>

        <div className="social-integration__cols">
          <Reveal>
            <article className="social-integration__col surface-plain">
              <h3>На базе знаний</h3>
              <ul>
                {socialIntegrationKb.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </Reveal>
          <Reveal delay={80}>
            <article className="social-integration__col social-integration__col--accent surface-plain">
              <h3>При подключении систем заказчика</h3>
              <ul>
                {socialIntegrationSystems.map((item) => (
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
