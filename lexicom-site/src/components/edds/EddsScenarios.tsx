import { useState } from 'react';
import { eddsDemoState, eddsScenarios } from '../../data/directions/edds';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

type ScenarioId = (typeof eddsScenarios)[number]['id'];

export function EddsScenarios() {
  const [activeId, setActiveId] = useState<ScenarioId>(eddsScenarios[0].id);
  const active = eddsScenarios.find((item) => item.id === activeId) ?? eddsScenarios[0];

  return (
    <section
      className="section edds-scenarios"
      id={eddsDemoState.scenariosAnchor}
      aria-labelledby="edds-scenarios-title"
    >
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Как это может работать в вашей ЕДДС"
            titleId="edds-scenarios-title"
            description="Предлагаемый состав сценариев. Конкретный набор и границы автоматизации настраиваются под регламенты службы."
          />
        </Reveal>

        <Reveal>
          <GlassSurface className="edds-scenarios__panel" radius="xl" depth="raised" tint="edds">
            <div className="edds-scenarios__tabs" role="tablist" aria-label="Сценарии ЕДДС">
              {eddsScenarios.map((scenario) => (
                <button
                  key={scenario.id}
                  type="button"
                  role="tab"
                  aria-selected={scenario.id === activeId}
                  className={`edds-scenarios__tab ${scenario.id === activeId ? 'is-active' : ''}`}
                  onClick={() => setActiveId(scenario.id)}
                >
                  {scenario.title}
                </button>
              ))}
            </div>
            <div className="edds-scenarios__body" role="tabpanel">
              <dl className="edds-scenarios__flow">
                <div>
                  <dt>Ситуация</dt>
                  <dd>{active.situation}</dd>
                </div>
                <div>
                  <dt>Работа платформы</dt>
                  <dd>{active.platform}</dd>
                </div>
                <div>
                  <dt>Результат</dt>
                  <dd>{active.outcome}</dd>
                </div>
              </dl>
            </div>
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}
