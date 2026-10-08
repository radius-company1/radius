export type ChatMessage = {
  id: string;
  role: 'bot' | 'user';
  text: string;
};

export const chatDemoResponses: Record<string, string> = {
  default:
    'Lexicom — единая ИИ-платформа для работы с обращениями. Я могу рассказать о возможностях платформы, внедрении или помочь выбрать направление: бизнес, МФЦ, служба 122, ЕДДС, социальная защита или ресурсоснабжение.',
  платформ:
    'Платформа объединяет нейробота и ИИ-ассистентов, контактный центр, базу знаний, робот-суфлёр и речевую аналитику. Решение разворачивается в инфраструктуре заказчика.',
  внедрен:
    'Запуск решений Lexicom — от 3 дней. Есть опыт полной реализации и сдачи бота в MAX за 3 дня. Срок вашего проекта определим по составу решения, сценариям и интеграциям.',
  мфц: 'Для МФЦ подготовлена отдельная профильная страница со сценариями и демонстрацией. Перейдите по ссылке «Для МФЦ» в разделе направлений.',
  соцзащ:
    'Для органов социальной защиты подготовлена отдельная страница со сценариями консультаций и демонстрацией. Перейдите по ссылке «Для социальной защиты».',
  ресурсосн:
    'Для ресурсоснабжающих компаний подготовлена отдельная страница: показания, начисления, отключения и заявки. Перейдите по ссылке «Для ресурсоснабжения».',
  бизнес:
    'Для компаний, сетей и холдингов есть отдельная страница: клиентский сервис, продажи, поддержка сотрудников, качество коммуникаций и протоколы встреч. Перейдите по ссылке «Для бизнеса».',
  направлен:
    'Задачи бизнеса, МФЦ, службы 122, ЕДДС, социальной защиты и ресурсоснабжения различаются. Для каждого направления создана отдельная страница — выберите своё в разделе «Направления».',
  данн:
    'Данные, записи разговоров и история обращений остаются в контуре заказчика. Платформа разворачивается on-prem без обязательного использования публичных облаков.',
  интеграц:
    'Lexicom подключается к действующей телефонии и информационным системам. Замена существующей инфраструктуры не обязательна.',
};

export const chatSuggestions = [
  'Расскажите о платформе',
  'Как проходит внедрение?',
  'Где хранятся данные?',
] as const;

export function getChatResponse(input: string): string {
  const normalized = input.toLowerCase().trim();
  if (!normalized) return chatDemoResponses.default;
  if (normalized.includes('платформ')) return chatDemoResponses.платформ;
  if (normalized.includes('внедр') || normalized.includes('срок') || normalized.includes('3 дн'))
    return chatDemoResponses.внедрен;
  if (normalized.includes('бизнес') || normalized.includes('business')) return chatDemoResponses.бизнес;
  if (normalized.includes('мфц')) return chatDemoResponses.мфц;
  if (normalized.includes('соцзащ') || normalized.includes('социальн')) return chatDemoResponses.соцзащ;
  if (
    normalized.includes('ресурсосн') ||
    normalized.includes('энергосбыт') ||
    normalized.includes('показан') ||
    normalized.includes('utilities')
  )
    return chatDemoResponses.ресурсосн;
  if (
    normalized.includes('направлен') ||
    normalized.includes('122') ||
    normalized.includes('еддс') ||
    normalized.includes('social')
  )
    return chatDemoResponses.направлен;
  if (normalized.includes('данн') || normalized.includes('контур') || normalized.includes('on-prem'))
    return chatDemoResponses.данн;
  if (normalized.includes('интеграц') || normalized.includes('телефон')) return chatDemoResponses.интеграц;
  return chatDemoResponses.default;
}
