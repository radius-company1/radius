import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource-variable/onest'
import './index.css'
import App from './App.tsx'
import { preloadPage } from './pageRoutes'
import './styles/motion.css'

const root = document.getElementById('root')!;
const app = <StrictMode><App /></StrictMode>;
// Reuse prerendered content instead of destroying and repainting the page.
const path = window.location.pathname.slice(import.meta.env.BASE_URL.replace(/\/$/, '').length) || '/';
const pageReady = preloadPage(path) ?? Promise.resolve();
void pageReady.catch(() => {}).then(() => {
  if (root.querySelector('.app-shell, .design-preview')) hydrateRoot(root, app);
  else createRoot(root).render(app);
});
