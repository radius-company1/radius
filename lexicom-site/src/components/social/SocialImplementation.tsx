import { profileLaunchNote } from '../../data/implementation';
import { socialImplementationSteps } from '../../data/directions/social';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function SocialImplementation() {
  return (
    <section
      className="section social-implementation"
      id="social-implementation"
      aria-labelledby="social-implementation-title"
    >
      <div className="container">
        <Reveal>
          <SectionHeader title="От задачи — к работающему решению" titleId="social-implementation-title" />
        </Reveal>

        <ol className="social-implementation__route">
          {socialImplementationSteps.map((step, index) => (
            <li key={step.title} className="social-implementation__step">
              <span className="social-implementation__num" aria-hidden="true">
                {index + 1}
              </span>
              <Reveal delay={index * 40}>
                <GlassSurface className="social-implementation__card" radius="lg" depth="raised" tint="social">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </GlassSurface>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal>
          <p className="profile-launch-note">{profileLaunchNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
