import { useState } from 'react';
import { socialDemoState, socialScenarios, socialScenariosNote } from '../../data/directions/social';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

type ScenarioId = (typeof socialScenarios)[number]['id'];

export function SocialScenarios() {
  const [activeId, setActiveId] = useState<ScenarioId>(socialScenarios[0].id);
  const active = socialScenarios.find((item) => item.id === activeId) ?? socialScenarios[0];

  return (
    <section
      className="section social-scenarios"
      id={socialDemoState.scenariosAnchor}
      aria-labelledby="social-scenarios-title"
    >
      <div className="container">
        <Reveal>
          <SectionHeader
            title="От жизненной ситуации — к понятному следующему шагу"
            titleId="social-scenarios-title"
            description={socialScenariosNote}
          />
        </Reveal>

        <Reveal>
          <GlassSurface className="social-scenarios__panel" radius="xl" depth="raised" tint="social">
            <div className="social-scenarios__tabs" role="tablist" aria-label="Сценарии социальной защиты">
              {socialScenarios.map((scenario) => (
                <button
                  key={scenario.id}
                  type="button"
                  role="tab"
                  aria-selected={scenario.id === activeId}
                  className={`social-scenarios__tab ${scenario.id === activeId ? 'is-active' : ''}`}
                  onClick={() => setActiveId(scenario.id)}
                >
                  {scenario.title}
                </button>
              ))}
            </div>
            <div className="social-scenarios__body" role="tabpanel">
              <dl className="social-scenarios__flow">
                <div>
                  <dt>Вопрос жителя</dt>
                  <dd>{active.question}</dd>
                </div>
                <div>
                  <dt>Действие системы</dt>
                  <dd>{active.action}</dd>
                </div>
                <div>
                  <dt>Результат</dt>
                  <dd>{active.result}</dd>
                </div>
              </dl>
            </div>
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}
