import { s122ImplementationSteps } from '../../data/directions/s122';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function S122Implementation() {
  return (
    <section
      className="section s122-implementation"
      id="s122-implementation"
      aria-labelledby="s122-implementation-title"
    >
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Как проходит внедрение"
            titleId="s122-implementation-title"
            description="От обследования сценариев и систем до промышленного запуска и развития контура."
          />
        </Reveal>

        <ol className="s122-implementation__route">
          {s122ImplementationSteps.map((step, index) => (
            <li key={step.title} className="s122-implementation__step">
              <span className="s122-implementation__num" aria-hidden="true">
                {index + 1}
              </span>
              <Reveal delay={index * 40}>
                <GlassSurface className="s122-implementation__card" radius="lg" depth="raised" tint="s122">
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
