import { eddsProductFoundation, eddsProducts } from '../../data/directions/edds';
import { ProductVisual } from '../ProductVisual';
import type { ProductId } from '../../data/products';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

const visualByProduct: Record<string, ProductId> = {
  neurobot: 'neurobot',
  cc: 'contact-center',
  analytics: 'speech-analytics',
};

export function EddsProducts() {
  return (
    <section className="section edds-products" id="edds-products" aria-labelledby="edds-products-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Единая платформа для обращений, диспетчеров и аналитики"
            titleId="edds-products-title"
            description="Можно начать с одного сценария и постепенно подключать другие возможности. Состав решения определяется задачами и действующей инфраструктурой ЕДДС."
          />
        </Reveal>

        <div className="edds-products__grid">
          {eddsProducts.map((product, index) => (
            <Reveal key={product.id} delay={index * 60}>
              <GlassSurface
                className={`edds-products__card ${product.id === 'cc' ? 'edds-products__card--featured' : ''}`}
                radius="lg"
                depth="raised"
                tint={index === 1 ? 'yellow' : 'edds'}
              >
                {visualByProduct[product.id] ? (
                  <div className="edds-products__visual" aria-hidden="true">
                    <ProductVisual id={visualByProduct[product.id]} />
                  </div>
                ) : null}
                <h3>{product.title}</h3>
                {'highlight' in product && product.highlight ? (
                  <p className="edds-products__highlight">{product.highlight}</p>
                ) : null}
                <p className="edds-products__text">{product.text}</p>
                <ul>
                  {product.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </GlassSurface>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <ul className="edds-products__foundation">
            {eddsProductFoundation.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
