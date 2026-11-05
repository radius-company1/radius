import { MobileDetails } from './ui/MobileDetails';
import { implementationDiscuss, implementationSteps, productDeployTiming } from '../data/implementation';
import { GlassSurface } from './ui/GlassSurface';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';

export function Implementation() {
  return (
    <section
      className="section section-zone section-zone--implementation implementation"
      id="implementation"
      aria-labelledby="implementation-title"
    >
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Как начинается проект"
            titleId="implementation-title"
            description={productDeployTiming}
          />
        </Reveal>

        <ol className="implementation-route">
          {implementationSteps.map((step, index) => (
            <li key={step.step}>
            <Reveal delay={index * 50}>
              <div className="implementation-route__step">
                <span className="implementation-route__node" aria-hidden="true">
                  {step.step}
                </span>
                <GlassSurface className="implementation-route__card" radius="lg" depth="raised">
                  <MobileDetails title={<h3>{step.title}</h3>}><p>{step.description}</p></MobileDetails>
                </GlassSurface>
              </div>
            </Reveal>
            </li>
          ))}
        </ol>

        <Reveal>
          <p className="implementation__closing">{implementationDiscuss}</p>
        </Reveal>
      </div>
    </section>
  );
}
