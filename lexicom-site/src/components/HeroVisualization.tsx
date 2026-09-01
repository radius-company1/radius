import { useParallax } from '../hooks/useParallax';
import { HeroFlowChart } from './HeroFlowChart';

export function HeroVisualization() {
  const { ref, onPointerMove, onPointerLeave } = useParallax(10);

  return (
    <div
      ref={ref}
      className="hero-viz-wrap"
      style={{ viewTransitionName: 'hero-viz' } as React.CSSProperties}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <div className="hero-viz__aura" aria-hidden="true" />
      <div className="hero-viz__stage">
        <div className="hero-viz__stage-glass" aria-hidden="true">
          <span className="hero-viz__stage-sheen" />
          <span className="hero-viz__stage-reflex" />
        </div>
        <div className="hero-viz__stage-content">
          <HeroFlowChart variant="liquid" />
        </div>
      </div>
    </div>
  );
}
