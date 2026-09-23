import { utilitiesImplementationSteps } from '../../data/directions/utilities';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function UtilitiesImplementation() {
  return (
    <section
      className="section utilities-implementation utilities-section--compact"
      id="utilities-implementation"
      aria-labelledby="utilities-implementation-title"
    >
      <div className="container">
        <Reveal>
          <SectionHeader title="Что получает ваша служба" titleId="utilities-implementation-title" />
        </Reveal>

        <div className="utilities-implementation__route">
          {utilitiesImplementationSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 40}>
              <GlassSurface className="utilities-implementation__card" radius="lg" depth="raised" tint="utilities">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </GlassSurface>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
