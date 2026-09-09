import { s122OnPremPoints } from '../../data/directions/s122';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function S122OnPrem() {
  return (
    <section className="section section--ink s122-onprem" id="s122-onprem" aria-labelledby="s122-onprem-title">
      <div className="section--ink__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Разворачивается внутри инфраструктуры заказчика"
            titleId="s122-onprem-title"
            description="On-prem и закрытый контур — принципиальная часть позиционирования Lexicom. Облачный SaaS не является основным сценарием."
          />
        </Reveal>

        <div className="s122-onprem__grid">
          {s122OnPremPoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 40}>
              <GlassSurface className="s122-onprem__card" radius="lg" depth="raised" tint={index % 2 === 0 ? 's122' : 'yellow'}>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </GlassSurface>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
