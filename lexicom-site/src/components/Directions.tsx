import { Link } from 'react-router-dom';
import { directions } from '../data/directions';
import { useSurfaceGlow } from '../hooks/useSurfaceGlow';
import { useViewTransitionNavigate } from '../hooks/useViewTransitionNavigate';
import { GlassSurface } from './ui/GlassSurface';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';

const tintMap = { business: 'yellow', mfc: 'mfc', '122': 's122', edds: 'edds', social: 'social', utilities: 'utilities' } as const;

function DirectionCard({
  direction,
  index,
  onNavigate,
}: {
  direction: (typeof directions)[number];
  index: number;
  onNavigate: (event: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}) {
  const glow = useSurfaceGlow();

  return (
    <Reveal delay={index * 50} className="directions__cell">
      <GlassSurface
        as="article"
        ref={glow.ref as React.RefObject<HTMLDivElement>}
        className={`direction-card direction-card--compact direction-card--${direction.id}`}
        radius="xl"
        depth="raised"
        tier="matte"
        tint={tintMap[direction.id]}
        onPointerMove={glow.onPointerMove}
        onPointerLeave={glow.onPointerLeave}
      >
        <h3 className="direction-card__title">{direction.title}</h3>
        <p className="direction-card__text">{direction.description}</p>
        <Link
          className={`btn direction-card__btn direction-card__btn--${direction.id}`}
          to={direction.href}
          onClick={(event) => onNavigate(event, direction.href)}
        >
          {direction.buttonLabel}
        </Link>
      </GlassSurface>
    </Reveal>
  );
}

export function Directions() {
  const { onLinkClick } = useViewTransitionNavigate();

  return (
    <section className="section section-zone section-zone--directions directions" id="directions" aria-labelledby="directions-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Для вашей организации"
            titleId="directions-title"
            description="Выберите направление по задаче. Состав продуктов настраивается под процессы организации."
          />
        </Reveal>

        <div className="directions__grid directions__grid--compact">
          {directions.map((direction, index) => (
            <DirectionCard
              key={direction.id}
              direction={direction}
              index={index}
              onNavigate={onLinkClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
