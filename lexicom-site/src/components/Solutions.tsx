import { mainSolutions, platformFlow, platformLayers } from '../data/solutions';
import { FlowDiagram } from './ui/FlowDiagram';
import { GlassSurface } from './ui/GlassSurface';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';

export function Solutions() {
  return (
    <section className="section section-zone section-zone--platform section-zone--solutions solutions" id="platform" aria-labelledby="platform-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="Возможности платформы"
            title="Нейробот и контактный центр — на одной платформе"
            titleId="platform-title"
            description="Lexicom объединяет автоматизацию типовых обращений и работу сотрудников. ИИ самостоятельно решает повторяющиеся вопросы, а сложные обращения передаёт специалисту вместе с контекстом разговора и найденной информацией."
          />
        </Reveal>

        <div className="solutions__grid">
          {mainSolutions.map((solution, index) => (
            <Reveal key={solution.id} delay={index * 100}>
              <GlassSurface
                as="article"
                className={`solution-card ${index === 0 ? 'solution-card--featured' : ''}`}
                radius="xl"
                depth={index === 0 ? 'float' : 'raised'}
                tier={index === 0 ? 'matte' : 'matte'}
                tint={index === 0 ? 'violet' : 'blue'}
              >
                <h3 className="solution-card__title">{solution.title}</h3>
                <p className="solution-card__text">{solution.description}</p>
                <p className="solution-card__label">Возможности:</p>
                <ul className="solution-card__list">
                  {solution.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </GlassSurface>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <GlassSurface className="platform-rail" radius="xl" depth="raised" tier="matte" tint="cyan">
            <p className="platform-rail__title">Общий слой платформы</p>
            <div className="platform-rail__track">
              {platformLayers.map((layer, index) => (
                <div key={layer} className="platform-rail__node-wrap">
                  {index > 0 ? <span className="platform-rail__connector" aria-hidden="true" /> : null}
                  <span className="platform-rail__node">{layer}</span>
                </div>
              ))}
            </div>
            <p className="platform-rail__note">
              Речевая аналитика — модуль платформы, а не отдельный продукт.
            </p>
          </GlassSurface>
        </Reveal>

        <Reveal>
          <div className="surface-plain solutions__flow-wrap">
            <FlowDiagram steps={platformFlow} compact className="solutions__flow" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
