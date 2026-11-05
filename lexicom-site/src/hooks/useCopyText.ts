import { useState } from 'react';

function copyWithFallback(text: string) {
  const field = document.createElement('textarea');
  field.value = text;
  field.setAttribute('readonly', '');
  field.style.position = 'fixed';
  field.style.left = '-999px';
  document.body.append(field);
  field.select();
  const ok = document.execCommand('copy');
  field.remove();
  return ok;
}

export function useCopyText(text: string) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    const flash = () => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    };
    if (copyWithFallback(text)) {
      flash();
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      flash();
    } catch {
      setCopied(false);
    }
  };

  return { copied, copy };
}
