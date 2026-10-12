import { Link } from 'react-router-dom';
import { contactCenterIndustries } from '../../data/contactCenterPage';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function CcIndustries() {
  return (
    <section className="section nb-industries" id="cc-industries" aria-labelledby="cc-industries-title">
      <div className="container nb-industries__layout">
        <Reveal>
          <SectionHeader title="Где применяют контактный центр" titleId="cc-industries-title" />
        </Reveal>

        <Reveal delay={60}>
          <ul className="nb-industries__list">
            {contactCenterIndustries.map((item) => (
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
