import { flushSync } from 'react-dom';
import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function isModifiedClick(event: React.MouseEvent) {
  return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
}

export function useViewTransitionNavigate() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const go = useCallback(
    (to: string) => {
      if ((to.split(/[?#]/)[0] || pathname) === pathname || prefersReducedMotion() || !document.startViewTransition) {
        navigate(to);
        return;
      }

      document.documentElement.classList.add('is-page-transitioning');

      const transition = document.startViewTransition(() => {
        flushSync(() => navigate(to));
        // The native snapshot must include readable above-the-fold content.
        const visible = [...document.querySelectorAll<HTMLElement>('.reveal')].filter(node => {
          const rect = node.getBoundingClientRect();
          return rect.bottom > 0 && rect.top < innerHeight;
        });
        visible.forEach(node => node.classList.add('is-visible'));
      });

      void transition.finished.catch(() => {}).then(() => {
        document.documentElement.classList.remove('is-page-transitioning');
      });
    },
    [navigate, pathname],
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
