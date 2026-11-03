export const companyPageMeta = {
  title: 'Сведения о компании — ООО «Лексиком»',
  description:
    'Реквизиты ООО «Лексиком», виды деятельности, используемые технологии, права на программное обеспечение, условия лицензирования и стоимость.',
  canonicalPath: '/company',
} as const;

export const companyContacts = {
  email: 'info@lexicom-ai.ru',
  phone: '+7 (499) 957-81-32',
  phoneHref: 'tel:+74999578132',
} as const;

export const companyLegal = {
  fullName: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «ЛЕКСИКОМ»',
  shortName: 'ООО «Лексиком»',
  address:
    '121205, г. Москва, территория инновационного центра «Сколково», ул. Нобеля, д. 7, помещ. 75',
  inn: '9731065916',
  kpp: '773101001',
  ogrn: '1207700209353',
} as const;

export const companyRequisites = [
  { label: 'Полное наименование', value: companyLegal.fullName },
  { label: 'Сокращённое наименование', value: companyLegal.shortName },
  { label: 'Адрес', value: companyLegal.address },
  { label: 'ИНН', value: companyLegal.inn },
  { label: 'КПП', value: companyLegal.kpp },
  { label: 'ОГРН', value: companyLegal.ogrn },
] as const;

export const companyOkved = {
  main: {
    code: '72.19',
    title: 'Научные исследования и разработки в области естественных и технических наук прочие',
  },
  additional: [
    { code: '62.01', title: 'Разработка компьютерного программного обеспечения' },
    { code: '62.02', title: 'Деятельность консультативная и работы в области компьютерных технологий' },
  ],
} as const;

export const companyItActivityCodes = {
  source: 'Приказ Минцифры России от 11.05.2023 № 449',
  codes: ['1.01', '2.01', '10.01'],
} as const;

export const companyActivity =
  'Общество осуществляет разработку и внедрение программного обеспечения для обслуживания абонентов в голосовом и текстовом каналах коммуникаций, а именно: программных комплексов контактных центров, систем речевого самообслуживания и диалоговых роботов, систем речевой аналитики, систем стенографирования совещаний.';

export const companyTechStack = ['Python', 'JavaScript (React)', 'PostgreSQL', 'NATS', 'MinIO', 'OpenSearch'] as const;

export const companyOperatingSystems = ['Astra Linux', 'Alt Linux', 'RedOS'] as const;

export const companyTechText = `В рамках осуществления деятельности в области информационных технологий ООО «Лексиком» использует следующие языки программирования, программное обеспечение и инструменты: ${companyTechStack.join(', ')}.`;

export const companyOsText = `Продукты рассчитаны на работу в контуре заказчика, в том числе на российских операционных системах (${companyOperatingSystems.join(', ')}).`;

export const companySoftwareRights = {
  text: 'Исключительное право на программу «Lexicom Omnichannel Platform. Интеллектуальная платформа процессинга каналов дистанционного обслуживания» принадлежит ООО «Лексиком».',
  registry: 'Запись в едином реестре российских программ № 11115 от 20.07.2021, классы 05.08 и 05.09.',
  registryUrl: 'https://reestr.digital.gov.ru/',
} as const;

export const companyLicense =
  'Простая (неисключительная) лицензия на установку в контуре заказчика либо удалённый доступ по подписке. Исключительное право и исходный код не передаются.';

export const companyPricing = {
  from: 'от 550 000,00 рублей',
  text: 'Стоимость складывается из состава платформы, модулей, среды размещения, объёма использования и сопровождения. Стоимость внедрения рассчитывается отдельно. Общая стоимость реализации проекта в контуре заказчика начинается от 550 000,00 рублей. Итоговая стоимость определяется договором и техническим заданием и не является публичной офертой.',
} as const;
