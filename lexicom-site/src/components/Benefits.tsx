import { organizationBenefits } from '../data/benefits';
import { Reveal } from './ui/Reveal';

export function Benefits() {
  return (
    <section className="benefits section-zone section-zone--benefits" aria-label="Результат для организации">
      <div className="container">
        <Reveal>
          <ul className="benefits__cloud">
            {organizationBenefits.map((benefit, index) => (
              <li key={benefit} className={`benefits__chip benefits__chip--${index % 4}`}>
                <span className="benefits__dot" aria-hidden="true" />
                {benefit}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
