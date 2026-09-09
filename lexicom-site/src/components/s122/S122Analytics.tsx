import { s122AnalyticsZones } from '../../data/directions/s122';
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
            title="Каждое обращение становится данными для управления службой"
            titleId="s122-analytics-title"
            description="Панель руководителя: нагрузка, автоматизация и качество обслуживания."
            light
          />
        </Reveal>

        <Reveal>
          <div className="s122-analytics__dashboard" role="list">
            {s122AnalyticsZones.map((zone, index) => (
              <GlassSurface
                key={zone.id}
                className={`s122-analytics__zone s122-analytics__zone--${zone.id}`}
                radius="lg"
                depth="raised"
                tint={index === 2 ? 'yellow' : 'cyan'}
                variant="dark"
              >
                <h3>{zone.title}</h3>
                <ul>
                  {zone.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </GlassSurface>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
