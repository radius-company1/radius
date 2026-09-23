import {
  utilitiesLaunchAccent,
  utilitiesResourceAccent,
  utilitiesVendorPoints,
} from '../../data/directions/utilities';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function UtilitiesVendor() {
  return (
    <section className="section section--ink utilities-vendor" id="utilities-vendor" aria-labelledby="utilities-vendor-title">
      <div className="section--ink__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader
            title="В инфраструктуре заказчика. Напрямую от разработчика"
            titleId="utilities-vendor-title"
          />
        </Reveal>

        <div className="utilities-vendor__grid">
          {utilitiesVendorPoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 40}>
              <GlassSurface
                className="utilities-vendor__card"
                radius="lg"
                depth="raised"
                tint={index % 2 === 1 ? 'yellow' : 'utilities'}
              >
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </GlassSurface>
            </Reveal>
          ))}
        </div>

        <div className="utilities-vendor__accents">
          <Reveal>
            <GlassSurface className="utilities-vendor__accent" radius="xl" depth="raised" tint="yellow">
              <h3>{utilitiesLaunchAccent.title}</h3>
              <p>{utilitiesLaunchAccent.text}</p>
            </GlassSurface>
          </Reveal>
          <Reveal delay={60}>
            <GlassSurface className="utilities-vendor__accent" radius="xl" depth="raised" tint="utilities">
              <h3>{utilitiesResourceAccent.title}</h3>
              <p>{utilitiesResourceAccent.text}</p>
            </GlassSurface>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
