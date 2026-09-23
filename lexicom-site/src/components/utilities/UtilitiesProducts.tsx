import { utilitiesPlatformChain, utilitiesProducts } from '../../data/directions/utilities';
import type { ProductId } from '../../data/products';
import { ProductVisual } from '../ProductVisual';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

const visualByProduct: Record<string, ProductId> = {
  neurobot: 'neurobot',
  cc: 'contact-center',
  analytics: 'speech-analytics',
};

export function UtilitiesProducts() {
  return (
    <section className="section utilities-products" id="utilities-products" aria-labelledby="utilities-products-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="От типового вопроса до работы специалиста"
            titleId="utilities-products-title"
            description="Продукты Lexicom работают как единая платформа — отдельно или вместе, в инфраструктуре заказчика."
          />
        </Reveal>

        <div className="utilities-products__grid">
          {utilitiesProducts.map((product, index) => (
            <Reveal key={product.id} delay={index * 60}>
              <GlassSurface
                className={`utilities-products__card ${product.id === 'cc' ? 'utilities-products__card--featured' : ''}`}
                radius="lg"
                depth="raised"
                tint={index === 1 ? 'yellow' : 'utilities'}
              >
                {visualByProduct[product.id] ? (
                  <div className="utilities-products__visual" aria-hidden="true">
                    <ProductVisual id={visualByProduct[product.id]} />
                  </div>
                ) : null}
                <h3>{product.title}</h3>
                <p className="utilities-products__text">{product.text}</p>
                {'channels' in product && product.channels ? (
                  <p className="utilities-products__meta">{product.channels}</p>
                ) : null}
                {'note' in product && product.note ? (
                  <p className="utilities-products__meta">{product.note}</p>
                ) : null}
              </GlassSurface>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <ol className="utilities-products__chain" aria-label="Состав решения Lexicom">
            {utilitiesPlatformChain.map((item, index) => (
              <li key={item} className="utilities-products__chain-item">
                {index > 0 ? <span className="utilities-products__chain-arrow" aria-hidden="true" /> : null}
                <span className="utilities-products__chain-label">{item}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
