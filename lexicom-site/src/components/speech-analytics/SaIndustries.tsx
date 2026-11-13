import { MotionLink as Link } from '../ui/MotionLink';
import { saIndustries } from '../../data/speechAnalyticsPage';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';
import { Icon } from '../ui/Icon';

export function SaIndustries() {
  return (
    <section className="section nb-industries" id="sa-industries" aria-labelledby="sa-industries-title">
      <div className="container nb-industries__layout">
        <Reveal>
          <SectionHeader
            title="Критерии и категории — под вашу организацию"
            titleId="sa-industries-title"
            description="Что обычно анализируют в разных отраслях. Состав критериев согласуем на старте проекта."
          />
        </Reveal>

        <Reveal delay={60}>
          <ul className="nb-industries__list">
            {saIndustries.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="nb-industries__link">
                  <span className="nb-industries__label">{item.label}</span>
                  <span className="nb-industries__text">{item.text}</span>
                  <Icon name="arrow-right" className="nb-industries__arrow" />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
