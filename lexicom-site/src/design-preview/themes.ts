export type PreviewThemeId = 'overview' | 'mfc' | '122' | 'edds' | 'social';

export type PreviewTheme = {
  id: PreviewThemeId;
  label: string;
  cssVars: Record<string, string>;
};

export const previewThemes: PreviewTheme[] = [
  {
    id: 'overview',
    label: 'Главная',
    cssVars: {
      '--liq-base': '#ebe6dc',
      '--liq-wash-a': 'rgba(46, 211, 255, 0.72)',
      '--liq-wash-b': 'rgba(83, 103, 255, 0.58)',
      '--liq-wash-c': 'rgba(155, 92, 255, 0.42)',
      '--liq-accent': 'rgba(255, 212, 59, 0.55)',
      '--liq-wave': 'rgba(46, 211, 255, 0.22)',
      '--liq-lens-a': 'rgba(46, 211, 255, 0.45)',
      '--liq-lens-b': 'rgba(155, 92, 255, 0.35)',
      '--liq-lens-c': 'rgba(255, 212, 59, 0.28)',
      '--liq-glass-reflex': 'rgba(83, 103, 255, 0.32)',
    },
  },
  {
    id: 'mfc',
    label: 'Для МФЦ',
    cssVars: {
      '--liq-base': '#e8eef4',
      '--liq-wash-a': 'rgba(46, 211, 255, 0.78)',
      '--liq-wash-b': 'rgba(126, 200, 255, 0.52)',
      '--liq-wash-c': 'rgba(255, 212, 59, 0.38)',
      '--liq-accent': 'rgba(255, 212, 59, 0.62)',
      '--liq-wave': 'rgba(46, 211, 255, 0.28)',
      '--liq-lens-a': 'rgba(46, 211, 255, 0.5)',
      '--liq-lens-b': 'rgba(126, 200, 255, 0.3)',
      '--liq-lens-c': 'rgba(255, 212, 59, 0.35)',
      '--liq-glass-reflex': 'rgba(46, 211, 255, 0.38)',
    },
  },
  {
    id: '122',
    label: 'Для службы 122',
    cssVars: {
      '--liq-base': '#ebe8f2',
      '--liq-wash-a': 'rgba(155, 92, 255, 0.65)',
      '--liq-wash-b': 'rgba(46, 211, 255, 0.48)',
      '--liq-wash-c': 'rgba(83, 103, 255, 0.42)',
      '--liq-accent': 'rgba(46, 211, 255, 0.45)',
      '--liq-wave': 'rgba(155, 92, 255, 0.24)',
      '--liq-lens-a': 'rgba(155, 92, 255, 0.48)',
      '--liq-lens-b': 'rgba(46, 211, 255, 0.32)',
      '--liq-lens-c': 'rgba(83, 103, 255, 0.22)',
      '--liq-glass-reflex': 'rgba(155, 92, 255, 0.36)',
    },
  },
  {
    id: 'edds',
    label: 'Для ЕДДС',
    cssVars: {
      '--liq-base': '#e4eaf4',
      '--liq-wash-a': 'rgba(42, 63, 159, 0.62)',
      '--liq-wash-b': 'rgba(46, 211, 255, 0.52)',
      '--liq-wash-c': 'rgba(83, 103, 255, 0.38)',
      '--liq-accent': 'rgba(255, 212, 59, 0.48)',
      '--liq-wave': 'rgba(42, 63, 159, 0.22)',
      '--liq-lens-a': 'rgba(42, 63, 159, 0.45)',
      '--liq-lens-b': 'rgba(46, 211, 255, 0.35)',
      '--liq-lens-c': 'rgba(255, 212, 59, 0.25)',
      '--liq-glass-reflex': 'rgba(42, 63, 159, 0.34)',
    },
  },
  {
    id: 'social',
    label: 'Для социальной защиты',
    cssVars: {
      '--liq-base': '#e7efec',
      '--liq-wash-a': 'rgba(47, 122, 111, 0.62)',
      '--liq-wash-b': 'rgba(46, 211, 255, 0.42)',
      '--liq-wash-c': 'rgba(74, 143, 132, 0.36)',
      '--liq-accent': 'rgba(255, 212, 59, 0.48)',
      '--liq-wave': 'rgba(47, 122, 111, 0.22)',
      '--liq-lens-a': 'rgba(47, 122, 111, 0.45)',
      '--liq-lens-b': 'rgba(46, 211, 255, 0.3)',
      '--liq-lens-c': 'rgba(255, 212, 59, 0.25)',
      '--liq-glass-reflex': 'rgba(47, 122, 111, 0.34)',
    },
  },
];

export function getThemeById(id: PreviewThemeId): PreviewTheme {
  return previewThemes.find((t) => t.id === id) ?? previewThemes[0];
}
