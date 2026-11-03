import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource-variable/onest'
import './index.css'
import './styles/design-experiment.css'
import App from './App.tsx'
import './styles/motion.css'

const root = document.getElementById('root')!;
const app = <StrictMode><App /></StrictMode>;
// Reuse prerendered content instead of destroying and repainting the page.
if (root.querySelector('.app-shell, .design-preview')) hydrateRoot(root, app);
else createRoot(root).render(app);

