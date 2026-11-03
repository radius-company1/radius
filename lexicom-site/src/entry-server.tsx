import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppRoutes } from './App';
export { pages, pageMeta, canonicalPath, origin } from './seo';
export function render(path: string) {
 const base = import.meta.env.BASE_URL.replace(/\/$/, '');
 return renderToString(<StaticRouter basename={base || undefined} location={base + path}><AppRoutes /></StaticRouter>);
}

export { serializeStructuredData } from './seoStructuredData';
