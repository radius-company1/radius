import { s122Benefits } from '../../data/directions/s122';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function S122Benefits() {
  return (
    <section className="section s122-benefits" id="s122-benefits" aria-labelledby="s122-benefits-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Что получает служба 122"
            titleId="s122-benefits-title"
            description="Операционные эффекты контура автоматизации — без выдуманных процентов экономии."
          />
        </Reveal>

        <ul className="s122-benefits__list">
          {s122Benefits.map((item, index) => (
            <Reveal key={item} delay={index * 30}>
              <li className="s122-benefits__item surface-plain">
                <span className="s122-benefits__mark" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{item}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
