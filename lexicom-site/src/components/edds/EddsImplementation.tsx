import { profileLaunchNote } from '../../data/implementation';
import { eddsImplementationSteps } from '../../data/directions/edds';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function EddsImplementation() {
  return (
    <section
      className="section edds-implementation"
      id="edds-implementation"
      aria-labelledby="edds-implementation-title"
    >
      <div className="container">
        <Reveal>
          <SectionHeader title="Начинаем с конкретного сценария" titleId="edds-implementation-title" />
        </Reveal>

        <ol className="edds-implementation__route">
          {eddsImplementationSteps.map((step, index) => (
            <li key={step.title} className="edds-implementation__step">
              <span className="edds-implementation__num" aria-hidden="true">
                {index + 1}
              </span>
              <Reveal delay={index * 40}>
                <GlassSurface className="edds-implementation__card" radius="lg" depth="raised" tint="edds">
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
