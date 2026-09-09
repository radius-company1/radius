import { mfcAnalyticsDirections } from '../../data/directions/mfc';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function MfcAnalytics() {
  return (
    <section className="section section--dark mfc-analytics mfc-section--tech" id="mfc-analytics" aria-labelledby="mfc-analytics-title">
      <div className="section--dark__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Каждый разговор показывает, что нужно улучшить"
            titleId="mfc-analytics-title"
            description="Для руководителя МФЦ: тематики обращений, повторные вопросы, качество обслуживания и точки, где стоит обновить знания, маршруты или процессы."
            light
          />
        </Reveal>

        <div className="mfc-analytics__grid">
          {mfcAnalyticsDirections.map((block, index) => (
            <Reveal
              key={block.title}
              delay={index * 60}
              className={index === 0 ? 'mfc-analytics__cell mfc-analytics__cell--featured' : 'mfc-analytics__cell'}
            >
              <GlassSurface
                className="mfc-analytics__card"
                radius="lg"
                depth="raised"
                tint={index === 2 ? 'yellow' : 'cyan'}
                variant="dark"
              >
                <span className="mfc-analytics__card-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{block.title}</h3>
                <ul>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </GlassSurface>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mfc-analytics__cycle" aria-label="Цикл улучшений">
            <span>обращения</span>
            <span aria-hidden="true">→</span>
            <span>анализ</span>
            <span aria-hidden="true">→</span>
            <span>изменения</span>
            <span aria-hidden="true">→</span>
            <span>проверка следующих обращений</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
