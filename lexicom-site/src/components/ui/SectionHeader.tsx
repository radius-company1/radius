type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  titleId?: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  titleId,
  description,
  align = 'left',
  light = false,
  className = '',
}: SectionHeaderProps) {
  return (
    <header className={`section-header section-header--${align} ${light ? 'section-header--light' : ''} ${className}`}>
      <p className="section-header__eyebrow">{eyebrow}</p>
      <h2 id={titleId} className="section-header__title">{title}</h2>
      {description ? <p className="section-header__description">{description}</p> : null}
    </header>
  );
}
