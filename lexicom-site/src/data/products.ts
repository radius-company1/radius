export type ProductId = 'neurobot' | 'contact-center' | 'ekc-110' | 'speech-analytics' | 'protocol';

export type ProductItem = {
  id: ProductId;
  title: string;
  subtitle: string;
  description: string;
  tags: readonly string[];
};

export const products: readonly ProductItem[] = [
  {
    id: 'neurobot',
    title: 'ИИ-агент',
    subtitle: 'Голосовые и текстовые ИИ-ассистенты',
    description:
      'ИИ-агент принимает и совершает звонки, консультирует в чатах и мессенджерах, понимает свободную речь и отвечает по базе знаний. Бот в MAX и виджет на сайте принимают текстовые и голосовые сообщения. Выполняет типовые сценарии и передаёт сложные обращения сотруднику вместе с контекстом.',
    tags: ['голос и текст', 'MAX и виджет', 'входящие и исходящие', 'база знаний', 'передача контекста'],
  },
  {
    id: 'contact-center',
    title: 'Контактный центр',
    subtitle: 'Рабочая среда сотрудников для обращений организации',
    description:
      'On-prem среда для работы сотрудников с обращениями организации: телефония и текстовые каналы, очереди, маршрутизация, единое рабочее место и история взаимодействий. Включает мониторинг, отчётность и робота-суфлёра с подсказками из базы знаний.',
    tags: ['каналы', 'рабочее место', 'маршрутизация', 'история', 'отчётность', 'суфлёр'],
  },
  {
    id: 'ekc-110',
    title: 'ЕКЦ 110',
    subtitle: 'Единая первая линия региона',
    description:
      'Единый номер 110 и интеллектуальная первая линия для обращений жителей региона. Объединяет каналы, маршрутизирует запросы между службами и ведомствами, подключает ИИ-агента и операторов и формирует управленческую аналитику поверх действующих систем.',
    tags: ['единый номер 110', 'каналы региона', 'маршрутизация между ведомствами', 'управленческая аналитика'],
  },
  {
    id: 'speech-analytics',
    title: 'Речевая аналитика',
    subtitle: 'Системный анализ разговоров и качества коммуникаций',
    description:
      'Расшифровывает и анализирует диалоги: тематики и причины обращений, качество работы, нарушения, повторные контакты и точки улучшения процессов. Даёт рекомендации для корректировки знаний, маршрутов и обслуживания.',
    tags: ['темы и причины', 'качество', 'нарушения', 'повторные контакты', 'рекомендации'],
  },
  {
    id: 'protocol',
    title: 'Протоколирование',
    subtitle: 'Совещания и судебные заседания',
    description:
      'Обрабатывает аудио- и видеозаписи, распознаёт речь, разделяет участников и формирует структурированную расшифровку. Помогает подготовить итоговый протокол заседания.',
    tags: ['аудио и видео', 'разделение участников', 'расшифровка', 'подготовка протокола'],
  },
] as const;

export const softwareProductIds = ['neurobot', 'contact-center', 'speech-analytics', 'protocol'] as const satisfies readonly ProductId[];

export const productPageLinkLabel: Record<ProductId, string> = {
  neurobot: 'Подробнее об ИИ-агенте',
  'contact-center': 'Посмотреть контактный центр',
  'speech-analytics': 'Возможности речевой аналитики',
  protocol: 'Подробнее о протоколировании',
  'ekc-110': 'Подробнее о ЕКЦ 110',
};

/** Only products that already have their own page. */
export const productPageHref: Partial<Record<ProductId, string>> = {
  'contact-center': '/products/contact-center',
  neurobot: '/products/neurobot',
  'speech-analytics': '/products/speech-analytics',
  protocol: '/products/protocol',
  'ekc-110': '/products/ekc-110',
};

/** Product page when it exists, otherwise the product card on the home page. */
export function productHref(id: ProductId): string {
  return productPageHref[id] ?? productCardHref(id);
}

/** Anchor of a product card in the home products block. */
export function productCardHref(id: ProductId): string {
  return `/#product-${id}`;
}
