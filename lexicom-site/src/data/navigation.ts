export const productNav = [
  { label: 'ИИ-агент', href: '/products/neurobot' },
  { label: 'Контактный центр', href: '/products/contact-center' },
  { label: 'Речевая аналитика', href: '/products/speech-analytics' },
  { label: 'Протоколирование', href: '/products/protocol' },
  { label: 'ЕКЦ 110', href: '/products/ekc-110' },
] as const;

export const directionNav = [
  { label: 'Для бизнеса', href: '/business' },
  { label: 'Образование', href: '/education' },
  { label: 'МФЦ', href: '/mfc' },
  { label: 'Служба 122', href: '/122' },
  { label: 'ЕДДС', href: '/edds' },
  { label: 'Социальная защита', href: '/social' },
  { label: 'Ресурсоснабжение', href: '/utilities' },
] as const;

export const mainNav = [
  { label: 'Продукты', href: '#products', children: productNav },
  { label: 'Направления', href: '#directions', children: directionNav },
  { label: 'Кейсы', href: '#cases' },
  { label: 'Внедрение', href: '#implementation' },
  { label: 'О компании', href: '#about' },
  { label: 'Контакты', href: '#contact' },
] as const;

export const directionLinks = [
  { label: 'Для бизнеса', href: '/business', short: 'Бизнес' },
  { label: 'Для образования', href: '/education', short: 'Образование' },
  { label: 'Для МФЦ', href: '/mfc', short: 'МФЦ' },
  { label: 'Для службы 122', href: '/122', short: '122' },
  { label: 'Для ЕДДС', href: '/edds', short: 'ЕДДС' },
  { label: 'Для социальной защиты', href: '/social', short: 'Соцзащита' },
  { label: 'Для ресурсоснабжения', href: '/utilities', short: 'Ресурсы' },
] as const;
