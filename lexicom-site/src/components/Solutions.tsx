import { platformFlow, platformLayers } from '../data/solutions';
import { FlowDiagram } from './ui/FlowDiagram';
import { GlassSurface } from './ui/GlassSurface';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';

export function Solutions() {
  return (
    <section
      className="section section-zone section-zone--platform section-zone--solutions solutions"
      id="platform"
      aria-labelledby="platform-title"
    >
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Продукты работают отдельно или как единая система"
            titleId="platform-title"
            description="Нейробот, контактный центр, речевая аналитика, база знаний, робот-суфлёр и интеграции могут работать в едином контуре. Обращение принимается, обрабатывается, при необходимости передаётся сотруднику, а результат фиксируется и анализируется."
          />
        </Reveal>

        <Reveal>
          <div className="surface-plain solutions__flow-wrap solutions__flow-wrap--primary">
            <FlowDiagram steps={platformFlow} compact className="solutions__flow" />
          </div>
        </Reveal>

        <Reveal>
          <GlassSurface className="platform-rail" radius="xl" depth="raised" tier="matte" tint="cyan">
            <p className="platform-rail__title">Общий технологический слой</p>
            <div className="platform-rail__track">
              {platformLayers.map((layer, index) => (
                <div key={layer} className="platform-rail__node-wrap">
                  {index > 0 ? <span className="platform-rail__connector" aria-hidden="true" /> : null}
                  <span className="platform-rail__node">{layer}</span>
                </div>
              ))}
            </div>
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}
