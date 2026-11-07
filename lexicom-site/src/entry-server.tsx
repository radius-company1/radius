import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppRoutes } from './App';
import { preloadPage } from './pageRoutes';
export { pages, pageMeta, canonicalPath, origin } from './seo';
export { pageRoutes } from './pageRoutes';
export { serializeStructuredData } from './seoStructuredData';

/** Resolve the page module first: static HTML must not rely on streaming swap scripts. */
export async function render(path: string) {
  await preloadPage(path);
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return renderToString(<StaticRouter basename={base || undefined} location={base + path}><AppRoutes /></StaticRouter>);
}
