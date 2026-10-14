import { useCallback, useRef, useState } from 'react';
import { products, softwareProductIds } from '../data/products';
import { productDemoById, resolveDemoAsset, type ProductDemo } from '../data/productDemos';
import { VideoDemoModal } from './VideoDemoModal';
import { SectionHeader } from './ui/SectionHeader';

const descriptions = {
  neurobot: 'Пример диалога. Тема: поддержка участников СВО.',
  'contact-center': 'Рабочее место оператора в действии.',
  'speech-analytics': 'Разбор разговора в интерфейсе аналитики.',
  protocol: 'Обработка записи в системе протоколирования.',
};

export function DemoShowcase() {
  const [demo, setDemo] = useState<ProductDemo | null>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const close = useCallback(() => setDemo(null), []);
  return <section className="section final-demos" id="product-demos" aria-labelledby="product-demos-title">
    <div className="container">
      <SectionHeader title="Посмотрите в работе" titleId="product-demos-title" description="Четыре короткие видеодемонстрации. Выберите, с чего начать знакомство." />
      <div className="final-demos__grid">
        {softwareProductIds.map(id => {
          const item = productDemoById[id];
          const title = products.find(product => product.id === id)!.title;
          return <button type="button" className="final-demo" key={id} aria-label={`Смотреть демонстрацию: ${title}`} onClick={event => {trigger.current = event.currentTarget;setDemo(item);}}>
            <span className="final-demo__preview"><img src={resolveDemoAsset(item.poster)} alt="" loading="lazy" width="960" height="540" /><span className="final-demo__play" aria-hidden="true"><svg viewBox="0 0 24 24" width="22" height="22"><path d="M8 5 19 12 8 19Z" fill="currentColor" /></svg></span></span>
            <span className="final-demo__copy"><strong>{title}</strong><span>{descriptions[id]}</span><span className="final-demo__action">Смотреть видео <span aria-hidden="true">↗</span></span></span>
          </button>;
        })}
      </div>
    </div>
    <VideoDemoModal demo={demo} onClose={close} returnFocusRef={trigger} />
  </section>;
}
