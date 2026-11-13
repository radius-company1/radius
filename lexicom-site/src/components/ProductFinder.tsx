import { useId, useState } from 'react';
import { MobileDetails } from './ui/MobileDetails';
import { MotionLink as Link } from './ui/MotionLink';
import { productHref, products, type ProductId } from '../data/products';
import '../styles/product-finder.css';
import { Icon } from './ui/Icon';

type TaskId = ProductId | 'combined';

const tasks: { id: TaskId; label: string; result: string }[] = [
  { id: 'neurobot', label: 'Отвечать на типовые вопросы', result: 'ИИ-агент принимает звонки и сообщения, уточняет запрос и отвечает по базе знаний. Сложные вопросы передаёт сотруднику с контекстом.' },
  { id: 'contact-center', label: 'Организовать работу операторов', result: 'Контактный центр объединяет каналы, очереди и рабочие места сотрудников. Руководитель видит нагрузку и показатели обслуживания.' },
  { id: 'ticket-system', label: 'Контролировать исполнение заявок', result: 'Управление обращениями помогает назначать ответственных, отслеживать статусы и сроки. Продукт можно использовать самостоятельно.' },
  { id: 'speech-analytics', label: 'Проверять качество разговоров', result: 'Речевая аналитика помогает находить причины обращений, проверять диалоги по вашим критериям и давать сотрудникам рекомендации.' },
  { id: 'protocol', label: 'Сохранять итоги совещаний', result: 'Протоколирование превращает запись встречи в расшифровку и помогает подготовить протокол с решениями, задачами и ответственными.' },
  { id: 'ekc-110', label: 'Объединить службы региона', result: 'ЕКЦ 110 объединяет первую линию приёма обращений жителей и маршрутизацию между службами и ведомствами.' },
  { id: 'combined', label: 'Несколько задач сразу или своя задача', result: 'Продукты Lexicom работают отдельно и вместе: ИИ-агент передаёт разговор оператору, обращение уходит в работу ответственным, аналитика проверяет качество. Начать можно с одного продукта и подключать остальные по мере необходимости — состав решения подберём под ваши процессы.' },
];

const combinable: ProductId[] = ['neurobot', 'contact-center', 'ticket-system', 'speech-analytics', 'protocol'];

export function ProductFinder() {
  const [selected, setSelected] = useState<TaskId>('neurobot');
  const id = useId();
  const task = tasks.find(item => item.id === selected)!;
  const product = task.id === 'combined' ? null : products.find(item => item.id === task.id)!;
  return <div className="product-finder">
    <MobileDetails className="mobile-details--section product-finder__disclosure" title="Подобрать продукт по задаче">
    <fieldset>
      <legend>Какую задачу хотите решить?</legend>
      <p className="product-finder__intro">Выберите задачу — покажем подходящий продукт или их сочетание.</p>
      <div className="product-finder__options">
        {tasks.map(item => <label key={item.id} className={`product-finder__option${item.id === 'combined' ? ' product-finder__option--wide' : ''}${item.id === selected ? ' is-selected' : ''}`}>
          <input type="radio" name={`product-task-${id}`} value={item.id} checked={item.id === selected} onChange={() => setSelected(item.id)} />
          <span>{item.label}</span>
        </label>)}
      </div>
    </fieldset>
    <div className="product-finder__result" aria-live="polite" aria-atomic="true">
      <p className="product-finder__eyebrow">Для этой задачи</p>
      <h3>{product ? product.title : 'Решение из нескольких продуктов'}</h3>
      <p>{task.result}</p>
      {product
        ? <Link to={productHref(product.id)}>Подробнее о продукте <Icon name="arrow-right" /></Link>
        : <ul className="product-finder__combo">
            {combinable.map(pid => <li key={pid}><Link to={productHref(pid)}>{products.find(item => item.id === pid)!.title}</Link></li>)}
          </ul>}
    </div>
    </MobileDetails>
  </div>;
}
