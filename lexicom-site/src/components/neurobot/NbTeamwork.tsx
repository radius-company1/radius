import { Link } from 'react-router-dom';
import { neurobotTeamwork } from '../../data/neurobotPage';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function NbTeamwork() {
  return (
    <section className="section section--dark nb-team" id="nb-team" aria-labelledby="nb-team-title">
      <div className="section--dark__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader title="Нейробот работает вместе с вашей командой" titleId="nb-team-title" light />
        </Reveal>

        <div className="nb-team__grid">
          {neurobotTeamwork.map((part, index) => (
            <Reveal key={part.title} delay={index * 80}>
              <GlassSurface
                className="nb-team__part"
                radius="xl"
                depth="raised"
                variant="dark"
                tint={index === 0 ? 'cyan' : 'yellow'}
              >
                {'badge' in part ? <p className="nb-team__badge">{part.badge}</p> : null}
                <h3>{part.title}</h3>
                <p>{part.text}</p>
                <Link className="nb-team__link" to={part.link.to}>
                  {part.link.label}
                  <span aria-hidden="true"> →</span>
                </Link>
              </GlassSurface>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
