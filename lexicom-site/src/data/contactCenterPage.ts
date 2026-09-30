import { productHref } from './products';

export const contactCenterPageMeta = {
  title: 'Контактный центр Lexicom — ИИ-помощь оператору',
  description:
    'Контактный центр Lexicom: звонки и текстовые обращения в одном рабочем пространстве, очереди, история взаимодействий и ИИ-суфлёр. Развёртывание в инфраструктуре заказчика.',
  canonicalPath: '/products/contact-center',
} as const;

export const contactCenterAnchors = {
  form: 'contact-center-form',
  finalTitle: 'cc-final-title',
} as const;

/** Frames from the contact-center demo video. Paths are site-root relative; resolve with BASE_URL. */
export type ContactCenterShot = {
  id: string;
  src: string;
  srcSmall: string;
  width: number;
  height: number;
  caption: string;
  alt: string;
  features: readonly string[];
};

const shot = (id: string) => ({
  src: `/products/contact-center/${id}.webp`,
  srcSmall: `/products/contact-center/${id}-960.webp`,
  width: 1920,
  height: 920,
});

export const heroShot: ContactCenterShot = {
  id: 'hero-client-card',
  ...shot('hero-client-card'),
  caption: 'Карточка клиента во время активного звонка',
  alt: 'Интерфейс Lexicom: карточка клиента с контактными данными и панель активного звонка',
  features: [],
};

export const workspaceShots: readonly ContactCenterShot[] = [
  {
    id: 'workspace-chats',
    ...shot('workspace-chats'),
    caption: 'Текстовые обращения',
    alt: 'Интерфейс Lexicom: список обращений и переписка с клиентом после передачи от бота оператору',
    features: [
      'Список обращений: все, очередь, отложенные, закрытые',
      'Переписка с клиентом, начатая ботом',
      'Вкладки «Информация по обращению» и «История обращений»',
      'Перенаправление чата',
    ],
  },
  {
    id: 'workspace-desk-call',
    ...shot('workspace-desk-call'),
    caption: 'Рабочий стол и входящий звонок',
    alt: 'Интерфейс Lexicom: рабочий стол оператора со статусом и аналитикой звонков, панель аудиозвонка',
    features: [
      'Статус оператора и время в статусе',
      'Панель звонка: аудио, видео, перевод, вызов супервизора',
      'Аналитика звонков, чатов и очередей оператора',
    ],
  },
];

export const supervisorShots: readonly ContactCenterShot[] = [
  {
    id: 'supervisor-queues',
    ...shot('supervisor-queues'),
    caption: 'Работа активных очередей',
    alt: 'Интерфейс Lexicom: загрузка активных очередей и список очередей со статусом и числом операторов',
    features: [],
  },
  {
    id: 'supervisor-monitoring',
    ...shot('supervisor-monitoring'),
    caption: 'Мониторинг голосовых очередей',
    alt: 'Интерфейс Lexicom: ожидающие в очереди и состояние операторов голосовых очередей',
    features: [],
  },
];

export const channelBlocks = [
  {
    id: 'channels',
    title: 'Голосовые и текстовые каналы',
    text: 'Объединяем телефонию, сайт и согласованные каналы сообщений.',
  },
  {
    id: 'routing',
    title: 'Очереди и маршрутизация',
    text: 'Настраиваем распределение обращений между сотрудниками и подразделениями под процессы организации.',
  },
  {
    id: 'history',
    title: 'История взаимодействий',
    text: 'Сотрудник видит доступную историю и сведения по обращению.',
  },
  {
    id: 'handoff',
    title: 'Передача между сотрудниками',
    text: 'Сохраняем собранный контекст, чтобы следующий специалист мог продолжить работу.',
  },
] as const;

export const channelBotNote =
  'При подключении нейробота бот в MAX и виджет сайта принимают текстовые и голосовые сообщения.';

export const prompterStages = [
  {
    label: 'До разговора',
    text: 'Тема обращения, история и данные, полученные от нейробота или другого сотрудника.',
  },
  {
    label: 'Во время разговора',
    text: 'Поиск в базе знаний, подсказки ответа и следующего вопроса.',
  },
  {
    label: 'После разговора',
    text: 'Резюме, классификация и фиксация результата. Передача в систему заказчика — при наличии интеграции.',
  },
] as const;

export const supervisorOperations = [
  'мониторинг обращений и очередей',
  'отчётность по работе сотрудников и подразделений',
] as const;

export const supervisorContent = [
  'темы обращений',
  'повторные контакты',
  'резюме разговоров',
  'качество консультаций',
  'заданные маркеры',
] as const;

export const supervisorNote =
  'Состав отчётов и критерии оценки настраиваем под задачи организации. Оценка ИИ сохраняется отдельно и может сопоставляться с оценкой руководителя.';

export type SolutionLayer = { label: string; href?: string };

export const solutionConfigs: readonly {
  title: string;
  text: string;
  layers: readonly SolutionLayer[];
}[] = [
  {
    title: 'Контактный центр',
    text: 'Каналы, очереди, маршрутизация, рабочие места и отчётность.',
    layers: [{ label: 'Контактный центр' }],
  },
  {
    title: 'КЦ с ИИ-суфлёром',
    text: 'Помощь сотруднику во время консультации.',
    layers: [{ label: 'Контактный центр' }, { label: 'ИИ-суфлёр' }],
  },
  {
    title: 'КЦ с нейроботом и аналитикой',
    text: 'Автоматизация типовых обращений, передача сложных сотруднику и анализ разговоров.',
    layers: [
      { label: 'Контактный центр' },
      { label: 'Нейробот', href: productHref('neurobot') },
      { label: 'Речевая аналитика', href: productHref('speech-analytics') },
    ],
  },
];

export const infrastructurePoints = [
  'Схему подключения определяем после изучения инфраструктуры и доступных интерфейсов.',
  'Ресурсы согласуем и оптимизируем под нагрузку, чтобы избежать избыточных затрат.',
] as const;

export const implementationSteps = [
  'Изучаем процессы',
  'Определяем состав решения',
  'Настраиваем и подключаем',
  'Проверяем',
  'Запускаем и сопровождаем',
] as const;

export const contactCenterFaq = [
  {
    question: 'Нужно ли менять действующую телефонию?',
    answer:
      'Не обязательно. Возможность сохранения телефонии и схему подключения определяем после изучения инфраструктуры.',
  },
  {
    question: 'Можно ли подключить наши информационные системы?',
    answer:
      'Да, при наличии необходимых интерфейсов и согласованных механизмов обмена. Состав данных и доступных действий определяем при подготовке проекта.',
  },
  {
    question: 'Какие ИИ-возможности можно подключить?',
    answer:
      'ИИ-суфлёр помогает сотруднику во время консультации. Нейробот автоматизирует типовые обращения, а речевая аналитика помогает оценивать содержание и качество разговоров. Состав решения согласуем под задачи организации.',
  },
  {
    question: 'Кто сопровождает решение после запуска?',
    answer: 'Команда Lexicom сопровождает собственное ПО, помогает корректировать настройки и развивать решение.',
  },
] as const;
