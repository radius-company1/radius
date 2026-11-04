import { useEffect, useState, type ReactNode } from 'react';

/** Full text on desktop and without JS; native disclosures on small screens. */
export function MobileDetails({ title, children }: { title: ReactNode; children: ReactNode }) {
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const query = window.matchMedia('(max-width: 639px)');
    const update = () => setCompact(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  if (!compact) return <div className="mobile-details">
    <div className="mobile-details__title">{title}</div>
    <div className="mobile-details__content">{children}</div>
  </div>;
  return <details className="mobile-details">
    <summary>{title}<span className="mobile-details__icon" aria-hidden="true">+</span></summary>
    <div className="mobile-details__content">{children}</div>
  </details>;
}
