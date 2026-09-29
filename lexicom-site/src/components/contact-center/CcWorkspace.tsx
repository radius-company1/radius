import { workspaceShots, type ContactCenterShot } from '../../data/contactCenterPage';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';
import { CcShot } from './CcShot';

type CcWorkspaceProps = {
  onOpenShot: (shot: ContactCenterShot, trigger: HTMLButtonElement) => void;
};

export function CcWorkspace({ onOpenShot }: CcWorkspaceProps) {
  return (
    <section className="section cc-workspace" id="cc-workspace" aria-labelledby="cc-workspace-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Посмотрите, как устроена работа сотрудника"
            titleId="cc-workspace-title"
            description="Обращения, история взаимодействий и инструменты оператора — в едином рабочем пространстве."
          />
        </Reveal>

        <div className="cc-workspace__grid">
          {workspaceShots.map((shot, index) => (
            <Reveal key={shot.id} delay={index * 80}>
              <figure className="cc-workspace__item">
                <CcShot shot={shot} onOpen={onOpenShot} sizes="(min-width: 900px) 560px, calc(100vw - 2rem)" />
                <figcaption className="cc-workspace__caption">
                  <h3>{shot.caption}</h3>
                  <ul>
                    {shot.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
