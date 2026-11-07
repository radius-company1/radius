import { BrowserRouter, Route, Routes, useLocation }  from 'react-router-dom';
import { usePageMeta } from './hooks/usePageMeta';
import { pageMeta } from './seo';
import { SiteShell } from './components/SiteShell';
import { Suspense } from 'react';
import { PageScroll } from './components/PageScroll';
import { PageErrorBoundary } from './components/PageErrorBoundary';
import { pageRoutes } from './pageRoutes';
const loading = <main className="container section" role="status">Открываем страницу…</main>;

export function AppRoutes() {
 const { pathname } = useLocation();
 const DesignPreviewPage = pageRoutes.find(route => route.path === '/design-preview')?.Component;
 usePageMeta(pageMeta(pathname));
 return (<Routes>
        {DesignPreviewPage && <Route path="/design-preview" element={<Suspense fallback={loading}><DesignPreviewPage /></Suspense>} />}
        <Route element={<SiteShell />}>
          {pageRoutes.filter(route => route.path !== '/design-preview').map(({ path, Component }) => <Route key={path} path={path} element={
            <Suspense fallback={loading}><PageScroll><Component /></PageScroll></Suspense>
          } />)}
          <Route path="*" element={<main className="container section"><h1>404 — страница не найдена</h1><p>Проверьте адрес или вернитесь на <a href={import.meta.env.BASE_URL}>главную страницу Lexicom</a>.</p></main>} />
        </Route>
      </Routes>);
}
export default function App() {
 return <BrowserRouter useTransitions={false} basename={import.meta.env.BASE_URL.replace(/\/$/, '') || undefined}><PageErrorBoundary><AppRoutes /></PageErrorBoundary></BrowserRouter>;
}
