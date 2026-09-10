export type CaseMetricRow = {
  metric: string;
  before: string;
  after: string;
};

export type CasePlaceholder = {
  id: string;
  title: string;
  customer: string;
  task: string;
  solution: string;
  metrics: readonly CaseMetricRow[];
  result: string;
  note?: string;
  compact?: boolean;
};

export const casePlaceholders: readonly CasePlaceholder[] = [
  {
    id: 'case-1',
    title: 'Название проекта',
    customer: 'Заказчик — будет указан аналитиками',
    task: 'Задача проекта — будет заполнена аналитиками.',
    solution: 'Состав внедрения — будет заполнен аналитиками.',
    metrics: [
      { metric: 'Показатель', before: 'До внедрения', after: 'После внедрения' },
      { metric: '—', before: '—', after: '—' },
      { metric: '—', before: '—', after: '—' },
    ],
    result: 'Краткий итог — будет заполнен аналитиками.',
    note: 'Кейс и показатели заполнят аналитики',
  },
  {
    id: 'case-2',
    title: 'Кейс 2',
    customer: '—',
    task: 'Краткое описание задачи заказчика.',
    solution: 'Что внедрили: состав решения и основные возможности.',
    metrics: [],
    result: 'Результат: подтверждённый измеримый эффект.',
    compact: true,
  },
  {
    id: 'case-3',
    title: 'Кейс 3',
    customer: '—',
    task: 'Краткое описание задачи заказчика.',
    solution: 'Что внедрили: состав решения и основные возможности.',
    metrics: [],
    result: 'Результат: подтверждённый измеримый эффект.',
    compact: true,
  },
] as const;
