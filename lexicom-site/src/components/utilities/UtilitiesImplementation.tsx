import { profileLaunchNote } from '../../data/implementation';
import { utilitiesImplementationSteps } from '../../data/directions/utilities';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function UtilitiesImplementation() {
  return (
    <section
      className="section utilities-implementation"
      id="utilities-implementation"
      aria-labelledby="utilities-implementation-title"
    >
      <div className="container">
        <Reveal>
          <SectionHeader title="Начнём с задач вашей службы" titleId="utilities-implementation-title" />
        </Reveal>

        <ol className="utilities-implementation__route">
          {utilitiesImplementationSteps.map((step, index) => (
            <li key={step.title} className="utilities-implementation__step">
              <span className="utilities-implementation__num" aria-hidden="true">
                {index + 1}
              </span>
              <Reveal delay={index * 40}>
                <GlassSurface className="utilities-implementation__card" radius="lg" depth="raised" tint="utilities">
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
