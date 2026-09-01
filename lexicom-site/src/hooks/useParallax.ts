import { useCallback, useRef } from 'react';

export function useParallax(intensity = 12) {
  const ref = useRef<HTMLDivElement>(null);

  const onPointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const node = ref.current;
      if (!node || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      node.style.setProperty('--px', `${x * intensity}px`);
      node.style.setProperty('--py', `${y * intensity}px`);
    },
    [intensity],
  );

  const onPointerLeave = useCallback(() => {
    const node = ref.current;
    if (!node) return;
    node.style.setProperty('--px', '0px');
    node.style.setProperty('--py', '0px');
  }, []);

  return { ref, onPointerMove, onPointerLeave };
}
