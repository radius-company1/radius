import { MotionLink as Link } from './ui/MotionLink';
import '../styles/ticket-reference.css';

type Context = 'contact-center' | 'neurobot' | 'ekc' | 'utilities' | 'education';
const copy: Record<Context, { title: string; text: string }> = {
  'contact-center': { title: 'После разговора — работа по обращению', text: 'Если вопрос требует дальнейших действий, подключите «Управление обращениями»: очередь, ответственный, статусы и контроль сроков. Продукт работает самостоятельно или вместе с контактным центром.' },
  neurobot: { title: 'От диалога — к обращению в работу', text: 'Собранные ИИ-агентом сведения можно передавать в тикет-систему Lexicom. Дальше команда работает с ответственным, статусами и сроками. Состав обмена данными определяем при подключении.' },
  ekc: { title: 'Контроль исполнения после первой линии', text: 'В состав решения можно включить «Управление обращениями»: назначение ответственных, маршруты обработки и сроки решения. Порядок обмена с системами служб определяется при подключении.' },
  utilities: { title: 'Заявки — с ответственным и сроком', text: 'Для обработки обращений клиентов можно использовать тикет-систему Lexicom: распределение по очередям, статусы, контроль сроков и отчёты. Также сохраняется возможность интеграции с вашей действующей системой.' },
  education: { title: 'Единый порядок работы внутренних служб', text: 'ИТ, кадровые и административные службы могут вести обращения сотрудников в тикет-системе Lexicom. Правила распределяют запросы, а статусы и сроки помогают контролировать работу.' },
};
export function TicketProductReference({ context }: { context: Context }) {
  const item = copy[context];
  return <section className="ticket-reference container" aria-labelledby={`ticket-reference-${context}`}>
    <div className="ticket-reference__body">
      <div><p className="ticket-reference__eyebrow">Управление обращениями</p>
        <h2 id={`ticket-reference-${context}`}>{item.title}</h2><p>{item.text}</p></div>
      <Link to="/products/ticket-system">Посмотреть продукт <span aria-hidden="true">→</span></Link>
    </div>
  </section>;
}
