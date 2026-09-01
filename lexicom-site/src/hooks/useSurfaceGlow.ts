import { useCallback, useRef } from 'react';

export function useSurfaceGlow() {
  const ref = useRef<HTMLElement>(null);

  const onPointerMove = useCallback((event: React.PointerEvent<HTMLElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    node.style.setProperty('--glow-x', `${x}%`);
    node.style.setProperty('--glow-y', `${y}%`);
  }, []);

  const onPointerLeave = useCallback(() => {
    const node = ref.current;
    if (!node) return;
    node.style.setProperty('--glow-x', '50%');
    node.style.setProperty('--glow-y', '30%');
  }, []);

  return { ref, onPointerMove, onPointerLeave };
}
