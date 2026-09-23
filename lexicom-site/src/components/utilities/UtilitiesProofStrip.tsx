import { utilitiesProofStrip } from '../../data/directions/utilities';
import { Reveal } from '../ui/Reveal';

export function UtilitiesProofStrip() {
  return (
    <section className="utilities-proof" aria-label="Показатели Lexicom">
      <div className="container">
        <Reveal>
          <ul className="utilities-proof__row">
            {utilitiesProofStrip.map((item) => (
              <li key={item.value} className="utilities-proof__item">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
