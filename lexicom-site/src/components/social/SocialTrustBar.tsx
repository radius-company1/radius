import { socialTrustBar } from '../../data/directions/social';
import { Reveal } from '../ui/Reveal';

export function SocialTrustBar() {
  return (
    <section className="social-trustbar" aria-label="Опыт Lexicom">
      <div className="container">
        <Reveal>
          <p className="social-trustbar__caption">Опыт Lexicom</p>
          <ul className="social-trustbar__row">
            {socialTrustBar.map((item) => (
              <li key={item.value} className="social-trustbar__item">
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
