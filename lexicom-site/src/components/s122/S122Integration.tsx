import { s122ArchitectureLayers } from '../../data/directions/s122';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function S122Integration() {
  return (
    <section className="section s122-integration" id="s122-integration" aria-labelledby="s122-integration-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Интеграционный контур проекта"
            titleId="s122-integration-title"
            description="Lexicom встаёт между каналом обращения и системами заказчика. Конкретный состав подключений зависит от архитектуры проекта."
          />
        </Reveal>

        <Reveal>
          <ol className="s122-arch" aria-label="Архитектура интеграционного контура">
            {s122ArchitectureLayers.map((layer, index) => (
              <li key={layer.id} className={`s122-arch__layer s122-arch__layer--${layer.id}`}>
                <div className="s122-arch__card surface-plain">
                  <span className="s122-arch__index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3>{layer.title}</h3>
                  <ul>
                    {layer.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {'caveat' in layer && layer.caveat ? <p className="s122-arch__caveat">{layer.caveat}</p> : null}
                </div>
                {index < s122ArchitectureLayers.length - 1 ? (
                  <span className="s122-arch__down" aria-hidden="true">
                    ↓
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
