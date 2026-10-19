import { presentationShots } from '../data/presentationShots';
import '../styles/static-presentation.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { products, productPageHref, softwareProductIds } from '../data/products';
import { productDemoById, resolveDemoAsset, type ProductDemo } from '../data/productDemos';
import { VideoDemoModal } from './VideoDemoModal';
import { ImageLightbox, type LightboxImage } from './ImageLightbox';

const media: Record<string, LightboxImage & { srcSmall?: string; srcMobile?: string; mobileWidth?: number; mobileHeight?: number; presentation?: boolean }> = {
  neurobot: { src: '/products/neurobot/hero-dialog.webp', width: 507, height: 750, alt: 'Голосовые и текстовые сообщения в диалоге ИИ-агента', caption: 'Пример консультации ИИ-агента' },
  'contact-center': { src: '/products/contact-center/workspace-desk-call-960.webp', width: 960, height: 460, alt: 'Рабочее место оператора: данные, звонок и аналитика', caption: 'Рабочее место оператора', ...presentationShots['workspace-desk-call'] },
  'speech-analytics': { src: '/products/speech-analytics/hero-overview-960.webp', width: 960, height: 390, alt: 'Экран речевой аналитики: обзор, риски и рекомендации', caption: 'Обзор результатов анализа диалогов', ...presentationShots['hero-overview'] },
  protocol: { src: '/products/protocol/hero-transcript-960.webp', width: 960, height: 390, alt: 'Распознавание записи: расшифровка и список участников', caption: 'Расшифровка с разделением участников', ...presentationShots['hero-transcript'] },
};

const copy = {
  neurobot: { task: 'Ответить. Помочь. Передать контекст.', text: 'Голосовой и текстовый ИИ-ассистент: отвечает по базе знаний, выполняет типовые сценарии и передаёт сложные обращения сотруднику.', tags: 'Звонки · MAX · Чаты и виджет' },
  'contact-center': { task: 'Все обращения — в рабочем месте сотрудника.', text: 'Телефония, текстовые каналы и история взаимодействий. Робот-суфлёр помогает сотруднику подсказками из базы знаний.', tags: 'Очереди · Маршрутизация · Суфлёр' },
  'speech-analytics': { task: 'Понять, что стоит за разговором.', text: 'Темы и причины обращений, качество работы, нарушения и повторные контакты. Основа для улучшения обслуживания.', tags: 'Расшифровка · Анализ · Рекомендации' },
  protocol: { task: 'От записи — к протоколу.', text: 'Распознавание речи и разделение участников. Структурированная расшифровка для подготовки протокола совещания или судебного заседания.', tags: 'Аудио и видео · Участники · Протокол' },
};

