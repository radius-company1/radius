import {
  utilitiesAnalyticsChain,
  utilitiesAnalyticsNote,
  utilitiesAnalyticsPoints,
  utilitiesAnalyticsTopics,
} from '../../data/directions/utilities';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function UtilitiesAnalytics() {
  return (
    <section
      className="section section--dark utilities-analytics utilities-section--tech"
      id="utilities-analytics"
      aria-labelledby="utilities-analytics-title"
    >
      <div className="section--dark__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Какие вопросы повторяются — и что за ними стоит"
            titleId="utilities-analytics-title"
            description={utilitiesAnalyticsNote}
            light
          />
        </Reveal>

        <div className="utilities-analytics__layout">
          <Reveal>
            <GlassSurface className="utilities-analytics__points" radius="xl" depth="raised" tint="cyan" variant="dark">
              <p className="utilities-analytics__label">Что показывает аналитика</p>
              <ul>
                {utilitiesAnalyticsPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="utilities-analytics__topics-label">Примеры тем</p>
              <ul className="utilities-analytics__topics">
                {utilitiesAnalyticsTopics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </GlassSurface>
          </Reveal>

          <Reveal delay={80}>
            <GlassSurface className="utilities-analytics__chain" radius="xl" depth="raised" tint="yellow" variant="dark">
              <p className="utilities-analytics__label">От разговора к отчёту</p>
              <p className="utilities-analytics__demo-note">Как обрабатывается разговор</p>
              <ol className="utilities-analytics__flow">
                {utilitiesAnalyticsChain.map((step, index) => (
                  <li key={step.label}>
                    <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <strong>{step.label}</strong>
                      <p>{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </GlassSurface>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
