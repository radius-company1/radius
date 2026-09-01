import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SiteShell } from './components/SiteShell';
import { DesignPreviewPage } from './design-preview/DesignPreviewPage';
import { HomePage } from './pages/HomePage';
import { ProfilePageShell } from './pages/ProfilePageShell';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/design-preview" element={<DesignPreviewPage />} />
        <Route element={<SiteShell />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/mfc" element={<ProfilePageShell title="МФЦ" directionLabel="Я — МФЦ" />} />
          <Route path="/122" element={<ProfilePageShell title="Служба 122" directionLabel="Я — служба 122" />} />
          <Route path="/edds" element={<ProfilePageShell title="ЕДДС" directionLabel="Я — ЕДДС" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
