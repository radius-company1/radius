import type { CaseMetric } from '../../components/CaseStudy';
import type { ProductDemo } from '../productDemos';
import { productHref, type ProductId } from '../products';

export const businessPageMeta = {
  title: 'Lexicom для бизнеса — ИИ-коммуникации под ваши процессы',
  description:
    'Нейробот, контактный центр с ИИ-суфлёром, речевая аналитика и протоколирование. Адаптация собственного ПО Lexicom, интеграции и развёртывание в инфраструктуре заказчика.',
  canonicalPath: '/business',
} as const;

export const businessAnchors = {
  form: 'business-form',
  finalTitle: 'business-final-title',
  scenarios: 'business-scenarios',
} as const;

export type BusinessKitIcon = 'people' | 'channels' | 'knowledge' | 'systems';

export const businessHeroKit: { icon: BusinessKitIcon; title: string; caption: string }[] = [
  { icon: 'people', title: 'Клиенты и сотрудники', caption: 'Обращения и рабочие места' },
  { icon: 'channels', title: 'Голос и текст', caption: 'Звонки и сообщения' },
  { icon: 'knowledge', title: 'Знания компании', caption: 'База знаний и правила' },
  { icon: 'systems', title: 'Корпоративные системы', caption: 'CRM, заявки, сервисы' },
];

export const businessAudiences = ['Торговля', 'Производство', 'Логистика', 'Финансы', 'Услуги'] as const;

export type BusinessScenarioProduct = {
  label: string;
  to?: string;
};

export const businessScenarios: {
  title: string;
  situation: string;
  solution: string;
  products: readonly BusinessScenarioProduct[];
}[] = [
  {
    title: 'Клиентский сервис',
    situation: 'Клиенты звонят и пишут с вопросами о товарах, услугах, заказах и заявках.',
    solution:
      'Нейробот консультирует по базе знаний, уточняет вопрос и передаёт сложные обращения сотруднику вместе с контекстом. При подключении корпоративной системы может получать статус заказа или заявки.',
    products: [
      { label: 'Нейробот', to: productHref('neurobot') },
      { label: 'Контактный центр с суфлёром', to: productHref('contact-center') },
      { label: 'Речевая аналитика', to: productHref('speech-analytics') },
    ],
  },
  {
    title: 'Продажи и исходящие коммуникации',
    situation: 'Нужно обрабатывать входящие заявки, уточнять потребность, подтверждать договорённости и собирать обратную связь.',
    solution:
      'Нейробот задаёт согласованные вопросы, собирает сведения для менеджера, проводит информирование и опросы. Результаты передаются в CRM при подключении интеграции.',
    products: [
      { label: 'Нейробот', to: productHref('neurobot') },
      { label: 'Контактный центр', to: productHref('contact-center') },
      { label: 'Речевая аналитика', to: productHref('speech-analytics') },
    ],
  },
  {
    title: 'Поддержка сотрудников',
    situation: 'Сотрудники обращаются в ИТ, HR и внутренние сервисные службы с повторяющимися вопросами.',
    solution:
      'Ассистент помогает найти ответ в согласованной базе знаний, уточняет проблему и направляет запрос в нужную команду. При интеграции с системой заявок регистрирует обращение и получает его статус.',
    products: [
      { label: 'Нейробот', to: productHref('neurobot') },
      { label: 'База знаний' },
      { label: 'Контактный центр', to: productHref('contact-center') },
      { label: 'Интеграции' },
    ],
  },
  {
    title: 'Контроль качества коммуникаций',
    situation: 'Руководителю нужно понимать причины обращений и качество работы команд и филиалов.',
    solution:
      'Речевая аналитика определяет темы, выявляет повторные обращения и заданные маркеры, формирует оценку качества по настроенным критериям. Результаты помогают разбирать проблемные разговоры и корректировать процессы. Можно начать с анализа разговоров действующего контактного центра: способ получения записей согласуется при подключении. Оценка ИИ сохраняется отдельно от оценки руководителя.',
    products: [{ label: 'Речевая аналитика', to: productHref('speech-analytics') }],
  },
  {
    title: 'Совещания и рабочие встречи',
    situation: 'После встреч нужно сохранить договорённости и подготовить протокол.',
    solution:
      'Платформа преобразует аудио и видео в текст, готовит краткое содержание и проект протокола. Ответственный сотрудник проверяет результат перед использованием.',
    products: [{ label: 'Протоколирование', to: productHref('protocol') }],
  },
];

