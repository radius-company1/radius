import { saCapabilities, saCapabilitiesNote } from '../../data/speechAnalyticsPage';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function SaCapabilities() {
  return (
    <section className="section nb-capabilities" id="sa-capabilities" aria-labelledby="sa-capabilities-title">
      <div className="container nb-capabilities__layout">
        <div className="nb-capabilities__intro">
          <Reveal>
            <SectionHeader title="Что показывает анализ разговоров" titleId="sa-capabilities-title" />
          </Reveal>
          <Reveal delay={60}>
            <p className="nb-capabilities__combine">{saCapabilitiesNote}</p>
          </Reveal>
        </div>

        <ol className="nb-capabilities__list">
          {saCapabilities.map((item, index) => (
            <li key={item.title}>
              <Reveal delay={index * 70}>
                <span className="nb-capabilities__index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
