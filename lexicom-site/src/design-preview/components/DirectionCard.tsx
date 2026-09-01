import { useRef } from 'react';
import { directions } from '../../data/directions';
import { GlassSurface } from './GlassSurface';
import './DirectionCard.css';

const routeMini = {
  mfc: ['Обращение', 'Консультация', 'Результат'],
  '122': ['Звонок', 'Маршрут', 'Служба'],
  edds: ['Приём', 'Классификация', 'Передача'],
} as const;

type DirectionCardProps = {
  direction: (typeof directions)[number];
};

export function DirectionCard({ direction }: DirectionCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty('--glow-x', `${x}%`);
    el.style.setProperty('--glow-y', `${y}%`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--glow-x', '32%');
    el.style.setProperty('--glow-y', '28%');
  };

  return (
    <GlassSurface
      ref={ref}
      as="article"
      className={`liq-direction-card liq-direction-card--${direction.id}`}
      variant="tinted"
      radius="xl"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <div className="liq-direction-card__glow" aria-hidden="true" />
      <div className="liq-direction-card__route" aria-hidden="true">
        {routeMini[direction.id].map((step, i) => (
          <span key={step} className="liq-direction-card__route-step">
            {i > 0 ? <span className="liq-direction-card__route-line" /> : null}
            <span className="liq-direction-card__route-dot" />
            {step}
          </span>
        ))}
      </div>
      <h3 className="liq-direction-card__title">{direction.title}</h3>
      <p className="liq-direction-card__text">{direction.description}</p>
      <button type="button" className="liq-direction-card__btn">
        {direction.buttonLabel}
      </button>
    </GlassSurface>
  );
}
