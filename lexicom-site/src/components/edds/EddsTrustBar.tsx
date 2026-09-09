import { eddsTrustBar } from '../../data/directions/edds';
import { Reveal } from '../ui/Reveal';

export function EddsTrustBar() {
  return (
    <section className="edds-trustbar" aria-label="Опыт Lexicom">
      <div className="container">
        <Reveal>
          <p className="edds-trustbar__caption">Опыт Lexicom</p>
          <ul className="edds-trustbar__row">
            {eddsTrustBar.map((item) => (
              <li key={item.value} className="edds-trustbar__item">
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
