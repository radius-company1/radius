import { mfcWithIntegration, mfcWithoutIntegration } from '../../data/directions/mfc';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function MfcIntegration() {
  return (
    <section className="section mfc-integration" id="mfc-integration" aria-labelledby="mfc-integration-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Начать можно без замены действующих систем"
            titleId="mfc-integration-title"
          />
        </Reveal>

        <div className="mfc-integration__cols">
          <Reveal>
            <article className="mfc-integration__col surface-plain">
              <h3>Без интеграции</h3>
              <ul>
                {mfcWithoutIntegration.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </Reveal>
          <Reveal delay={80}>
            <article className="mfc-integration__col mfc-integration__col--accent surface-plain">
              <h3>При наличии интеграции</h3>
              <ul>
                {mfcWithIntegration.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>

        <Reveal>
          <p className="mfc-integration__closing">
            Конкретное действие возможно после подключения соответствующей системы и согласования правил обмена.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
