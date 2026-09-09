import { s122WithIntegration, s122WithoutIntegration } from '../../data/directions/s122';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function S122Integration() {
  return (
    <section className="section s122-integration" id="s122-integration" aria-labelledby="s122-integration-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Что работает без интеграции и что открывается после подключения"
            titleId="s122-integration-title"
            description="Базовые сценарии службы 122 можно запускать на согласованной базе знаний. Обмен с системами региона — отдельный этап проекта."
          />
        </Reveal>
        <div className="s122-integration__cols">
          <Reveal>
            <article className="s122-integration__col surface-plain">
              <h3>Без интеграции</h3>
              <ul>
                {s122WithoutIntegration.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </Reveal>
          <Reveal delay={80}>
            <article className="s122-integration__col s122-integration__col--accent surface-plain">
              <h3>При наличии интеграции</h3>
              <ul>
                {s122WithIntegration.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
        <Reveal>
          <p className="s122-integration__closing">
            Статус, уведомления на данных региона и синхронизация с ИС не обещаются «из коробки» — только после
            согласованного подключения.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
