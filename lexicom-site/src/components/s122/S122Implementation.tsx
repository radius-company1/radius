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
            title="От первого сценария до промышленной эксплуатации"
            titleId="s122-implementation-title"
            description="Как проходит проект для службы 122: от выбора процесса до масштабирования тем, служб и каналов."
          />
        </Reveal>

        <ol className="s122-implementation__route">
          {s122ImplementationSteps.map((step, index) => (
            <li key={step.title} className="s122-implementation__step">
              <span className="s122-implementation__num" aria-hidden="true">
                {index + 1}
              </span>
              <Reveal delay={index * 50}>
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
