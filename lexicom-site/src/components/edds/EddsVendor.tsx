import { eddsVendorPoints } from '../../data/directions/edds';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function EddsVendor() {
  return (
    <section className="section section--ink edds-vendor" id="edds-vendor" aria-labelledby="edds-vendor-title">
      <div className="section--ink__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader title="Собственное ПО. Адаптация под вашу ЕДДС" titleId="edds-vendor-title" />
        </Reveal>

        <div className="edds-vendor__grid">
          {eddsVendorPoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 50}>
              <GlassSurface className="edds-vendor__card" radius="lg" depth="raised" tint={index === 1 ? 'yellow' : 'edds'}>
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
