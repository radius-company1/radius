type ClientLogoProps = {
  id: string;
  className?: string;
};

export function ClientLogo({ id, className = '' }: ClientLogoProps) {
  if (id === 'rzd') {
    return (
      <svg
        className={`client-logo client-logo--rzd ${className}`}
        viewBox="0 0 132 40"
        role="img"
        aria-hidden="true"
      >
        <title>РЖД</title>
        <rect x="0" y="4" width="132" height="32" rx="6" fill="#E21A23" />
        <text
          x="66"
          y="27"
          textAnchor="middle"
          fill="#ffffff"
          fontFamily="'Onest', Arial, sans-serif"
          fontSize="18"
          fontWeight="800"
          letterSpacing="0.12em"
        >
          РЖД
        </text>
      </svg>
    );
  }

  return null;
}
