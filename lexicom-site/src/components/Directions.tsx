import { directions } from '../data/directions';
import { useSurfaceGlow } from '../hooks/useSurfaceGlow';
import { useViewTransitionNavigate } from '../hooks/useViewTransitionNavigate';
import { GlassSurface } from './ui/GlassSurface';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';

const tintMap = { mfc: 'mfc', '122': 's122', edds: 'edds' } as const;

const routeMini = {
  mfc: ['Обращение', 'Консультация', 'Результат'],
  '122': ['Звонок', 'Маршрут', 'Служба'],
  edds: ['Приём', 'Классификация', 'Передача'],
} as const;

function DirectionCard({
  direction,
  index,
  onNavigate,
  featured = false,
}: {
  direction: (typeof directions)[number];
  index: number;
  onNavigate: (href: string) => void;
  featured?: boolean;
}) {
  const glow = useSurfaceGlow();

  return (
    <Reveal delay={index * 90} className={featured ? 'directions__cell directions__cell--featured' : 'directions__cell'}>
      <GlassSurface
        as="article"
        ref={glow.ref as React.RefObject<HTMLDivElement>}
        className={`direction-card direction-card--${direction.id}${featured ? ' direction-card--featured' : ''}`}
        radius="xl"
        depth="raised"
        tier={featured ? 'liquid' : 'matte'}
        tint={tintMap[direction.id]}
        onPointerMove={glow.onPointerMove}
        onPointerLeave={glow.onPointerLeave}
      >
        <div className="direction-card__route" aria-hidden="true">
          {routeMini[direction.id].map((step, i) => (
            <span key={step} className="direction-card__route-step">
              {i > 0 ? <span className="direction-card__route-line" /> : null}
              {step}
            </span>
          ))}
        </div>
        <h3 className="direction-card__title">{direction.title}</h3>
        <p className="direction-card__text">{direction.description}</p>
        <button
          type="button"
          className={`btn direction-card__btn direction-card__btn--${direction.id}`}
          onClick={() => onNavigate(direction.href)}
        >
          {direction.buttonLabel}
        </button>
      </GlassSurface>
    </Reveal>
  );
}

export function Directions() {
  const navigate = useViewTransitionNavigate();

  return (
    <section className="section section-zone section-zone--directions directions" id="directions" aria-labelledby="directions-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Выберите своё направление"
            titleId="directions-title"
            description="Продукты Lexicom собираются под задачи организации. У МФЦ, 122 и ЕДДС — свои сценарии, состав решения и демонстрация."
          />
        </Reveal>

        <div className="directions__grid">
          {directions.map((direction, index) => (
            <DirectionCard
              key={direction.id}
              direction={direction}
              index={index}
              onNavigate={navigate}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
