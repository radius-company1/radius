import type { ProductId } from './products';

/** Demo reels for home product cards. Paths are site-root relative; resolve with BASE_URL. */
export type ProductDemo = {
  productId: Exclude<ProductId, 'ekc-110'>;
  title: string;
  ctaLabel: string;
  /** Optional second line under the CTA label */
  note?: string;
  /** Path under public/, e.g. /demos/neurobot.mp4 */
  src: string;
  poster: string;
  durationSeconds: number;
  durationLabel: string;
};

export const productDemos: readonly ProductDemo[] = [
  {
    productId: 'neurobot',
    title: 'Нейробот — пример диалога',
    ctaLabel: 'Посмотреть пример диалога',
    note: 'Тема: поддержка участников СВО',
    src: '/demos/neurobot.mp4',
    poster: '/demos/posters/neurobot.webp',
    durationSeconds: 235.2,
    durationLabel: '3:55',
  },
  {
    productId: 'contact-center',
    title: 'Контактный центр — рабочее место оператора',
    ctaLabel: 'Посмотреть рабочее место оператора',
    src: '/demos/contact-center.mp4',
    poster: '/demos/posters/contact-center.webp',
    durationSeconds: 234.801,
    durationLabel: '3:55',
  },
  {
    productId: 'speech-analytics',
    title: 'Речевая аналитика — разбор разговора',
    ctaLabel: 'Посмотреть разбор разговора',
    src: '/demos/speech-analytics.mp4',
    poster: '/demos/posters/speech-analytics.webp',
    durationSeconds: 161.8,
    durationLabel: '2:42',
  },
  {
    productId: 'protocol',
    title: 'Протоколирование — обработка записи',
    ctaLabel: 'Посмотреть обработку записи',
    src: '/demos/protocol.mp4',
    poster: '/demos/posters/protocol.webp',
    durationSeconds: 171.7,
    durationLabel: '2:52',
  },
] as const;

export const productDemoById = Object.fromEntries(
  productDemos.map((demo) => [demo.productId, demo]),
) as Record<ProductDemo['productId'], ProductDemo>;

export function resolveDemoAsset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}`;
}
