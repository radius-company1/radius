import { useState } from 'react';
import { mfcScenarios } from '../../data/directions/mfc';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function MfcScenarios() {
  const [activeId, setActiveId] = useState<(typeof mfcScenarios)[number]['id']>(mfcScenarios[0].id);
  const active = mfcScenarios.find((s) => s.id === activeId) ?? mfcScenarios[0];

  return (
    <section className="section mfc-scenarios" id="mfc-scenarios" aria-labelledby="mfc-scenarios-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Сценарии автоматизации для МФЦ"
            titleId="mfc-scenarios-title"
            description="Какие задачи МФЦ закрывает платформа: от консультаций и записи до исходящих напоминаний и передачи сложного вопроса сотруднику."
          />
        </Reveal>

        <Reveal>
          <GlassSurface className="mfc-scenarios__panel" radius="xl" depth="raised" tint="mfc">
            <div className="mfc-scenarios__tabs" role="tablist" aria-label="Сценарии МФЦ">
              {mfcScenarios.map((scenario) => (
                <button
                  key={scenario.id}
                  type="button"
                  role="tab"
                  aria-selected={scenario.id === activeId}
                  className={`mfc-scenarios__tab ${scenario.id === activeId ? 'is-active' : ''}`}
                  onClick={() => setActiveId(scenario.id)}
                >
                  {scenario.title}
                  {'integration' in scenario && scenario.integration ? (
                    <span className="mfc-scenarios__tab-note">При наличии интеграции</span>
                  ) : null}
                </button>
              ))}
            </div>

            <div className="mfc-scenarios__body" role="tabpanel">
              <dl className="mfc-scenarios__flow">
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
                <p className="mfc-scenarios__integration-note">
                  Запись, статус и уведомления на основе данных МФЦ доступны только при подключении соответствующей
                  информационной системы.
                </p>
              ) : null}
            </div>
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}
