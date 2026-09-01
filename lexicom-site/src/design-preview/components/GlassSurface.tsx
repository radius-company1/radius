import { forwardRef, type CSSProperties, type ElementType, type ReactNode } from 'react';
import './GlassSurface.css';

type GlassSurfaceProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  variant?: 'light' | 'tinted' | 'deep';
  radius?: 'md' | 'lg' | 'xl';
  style?: CSSProperties;
  onPointerMove?: (e: React.PointerEvent) => void;
  onPointerLeave?: (e: React.PointerEvent) => void;
};

export const GlassSurface = forwardRef<HTMLElement, GlassSurfaceProps>(function GlassSurface(
  {
    as: Tag = 'div',
    children,
    className = '',
    variant = 'light',
    radius = 'lg',
    style,
    onPointerMove,
    onPointerLeave,
  },
  ref,
) {
  return (
    <Tag
      ref={ref}
      className={`liq-glass liq-glass--${variant} liq-glass--${radius} ${className}`}
      style={style}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <span className="liq-glass__edge liq-glass__edge--top" aria-hidden="true" />
      <span className="liq-glass__edge liq-glass__edge--left" aria-hidden="true" />
      <span className="liq-glass__reflex" aria-hidden="true" />
      <span className="liq-glass__noise" aria-hidden="true" />
      <span className="liq-glass__shade" aria-hidden="true" />
      <span className="liq-glass__content">{children}</span>
    </Tag>
  );
});
