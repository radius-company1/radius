import { useCallback, useEffect, useRef, type RefObject } from 'react';

/** Keep the dialog contents and focus trap alive until the short exit finishes. */
export function useDialogDismiss(ref: RefObject<HTMLDialogElement | null>, onClose: () => void) {
  const close = useRef(onClose);
  const running = useRef<Animation | null>(null);
  useEffect(() => { close.current = onClose; }, [onClose]);
  useEffect(() => () => { running.current?.cancel(); running.current = null; }, []);
  return useCallback(() => {
    const dialog = ref.current;
    if (!dialog || running.current) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { close.current(); return; }
    dialog.dataset.closing = 'true';
    const animation = dialog.animate([{ opacity: 1, transform: 'translateY(0)' },
      { opacity: 0, transform: 'translateY(6px)' }], { duration: 160, easing: 'ease-out', fill: 'forwards' });
    running.current = animation;
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    const reduce = () => { if (preference.matches) animation.finish(); };
    preference.addEventListener('change', reduce);
    void animation.finished.then(() => {
      if (running.current !== animation) return;
      running.current = null;
      delete dialog.dataset.closing;
      close.current();
      animation.cancel();
    }).catch(() => {}).finally(() => preference.removeEventListener('change', reduce));
  }, [ref]);
}
