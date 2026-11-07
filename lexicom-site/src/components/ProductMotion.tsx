import { useRef, type CSSProperties, type ReactNode } from 'react';
import { agentMessages, handoffMessages, motionScenes, type ProductMotionKind } from '../data/productMotion';
import { useProductPlayback } from '../hooks/useProductPlayback';
import '../styles/product-motion.css';

type Props = { kind: ProductMotionKind; active?: boolean; onZoom?: (button: HTMLButtonElement) => void };

function RevealPart({ visible, className = '', children }: { visible: boolean; className?: string; children: ReactNode }) {
  return <div className={`pm-reveal ${visible ? 'is-shown' : ''} ${className}`}>{children}</div>;
}

function Wave({ progress = 1 }: { progress?: number }) {
  return <div className="pm-wave" style={{ '--pm-progress': progress } as CSSProperties}>
    {Array.from({ length: 42 }, (_, i) => <i key={i} style={{ height: `${18 + ((i * 17 + 7) % 36)}px`, '--wave-delay': `${i * -0.09}s` } as CSSProperties} />)}
  </div>;
}

function Dialogue({ step, handoff = false }: { step: number; handoff?: boolean }) {
  const messages = handoff ? handoffMessages : agentMessages;
  return <>
    <div className="pm-chat">
      {messages.map(([speaker, text], i) => <RevealPart key={text} visible={i <= step} className={`pm-message ${speaker === 'Посетитель' || speaker === 'Клиент' ? 'pm-message--user' : ''}`}>
        <small>{speaker}</small><p>{text}</p>
      </RevealPart>)}
    </div>
    <div className="pm-context">
      <span className="pm-context__label">{handoff ? 'Контекст обращения' : 'Контекст диалога'}</span>
      {handoff ? <div className="pm-chips"><span>Двойное списание</span><span>{step >= 4 ? 'Оператор 1' : step >= 3 ? 'Передача оператору' : 'Уточнение деталей'}</span></div> : <div className="pm-chips">
        <span className={step >= 1 ? '' : 'is-pending'}>Замена паспорта</span>
        <span className={step >= 1 ? '' : 'is-pending'}>Утром</span>
        <span className={step >= 3 ? '' : 'is-pending'} key={step >= 5 ? 'north' : 'central'}>{step >= 5 ? 'Северный район' : 'Центральный район'}</span>
        <span className={step >= 5 ? '' : 'is-pending'}>По возрасту</span>
      </div>}
    </div>
  </>;
}

function Contact({ step }: { step: number }) {
  return <div className="pm-contact-grid">
    <div className="pm-stack">
      <div className="pm-card"><div className="pm-row"><strong>Данные оператора</strong><span className="pm-badge">{step === 0 ? 'Доступен' : 'Разговор'}</span></div><p>Оператор 1</p><small>Отдел поддержки · голосовая очередь</small></div>
      <div className="pm-card pm-client"><strong>Карточка клиента</strong><RevealPart visible={step >= 2}><dl><div><dt>Клиент</dt><dd>Примеров</dd></div><div><dt>Ответственный</dt><dd>Оператор 1</dd></div><div><dt>E-mail</dt><dd>client@example.com</dd></div></dl><div className="pm-inline-note">Карточка и разговор в одном окне</div></RevealPart></div>
    </div>
    <div className="pm-call">
      <div className="pm-call__top"><span className="pm-call__icon">↙</span><strong>{step === 0 ? 'Входящий звонок' : 'Активный звонок'}</strong><span>Клиент</span><Wave progress={step === 0 ? 0 : 1} /><span className="pm-call__status">{step === 0 ? 'Ожидание ответа' : 'Соединение установлено'}</span></div>
      <div className="pm-keypad">{'123456789*0#'.split('').map(value => <span key={value}>{value}</span>)}</div>
      <div className="pm-call__bottom">Аудио · Перевод</div>
    </div>
  </div>;
}

function Analytics({ step }: { step: number }) {
  return <div className="pm-analytics">
    <div className="pm-row pm-analysis-source"><span>Записи разговоров</span><span className="pm-badge">12 диалогов</span></div>
    <div className="pm-card pm-analysis-summary"><strong>Главное за день</strong><RevealPart visible={step >= 1}><p>12 обращений в поддержку: 8 вопросов решены в разговоре, 4 переданы специалисту.</p><div className="pm-splitbar"><span style={{ transform: `scaleX(${step >= 1 ? 1 : 0})` }} /></div><div className="pm-row"><small>8 решены</small><small>4 переданы</small></div><small>Среднее время разговора — 4 минуты</small></RevealPart></div>
    <div className="pm-analysis-cards">
      <RevealPart visible={step >= 2} className="pm-card"><span className="pm-card__mark">↗</span><strong>Что улучшилось</strong><p>Оператор представился в 10 из 12 диалогов.</p><small>Днём ранее — в 8 из 12.</small></RevealPart>
      <RevealPart visible={step >= 3} className="pm-card"><span className="pm-card__mark pm-card__mark--amber">!</span><strong>Риски</strong><p>В 2 диалогах оператор не представился.</p><small>В 4 обращениях нужен ответ специалиста.</small></RevealPart>
      <RevealPart visible={step >= 4} className="pm-card"><span className="pm-card__mark">✓</span><strong>Рекомендации</strong><p>Разобрать 2 диалога без представления.</p><small>Проверить ответы по 4 переданным обращениям.</small></RevealPart>
    </div>
  </div>;
}

