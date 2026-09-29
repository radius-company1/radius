import { Link } from 'react-router-dom';
import { solutionConfigs } from '../../data/contactCenterPage';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function CcConfigs() {
  return (
    <section className="section cc-configs" id="cc-configs" aria-labelledby="cc-configs-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="Примеры состава решения"
            title="Подключайте возможности под задачи вашей команды"
            titleId="cc-configs-title"
          />
        </Reveal>

        <ol className="cc-configs__row">
          {solutionConfigs.map((config, index) => (
            <li key={config.title} className="cc-configs__item">
              <Reveal delay={index * 80}>
                <div className="cc-configs__stack" aria-hidden="true">
                  {config.layers.map((layer, layerIndex) => (
                    <span key={layer.label} className={`cc-configs__layer cc-configs__layer--${layerIndex + 1}`} />
                  ))}
                </div>
                <h3>{config.title}</h3>
                <p>{config.text}</p>
                <ul className="cc-configs__parts" aria-label="Состав">
                  {config.layers.map((layer) => (
                    <li key={layer.label}>
                      {layer.href ? (
                        <Link to={layer.href}>
                          {layer.label}
                          <span aria-hidden="true"> ↗</span>
                        </Link>
                      ) : (
                        <span>{layer.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
