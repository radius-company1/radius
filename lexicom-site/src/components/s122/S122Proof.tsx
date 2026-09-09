import { s122ProofMetrics } from '../../data/directions/s122';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function S122Proof() {
  return (
    <section className="section s122-proof" id="s122-proof" aria-labelledby="s122-proof-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Промышленный опыт Lexicom"
            titleId="s122-proof-title"
            description="Общие показатели проектов на базе платформы Lexicom."
          />
        </Reveal>

        <div className="s122-proof__grid">
          {s122ProofMetrics.map((metric, index) => (
            <Reveal key={metric.value} delay={index * 50}>
              <GlassSurface className="s122-proof__card" radius="lg" depth="raised" tint={index === 3 ? 'yellow' : 's122'}>
                <p className="s122-proof__value">
                  {metric.value}
                  <span>{metric.unit}</span>
                </p>
                <p className="s122-proof__label">{metric.label}</p>
              </GlassSurface>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="s122-proof__note">
            Конкретная доля автоматизации зависит от состава сценариев, качества данных и глубины интеграции.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
