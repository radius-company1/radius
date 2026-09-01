import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function useViewTransitionNavigate() {
  const navigate = useNavigate();

  return useCallback(
    (to: string) => {
      if (prefersReducedMotion() || !document.startViewTransition) {
        navigate(to);
        return;
      }

      document.documentElement.classList.add('is-page-transitioning');

      const transition = document.startViewTransition(() => {
        navigate(to);
      });

      transition.finished.finally(() => {
        document.documentElement.classList.remove('is-page-transitioning');
      });
    },
    [navigate],
  );
}
