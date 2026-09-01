import './LiquidBackground.css';

type LiquidBackgroundProps = {
  accentX?: number;
  accentY?: number;
};

export function LiquidBackground({ accentX = 28, accentY = 62 }: LiquidBackgroundProps) {
  return (
    <div className="liquid-bg" aria-hidden="true">
      <div className="liquid-bg__base" />
      <div className="liquid-bg__wash liquid-bg__wash--left" />
      <div className="liquid-bg__wash liquid-bg__wash--right" />
      <div className="liquid-bg__wash liquid-bg__wash--mid" />
      <div
        className="liquid-bg__accent"
        style={{ '--accent-x': `${accentX}%`, '--accent-y': `${accentY}%` } as React.CSSProperties}
      />
      <svg className="liquid-bg__waves" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <defs>
          <linearGradient id="liq-wave-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--liq-wave)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--liq-wash-b)" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <path
          className="liquid-bg__wave liquid-bg__wave--1"
          d="M0,420 C320,360 480,500 720,440 C960,380 1120,320 1440,400 L1440,900 L0,900 Z"
          fill="url(#liq-wave-grad)"
        />
        <path
          className="liquid-bg__wave liquid-bg__wave--2"
          d="M0,520 C280,480 520,580 800,520 C1080,460 1240,500 1440,480 L1440,900 L0,900 Z"
          fill="url(#liq-wave-grad)"
          opacity="0.6"
        />
      </svg>
      <div className="liquid-bg__grain" />
      <div className="liquid-bg__vignette" />
    </div>
  );
}
