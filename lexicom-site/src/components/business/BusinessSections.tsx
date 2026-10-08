import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  businessAnchors,
  businessAudiences,
  businessFlexibility,
  businessFlexibilityClosing,
  businessHeroKit,
  businessInfraNote,
  businessInfraPoints,
  businessProductHref,
  businessProducts,
  businessScale,
  businessScenarios,
  businessScenariosNote,
  businessSteps,
  businessTiming,
  type BusinessKitIcon,
} from '../../data/directions/business';
import { productDemoById, type ProductDemo } from '../../data/productDemos';
import { ContactForm } from '../ContactForm';
import { ProductDemoTrigger } from '../ProductDemoTrigger';
import { Button } from '../ui/Button';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

const svgProps = {
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

function BusinessKitIconSvg({ icon }: { icon: BusinessKitIcon }) {
  switch (icon) {
    case 'people':
      return (
        <svg {...svgProps}>
          <circle cx="15" cy="16" r="5" />
          <circle cx="33" cy="17" r="4.2" className="biz-kit__accent" />
          <path d="M5.5 36a9.5 9.5 0 0 1 15.4-7.4" />
          <path d="M26.8 28.6A8 8 0 0 1 42.5 36" />
        </svg>
      );
    case 'channels':
      return (
        <svg {...svgProps}>
          <rect x="6" y="10" width="22" height="16" rx="4" />
          <path d="M12 26l-3 6" />
          <path d="M32 18v4a8 8 0 0 0 8 8" />
          <path d="M40 18v2a6 6 0 0 1-6 6" className="biz-kit__accent" />
          <circle cx="40" cy="14" r="2" className="biz-kit__accent" />
        </svg>
      );
    case 'knowledge':
      return (
        <svg {...svgProps}>
          <path d="M8 14h13a5 5 0 0 1 5 5v16H13a5 5 0 0 0-5 5V14z" />
          <path d="M40 14H27a5 5 0 0 0-5 5v16h13a5 5 0 0 1 5 5V14z" />
          <path d="M24 19v16" className="biz-kit__accent" />
        </svg>
      );
    case 'systems':
      return (
        <svg {...svgProps}>
          <rect x="6" y="8" width="15" height="12" rx="3" />
          <rect x="27" y="8" width="15" height="12" rx="3" />
          <rect x="16.5" y="28" width="15" height="12" rx="3" className="biz-kit__accent" />
        </svg>
      );
  }
}

type BusinessHeroProps = {
  onDiscuss: () => void;
  onShowScenarios: () => void;
};

export function BusinessHero({ onDiscuss, onShowScenarios }: BusinessHeroProps) {
  return (
    <section className="cc-hero biz-hero section-zone" id="business-top" aria-labelledby="business-hero-title">
      <div className="container">
        <div className="cc-hero__grid">
          <div className="cc-hero__content">
            <Reveal>
              <p className="cc-hero__eyebrow">Lexicom для бизнеса</p>
            </Reveal>
            <Reveal delay={60}>
              <h1 id="business-hero-title" className="cc-hero__title">
                ИИ-коммуникации под задачи вашего бизнеса
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="cc-hero__lead">
                Автоматизируем общение с клиентами, помогаем сотрудникам и превращаем разговоры в рабочие данные.
                Нейробот, контактный центр, речевая аналитика и протоколирование — в составе решения под ваши процессы.
              </p>
              <p className="biz-hero__vendor">
                Разрабатываем собственное ПО: настраиваем, интегрируем и дорабатываем платформу под вашу задачу.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <div className="cc-hero__actions">
                <Button onClick={onDiscuss}>Обсудить мою задачу</Button>
                <Button variant="secondary" onClick={onShowScenarios}>
                  Посмотреть сценарии
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <GlassSurface className="biz-kit" radius="xl" depth="float" tint="yellow">
              <p className="biz-kit__title" id="business-kit-title">
                Платформа в работе
              </p>
              <ul className="biz-kit__grid" aria-labelledby="business-kit-title">
                {businessHeroKit.map((item) => (
                  <li key={item.icon} className="biz-kit__item">
                    <span className="biz-kit__icon" aria-hidden="true">
                      <BusinessKitIconSvg icon={item.icon} />
                    </span>
                    <p className="biz-kit__name">{item.title}</p>
                    <p className="biz-kit__caption">{item.caption}</p>
                  </li>
                ))}
              </ul>
            </GlassSurface>
          </Reveal>
        </div>

        <Reveal>
          <div className="biz-audiences">
            <p className="biz-audiences__lead">Для компаний, сетей и холдингов</p>
            <ul>
              {businessAudiences.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function BusinessScenarios() {
  return (
    <section className="section biz-scenarios" id={businessAnchors.scenarios} aria-labelledby="business-scenarios-title">
      <div className="container">
        <Reveal>
          <SectionHeader title="Какую задачу решаем в вашей компании?" titleId="business-scenarios-title" />
        </Reveal>

        <div className="biz-scenarios__list">
          {businessScenarios.map((item, index) => (
            <Reveal key={item.title} delay={index * 40}>
              <article className="biz-scenario">
                <p className="biz-scenario__index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <div>
                  <h3>{item.title}</h3>
                  <p className="biz-scenario__situation">{item.situation}</p>
                  <p>{item.solution}</p>
                  <ul className="biz-scenario__products">
                    {item.products.map((product) => (
                      <li key={product.label}>
                        {product.to ? <Link to={product.to}>{product.label}</Link> : <span>{product.label}</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="biz-scenarios__note">{businessScenariosNote}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function BusinessFlexibility({ onDiscuss }: { onDiscuss: () => void }) {
  return (
    <section className="section section--dark biz-flex" id="business-flexibility" aria-labelledby="business-flex-title">
      <div className="section--dark__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Ваши процессы определяют, как работает решение"
            titleId="business-flex-title"
            description="Lexicom — разработчик собственной платформы. Мы можем менять логику диалогов, маршруты обращений, состав рабочего места и отчётность, подключать корпоративные системы и дорабатывать функциональность под согласованные требования."
            light
          />
        </Reveal>

        <div className="biz-flex__grid">
          {businessFlexibility.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <GlassSurface
                className="biz-flex__card"
                radius="xl"
                depth="raised"
                variant="dark"
                tint={index === 1 ? 'yellow' : 'cyan'}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </GlassSurface>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="biz-flex__closing">{businessFlexibilityClosing}</p>
          <Button onClick={onDiscuss}>Обсудить нестандартную задачу</Button>
        </Reveal>
      </div>
    </section>
  );
}

export function BusinessProducts({
  onOpenDemo,
}: {
  onOpenDemo: (demo: ProductDemo, trigger: HTMLButtonElement | null) => void;
}) {
  return (
    <section className="section biz-products" id="business-products" aria-labelledby="business-products-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Четыре продукта. Состав решения — под вашу компанию"
            titleId="business-products-title"
            description="Продукты Lexicom могут работать вместе или дополнять действующие системы заказчика."
          />
        </Reveal>

        <Reveal>
          <p className="biz-products__scale">{businessScale}</p>
        </Reveal>

        <div className="biz-products__grid">
          {businessProducts.map((product, index) => (
            <BusinessProductCard key={product.id} product={product} index={index} onOpenDemo={onOpenDemo} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BusinessProductCard({
  product,
  index,
  onOpenDemo,
}: {
  product: (typeof businessProducts)[number];
  index: number;
  onOpenDemo: (demo: ProductDemo, trigger: HTMLButtonElement | null) => void;
}) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const demo = productDemoById[product.id];

  return (
    <Reveal delay={index * 60}>
      <GlassSurface className="biz-product" radius="xl" depth="raised" tint={index % 2 === 0 ? 'cyan' : 'yellow'} tier="matte">
        <h3>{product.title}</h3>
        <p>{product.text}</p>
        <Link className="biz-product__more" to={businessProductHref(product.id)}>
          Подробнее о продукте
          <span aria-hidden="true">→</span>
        </Link>
        <ProductDemoTrigger ref={triggerRef} demo={demo} onOpen={() => onOpenDemo(demo, triggerRef.current)} />
      </GlassSurface>
    </Reveal>
  );
}

export function BusinessInfrastructure() {
  return (
    <section className="section section--ink biz-infra" id="business-infra" aria-labelledby="business-infra-title">
      <div className="section--ink__grid-bg" aria-hidden="true" />
      <div className="container biz-infra__layout">
        <Reveal>
          <SectionHeader
            title="Развиваем то, что уже работает"
            titleId="business-infra-title"
            description="Начать можно с нейробота, аналитики разговоров или помощи операторам. Если компании нужен новый контактный центр, развернём платформу Lexicom и подключим согласованные каналы и системы."
          />
          <p className="biz-infra__note">{businessInfraNote}</p>
        </Reveal>

        <div className="biz-infra__points">
          {businessInfraPoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 60}>
              <article>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BusinessLaunch() {
  return (
    <section className="section biz-launch" id="business-launch" aria-labelledby="business-launch-title">
      <div className="container">
        <Reveal>
          <SectionHeader title="Начинаем с процесса, в котором нужен результат" titleId="business-launch-title" />
        </Reveal>

        <Reveal>
          <ol className="nb-infra__route biz-launch__route" aria-label="Путь от задачи до запуска">
            {businessSteps.map((step, index) => (
              <li key={step}>
                <span aria-hidden="true">{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal>
          <GlassSurface className="nb-infra__timing" radius="xl" depth="raised" tint="yellow" tier="matte">
            <p className="nb-infra__timing-lead">{businessTiming.lead}</p>
            <p>{businessTiming.text}</p>
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}

export function BusinessFinalCta() {
  return (
    <section className="section nb-final" id="contact" aria-labelledby={businessAnchors.finalTitle}>
      <div className="container nb-final__layout">
        <Reveal>
          <SectionHeader
            title="Расскажите, что хотите автоматизировать"
            titleId={businessAnchors.finalTitle}
            description="Опишите задачу своими словами. Разберём процесс, предложим состав продуктов и определим, какие настройки, интеграции и доработки понадобятся."
          />
        </Reveal>

        <Reveal delay={60}>
          <GlassSurface className="nb-final__form-wrap" radius="xl" depth="raised" tint="yellow">
            <ContactForm
              id={businessAnchors.form}
              organizationLabel="Компания"
              contactFields="combined"
              messageRequired={false}
              submitLabel="Обсудить задачу"
              direction="Для бизнеса"
            />
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}
