type LogoProps = {
  variant?: 'light' | 'dark';
  className?: string;
};

export function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const textColor = variant === 'light' ? '#f4f6fa' : '#0C1020';

  return (
    <span className={`logo ${className}`} aria-label="Lexicom">
      <svg className="logo__mark" width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="11" width="16" height="2.4" rx="1.2" fill="#FFD43B" />
        <circle cx="12" cy="6.2" r="1.8" fill={variant === 'light' ? '#e8eef6' : '#4a5568'} />
        <circle cx="12" cy="17.8" r="1.8" fill={variant === 'light' ? '#8aa0b8' : '#6b7280'} />
        <path
          d="M12 8v3M12 13.4v3"
          stroke={variant === 'light' ? '#8aa0b8' : '#6b7280'}
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
      <span className="logo__text" style={{ color: textColor }}>
        Le<span className="logo__x">x</span>icom
      </span>
    </span>
  );
}
