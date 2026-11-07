import { lazy, type ComponentType } from 'react';

const definitions = [
  ...(import.meta.env.MODE !== 'launch' ? [{ path: '/design-preview', source: 'DesignPreviewPage', load: () => import('./design-preview/DesignPreviewPage').then(m => ({ default: m.DesignPreviewPage })) }] : []),
  { path: '/', source: 'HomePage', load: () => import('./pages/HomePage').then(m => ({ default: m.HomePage })) },
  { path: '/company', source: 'CompanyPage', load: () => import('./pages/CompanyPage').then(m => ({ default: m.CompanyPage })) },
  { path: '/privacy', source: 'LegalPage', load: () => import('./pages/LegalPage').then(m => ({ default: m.PrivacyPage })) },
  { path: '/consent', source: 'LegalPage', load: () => import('./pages/LegalPage').then(m => ({ default: m.ConsentPage })) },
  { path: '/cookies', source: 'LegalPage', load: () => import('./pages/LegalPage').then(m => ({ default: m.CookiesPage })) },
  { path: '/business', source: 'BusinessPage', load: () => import('./pages/BusinessPage').then(m => ({ default: m.BusinessPage })) },
  { path: '/education', source: 'EducationPage', load: () => import('./pages/EducationPage').then(m => ({ default: m.EducationPage })) },
  { path: '/mfc', source: 'MfcPage', load: () => import('./pages/MfcPage').then(m => ({ default: m.MfcPage })) },
  { path: '/122', source: 'S122Page', load: () => import('./pages/S122Page').then(m => ({ default: m.S122Page })) },
  { path: '/edds', source: 'EddsPage', load: () => import('./pages/EddsPage').then(m => ({ default: m.EddsPage })) },
  { path: '/social', source: 'SocialPage', load: () => import('./pages/SocialPage').then(m => ({ default: m.SocialPage })) },
  { path: '/utilities', source: 'UtilitiesPage', load: () => import('./pages/UtilitiesPage').then(m => ({ default: m.UtilitiesPage })) },
  { path: '/products/contact-center', source: 'ContactCenterPage', load: () => import('./pages/ContactCenterPage').then(m => ({ default: m.ContactCenterPage })) },
  { path: '/products/neurobot', source: 'NeurobotPage', load: () => import('./pages/NeurobotPage').then(m => ({ default: m.NeurobotPage })) },
  { path: '/products/speech-analytics', source: 'SpeechAnalyticsPage', load: () => import('./pages/SpeechAnalyticsPage').then(m => ({ default: m.SpeechAnalyticsPage })) },
  { path: '/products/ticket-system', source: 'TicketSystemPage', load: () => import('./pages/TicketSystemPage').then(m => ({ default: m.TicketSystemPage })) },
  { path: '/products/protocol', source: 'ProtocolPage', load: () => import('./pages/ProtocolPage').then(m => ({ default: m.ProtocolPage })) },
  { path: '/products/ekc-110', source: 'EkcPage', load: () => import('./pages/EkcPage').then(m => ({ default: m.EkcPage })) },
];
export const pageRoutes = definitions.map(route => {
  let loaded: ComponentType | undefined;
  let pending: Promise<{ default: ComponentType }> | undefined;
  const load = (): Promise<{ default: ComponentType }> => pending ??= route.load().then(module => {
    loaded = module.default;
    return module;
  });
  const Deferred = lazy(load);
  return { ...route, load, get Component() { return loaded ?? Deferred; } };
});
export function preloadPage(to: string) {
  const path = to.split(/[?#]/)[0].replace(/\/$/, '') || '/';
  return pageRoutes.find(route => route.path === path)?.load();
}
