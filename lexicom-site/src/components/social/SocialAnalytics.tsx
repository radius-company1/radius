import { socialAnalyticsNote, socialAnalyticsQuestions } from '../../data/directions/social';
import { MotionLink as Link } from '../ui/MotionLink';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';
import { Icon } from '../ui/Icon';

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
            <GlassSurface className="social-analytics__card" radius="lg" depth="raised" tint="yellow" variant="dark">
              <p className="social-analytics__card-label">От отчёта — к разговору</p>
              <p className="social-analytics__card-value">Разбирайте причины повторных вопросов</p>
              <p>Откройте нужный диалог, проверьте оценку по критериям и определите, что уточнить в базе знаний или работе специалистов.</p>
              <Link to="/products/speech-analytics">Возможности речевой аналитики <Icon name="arrow-right" /></Link>
            </GlassSurface>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
