import { socialAnalyticsDemo, socialAnalyticsNote, socialAnalyticsQuestions } from '../../data/directions/social';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function SocialAnalytics() {
  return (
    <section
      className="section section--dark social-analytics social-section--tech"
      id="social-analytics"
      aria-labelledby="social-analytics-title"
    >
      <div className="section--dark__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Понимайте, почему люди обращаются повторно"
            titleId="social-analytics-title"
            description={socialAnalyticsNote}
            light
          />
        </Reveal>

        <div className="social-analytics__layout">
          <Reveal>
            <GlassSurface className="social-analytics__questions" radius="xl" depth="raised" tint="cyan" variant="dark">
              <p className="social-analytics__label">На какие вопросы помогает ответить аналитика</p>
              <ul>
                {socialAnalyticsQuestions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </GlassSurface>
          </Reveal>

          <Reveal delay={80}>
            <div className="social-analytics__demo" role="list">
              {socialAnalyticsDemo.map((item) => (
                <GlassSurface
                  key={item.label}
                  className="social-analytics__card"
                  radius="lg"
                  depth="raised"
                  tint="yellow"
                  variant="dark"
                >
                  <p className="social-analytics__card-label">{item.label}</p>
                  <p className="social-analytics__card-value">{item.value}</p>
                  <p className="social-analytics__card-note">{item.note}</p>
                </GlassSurface>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
