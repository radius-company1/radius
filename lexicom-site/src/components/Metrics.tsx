import { metrics } from '../data/metrics';
import { GlassSurface } from './ui/GlassSurface';
import { Reveal } from './ui/Reveal';

const offsets = ['metric-card--lift-0', 'metric-card--lift-1', 'metric-card--lift-2'] as const;
const tints = ['cyan', 'blue', 'violet'] as const;

export function Metrics() {
  return (
    <section className="metrics section-zone section-zone--metrics" aria-label="Ключевые показатели">
      <div className="container">
        <div className="metrics__grid">
          {metrics.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 80}>
              <GlassSurface
                as="article"
                className={`metric-card ${offsets[index]}`}
                radius="xl"
                depth="raised"
                tier="matte"
                tint={tints[index]}
              >
                <p className="metric-card__value">{metric.value}</p>
                <p className="metric-card__label">{metric.label}</p>
              </GlassSurface>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