function Transcript({ step }: { step: number }) {
  return <div className="pm-stack">
    <div className="pm-card pm-audio"><div className="pm-row"><strong>Запись планёрки</strong><span>01:00</span></div><Wave progress={step / 3} /><div className="pm-audio__track"><span style={{ transform: `scaleX(${step / 3})` }} /></div><small>{step === 3 ? 'Текст разделён по участникам' : 'Распознавание записи'}</small></div>
    <div className="pm-card pm-transcript">
      <RevealPart visible={step >= 1}><strong><span className="pm-avatar">Д</span>Дмитрий <small>00:00—00:30</small></strong><p>На следующей неделе поддержка работает по будням с 09:00 до 18:00. Ксения, подготовь график дежурств до 19 октября, 12:00. Спорные платежи передаём специалисту; срок возврата до проверки не обещаем.</p></RevealPart>
      <RevealPart visible={step >= 2}><strong><span className="pm-avatar pm-avatar--blue">К</span>Ксения <small>00:30—01:00</small></strong><p>Согласна. До 12:00 подготовлю график и назначу резерв на каждую смену. Дмитрий, проверь порядок передачи платёжных вопросов до 15:00. В 16:00 разошлю команде график и инструкцию. Итоги обсудим 23 октября в 16:00.</p></RevealPart>
    </div>
  </div>;
}

function ProtocolResult({ step }: { step: number }) {
  return <div className="pm-stack"><div className="pm-request">Сделай протокол совещания.</div><div className="pm-card pm-protocol-result"><strong>Поддержка: график и порядок эскалации</strong><small>16 октября 2026 · Дмитрий, Ксения</small>
    <RevealPart visible={step >= 1}><strong>Решения</strong><p>Работаем по будням, 09:00–18:00. На каждую смену назначаем резерв. Спорные платежи передаём специалисту; до сверки срок возврата не обещаем.</p></RevealPart>
    <RevealPart visible={step >= 2}><strong>Поручения · 19 октября</strong><p>12:00 — Ксения: подготовить график и назначить резерв.<br />15:00 — Дмитрий: проверить порядок передачи платёжных вопросов.<br />16:00 — Ксения: разослать команде график и инструкцию.</p></RevealPart>
    <RevealPart visible={step >= 3}><strong>Контроль</strong><p>23 октября, 16:00 — обсудить итоги работы по новому порядку.</p><span className="pm-file">↓ summary.docx</span></RevealPart>
  </div></div>;
}

function Tickets({ step }: { step: number }) {
  return <div className="pm-stack">
    <div className="pm-ticket-flow">{['Новое', 'Назначено', 'В работе', 'Решено'].map((text, i) => <span className={i <= step ? 'is-current' : ''} key={text}><i>{i < step ? '✓' : i + 1}</i>{text}</span>)}</div>
    <div className="pm-card pm-ticket"><div className="pm-row"><small>Веб-форма → Поддержка</small><span className={`pm-badge ${step < 3 ? 'pm-badge--amber' : ''}`}>{['Новое', 'Назначено', 'В работе', 'Решено'][step]}</span></div><strong className="pm-ticket__title">Проблема с экспортом в Excel</strong>
      <dl><div><dt>Приоритет</dt><dd>Средний</dd></div><div><dt>Ответственный</dt><dd>{step >= 1 ? 'Специалист поддержки' : 'Назначается'}</dd></div><div><dt>Сроки</dt><dd>{step >= 3 ? 'Выполнены' : 'Под контролем'}</dd></div></dl>
      <div className="pm-ticket-history"><strong>История обращения</strong>{['Обращение зарегистрировано', 'Правило назначило очередь и ответственного', 'Специалист взял обращение в работу', 'Результат сохранён в карточке'].map((text, i) => <RevealPart visible={step >= i} key={text}><span>✓</span>{text}</RevealPart>)}</div>
    </div>
    <div className="pm-inline-note">Описание, действия и результат — в одной карточке</div>
  </div>;
}

export function ProductMotion({ kind, active = true, onZoom }: Props) {
  const scene = motionScenes[kind];
  const element = useRef<HTMLDivElement>(null);
  const player = useProductPlayback(scene.delays, active, element);
  const { step } = player;
  const dialogue = kind === 'neurobot' || kind === 'contact-chat';
  const description = kind === 'neurobot' ? agentMessages.map(([who, text]) => `${who}: ${text}`).join(' ') : kind === 'contact-chat' ? handoffMessages.map(([who, text]) => `${who}: ${text}`).join(' ') : `${scene.heading}. ${scene.steps.join('. ')}.`;
  return <div ref={element} className={`product-motion product-motion--${kind}`} data-running={player.running} data-step={step} data-motion={player.motion} role="group" aria-label={`${scene.title}: анимация интерфейса`}>
    <div className="pm-screen" role="img" aria-label={description}>
      <div aria-hidden="true">
        <div className="pm-chrome"><span><i />{scene.title}</span><b>Lexicom</b></div>
        <div className="pm-content"><div className="pm-heading"><strong>{scene.heading}</strong><span className="pm-stage" key={step}>{scene.steps[step]}</span></div>
          {dialogue ? <Dialogue step={step} handoff={kind === 'contact-chat'} /> : kind === 'contact-center' ? <Contact step={step} /> : kind === 'speech-analytics' ? <Analytics step={step} /> : kind === 'protocol' ? <Transcript step={step} /> : kind === 'protocol-result' ? <ProtocolResult step={step} /> : <Tickets step={step} />}
        </div>
      </div>
    </div>
    {onZoom ? <div className="pm-controls"><button type="button" className="pm-zoom" onClick={e => onZoom(e.currentTarget)} aria-label={`Увеличить изображение: ${scene.title}`}>Увеличить <span aria-hidden="true">↗</span></button></div> : null}
  </div>;
}
