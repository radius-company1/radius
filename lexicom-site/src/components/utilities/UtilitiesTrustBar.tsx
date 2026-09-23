import { utilitiesTrustBar } from '../../data/directions/utilities';
import { Reveal } from '../ui/Reveal';

export function UtilitiesTrustBar() {
  return (
    <section className="utilities-trustbar" aria-label="Опыт Lexicom">
      <div className="container">
        <Reveal>
          <p className="utilities-trustbar__caption">Опыт Lexicom</p>
          <ul className="utilities-trustbar__row">
            {utilitiesTrustBar.map((item) => (
              <li key={item.value} className="utilities-trustbar__item">
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
