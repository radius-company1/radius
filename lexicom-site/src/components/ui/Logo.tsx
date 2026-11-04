type LogoProps = {
  variant?: 'light' | 'dark';
  className?: string;
};

export function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const textColor = variant === 'light' ? '#f4f6fa' : '#0C1020';

  return (
    <span className={`logo ${className}`} aria-label="Lexicom">
      <img
        className="logo__mark"
        src={`${import.meta.env.BASE_URL}favicon.svg?v=mic-20261104`}
        width="28"
        height="28"
        alt=""
        aria-hidden="true"
      />
      <span className="logo__text" style={{ color: textColor }}>
        Le<span className="logo__x">x</span>icom
      </span>
    </span>
  );
}
