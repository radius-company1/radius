import { useEffect } from 'react';

type PageMeta = {
  title: string;
  description: string;
  canonicalPath?: string;
};

export function usePageMeta({ title, description, canonicalPath }: PageMeta) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    const meta = document.querySelector('meta[name="description"]');
    const prevDescription = meta?.getAttribute('content') ?? '';
    meta?.setAttribute('content', description);

    const base = import.meta.env.BASE_URL.replace(/\/$/, '');
    const canonicalHref = `${window.location.origin}${base}${canonicalPath ?? ''}`;

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const created = !link;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    const prevCanonical = link.href;
    link.href = canonicalHref;

    return () => {
      document.title = prevTitle;
      meta?.setAttribute('content', prevDescription);
      if (created && link?.parentNode) {
        link.parentNode.removeChild(link);
      } else if (link) {
        link.href = prevCanonical;
      }
    };
  }, [title, description, canonicalPath]);
}
