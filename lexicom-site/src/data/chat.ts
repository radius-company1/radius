export type ChatMessage = {
  id: string;
  role: 'bot' | 'user';
  text: string;
};

export const chatDemoResponses: Record<string, string> = {
  default:
    'Lexicom — единая ИИ-платформа для работы с обращениями. Я могу рассказать о возможностях платформы, внедрении или помочь выбрать направление: МФЦ, служба 122 или ЕДДС.',
  платформ:
    'Платформа объединяет нейробота и ИИ-ассистентов, контактный центр, базу знаний, робот-суфлёр и речевую аналитику. Решение разворачивается в инфраструктуре заказчика.',
  внедрен:
    'Внедрение начинается с изучения задачи и может стартовать с пилотного контура. Lexicom проектирует решение под процессы организации и сопровождает его после запуска.',
  мфц: 'Для МФЦ подготовлена отдельная профильная страница со сценариями и демонстрацией. Перейдите по ссылке «Я — МФЦ» в разделе направлений.',
  направлен:
    'Задачи МФЦ, службы 122 и ЕДДС различаются. Для каждого направления создана отдельная страница — выберите своё в разделе «Направления».',
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
  if (normalized.includes('внедр')) return chatDemoResponses.внедрен;
  if (normalized.includes('мфц')) return chatDemoResponses.мфц;
  if (normalized.includes('направлен') || normalized.includes('122') || normalized.includes('еддс'))
    return chatDemoResponses.направлен;
  if (normalized.includes('данн') || normalized.includes('контур') || normalized.includes('on-prem'))
    return chatDemoResponses.данн;
  if (normalized.includes('интеграц') || normalized.includes('телефон')) return chatDemoResponses.интеграц;
  return chatDemoResponses.default;
}
