import { useRef, useState } from 'react';
import { ContactForm } from '../components/ContactForm';
import { Footer } from '../components/Footer';
import { ImageLightbox, type LightboxImage } from '../components/ImageLightbox';
import { ProductBreadcrumbs } from '../components/ProductBreadcrumbs';
import { Button } from '../components/ui/Button';
import { GlassSurface } from '../components/ui/GlassSurface';
import { MobileDetails } from '../components/ui/MobileDetails';
import { MotionLink as Link } from '../components/ui/MotionLink';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeader } from '../components/ui/SectionHeader';
import { resolveDemoAsset } from '../data/productDemos';
import { ticketCapabilities, ticketFaq, ticketShots, ticketSteps, type TicketShot } from '../data/ticketSystemPage';
import { useClientReady } from '../hooks/useClientReady';
import '../styles/ticket-system.css';

export function TicketSystemPage() {
  const ready = useClientReady();
  const [step, setStep] = useState(0);
  const [shotIndex, setShotIndex] = useState(0);
  const [image, setImage] = useState<LightboxImage | null>(null);
  const returnFocusRef = useRef<HTMLButtonElement | null>(null);
  const stepButtons = useRef<Array<HTMLButtonElement | null>>([]);
  const shotButtons = useRef<Array<HTMLButtonElement | null>>([]);
  const openImage = (shot: TicketShot, trigger: HTMLButtonElement) => {
    returnFocusRef.current = trigger;
    setImage({ ...shot, src: resolveDemoAsset(shot.src) });
  };
  const move = (event: React.KeyboardEvent, index: number, length: number, select: (index: number) => void, buttons: Array<HTMLButtonElement | null>) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? length - 1 : (index + (event.key === 'ArrowRight' ? 1 : length - 1)) % length;
    select(next); buttons[next]?.focus();
  };

  return <div className="page-view page-view--product page-view--tickets" style={{ viewTransitionName: 'page-content' }}>
    <main>
      <section className="section tk-hero" aria-labelledby="tk-title">
        <div className="container">
          <ProductBreadcrumbs current="Управление обращениями" />
          <div className="tk-hero__grid">
            <Reveal>
              <p className="tk-eyebrow">Управление обращениями · тикет-система Lexicom</p>
              <h1 id="tk-title">Каждое обращение —<br />с ответственным,<br />сроком и результатом</h1>
              <p className="tk-lead">Собирайте обращения в одной системе, распределяйте работу и контролируйте её выполнение. От первого сообщения до решения — с понятной историей и отчётностью.</p>
              <p className="tk-hero__standalone">Самостоятельный продукт. Работает отдельно или вместе с контактным центром и ИИ-агентом Lexicom.</p>
              <div className="tk-actions"><Button href="#contact">Обсудить подключение</Button><Button href="#ticket-workflow" variant="secondary">Как это работает</Button></div>
              <Link className="tk-text-link" to="/business#business-rzd-tickets">В работе у РЖД: обращения с вокзалов по QR-коду →</Link>
            </Reveal>
            <Reveal delay={80}>
              <GlassSurface className="tk-hero__scheme" radius="xl" tint="blue" tier="matte">
                <MobileDetails title={<p className="tk-eyebrow">От контакта к выполненной работе</p>}>
                <div className="tk-sources"><span>Веб-форма</span><span>Контактный центр</span><span>ИИ-агент</span></div>
                <span className="tk-connector" aria-hidden="true">↓</span>
                <div className="tk-hub"><span className="tk-hub__icon" aria-hidden="true">✓</span><div><strong>Единое обращение</strong><p>Описание · тема · приоритет</p></div></div>
                <span className="tk-connector" aria-hidden="true">↓</span>
                <div className="tk-assignment"><div><span>Кто отвечает</span><strong>Исполнитель</strong></div><div><span>Когда выполнить</span><strong>Срок решения</strong></div></div>
                <div className="tk-outcome"><span aria-hidden="true">↳</span> Результат сохраняется в истории</div>
                </MobileDetails>
              </GlassSurface>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section tk-workflow" id="ticket-workflow" aria-labelledby="tk-workflow-title">
        <div className="container">
          <Reveal><SectionHeader title="Понятный путь от вопроса до решения" titleId="tk-workflow-title" description="На каждом этапе — своё действие, ответственный и сохранённый контекст." /></Reveal>
          <div className="tk-step-tabs" role="tablist" aria-label="Этапы обработки обращения">
            {ticketSteps.map((item, i) => <button key={item.title} type="button" role="tab" id={`tk-step-tab-${i}`} aria-controls={`tk-step-panel-${i}`} aria-selected={step === i} tabIndex={step === i ? 0 : -1} ref={el => { stepButtons.current[i] = el; }} onClick={() => setStep(i)} onKeyDown={e => move(e, i, ticketSteps.length, setStep, stepButtons.current)}><span aria-hidden="true">0{i + 1}</span>{item.title}</button>)}
          </div>
          {ticketSteps.map((item, i) => <div className="tk-step-panel" id={`tk-step-panel-${i}`} key={item.title} role={ready ? 'tabpanel' : undefined} aria-labelledby={`tk-step-tab-${i}`} hidden={ready && step !== i} tabIndex={0}>
            <div><p className="tk-eyebrow">{item.status}</p><h3>{item.heading}</h3><p>{item.text}</p></div>
            <ul aria-label="Данные этого этапа">{item.fields.map(field => <li key={field}><span aria-hidden="true">✓</span>{field}</li>)}</ul>
          </div>)}
        </div>
      </section>

      <section className="section tk-workspace" id="ticket-workspace" aria-labelledby="tk-workspace-title">
        <div className="container">
          <Reveal><SectionHeader eyebrow="Интерфейс продукта" title="Всё для работы с обращением" titleId="tk-workspace-title" description="Выберите раздел. Любой экран можно открыть крупно и рассмотреть детали." /></Reveal>
          <div className="tk-shot-tabs" role="tablist" aria-label="Разделы тикет-системы">
            {ticketShots.map((shot, i) => <button type="button" role="tab" key={shot.id} id={`tk-shot-tab-${shot.id}`} aria-controls={`tk-shot-panel-${shot.id}`} aria-selected={shotIndex === i} tabIndex={shotIndex === i ? 0 : -1} ref={el => { shotButtons.current[i] = el; }} onClick={() => setShotIndex(i)} onKeyDown={e => move(e, i, ticketShots.length, setShotIndex, shotButtons.current)}>{shot.title}</button>)}
          </div>
          {ticketShots.map((shot, i) => <div key={shot.id} role={ready ? 'tabpanel' : undefined} id={`tk-shot-panel-${shot.id}`} aria-labelledby={`tk-shot-tab-${shot.id}`} hidden={ready && shotIndex !== i} className="tk-shot-panel">
            <figure>
              <button className="tk-shot-button" type="button" onClick={e => openImage(shot, e.currentTarget)} aria-label={`Увеличить: ${shot.caption}`}>
                <img src={resolveDemoAsset(shot.src)} alt={shot.alt} width={shot.width} height={shot.height} loading="lazy" decoding="async" />
                <span aria-hidden="true">Увеличить ↗</span>
              </button>
              <figcaption><h3>{shot.caption}</h3><p>{shot.text}</p></figcaption>
            </figure>
          </div>)}
        </div>
      </section>

      <section className="section tk-capabilities" aria-labelledby="tk-capabilities-title">
        <div className="container">
          <Reveal><SectionHeader title="Процесс настраивается под вашу службу" titleId="tk-capabilities-title" /></Reveal>
          <div className="tk-capabilities__grid">
            {ticketCapabilities.map((item, i) => <Reveal key={item.title} delay={i * 40}><article className="tk-capability"><MobileDetails title={<h3>{item.title}</h3>}><p>{item.text}</p></MobileDetails></article></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section tk-case" aria-labelledby="tk-case-title">
        <div className="container">
          <Reveal><GlassSurface className="tk-case__panel" radius="xl" tint="yellow" tier="matte">
            <div><p className="tk-eyebrow">ОАО «РЖД» · сервисы ДЖВ</p><h2 id="tk-case-title">Сообщения с вокзалов — в едином процессе</h2>
              <p>Посетитель сканирует QR-код и открывает форму без регистрации. Вокзал подставляется автоматически. Обращение проходит через региональную дирекцию в нужную очередь, а итог работ сохраняется в истории.</p>
              <Link to="/business#business-rzd-tickets" className="tk-text-link">Посмотреть кейс РЖД →</Link></div>
            <dl><div><dt>тематик сообщений</dt><dd>6</dd></div><div><dt>на реакцию</dt><dd>15 мин</dd></div><div><dt>на решение</dt><dd>12 ч</dd></div></dl>
            <p className="tk-case__note">Сроки настроены для QR-обращений этого проекта. Расчёт — 24/7, с эскалацией при нарушении срока.</p>
          </GlassSurface></Reveal>
        </div>
      </section>

      <section className="section tk-connection" aria-labelledby="tk-connection-title">
        <div className="container">
          <Reveal><SectionHeader title="Отдельный продукт или часть решения Lexicom" titleId="tk-connection-title" description="На подключении определяем источники обращений, роли сотрудников, правила распределения и сроки обслуживания." /></Reveal>
          <div className="tk-connection__grid">
            <article><span className="tk-eyebrow">Самостоятельно</span><MobileDetails title={<h3>Для вашей службы</h3>}><p>Ведите обращения клиентов и сотрудников в едином интерфейсе. Контактный центр и ИИ-агент для использования продукта не требуются.</p></MobileDetails></article>
            <article><span className="tk-eyebrow">Вместе с контактным центром</span><MobileDetails title={<h3>Продолжение разговора</h3>}><p>Оператор принимает контакт, а ответственная команда продолжает работу с обращением и контролирует его исполнение.</p><Link to="/products/contact-center">О контактном центре →</Link></MobileDetails></article>
            <article><span className="tk-eyebrow">Вместе с ИИ-агентом</span><MobileDetails title={<h3>Передача собранного запроса</h3>}><p>ИИ-агент уточняет вопрос. Подключённая тикет-система принимает обращение для дальнейшей работы сотрудников.</p><Link to="/products/neurobot">Об ИИ-агенте →</Link></MobileDetails></article>
          </div>
        </div>
      </section>

      <section className="section tk-faq" aria-labelledby="tk-faq-title"><div className="container">
        <SectionHeader title="Вопросы о подключении и работе" titleId="tk-faq-title" />
        {ticketFaq.map(item => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}
      </div></section>
      <section className="section cc-final" id="contact" aria-labelledby="tk-contact-title"><div className="container cc-final__layout">
        <Reveal><SectionHeader title="Обсудим работу вашей службы" titleId="tk-contact-title" description="Расскажите, откуда приходят обращения, кто их обрабатывает и какие сроки нужно контролировать. Подберём состав подключения." /></Reveal>
        <Reveal delay={60}><GlassSurface className="cc-final__form-wrap" radius="xl" tint="blue"><ContactForm id="ticket-system-form" product="Управление обращениями" submitLabel="Обсудить подключение" /></GlassSurface></Reveal>
      </div></section>
    </main>
    <Footer />
    <ImageLightbox image={image} onClose={() => setImage(null)} returnFocusRef={returnFocusRef} />
  </div>;
}
