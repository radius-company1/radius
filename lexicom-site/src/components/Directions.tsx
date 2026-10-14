import { Link } from 'react-router-dom';
import { directions } from '../data/directions';
import { useViewTransitionNavigate } from '../hooks/useViewTransitionNavigate';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';


function DirectionCard({
  direction,
  index,
  onNavigate,
}: {
  direction: (typeof directions)[number];
  index: number;
  onNavigate: (event: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}) {
  return (
    <Reveal delay={index * 50} className="directions__cell">
      <Link
        className={`direction-card direction-card--compact direction-card--link direction-card--${direction.id}`}
        to={direction.href}
        onClick={event => onNavigate(event, direction.href)}
        aria-labelledby={`direction-title-${direction.id}`}
      >
        <h3 className="direction-card__title" id={`direction-title-${direction.id}`}>{direction.title}</h3>
        <p className="direction-card__text">{direction.description}</p>
        <span className="direction-card__action">Смотреть решение<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" /></svg></span>
      </Link>
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
