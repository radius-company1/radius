import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/onest'
import './index.css'
import './styles/design-experiment.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
