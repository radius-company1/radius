import { serializeStructuredData } from '../seoStructuredData';
import { useEffect } from 'react';
import { origin, canonicalPath, notFoundMeta } from '../seo';
export function usePageMeta(meta: {title: string; description: string; canonicalPath: string}) {
 useEffect(() => {
  document.title = meta.title;
  const jsonLd = serializeStructuredData(meta.canonicalPath);
  let schema = document.getElementById('seo-structured-data');
  if (jsonLd) {
    if (!schema) {
      schema = document.createElement('script');
      schema.id = 'seo-structured-data';
      schema.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schema);
    }
    schema.textContent = jsonLd;
  } else schema?.remove();
  const set = (selector: string, value: string) => document.querySelector(selector)?.setAttribute('content', value);
  set('meta[name="description"]', meta.description);
  set('meta[property="og:title"]', meta.title);
  set('meta[property="og:description"]', meta.description);
  set('meta[property="og:url"]', origin + canonicalPath(meta.canonicalPath));
  set('meta[name="robots"]', import.meta.env.MODE === 'launch' && meta !== notFoundMeta ? 'index,follow' : 'noindex,follow');
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', origin + canonicalPath(meta.canonicalPath));
 }, [meta]);
}
