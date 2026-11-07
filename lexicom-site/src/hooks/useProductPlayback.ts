import { useEffect, useRef, useState, type RefObject } from 'react';

/** Brief, one-shot entrance. Preserve progress offscreen; leave the complete result visible. */
export function useProductPlayback(delays: readonly number[], active: boolean, element: RefObject<HTMLDivElement | null>) {
  const [motion, setMotion] = useState(false);
  const [visible, setVisible] = useState(false);
  const [foreground, setForeground] = useState(true);
  const [obscured, setObscured] = useState(false);
  const [step, setStep] = useState(0);
  const clock = useRef({ step: -1, remaining: 0 });
  const last = delays.length;
  const running = motion && active && visible && foreground && !obscured && step < last;

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => {
      setMotion(!preference.matches);
      if (preference.matches) setStep(last);
    };
    const updateVisibility = () => setForeground(document.visibilityState === 'visible');
    updateMotion(); updateVisibility();
    const updateModal = () => setObscured(Boolean(document.querySelector('dialog[open]')));
    const dialogs = new MutationObserver(updateModal);
    dialogs.observe(document.body, { attributes: true, attributeFilter: ['open'], subtree: true });
    updateModal();
    preference.addEventListener('change', updateMotion);
    document.addEventListener('visibilitychange', updateVisibility);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting && entry.intersectionRatio >= 0.2), { threshold: [0, 0.2] });
    if (element.current) observer.observe(element.current);
    return () => {
      observer.disconnect();
      dialogs.disconnect();
      preference.removeEventListener('change', updateMotion);
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, [element, last]);

  useEffect(() => {
    if (!running) return;
    if (clock.current.step !== step) {
      clock.current = { step, remaining: delays[step] };
    }
    const start = performance.now();
    const timer = window.setTimeout(() => setStep(value => Math.min(value + 1, last)), clock.current.remaining);
    return () => {
      window.clearTimeout(timer);
      clock.current.remaining = Math.max(0, clock.current.remaining - (performance.now() - start));
    };
  }, [delays, last, running, step]);

  return {
    motion, running, step: motion ? step : last,
  };
}
