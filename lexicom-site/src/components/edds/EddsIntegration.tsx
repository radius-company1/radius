import { eddsIntegrationExternal, eddsIntegrationInternal } from '../../data/directions/edds';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function EddsIntegration() {
  return (
    <section className="section edds-integration" id="edds-integration" aria-labelledby="edds-integration-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Подключаем к действующему процессу ЕДДС"
            titleId="edds-integration-title"
            description="Состав интеграций зависит от используемых систем, доступных интерфейсов и регламентов обмена данными."
          />
        </Reveal>

        <div className="edds-integration__cols">
          <Reveal>
            <article className="edds-integration__col surface-plain">
              <h3>Внутри платформы Lexicom</h3>
              <ul>
                {eddsIntegrationInternal.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </Reveal>
          <Reveal delay={80}>
            <article className="edds-integration__col edds-integration__col--accent surface-plain">
              <h3>При интеграции с системами заказчика</h3>
              <ul>
                {eddsIntegrationExternal.map((item) => (
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
