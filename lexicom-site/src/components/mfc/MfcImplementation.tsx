import { mfcImplementationSteps } from '../../data/directions/mfc';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function MfcImplementation() {
  return (
    <section className="section mfc-implementation" id="mfc-implementation" aria-labelledby="mfc-implementation-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="От одного сценария до промышленной эксплуатации"
            titleId="mfc-implementation-title"
          />
        </Reveal>

        <ol className="mfc-implementation__route">
          {mfcImplementationSteps.map((step, index) => (
            <li key={step.title} className="mfc-implementation__step">
              <span className="mfc-implementation__num" aria-hidden="true">
                {index + 1}
              </span>
              <Reveal delay={index * 50}>
                <GlassSurface className="mfc-implementation__card" radius="lg" depth="raised" tint="mfc">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </GlassSurface>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
