import { neurobotCapabilities, neurobotCapabilitiesNote } from '../../data/neurobotPage';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function NbCapabilities() {
  return (
    <section className="section nb-capabilities" id="nb-capabilities" aria-labelledby="nb-capabilities-title">
      <div className="container nb-capabilities__layout">
        <div className="nb-capabilities__intro">
          <Reveal>
            <SectionHeader title="От ответа на вопрос до действия в вашей системе" titleId="nb-capabilities-title" />
          </Reveal>
          <Reveal delay={60}>
            <p className="nb-capabilities__combine">{neurobotCapabilitiesNote}</p>
          </Reveal>
        </div>

        <ol className="nb-capabilities__list">
          {neurobotCapabilities.map((item, index) => (
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
