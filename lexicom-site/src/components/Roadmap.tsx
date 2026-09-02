import { agentRoles, improvementLoop } from '../data/roadmap';
import { FlowDiagram } from './ui/FlowDiagram';
import { GlassSurface } from './ui/GlassSurface';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';

const [commAgent, knowledgeAgent, execAgent, controlAgent, employeeAgent] = agentRoles;

function AgentCard({ title, description }: { title: string; description: string }) {
  return (
    <GlassSurface as="article" className="roadmap-card" variant="dark" radius="lg" depth="raised">
      <h3>{title}</h3>
      <p>{description}</p>
    </GlassSurface>
  );
}

export function Roadmap() {
  return (
    <section className="section section--dark section-zone section-zone--roadmap roadmap" id="roadmap" aria-labelledby="roadmap-title">
      <div className="section--dark__grid-bg" aria-hidden="true" />
      <div className="roadmap__glow" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Один процесс — несколько специализированных ИИ-агентов"
            titleId="roadmap-title"
            light
            description="Сегодня Lexicom объединяет ИИ-ассистентов, контактный центр, базу знаний, бизнес-логику, интеграции и аналитику. Эта технологическая основа позволяет двигаться дальше — к платформе, в которой несколько ИИ-агентов совместно выполняют единый процесс."
          />
        </Reveal>

        <Reveal>
          <div className="roadmap__system" role="img" aria-label="Схема взаимодействия ИИ-агентов вокруг сотрудника">
            <svg className="roadmap__links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="roadmap-link" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2ED3FF" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#9B5CFF" stopOpacity="0.55" />
                </linearGradient>
              </defs>
              <path className="roadmap__link roadmap__link--active" d="M 50 18 L 50 38" stroke="url(#roadmap-link)" fill="none" />
              <path className="roadmap__link" d="M 18 50 L 38 50" stroke="url(#roadmap-link)" fill="none" />
              <path className="roadmap__link" d="M 62 50 L 82 50" stroke="url(#roadmap-link)" fill="none" />
              <path className="roadmap__link" d="M 50 62 L 50 82" stroke="url(#roadmap-link)" fill="none" />
              <path className="roadmap__link" d="M 38 50 L 50 50" stroke="url(#roadmap-link)" fill="none" />
              <path className="roadmap__link" d="M 50 50 L 62 50" stroke="url(#roadmap-link)" fill="none" />
            </svg>

            <div className="roadmap__grid">
              <div className="roadmap__cell roadmap__cell--comm">
                <AgentCard title={commAgent.title} description={commAgent.description} />
              </div>

              <div className="roadmap__cell roadmap__cell--control">
                <AgentCard title={controlAgent.title} description={controlAgent.description} />
              </div>

              <div className="roadmap__cell roadmap__cell--center">
                <GlassSurface className="roadmap-card roadmap-card--center" variant="dark" radius="xl" depth="float" tint="violet">
                  <h3>{employeeAgent.title}</h3>
                  <p>{employeeAgent.description}</p>
                </GlassSurface>
              </div>

              <div className="roadmap__cell roadmap__cell--knowledge">
                <AgentCard title={knowledgeAgent.title} description={knowledgeAgent.description} />
              </div>

              <div className="roadmap__cell roadmap__cell--exec">
                <AgentCard title={execAgent.title} description={execAgent.description} />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="roadmap__loop">
            <p className="roadmap__loop-label">Контур улучшения</p>
            <FlowDiagram steps={improvementLoop} variant="dark" compact />
          </div>
        </Reveal>

        <Reveal>
          <p className="roadmap__closing">
            Оркестрация ИИ-агентов — направление развития платформы Lexicom.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
