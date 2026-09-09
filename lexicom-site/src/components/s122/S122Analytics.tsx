import { s122AnalyticsDirections } from '../../data/directions/s122';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function S122Analytics() {
  return (
    <section
      className="section section--dark s122-analytics s122-section--tech"
      id="s122-analytics"
      aria-labelledby="s122-analytics-title"
    >
      <div className="section--dark__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Каждый разговор показывает, что нужно улучшить"
            titleId="s122-analytics-title"
            description="Для руководителя службы 122: тематики обращений, повторные контакты, пики нагрузки, качество обслуживания и точки улучшения маршрутов и знаний."
            light
          />
        </Reveal>

        <div className="s122-analytics__grid">
          {s122AnalyticsDirections.map((block, index) => (
            <Reveal
              key={block.title}
              delay={index * 60}
              className={index === 0 ? 's122-analytics__cell s122-analytics__cell--featured' : 's122-analytics__cell'}
            >
              <GlassSurface
                className="s122-analytics__card"
                radius="lg"
                depth="raised"
                tint={index === 2 ? 'yellow' : 'cyan'}
                variant="dark"
              >
                <span className="s122-analytics__card-index" aria-hidden="true">
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
          <div className="s122-analytics__cycle" aria-label="Цикл улучшений">
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
