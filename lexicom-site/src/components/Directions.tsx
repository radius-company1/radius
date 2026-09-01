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
}: {
  direction: (typeof directions)[number];
  index: number;
  onNavigate: (href: string) => void;
}) {
  const glow = useSurfaceGlow();

  return (
    <Reveal delay={index * 90}>
      <GlassSurface
        as="article"
        ref={glow.ref as React.RefObject<HTMLDivElement>}
        className={`direction-card direction-card--${direction.id}`}
        radius="xl"
        depth="raised"
        tier="matte"
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
            eyebrow="Решения для государственных организаций"
            title="Выберите своё направление"
            titleId="directions-title"
            description="Задачи МФЦ, службы 122 и ЕДДС различаются. Поэтому для каждого направления создана отдельная страница со своими сценариями, адаптированным составом решения, кейсами и демонстрацией."
          />
        </Reveal>

        <div className="directions__grid">
          {directions.map((direction, index) => (
            <DirectionCard key={direction.id} direction={direction} index={index} onNavigate={navigate} />
          ))}
        </div>
      </div>
    </section>
  );
}
