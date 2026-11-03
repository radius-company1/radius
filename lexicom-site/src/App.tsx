import { BrowserRouter, Route, Routes, useLocation }  from 'react-router-dom';
import { usePageMeta } from './hooks/usePageMeta';
import { pageMeta } from './seo';
import { SiteShell } from './components/SiteShell';
import { DesignPreviewPage } from './design-preview/DesignPreviewPage';
import { BusinessPage } from './pages/BusinessPage';
import { CompanyPage } from './pages/CompanyPage';
import { ContactCenterPage } from './pages/ContactCenterPage';
import { EddsPage } from './pages/EddsPage';
import { EducationPage } from './pages/EducationPage';
import { HomePage } from './pages/HomePage';
import { EkcPage } from './pages/EkcPage';
import { MfcPage } from './pages/MfcPage';
import { NeurobotPage } from './pages/NeurobotPage';
import { ProtocolPage } from './pages/ProtocolPage';
import { SpeechAnalyticsPage } from './pages/SpeechAnalyticsPage';
import { S122Page } from './pages/S122Page';
import { SocialPage } from './pages/SocialPage';
import { UtilitiesPage } from './pages/UtilitiesPage';

export function AppRoutes() {
 const { pathname } = useLocation();
 usePageMeta(pageMeta(pathname));
 return (<Routes>
        {import.meta.env.MODE !== 'launch' && <Route path="/design-preview" element={<DesignPreviewPage />} />}
        <Route element={<SiteShell />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/mfc" element={<MfcPage />} />
          <Route path="/122" element={<S122Page />} />
          <Route path="/edds" element={<EddsPage />} />
          <Route path="/social" element={<SocialPage />} />
          <Route path="/utilities" element={<UtilitiesPage />} />
          <Route path="/products/contact-center" element={<ContactCenterPage />} />
          <Route path="/products/neurobot" element={<NeurobotPage />} />
          <Route path="/products/speech-analytics" element={<SpeechAnalyticsPage />} />
          <Route path="/products/protocol" element={<ProtocolPage />} />
          <Route path="/products/ekc-110" element={<EkcPage />} />
          <Route path="*" element={<main className="container section"><h1>404 — страница не найдена</h1><p>Проверьте адрес или вернитесь на <a href={import.meta.env.BASE_URL}>главную страницу Lexicom</a>.</p></main>} />
        </Route>
      </Routes>);
}
export default function App() {
 return <BrowserRouter useTransitions={false} basename={import.meta.env.BASE_URL.replace(/\/$/, '') || undefined}><AppRoutes /></BrowserRouter>;
}
