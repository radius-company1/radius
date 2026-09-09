import { s122AnalyticsItems } from '../../data/directions/s122';
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
            description="Речевая аналитика — модуль общей платформы Lexicom. Состав отчётности зависит от сценариев и глубины интеграции."
            light
          />
        </Reveal>

        <Reveal>
          <GlassSurface className="s122-analytics__board" radius="xl" depth="raised" tint="cyan" variant="dark">
            <ul className="s122-analytics__list">
              {s122AnalyticsItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}
