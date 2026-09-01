import { forwardRef, type CSSProperties, type ElementType, type HTMLAttributes, type ReactNode } from 'react';

type GlassVariant = 'light' | 'dark';
type GlassRadius = 'md' | 'lg' | 'xl';
type GlassTint = 'none' | 'cyan' | 'blue' | 'violet' | 'yellow' | 'mfc' | 's122' | 'edds';
type GlassTier = 'default' | 'matte' | 'liquid';

type GlassSurfaceProps = {
  as?: ElementType;
  variant?: GlassVariant;
  radius?: GlassRadius;
  tint?: GlassTint;
  depth?: 'flat' | 'raised' | 'float';
  tier?: GlassTier;
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
} & HTMLAttributes<HTMLElement>;

export const GlassSurface = forwardRef<HTMLElement, GlassSurfaceProps>(function GlassSurface(
  {
    as: Component = 'div',
    variant = 'light',
    radius = 'lg',
    tint = 'none',
    depth = 'raised',
    tier = 'default',
    className = '',
    children,
    style,
    ...rest
  },
  ref,
) {
  const classes = [
    'glass-surface',
    `glass-surface--${variant}`,
    `glass-surface--${radius}`,
    `glass-surface--depth-${depth}`,
    tier !== 'default' ? `glass-surface--tier-${tier}` : '',
    tint !== 'none' ? `glass-surface--tint-${tint}` : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component ref={ref} className={classes} style={style} {...rest}>
      <span className="glass-surface__sheen" aria-hidden="true" />
      <span className="glass-surface__reflex" aria-hidden="true" />
      <span className="glass-surface__depth-glow" aria-hidden="true" />
      <span className="glass-surface__content">{children}</span>
    </Component>
  );
});
