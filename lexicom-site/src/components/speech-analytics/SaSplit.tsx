import type { SpeechAnalyticsShot } from '../../data/speechAnalyticsPage';
import { CcShot } from '../contact-center/CcShot';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

type SaSplitProps = {
  id: string;
  title: string;
  description?: string;
  points: readonly string[];
  shot: SpeechAnalyticsShot;
  onOpenShot: (shot: SpeechAnalyticsShot, trigger: HTMLButtonElement) => void;
  reverse?: boolean;
};

export function SaSplit({ id, title, description, points, shot, onOpenShot, reverse = false }: SaSplitProps) {
  const titleId = `${id}-title`;
  return (
    <section className={`section sa-split ${reverse ? 'sa-split--reverse' : ''}`} id={id} aria-labelledby={titleId}>
      <div className="container sa-split__layout">
        <div className="sa-split__text">
          <Reveal>
            <SectionHeader title={title} titleId={titleId} description={description} />
          </Reveal>
          <Reveal delay={60}>
            <ul className="sa-split__points">
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <GlassSurface className="sa-split__visual" radius="xl" depth="raised" tint={reverse ? 'cyan' : 'blue'}>
            <CcShot shot={shot} onOpen={onOpenShot} sizes="(min-width: 1024px) 640px, calc(100vw - 3rem)" />
            <p className="sa-split__caption">{shot.caption}</p>
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}
