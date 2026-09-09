import { useState } from 'react';
import { s122Scenarios } from '../../data/directions/s122';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function S122Scenarios() {
  const [activeId, setActiveId] = useState<(typeof s122Scenarios)[number]['id']>(s122Scenarios[0].id);
  const active = s122Scenarios.find((s) => s.id === activeId) ?? s122Scenarios[0];

  return (
    <section className="section s122-scenarios" id="s122-scenarios" aria-labelledby="s122-scenarios-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Сценарии автоматизации для службы 122"
            titleId="s122-scenarios-title"
            description="Какие задачи закрывает платформа: справочное информирование, маршрутизация в службы, исходящие уведомления и передача сложного вопроса оператору."
          />
        </Reveal>

        <Reveal>
          <GlassSurface className="s122-scenarios__panel" radius="xl" depth="raised" tint="s122">
            <div className="s122-scenarios__tabs" role="tablist" aria-label="Сценарии службы 122">
              {s122Scenarios.map((scenario) => (
                <button
                  key={scenario.id}
                  type="button"
                  role="tab"
                  aria-selected={scenario.id === activeId}
                  className={`s122-scenarios__tab ${scenario.id === activeId ? 'is-active' : ''}`}
                  onClick={() => setActiveId(scenario.id)}
                >
                  {scenario.title}
                  {'integration' in scenario && scenario.integration ? (
                    <span className="s122-scenarios__tab-note">При наличии интеграции</span>
                  ) : null}
                </button>
              ))}
            </div>

            <div className="s122-scenarios__body" role="tabpanel">
              <dl className="s122-scenarios__flow">
                <div>
                  <dt>Задача</dt>
                  <dd>{active.task}</dd>
                </div>
                <div>
                  <dt>Что делает Lexicom</dt>
                  <dd>{active.lexicom}</dd>
                </div>
                <div>
                  <dt>Результат</dt>
                  <dd>{active.outcome}</dd>
                </div>
              </dl>
              {'integration' in active && active.integration ? (
                <p className="s122-scenarios__integration-note">
                  Статус из систем региона и уведомления на основе данных региона доступны только при подключении
                  соответствующей информационной системы.
                </p>
              ) : null}
            </div>
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}
