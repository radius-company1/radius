import { saInfraPoints, saLaunchNote, saLaunchSteps } from '../../data/speechAnalyticsPage';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function SaInfrastructure() {
  return (
    <section className="section section--ink nb-infra" id="sa-infrastructure" aria-labelledby="sa-infra-title">
      <div className="section--ink__grid-bg" aria-hidden="true" />
      <div className="container">
        <div className="nb-infra__layout">
          <Reveal>
            <SectionHeader
              title="Встраиваем в вашу инфраструктуру и процессы"
              titleId="sa-infra-title"
              description="Речевая аналитика разворачивается в инфраструктуре заказчика. Источники записей, критерии оценки и категории согласуем под ваши процессы."
            />
          </Reveal>
          <Reveal delay={60}>
            <ul className="nb-infra__points">
              {saInfraPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal>
          <ol className="nb-infra__route" aria-label="Этапы внедрения">
            {saLaunchSteps.map((step, index) => (
              <li key={step}>
                <span aria-hidden="true">{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal>
          <p className="sa-infra__note">{saLaunchNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
