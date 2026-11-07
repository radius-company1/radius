import { useEffect, useState, type ReactNode } from 'react';

/** Full text on desktop and without JS; native disclosures on small screens. */
export function MobileDetails({ title, children, className = '' }: { title: ReactNode; children: ReactNode; className?: string }) {
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const query = window.matchMedia('(max-width: 639px)');
    const update = () => setCompact(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  if (!compact) return <div className={`mobile-details ${className}`}>
    <div className="mobile-details__title">{title}</div>
    <div className="mobile-details__content">{children}</div>
  </div>;
  return <details className={`mobile-details ${className}`}>
    <summary>{title}<span className="mobile-details__icon" aria-hidden="true">+</span></summary>
    <div className="mobile-details__content">{children}</div>
  </details>;
}
