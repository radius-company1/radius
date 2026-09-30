import { Link } from 'react-router-dom';
import { saTeamwork, saTeamworkNote } from '../../data/speechAnalyticsPage';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function SaTeamwork() {
  return (
    <section className="section section--dark nb-team sa-team" id="sa-team" aria-labelledby="sa-team-title">
      <div className="section--dark__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader title="Вместе с другими продуктами Lexicom" titleId="sa-team-title" light />
        </Reveal>

        <div className="nb-team__grid">
          {saTeamwork.map((part, index) => (
            <Reveal key={part.title} delay={index * 80}>
              <GlassSurface
                className="nb-team__part"
                radius="xl"
                depth="raised"
                variant="dark"
                tint={index === 0 ? 'cyan' : 'yellow'}
              >
                <p className="nb-team__badge">{part.badge}</p>
                <h3>{part.title}</h3>
                <p>{part.text}</p>
                <Link className="nb-team__link" to={part.link.to}>
                  {part.link.label}
                  <span aria-hidden="true">→</span>
                </Link>
              </GlassSurface>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="sa-team__note">{saTeamworkNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