export function DesignProducts() {
  const [selected, setSelected] = useState<(typeof softwareProductIds)[number]>(softwareProductIds[0]);
  const [wide, setWide] = useState(() => window.matchMedia('(min-width: 1101px)').matches);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  useEffect(() => {
    const query = window.matchMedia('(min-width: 1101px)');
    const update = () => setWide(query.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  const [demo, setDemo] = useState<ProductDemo | null>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const [image, setImage] = useState<LightboxImage | null>(null);
  const imageTrigger = useRef<HTMLButtonElement | null>(null);
  const closeImage = useCallback(() => setImage(null), []);
  return <section className="design-products section" id="products" aria-labelledby="products-title">
    <div className="container">
      <div className="design-section-heading">
        <h2 id="products-title">Продукты Lexicom</h2>
        <p>Выберите продукт под задачу. Четыре решения собственной разработки работают отдельно или вместе.</p>
      </div>
      <div className="final-product-showcase">
        <div className="final-product-selector">
          <p className="final-product-selector__label">Выберите продукт</p>
          <div role="tablist" aria-label="Продукты Lexicom" aria-orientation="vertical">
            {softwareProductIds.map((id, index) => <button
              key={id} id={`product-tab-${id}`} role="tab" type="button"
              ref={element => { tabs.current[index] = element; }}
              aria-selected={selected === id} aria-controls={`product-${id}`}
              tabIndex={selected === id ? 0 : -1}
              onClick={() => setSelected(id)}
              onKeyDown={event => {
                const keys = ['ArrowDown', 'ArrowUp', 'Home', 'End'];
                if (!keys.includes(event.key)) return;
                event.preventDefault();
                const next = event.key === 'Home' ? 0 : event.key === 'End' ? 3 : (index + (event.key === 'ArrowDown' ? 1 : 3)) % 4;
                setSelected(softwareProductIds[next]);
                tabs.current[next]?.focus();
              }}
            ><span className="final-product-selector__name">{products.find(p => p.id === id)!.title}<span aria-hidden="true">→</span></span><span className="final-product-selector__task">{copy[id].task}</span></button>)}
          </div>
        </div>
      <div className="design-products__grid">
        {softwareProductIds.map(id => {
          const product = products.find(p => p.id === id)!;
          const info = copy[id];
          const shot = media[id];
          return <article className={`design-product design-product--${id}${selected === id ? ' is-selected' : ''}`} id={`product-${id}`} key={id}
            role={wide ? 'tabpanel' : undefined} aria-labelledby={wide ? `product-tab-${id}` : undefined}
            aria-hidden={wide && selected !== id ? true : undefined} inert={wide && selected !== id ? true : undefined}>
            <div className="design-product__head"><h3>{product.title}</h3></div>
            <p className="design-product__task">{info.task}</p>
            <p className="design-product__description">{info.text}</p>
            <figure className={`design-product__media design-product__media--${id}${shot.presentation ? ' static-presentation' : ''}`}>
              <button className="design-product__image-button" type="button" aria-label={`Увеличить изображение: ${product.title}`} onClick={event => {
                imageTrigger.current = event.currentTarget;
                setImage({...shot, src: resolveDemoAsset(shot.src)});
              }}>
                {shot.presentation ? <picture>
                  {shot.srcMobile ? <source media="(max-width: 1100px)" srcSet={resolveDemoAsset(shot.srcMobile)} width={shot.mobileWidth} height={shot.mobileHeight} /> : null}
                  <img src={resolveDemoAsset(shot.srcSmall ?? shot.src)} srcSet={shot.srcSmall ? `${resolveDemoAsset(shot.srcSmall)} 1200w, ${resolveDemoAsset(shot.src)} 2400w` : undefined} sizes="(min-width: 1101px) 800px, (min-width: 768px) 640px, calc(100vw - 80px)" alt={shot.alt} width={shot.width} height={shot.height} loading="lazy" />
                </picture> : <img src={resolveDemoAsset(shot.src)} alt={shot.alt} width={shot.width} height={shot.height} loading="lazy" />}
                {id === 'neurobot' ? <span className="design-product__media-note"><strong>Голос и текст</strong><span>Пример консультации из демонстрации ИИ-агента.</span></span> : null}
              </button>
              <figcaption><span>{shot.caption}</span><button type="button" onClick={event => {imageTrigger.current=event.currentTarget;setImage({...shot,src:resolveDemoAsset(shot.src)});}} aria-label={`Рассмотреть изображение: ${product.title}`}>Увеличить <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M6 2H2v4m8-4h4v4M2 10v4h4m8-4v4h-4" /></svg></button></figcaption>
            </figure>
            <div className="design-product__actions">
              <Link to={productPageHref[id]!}>О продукте <span aria-hidden="true">↗</span></Link>
              <button type="button" onClick={e => {trigger.current = e.currentTarget; setDemo(productDemoById[id]);}} aria-label={`Видео: ${product.title}`}>
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="m5 3 8 5-8 5Z" fill="currentColor" /></svg>
                Видео <span>{productDemoById[id].durationLabel}</span>
              </button>
            </div>
          </article>;
        })}
      </div>
      </div>
      <article className="design-ekc" id="product-ekc-110">
        <div className="design-ekc__identity"><h3>ЕКЦ <span>110</span></h3><p>Единая первая линия региона</p></div>
        <div className="design-ekc__body"><h4>От программного обеспечения<br />до запуска под ключ.</h4><p>Каналы региона, ИИ-агент и операторы, маршрутизация между ведомствами и управленческая аналитика.</p><ul>{['Программное обеспечение','Оборудование и рабочие места','Обучение и запуск'].map(x=><li key={x}>{x}</li>)}</ul><Link to="/products/ekc-110">Подробнее о ЕКЦ 110 <span aria-hidden="true">↗</span></Link></div>
      </article>
    </div>
    <VideoDemoModal demo={demo} onClose={()=>setDemo(null)} returnFocusRef={trigger} />
    <ImageLightbox image={image} onClose={closeImage} returnFocusRef={imageTrigger} />
  </section>;
}
