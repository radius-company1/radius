/** Items without `to` link to the home products block. */
export const footerPlatform: readonly { label: string; to?: string }[] = [
  { label: 'Нейробот', to: '/products/neurobot' },
  { label: 'Контактный центр', to: '/products/contact-center' },
  { label: 'ЕКЦ 110' },
  { label: 'База знаний' },
  { label: 'Робот-суфлёр' },
  { label: 'Речевая аналитика', to: '/products/speech-analytics' },
  { label: 'Протоколирование', to: '/products/protocol' },
  { label: 'Интеграции' },
];

export const footerDirections = [
  { label: 'МФЦ', href: '/mfc' },
  { label: 'Служба 122', href: '/122' },
  { label: 'ЕДДС', href: '/edds' },
  { label: 'Социальная защита', href: '/social' },
  { label: 'Ресурсоснабжение', href: '/utilities' },
] as const;

export const footerCompany = [
  { label: 'О Lexicom', href: '#about' },
  { label: 'Кейсы', href: '#cases' },
  { label: 'Внедрение', href: '#implementation' },
  { label: 'Карьера', href: '#contact' },
  { label: 'Контакты', href: '#contact' },
] as const;

export const footerLegal = [
  { label: 'Реквизиты', href: '#' },
  { label: 'Политика обработки персональных данных', href: '#' },
  { label: 'Согласие на обработку персональных данных', href: '#' },
  { label: 'Политика использования файлов cookie', href: '#' },
] as const;
