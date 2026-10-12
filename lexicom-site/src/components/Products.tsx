import { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { productPageHref, productPageLinkLabel, products, softwareProductIds } from '../data/products';
import { productDemoById, type ProductDemo } from '../data/productDemos';
import { useSurfaceGlow } from '../hooks/useSurfaceGlow';
import { ProductDemoTrigger } from './ProductDemoTrigger';
import { ProductVisual } from './ProductVisual';
import { VideoDemoModal } from './VideoDemoModal';
import { GlassSurface } from './ui/GlassSurface';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';

const tintMap = {
  neurobot: 'cyan',
  'contact-center': 'blue',
  'ekc-110': 'yellow',
  'speech-analytics': 'yellow',
  protocol: 'cyan',
} as const;

const softwareProducts = products.filter((product) =>
  softwareProductIds.includes(product.id as (typeof softwareProductIds)[number]),
);
const ekcProduct = products.find((product) => product.id === 'ekc-110');
const ekcHomeScope = ['Программное обеспечение', 'Оборудование', 'Рабочие места', 'Обучение', 'Запуск'] as const;

function ProductCard({
  product,
  index,
  onOpenDemo,
}: {
  product: (typeof products)[number];
  index: number;
  onOpenDemo: (demo: ProductDemo, trigger: HTMLButtonElement | null) => void;
}) {
  const glow = useSurfaceGlow();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const demo = product.id === 'ekc-110' ? undefined : productDemoById[product.id];
  const detailsHref = productPageHref[product.id];

  return (
    <Reveal delay={index * 80}>
      <GlassSurface
        as="article"
        id={`product-${product.id}`}
        ref={glow.ref as React.RefObject<HTMLDivElement>}
        className={`product-card product-card--${product.id}`}
        radius="xl"
        depth="raised"
        tier="matte"
        tint={tintMap[product.id]}
        onPointerMove={glow.onPointerMove}
        onPointerLeave={glow.onPointerLeave}
      >
        <div className="product-card__visual-wrap">
          <ProductVisual id={product.id} />
        </div>
        <div className="product-card__body">
          <h3 className="product-card__title">{product.title}</h3>
          <p className="product-card__subtitle">{product.subtitle}</p>
          <p className="product-card__text">{product.description}</p>
          <ul className="product-card__tags">
            {product.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          {demo || detailsHref ? (
            <div className="product-card__actions">
              {demo ? (
                <ProductDemoTrigger
                  ref={triggerRef}
                  demo={demo}
                  onOpen={() => onOpenDemo(demo, triggerRef.current)}
                />
              ) : null}
              {detailsHref ? (
                <Link className="product-card__more" to={detailsHref}>
                  {productPageLinkLabel[product.id]}
                  <span aria-hidden="true">→</span>
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>
      </GlassSurface>
    </Reveal>
  );
}

export function Products() {
  const [activeDemo, setActiveDemo] = useState<ProductDemo | null>(null);
  const returnFocusRef = useRef<HTMLButtonElement | null>(null);
  const glow = useSurfaceGlow();

  const onOpenDemo = useCallback((demo: ProductDemo, trigger: HTMLButtonElement | null) => {
    returnFocusRef.current = trigger;
    setActiveDemo(demo);
  }, []);

  const onClose = useCallback(() => setActiveDemo(null), []);

  return (
    <section
      className="section section-zone section-zone--products products"
      id="products"
      aria-labelledby="products-title"
    >
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Продукты и комплексные решения"
            titleId="products-title"
            description="Четыре программных продукта собственной разработки. ЕКЦ 110 — комплексная поставка под ключ на их базе: программное обеспечение, оборудование, рабочие места, обучение и запуск."
          />
        </Reveal>

        <div className="products__grid products__grid--software">
          {softwareProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} onOpenDemo={onOpenDemo} />
          ))}
        </div>

        {ekcProduct ? (
          <Reveal delay={120}>
            <GlassSurface
              as="article"
              id={`product-${ekcProduct.id}`}
              ref={glow.ref as React.RefObject<HTMLDivElement>}
              className="product-card product-card--ekc-110 product-card--complex"
              radius="xl"
              depth="raised"
              tier="matte"
              tint="yellow"
              onPointerMove={glow.onPointerMove}
              onPointerLeave={glow.onPointerLeave}
            >
              <div className="product-card__visual-wrap">
                <ProductVisual id={ekcProduct.id} />
              </div>
              <div className="product-card__body">
                <p className="product-card__kicker">Комплексное решение под ключ</p>
                <h3 className="product-card__title">{ekcProduct.title}</h3>
                <p className="product-card__subtitle">{ekcProduct.subtitle}</p>
                <p className="product-card__text">{ekcProduct.description}</p>
                <ul className="product-card__tags">
                  {ekcHomeScope.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="product-card__actions">
                  <Link className="product-card__more" to={productPageHref[ekcProduct.id] ?? '/products/ekc-110'}>
                    {productPageLinkLabel['ekc-110']}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </GlassSurface>
          </Reveal>
        ) : null}
      </div>

      <VideoDemoModal demo={activeDemo} onClose={onClose} returnFocusRef={returnFocusRef} />
    </section>
  );
}
