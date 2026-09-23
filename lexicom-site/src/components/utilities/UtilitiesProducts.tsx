import { utilitiesProductFoundation, utilitiesProducts } from '../../data/directions/utilities';
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
            description="Продукты для вашей службы обслуживания. Можно внедрять отдельно или совместно, с подключением к инфраструктуре заказчика."
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
          <ul className="utilities-products__foundation" aria-label="Общая основа платформы">
            {utilitiesProductFoundation.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
