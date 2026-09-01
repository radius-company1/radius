export type DirectionId = 'overview' | 'mfc' | '122' | 'edds';

export type DirectionMode = {
  id: DirectionId;
  label: string;
  href: string;
  shortLabel: string;
};

export const directionModes: readonly DirectionMode[] = [
  { id: 'overview', label: 'Обзор', href: '/', shortLabel: 'Обзор' },
  { id: 'mfc', label: 'Я — МФЦ', href: '/mfc', shortLabel: 'МФЦ' },
  { id: '122', label: 'Я — служба 122', href: '/122', shortLabel: '122' },
  { id: 'edds', label: 'Я — ЕДДС', href: '/edds', shortLabel: 'ЕДДС' },
] as const;

export function getDirectionFromPath(pathname: string): DirectionId {
  const match = directionModes.find((mode) => mode.href === pathname);
  return match?.id ?? 'overview';
}

export function getDirectionHref(id: DirectionId): string {
  return directionModes.find((mode) => mode.id === id)?.href ?? '/';
}
