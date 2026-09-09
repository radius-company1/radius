import { eddsAnalyticsZones } from '../../data/directions/edds';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function EddsAnalytics() {
  return (
    <section
      className="section section--dark edds-analytics edds-section--tech"
      id="edds-analytics"
      aria-labelledby="edds-analytics-title"
    >
      <div className="section--dark__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Видеть нагрузку и качество работы с обращениями"
            titleId="edds-analytics-title"
            description="Речевая аналитика помогает понять, с какими вопросами обращаются жители, где возникают повторные контакты и что можно улучшить в обработке разговоров."
            light
          />
        </Reveal>

        <Reveal>
          <div className="edds-analytics__dashboard" role="list">
            {eddsAnalyticsZones.map((zone, index) => (
              <GlassSurface
                key={zone.id}
                className="edds-analytics__zone"
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
