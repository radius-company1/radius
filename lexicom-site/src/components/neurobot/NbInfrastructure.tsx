import { neurobotInfraPoints, neurobotLaunchSteps } from '../../data/neurobotPage';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function NbInfrastructure() {
  return (
    <section className="section section--ink nb-infra" id="nb-infrastructure" aria-labelledby="nb-infra-title">
      <div className="section--ink__grid-bg" aria-hidden="true" />
      <div className="container">
        <div className="nb-infra__layout">
          <Reveal>
            <SectionHeader
              title="Встраиваем в вашу инфраструктуру и процессы"
              titleId="nb-infra-title"
              description="Нейробот разворачивается в инфраструктуре заказчика. Подключение телефонии, базы знаний и информационных систем проектируем с учётом действующих процессов и требований."
            />
          </Reveal>
          <Reveal delay={60}>
            <ul className="nb-infra__points">
              {neurobotInfraPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal>
          <ol className="nb-infra__route" aria-label="Этапы внедрения">
            {neurobotLaunchSteps.map((step, index) => (
              <li key={step}>
                <span aria-hidden="true">{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal>
          <GlassSurface className="nb-infra__timing" radius="xl" depth="raised" tint="yellow" tier="matte">
            <p className="nb-infra__timing-lead">Запуск решений Lexicom — от 3 дней</p>
            <p>
              Есть опыт полной реализации и сдачи бота в MAX за 3 дня. Срок вашего проекта определим по сценариям,
              каналам и интеграциям.
            </p>
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}
