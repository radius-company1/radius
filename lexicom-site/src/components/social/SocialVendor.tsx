import {
  socialLaunchAccent,
  socialResourceAccent,
  socialVendorPoints,
} from '../../data/directions/social';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function SocialVendor() {
  return (
    <section className="section section--ink social-vendor" id="social-vendor" aria-labelledby="social-vendor-title">
      <div className="section--ink__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader title="Внедрение и развитие — напрямую от Lexicom" titleId="social-vendor-title" />
        </Reveal>

        <div className="social-vendor__grid">
          {socialVendorPoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 40}>
              <GlassSurface className="social-vendor__card" radius="lg" depth="raised" tint={index % 2 === 1 ? 'yellow' : 'social'}>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </GlassSurface>
            </Reveal>
          ))}
        </div>

        <div className="social-vendor__accents">
          <Reveal>
            <GlassSurface className="social-vendor__accent" radius="xl" depth="raised" tint="yellow">
              <h3>{socialLaunchAccent.title}</h3>
              <p>{socialLaunchAccent.text}</p>
            </GlassSurface>
          </Reveal>
          <Reveal delay={60}>
            <GlassSurface className="social-vendor__accent" radius="xl" depth="raised" tint="social">
              <h3>{socialResourceAccent.title}</h3>
              <p>{socialResourceAccent.text}</p>
            </GlassSurface>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
