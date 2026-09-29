export type DirectionId = 'overview' | 'mfc' | '122' | 'edds' | 'social' | 'utilities';

export type DirectionMode = {
  id: DirectionId;
  label: string;
  href: string;
  shortLabel: string;
};

export const directionModes: readonly DirectionMode[] = [
  { id: 'overview', label: 'Главная', href: '/', shortLabel: 'Главная' },
  { id: 'mfc', label: 'Для МФЦ', href: '/mfc', shortLabel: 'МФЦ' },
  { id: '122', label: 'Для службы 122', href: '/122', shortLabel: '122' },
  { id: 'edds', label: 'Для ЕДДС', href: '/edds', shortLabel: 'ЕДДС' },
  { id: 'social', label: 'Для социальной защиты', href: '/social', shortLabel: 'Соцзащита' },
  { id: 'utilities', label: 'Для ресурсоснабжения', href: '/utilities', shortLabel: 'РСК' },
] as const;

/** Normalize pathname so `/mfc` and `/mfc/` resolve to the same direction. */
export function normalizePath(pathname: string): string {
  if (!pathname) return '/';
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

export function getDirectionFromPath(pathname: string): DirectionId {
  const path = normalizePath(pathname);
  const match = directionModes.find((mode) => mode.href === path);
  return match?.id ?? 'overview';
}

/** Returns -1 for pages outside the direction switcher (e.g. product pages). */
export function getDirectionIndexFromPath(pathname: string): number {
  const path = normalizePath(pathname);
  return directionModes.findIndex((mode) => mode.href === path);
}

export function getDirectionHref(id: DirectionId): string {
  return directionModes.find((mode) => mode.id === id)?.href ?? '/';
}
