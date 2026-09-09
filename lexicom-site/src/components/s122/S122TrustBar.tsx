import { s122TrustBar } from '../../data/directions/s122';
import { Reveal } from '../ui/Reveal';

export function S122TrustBar() {
  const showNote = s122TrustBar.some((item) => 'note' in item && item.note);

  return (
    <section className="s122-trustbar" aria-label="Показатели Lexicom">
      <div className="container">
        <Reveal>
          <ul className="s122-trustbar__row">
            {s122TrustBar.map((item) => (
              <li key={item.value} className="s122-trustbar__item">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
          {showNote ? (
            <p className="s122-trustbar__note">* в зависимости от состава сценариев и глубины интеграции</p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
