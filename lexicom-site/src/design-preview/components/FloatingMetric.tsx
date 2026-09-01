import { GlassSurface } from './GlassSurface';
import './FloatingMetric.css';

type FloatingMetricProps = {
  value: string;
  label: string;
  variant: 'a' | 'b' | 'c';
};

export function FloatingMetric({ value, label, variant }: FloatingMetricProps) {
  return (
    <GlassSurface className={`floating-metric floating-metric--${variant}`} variant="tinted" radius="lg">
      <p className="floating-metric__value">{value}</p>
      <p className="floating-metric__label">{label}</p>
    </GlassSurface>
  );
}
