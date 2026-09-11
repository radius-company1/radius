import { socialProductFoundation, socialProducts } from '../../data/directions/social';
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

export function SocialProducts() {
  return (
    <section className="section social-products" id="social-products" aria-labelledby="social-products-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Вся работа с обращениями — на одной платформе"
            titleId="social-products-title"
            description="Состав решения адаптируется под задачи, полномочия и инфраструктуру заказчика. MAX и виджет — каналы нейробота; суфлёр — возможность контактного центра."
          />
        </Reveal>

        <div className="social-products__grid">
          {socialProducts.map((product, index) => (
            <Reveal key={product.id} delay={index * 60}>
              <GlassSurface
                className={`social-products__card ${product.id === 'cc' ? 'social-products__card--featured' : ''}`}
                radius="lg"
                depth="raised"
                tint={index === 1 ? 'yellow' : 'social'}
              >
                {visualByProduct[product.id] ? (
                  <div className="social-products__visual" aria-hidden="true">
                    <ProductVisual id={visualByProduct[product.id]} />
                  </div>
                ) : null}
                <h3>{product.title}</h3>
                {'highlight' in product && product.highlight ? (
                  <p className="social-products__highlight">{product.highlight}</p>
                ) : null}
                <p className="social-products__text">{product.text}</p>
              </GlassSurface>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <ul className="social-products__foundation" aria-label="Общая основа платформы">
            {socialProductFoundation.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
