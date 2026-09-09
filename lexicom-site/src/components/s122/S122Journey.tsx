import { s122JourneySteps } from '../../data/directions/s122';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function S122Journey() {
  return (
    <section
      className="section section--dark s122-journey s122-section--tech"
      id="s122-journey"
      aria-labelledby="s122-journey-title"
    >
      <div className="section--dark__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader
            title="От первой фразы — до результата"
            titleId="s122-journey-title"
            description="Один путь обращения: понимание, сбор данных, действие в системе и сохранение контекста при передаче человеку."
            light
          />
        </Reveal>

        <ol className="s122-journey__steps">
          {s122JourneySteps.map((step, index) => (
            <li key={step.id} className="s122-journey__step">
              <Reveal delay={index * 40}>
                <article
                  className={`s122-journey__card ${'caveat' in step && step.caveat ? 's122-journey__card--caveat' : ''}`}
                >
                  <span className="s122-journey__num" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="s122-journey__body">
                    <h3>{step.title}</h3>
                    <p className="s122-journey__example">{step.example}</p>
                    <p>{step.text}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
