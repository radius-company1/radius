import {
  neurobotProcessBranch,
  neurobotProcessBranchStep,
  neurobotProcessNote,
  neurobotProcessSteps,
} from '../../data/neurobotPage';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function NbProcess() {
  return (
    <section className="section nb-process" id="nb-process" aria-labelledby="nb-process-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="Пример: запись на приём"
            title="Как проходит обращение"
            titleId="nb-process-title"
          />
        </Reveal>

        <Reveal delay={60}>
          <GlassSurface className="nb-process__panel" radius="xl" depth="raised" tint="blue">
            <ol className="nb-process__flow">
              {neurobotProcessSteps.map((step, index) => (
                <li
                  key={step}
                  className={`nb-process__step ${index === neurobotProcessBranchStep ? 'has-branch' : ''} ${
                    index === neurobotProcessSteps.length - 1 ? 'is-last' : ''
                  }`}
                >
                  <span className="nb-process__num" aria-hidden="true">
                    {index + 1}
                  </span>
                  <p className="nb-process__label">{step}</p>
                  {index === neurobotProcessBranchStep ? (
                    <div className="nb-process__branch">
                      <p className="nb-process__branch-condition">{neurobotProcessBranch.condition}</p>
                      <p className="nb-process__branch-result">
                        <span aria-hidden="true">→ </span>
                        {neurobotProcessBranch.result}
                      </p>
                    </div>
                  ) : null}
                </li>
              ))}
            </ol>
          </GlassSurface>
        </Reveal>

        <Reveal>
          <p className="nb-process__note">{neurobotProcessNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
