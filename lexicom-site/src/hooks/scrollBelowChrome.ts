/** Scrolls so `element` sits just below the sticky header + direction switcher. */
export function scrollBelowChrome(element: HTMLElement, onDone?: () => void) {
  const desiredTop = () => {
    const chrome = document.querySelector('.app-chrome');
    const chromeBottom = chrome instanceof HTMLElement ? Math.ceil(chrome.getBoundingClientRect().bottom) : 0;
    return chromeBottom + 20;
  };

  const align = () => {
    const top = window.scrollY + element.getBoundingClientRect().top - desiredTop();
    window.scrollTo({ top: Math.max(0, top), behavior: 'instant' });
  };

  // Re-align after layout settles: the chrome shrinks once the page is scrolled.
  align();
  requestAnimationFrame(() => {
    align();
    requestAnimationFrame(() => {
      align();
      onDone?.();
    });
  });
}

/** Scrolls to a product page's final form and focuses its first field. */
export function scrollToProductForm(titleId: string, formId: string) {
  const title = document.getElementById(titleId);
  const form = document.getElementById(formId);
  const target = title ?? form;
  if (!target) return;
  scrollBelowChrome(target, () => {
    form?.querySelector<HTMLElement>('input:not([type="hidden"]), textarea')?.focus({ preventScroll: true });
  });
}
