export const mainNav = [
  { label: 'Продукты', href: '#products' },
  { label: 'Направления', href: '#directions' },
  { label: 'Кейсы', href: '#cases' },
  { label: 'Внедрение', href: '#implementation' },
  { label: 'О компании', href: '#about' },
  { label: 'Контакты', href: '#contact' },
] as const;

export const directionLinks = [
  { label: 'Для МФЦ', href: '/mfc', short: 'МФЦ' },
  { label: 'Для службы 122', href: '/122', short: '122' },
  { label: 'Для ЕДДС', href: '/edds', short: 'ЕДДС' },
] as const;
