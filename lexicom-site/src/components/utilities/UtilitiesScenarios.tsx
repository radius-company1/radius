import { utilitiesScenarios, utilitiesScenariosNote } from '../../data/directions/utilities';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function UtilitiesScenarios() {
  return (
    <section
      className="section utilities-scenarios"
      id="utilities-scenarios"
      aria-labelledby="utilities-scenarios-title"
    >
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Какие обращения можно автоматизировать"
            titleId="utilities-scenarios-title"
            description={utilitiesScenariosNote}
          />
        </Reveal>

        <div className="utilities-scenarios__grid">
          {utilitiesScenarios.map((scenario, index) => (
            <Reveal key={scenario.id} delay={index * 40}>
              <GlassSurface className="utilities-scenarios__card" radius="lg" depth="raised" tint="utilities">
                <h3>{scenario.title}</h3>
                <p>{scenario.text}</p>
              </GlassSurface>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
