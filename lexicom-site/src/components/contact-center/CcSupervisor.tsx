import {
  supervisorContent,
  supervisorNote,
  supervisorOperations,
  supervisorShots,
  type ContactCenterShot,
} from '../../data/contactCenterPage';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';
import { CcShot } from './CcShot';

type CcSupervisorProps = {
  onOpenShot: (shot: ContactCenterShot, trigger: HTMLButtonElement) => void;
};

export function CcSupervisor({ onOpenShot }: CcSupervisorProps) {
  return (
    <section className="section cc-supervisor" id="cc-supervisor" aria-labelledby="cc-supervisor-title">
      <div className="container">
        <Reveal>
          <SectionHeader title="Видеть нагрузку и понимать качество обслуживания" titleId="cc-supervisor-title" />
        </Reveal>

        <div className="cc-supervisor__layout">
          <Reveal>
            <GlassSurface className="cc-supervisor__part cc-supervisor__part--ops" radius="xl" depth="raised" tint="blue">
              <h3>Работа контактного центра</h3>
              <ul className="cc-supervisor__list">
                {supervisorOperations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="cc-supervisor__shots">
                {supervisorShots.map((shot) => (
                  <figure key={shot.id} className="cc-supervisor__shot">
                    <CcShot shot={shot} onOpen={onOpenShot} sizes="(min-width: 1024px) 300px, calc(50vw - 2rem)" />
                    <figcaption>{shot.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </GlassSurface>
          </Reveal>

          <Reveal delay={80}>
            <GlassSurface
              className="cc-supervisor__part cc-supervisor__part--content"
              radius="xl"
              depth="raised"
              tint="yellow"
            >
              <h3>Содержание разговоров</h3>
              <p className="cc-supervisor__badge">При подключении речевой аналитики</p>
              <ul className="cc-supervisor__chips">
                {supervisorContent.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </GlassSurface>
          </Reveal>
        </div>

        <Reveal>
          <p className="cc-supervisor__note">{supervisorNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
