export const directions = [
  {
    id: 'mfc',
    title: 'МФЦ',
    description: 'Услуги, документы и порядок обращения.',
    buttonLabel: 'Для МФЦ',
    href: '/mfc',
  },
  {
    id: '122',
    title: 'Служба 122',
    description: 'Медицинские обращения жителей: запись, вызов врача, статус заявки и автоматизация службы 122.',
    buttonLabel: 'Для службы 122',
    href: '/122',
  },
  {
    id: 'edds',
    title: 'ЕДДС',
    description: 'Приём обращений, поддержка диспетчеров и аналитика коммуникаций для ЕДДС.',
    buttonLabel: 'Для ЕДДС',
    href: '/edds',
  },
  {
    id: 'social',
    title: 'Социальная защита',
    description: 'Консультации по мерам поддержки, работа специалистов и аналитика обращений.',
    buttonLabel: 'Для социальной защиты',
    href: '/social',
  },
] as const;
