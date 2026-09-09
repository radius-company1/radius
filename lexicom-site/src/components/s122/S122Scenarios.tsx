import { useState } from 'react';
import { s122Scenarios } from '../../data/directions/s122';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

type ScenarioId = (typeof s122Scenarios)[number]['id'];

export function S122Scenarios() {
  const [activeId, setActiveId] = useState<ScenarioId>(s122Scenarios[0].id);
  const active = s122Scenarios.find((item) => item.id === activeId) ?? s122Scenarios[0];

  return (
    <section className="section s122-scenarios" id="s122-scenarios" aria-labelledby="s122-scenarios-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Сценарии автоматизации службы 122"
            titleId="s122-scenarios-title"
            description="Медицинский контур обращений: от записи и вызова врача до справочной информации и исходящего информирования."
          />
        </Reveal>

        <Reveal>
          <GlassSurface className="s122-scenarios__panel" radius="xl" depth="raised" tint="s122">
            <div className="s122-scenarios__tabs" role="tablist" aria-label="Сценарии 122">
              {s122Scenarios.map((scenario) => {
                const selected = scenario.id === active.id;
                return (
                  <button
                    key={scenario.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    className={`s122-scenarios__tab ${selected ? 'is-active' : ''}`}
                    onClick={() => setActiveId(scenario.id)}
                  >
                    {scenario.title}
                  </button>
                );
              })}
            </div>
            <div className="s122-scenarios__content" role="tabpanel">
              <h3>{active.title}</h3>
              <p>{active.text}</p>
            </div>
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}