export const businessScenariosNote =
  'Примеры задач, с которых можно начать. Это не описание завершённых проектов Lexicom.';

export const businessFlexibility = [
  {
    title: 'Настраиваем',
    text: 'Сценарии, базу знаний, правила ответов, роли, очереди и отчёты.',
  },
  {
    title: 'Интегрируем',
    text: 'Телефонию, CRM, системы заявок и внутренние сервисы через доступные интерфейсы обмена.',
  },
  {
    title: 'Дорабатываем',
    text: 'Необходимые функции и рабочие процессы на основе собственного продуктового ядра.',
  },
] as const;

export const businessFlexibilityClosing =
  'Можно начать с одной задачи, проверить результат и расширить решение на другие команды, филиалы и процессы.';

export const businessProductIds = ['neurobot', 'contact-center', 'speech-analytics', 'protocol'] as const satisfies readonly ProductId[];

export const businessProducts: {
  id: (typeof businessProductIds)[number];
  title: string;
  text: string;
}[] = [
  {
    id: 'neurobot',
    title: 'Нейробот',
    text: 'Голосовые и текстовые диалоги, входящие обращения, исходящее информирование и опросы. Телефония, бот в MAX и виджет сайта. Бот в MAX и виджет сайта принимают текстовые сообщения и распознают голосовые.',
  },
  {
    id: 'contact-center',
    title: 'Контактный центр',
    text: 'Каналы, очереди, маршрутизация, история взаимодействий, рабочие места операторов и руководителей. ИИ-суфлёр помогает находить ответ и подсказывает следующий шаг во время разговора.',
  },
  {
    id: 'speech-analytics',
    title: 'Речевая аналитика',
    text: 'Темы и причины обращений, повторные контакты, заданные маркеры и оценка качества коммуникаций.',
  },
  {
    id: 'protocol',
    title: 'Протоколирование',
    text: 'Расшифровка аудио и видео, краткое содержание и подготовка протоколов рабочих встреч.',
  },
];

export const businessScale = 'Опыт компании: 25 регионов и 60+ промышленных решений.';

export function businessProductHref(id: (typeof businessProductIds)[number]): string {
  return productHref(id);
}

export type BusinessDemo = ProductDemo;

export const businessInfraPoints = [
  {
    title: 'В вашем контуре',
    text: 'Основной программный контур разворачивается в инфраструктуре заказчика. Подключение внешних каналов проектируется с учётом требований к данным и доступу.',
  },
  {
    title: 'Ресурсы под нагрузку',
    text: 'Параметры вычислительных ресурсов согласуем с заказчиком. Подбираем и оптимизируем конфигурацию под задачи и нагрузку, чтобы рационально использовать инфраструктуру.',
  },
  {
    title: 'Понятный состав проекта',
    text: 'Определяем продукты, лицензии, интеграции, доработки и сопровождение до запуска. Поминутная тарификация ПО Lexicom не применяется; услуги связи и инфраструктура учитываются отдельно.',
  },
] as const;

export const businessInfraNote =
  'Конкретные действия и обмен данными зависят от доступных интерфейсов подключаемых систем.';

export const businessSteps = [
  'Разбираем задачу, нагрузку и существующие системы.',
  'Определяем состав решения, объём доработок и критерии результата.',
  'Настраиваем сценарии, знания, интеграции и необходимые функции.',
  'Проверяем работу на согласованном сценарии и обучаем команду.',
  'Запускаем, сопровождаем и развиваем решение.',
] as const;

export const businessTiming = {
  lead: 'Развёртываем продукты Lexicom от 3 дней.',
  text: 'Срок зависит от выбранного продукта и готовности инфраструктуры. Интеграции, доработки и запуск всего проекта оцениваются отдельно.',
} as const;

/**
 * Fill from approved project materials only. Empty values render as
 * "готовится к публикации", never as zeros or dashes.
 */
export const businessCase = {
  id: 'business-case',
  titleId: 'business-case-title',
  title: 'Кейс для бизнеса',
  status: 'Описание проекта и показатели готовятся к публикации',
  subject: null,
  taskLabel: 'Задача компании',
  task: null,
  scopeLabel: 'Продукты и выполненные работы',
  scope: [] as string[],
  metrics: [] as CaseMetric[],
};
