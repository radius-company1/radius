import { s122EcosystemLevels } from '../../data/directions/s122';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

function LevelIcon({ icon }: { icon: (typeof s122EcosystemLevels)[number]['icon'] }) {
  switch (icon) {
    case 'channels':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="5" width="7" height="5" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <rect x="14" y="5" width="7" height="5" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <rect x="8.5" y="14" width="7" height="5" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M6.5 10v2.5h11V10" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case 'automation':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M12 3.5v2.2M12 18.3v2.2M3.5 12h2.2M18.3 12h2.2M6.1 6.1l1.6 1.6M16.3 16.3l1.6 1.6M17.9 6.1l-1.6 1.6M7.7 16.3l-1.6 1.6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'employees':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="9" cy="8" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="16" cy="9" r="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M4.5 18.5c.6-2.8 2.7-4.2 4.5-4.2s3.9 1.4 4.5 4.2M13.2 14.8c1.1-.5 2.4-.6 3.5.1 1.3.8 2.1 2.2 2.3 3.6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'knowledge':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M5 6.5h9.5a2.5 2.5 0 0 1 2.5 2.5V19H7.5A2.5 2.5 0 0 0 5 21.5z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M5 6.5V19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M8.5 10h6M8.5 13.5h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case 'analytics':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 19V11M10 19V7M15 19v-5M20 19V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
  }
}

export function S122Ecosystem() {
  return (
    <section className="section s122-ecosystem s122-section--dense" id="s122-ecosystem" aria-labelledby="s122-ecosystem-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="От отдельного бота до контура службы 122"
            titleId="s122-ecosystem-title"
            description="Из чего состоит решение: каналы, нейробот, контактный центр с суфлёром, база знаний с интеграциями и речевая аналитика. Можно начать с одного сценария информирования и наращивать контур."
          />
        </Reveal>

        <Reveal>
          <GlassSurface className="s122-ecosystem__stack" radius="xl" depth="float" tint="s122">
            <p className="s122-ecosystem__tagline">
              Lexicom может поставить один сценарий на номере 122, а может собрать весь коммуникационный контур службы:
              информирование, маршрутизация и работа операторов.
            </p>
            <div className="s122-ecosystem__levels" role="list">
              {s122EcosystemLevels.map((level) => (
                <article key={level.level} className="s122-ecosystem__level" role="listitem">
                  <div className="s122-ecosystem__level-marker" aria-hidden="true">
                    <span className="s122-ecosystem__level-num">{level.level}</span>
                    <span className="s122-ecosystem__level-icon">
                      <LevelIcon icon={level.icon} />
                    </span>
                  </div>
                  <div className="s122-ecosystem__level-copy">
                    <h3>{level.title}</h3>
                    <p className="s122-ecosystem__level-summary">{level.summary}</p>
                    <ul className="s122-ecosystem__capabilities">
                      {level.capabilities.map((item) => (
                        <li key={item.title}>
                          <span className="s122-ecosystem__capability-title">{item.title}</span>
                          <span className="s122-ecosystem__capability-detail">{item.detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}
