import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SiteShell } from './components/SiteShell';
import { DesignPreviewPage } from './design-preview/DesignPreviewPage';
import { ContactCenterPage } from './pages/ContactCenterPage';
import { EddsPage } from './pages/EddsPage';
import { HomePage } from './pages/HomePage';
import { MfcPage } from './pages/MfcPage';
import { NeurobotPage } from './pages/NeurobotPage';
import { SpeechAnalyticsPage } from './pages/SpeechAnalyticsPage';
import { S122Page } from './pages/S122Page';
import { SocialPage } from './pages/SocialPage';
import { UtilitiesPage } from './pages/UtilitiesPage';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || undefined}>
      <Routes>
        <Route path="/design-preview" element={<DesignPreviewPage />} />
        <Route element={<SiteShell />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/mfc" element={<MfcPage />} />
          <Route path="/122" element={<S122Page />} />
          <Route path="/edds" element={<EddsPage />} />
          <Route path="/social" element={<SocialPage />} />
          <Route path="/utilities" element={<UtilitiesPage />} />
          <Route path="/products/contact-center" element={<ContactCenterPage />} />
          <Route path="/products/neurobot" element={<NeurobotPage />} />
          <Route path="/products/speech-analytics" element={<SpeechAnalyticsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
