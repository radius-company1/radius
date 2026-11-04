import { speechAnalyticsPageMeta } from './data/speechAnalyticsPage';
import { contactCenterPageMeta } from './data/contactCenterPage';
import { protocolPageMeta } from './data/protocolPage';
import { ekcPageMeta } from './data/ekcPage';
import { neurobotPageMeta } from './data/neurobotPage';
import { mfcPageMeta } from './data/directions/mfc';
import { utilitiesPageMeta } from './data/directions/utilities';
import { businessPageMeta } from './data/directions/business';
import { educationPageMeta } from './data/directions/education';
import { eddsPageMeta } from './data/directions/edds';
import { s122PageMeta } from './data/directions/s122';
import { socialPageMeta } from './data/directions/social';
import { companyPageMeta } from './data/company';
import { consentDocument, cookiePolicy, privacyPolicy } from './data/legal';
export const origin = 'https://lexicom.ai';
export function canonicalPath(path: string) { return path === '/' ? '/' : path.replace(/\/+$/, '') + '/'; }
export const pages = [
 { canonicalPath: '/', title: 'Автоматизация обращений с ИИ — платформа Lexicom', description: 'ИИ-агент, контактный центр, речевая аналитика и протоколирование. Автоматизация звонков и сообщений для бизнеса и госсектора в инфраструктуре организации.' },
speechAnalyticsPageMeta,contactCenterPageMeta,protocolPageMeta,ekcPageMeta,neurobotPageMeta,mfcPageMeta,utilitiesPageMeta,businessPageMeta,educationPageMeta,eddsPageMeta,s122PageMeta,socialPageMeta,companyPageMeta,privacyPolicy.meta,consentDocument.meta,cookiePolicy.meta
];
export const notFoundMeta = { title: 'Страница не найдена — Lexicom', description: 'Такой страницы нет. Перейдите на главную страницу Lexicom.', canonicalPath: '/404/' };
export function pageMeta(path: string) { if (path.replace(/\/$/, '') === '/design-preview' && import.meta.env.MODE !== 'launch') return { title: 'Дизайн-превью — Lexicom', description: 'Внутренний дизайн-превью Lexicom.', canonicalPath: '/design-preview/' }; return pages.find(p => canonicalPath(p.canonicalPath) === canonicalPath(path)) ?? notFoundMeta; }
