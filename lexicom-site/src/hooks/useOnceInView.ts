import { useEffect, useRef } from 'react';

/** Decorative motion only: reveal once and immediately honor reduced motion. */
export function useOnceInView<T extends HTMLElement>(className = 'is-visible') {
  const ref = useRef<T>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    let observer: IntersectionObserver | undefined;
    const show = () => { node.classList.add(className); observer?.disconnect(); };
    const change = () => { if (preference.matches) show(); };
    if (preference.matches || !('IntersectionObserver' in window)) show();
    else {
      observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) show(); },
        { threshold: 0, rootMargin: '0px 0px -24px 0px' });
      observer.observe(node);
    }
    preference.addEventListener('change', change);
    return () => { observer?.disconnect(); preference.removeEventListener('change', change); };
  }, [className]);
  return ref;
}
