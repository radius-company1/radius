import { Link } from 'react-router-dom';
import { neurobotIndustries } from '../../data/neurobotPage';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function NbIndustries() {
  return (
    <section className="section nb-industries" id="nb-industries" aria-labelledby="nb-industries-title">
      <div className="container nb-industries__layout">
        <Reveal>
          <SectionHeader title="Настраиваем под задачи вашей организации" titleId="nb-industries-title" />
        </Reveal>

        <Reveal delay={60}>
          <ul className="nb-industries__list">
            {neurobotIndustries.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="nb-industries__link">
                  <span className="nb-industries__label">{item.label}</span>
                  <span className="nb-industries__text">{item.text}</span>
                  <span className="nb-industries__arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
