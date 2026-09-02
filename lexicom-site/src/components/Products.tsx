import { products } from '../data/products';
import { useSurfaceGlow } from '../hooks/useSurfaceGlow';
import { GlassSurface } from './ui/GlassSurface';
import { ProductVisual } from './ProductVisual';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';

const tintMap = {
  neurobot: 'cyan',
  'contact-center': 'blue',
  'ekc-110': 'yellow',
  'speech-analytics': 'yellow',
  protocol: 'cyan',
} as const;

function ProductCard({ product, index }: { product: (typeof products)[number]; index: number }) {
  const glow = useSurfaceGlow();

  return (
    <Reveal delay={index * 80}>
      <GlassSurface
        as="article"
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
        </div>
      </GlassSurface>
    </Reveal>
  );
}

export function Products() {
  return (
    <section
      className="section section-zone section-zone--products products"
      id="products"
      aria-labelledby="products-title"
    >
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Продукты Lexicom"
            titleId="products-title"
            description="Lexicom самостоятельно разрабатывает и развивает пять продуктовых направлений на базе собственных речевых и ИИ-технологий."
          />
        </Reveal>

        <div className="products__grid">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
