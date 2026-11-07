import { useEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollBelowChrome } from '../hooks/scrollBelowChrome';

/** Runs only after the lazy page has committed, so its anchors exist. */
export function PageScroll({ children }: { children: ReactNode }) {
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }
    let id: string;
    try {
      id = decodeURIComponent(location.hash.slice(1));
    } catch {
      // A damaged fragment must not prevent the page from rendering.
      return;
    }
    const align = () => {
      const el = document.getElementById(id);
      if (el) scrollBelowChrome(el);
    };
    align();
    window.requestAnimationFrame(align);
  }, [location.pathname, location.hash]);
  return children;
}
