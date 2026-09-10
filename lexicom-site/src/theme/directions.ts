export type DirectionId = 'overview' | 'mfc' | '122' | 'edds';

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

export function getDirectionIndexFromPath(pathname: string): number {
  const path = normalizePath(pathname);
  const index = directionModes.findIndex((mode) => mode.href === path);
  return index >= 0 ? index : 0;
}

export function getDirectionHref(id: DirectionId): string {
  return directionModes.find((mode) => mode.id === id)?.href ?? '/';
}
