import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function isModifiedClick(event: React.MouseEvent) {
  return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
}

export function useViewTransitionNavigate() {
  const navigate = useNavigate();

  const go = useCallback(
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

  const onLinkClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, to?: string) => {
      if (isModifiedClick(event)) return;
      const href = to ?? event.currentTarget.getAttribute('href');
      if (!href) return;
      event.preventDefault();
      go(href);
    },
    [go],
  );

  return { navigate: go, onLinkClick };
}
