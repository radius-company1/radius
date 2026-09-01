export const directions = [
  {
    id: 'mfc',
    title: 'МФЦ',
    description: 'Услуги, документы и порядок обращения.',
    buttonLabel: 'Я — МФЦ',
    href: '/mfc',
  },
  {
    id: '122',
    title: 'Служба 122',
    description: 'Массовые обращения, информирование и направление в нужную службу.',
    buttonLabel: 'Я — служба 122',
    href: '/122',
  },
  {
    id: 'edds',
    title: 'ЕДДС',
    description: 'Приём, первичная классификация и передача обращения в соответствующую службу.',
    buttonLabel: 'Я — ЕДДС',
    href: '/edds',
  },
] as const;
