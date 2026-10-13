import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  educationAnalyticsClosing,
  educationAnalyticsItems,
  educationAnchors,
  educationHeroKit,
  educationInfraPoints,
  educationIntegrationPoints,
  educationKnowledgeNote,
  educationKnowledgeSources,
  educationProducts,
  educationScenarios,
  educationStartOptions,
  educationSteps,
  educationTasks,
  educationTiming,
  type EducationKitIcon,
} from '../../data/directions/education';
import { productDemoById, type ProductDemo } from '../../data/productDemos';
import { ContactForm } from '../ContactForm';
import { ProductDemoTrigger } from '../ProductDemoTrigger';
import { ProductPageLink } from '../ProductPageLink';
import { ProductVisual } from '../ProductVisual';
import { Button } from '../ui/Button';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

const svgProps = {
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

function EducationKitIconSvg({ icon }: { icon: EducationKitIcon }) {
  switch (icon) {
    case 'appeals':
      return (
        <svg {...svgProps}>
          <path d="M8 14h20a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H18l-6 6v-6H8a4 4 0 0 1-4-4V18a4 4 0 0 1 4-4z" />
          <path d="M14 22h12M14 28h8" className="edu-kit__accent" />
        </svg>
      );
    case 'knowledge':
      return (
        <svg {...svgProps}>
          <path d="M8 14h13a5 5 0 0 1 5 5v16H13a5 5 0 0 0-5 5V14z" />
          <path d="M40 14H27a5 5 0 0 0-5 5v16h13a5 5 0 0 1 5 5V14z" />
          <path d="M24 19v16" className="edu-kit__accent" />
        </svg>
      );
    case 'staff':
      return (
        <svg {...svgProps}>
          <circle cx="16" cy="16" r="5" />
          <circle cx="33" cy="17" r="4.2" className="edu-kit__accent" />
          <path d="M6 36a10 10 0 0 1 16.2-7.8" />
          <path d="M27 29a8 8 0 0 1 15 7" />
        </svg>
      );
    case 'systems':
      return (
        <svg {...svgProps}>
          <rect x="6" y="8" width="15" height="12" rx="3" />
          <rect x="27" y="8" width="15" height="12" rx="3" />
          <rect x="16.5" y="28" width="15" height="12" rx="3" className="edu-kit__accent" />
          <path d="M13.5 20v4M34.5 20v4M24 28v-4" />
        </svg>
      );
  }
}

type EducationHeroProps = {
  onDiscuss: () => void;
  onShowTasks: () => void;
};

export function EducationHero({ onDiscuss, onShowTasks }: EducationHeroProps) {
  return (
    <section className="edu-hero section-zone" id="education-top" aria-labelledby="education-hero-title">
      <div className="container">
        <div className="edu-hero__grid">
          <div className="edu-hero__content">
            <Reveal>
              <p className="edu-hero__eyebrow">Lexicom для образования</p>
            </Reveal>
            <Reveal delay={60}>
              <h1 id="education-hero-title" className="edu-hero__title">
                ИИ-коммуникации для абитуриентов, студентов и сотрудников
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="edu-hero__lead">
                Lexicom помогает отвечать на вопросы о поступлении и обучении, обрабатывать обращения, поддерживать
                сотрудников и готовить протоколы совещаний. Нейробот, контактный центр с суфлёром, речевая аналитика и
                протоколирование — под процессы вашей образовательной организации.
              </p>
              <p className="edu-hero__note">
                Собственная разработка. Размещение в вашей инфраструктуре. Интеграция с действующими системами.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <div className="edu-hero__actions">
                <Button onClick={onDiscuss}>Обсудить задачу</Button>
                <Button variant="secondary" onClick={onShowTasks}>
                  Посмотреть сценарии
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <GlassSurface className="edu-kit" radius="xl" depth="float" tint="education">
              <p className="edu-kit__title" id="education-kit-title">
                Связь процессов
              </p>
              <ul className="edu-kit__grid" aria-labelledby="education-kit-title">
                {educationHeroKit.map((item) => (
                  <li key={item.icon} className="edu-kit__item">
                    <span className="edu-kit__icon" aria-hidden="true">
                      <EducationKitIconSvg icon={item.icon} />
                    </span>
                    <p className="edu-kit__name">{item.title}</p>
                    <p className="edu-kit__caption">{item.caption}</p>
                  </li>
                ))}
              </ul>
            </GlassSurface>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function EducationTasks() {
  return (
    <section className="section edu-tasks" id={educationAnchors.tasks} aria-labelledby="education-tasks-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="От первого вопроса о поступлении до ежедневных обращений"
            titleId="education-tasks-title"
            description="Начать можно с одного процесса и постепенно подключать другие подразделения и каналы."
          />
        </Reveal>

        <div className="edu-tasks__grid">
          {educationTasks.map((task, index) => (
            <Reveal key={task.title} delay={index * 40}>
              <GlassSurface className="edu-task" radius="xl" depth="raised" tint={index % 2 === 0 ? 'education' : 'yellow'}>
                <h3>{task.title}</h3>
                <p>{task.text}</p>
                <ul className="edu-task__products">
                  {task.products.map((product) => (
                    <li key={product.label}>
                      {product.to ? <Link to={product.to}>{product.label}</Link> : <span>{product.label}</span>}
                    </li>
                  ))}
                </ul>
              </GlassSurface>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EducationProducts({
  onOpenDemo,
}: {
  onOpenDemo: (demo: ProductDemo, trigger: HTMLButtonElement | null) => void;
}) {
  return (
    <section className="section edu-products" id="education-products" aria-labelledby="education-products-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Четыре продукта для задач вашей организации"
            titleId="education-products-title"
            description="Продукты могут работать вместе или дополнять существующие системы. База знаний и интеграции связывают их с процессами организации."
          />
        </Reveal>

        <div className="edu-products__grid">
          {educationProducts.map((product, index) => (
            <EducationProductCard key={product.id} product={product} index={index} onOpenDemo={onOpenDemo} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationProductCard({
  product,
  index,
  onOpenDemo,
}: {
  product: (typeof educationProducts)[number];
  index: number;
  onOpenDemo: (demo: ProductDemo, trigger: HTMLButtonElement | null) => void;
}) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const demo = productDemoById[product.id];

  return (
    <Reveal delay={index * 50}>
      <GlassSurface
        className="edu-product"
        radius="xl"
        depth="raised"
        tint={index % 2 === 0 ? 'education' : 'yellow'}
        tier="matte"
      >
        <div className="edu-product__visual" aria-hidden="true">
          <ProductVisual id={product.id} />
        </div>
        <h3>{product.title}</h3>
        <p>{product.text}</p>
        <ProductPageLink id={product.id} className="edu-product__more" />
        <ProductDemoTrigger ref={triggerRef} demo={demo} onOpen={() => onOpenDemo(demo, triggerRef.current)} />
      </GlassSurface>
    </Reveal>
  );
}

export function EducationScenarios() {
  const [activeId, setActiveId] = useState<(typeof educationScenarios)[number]['id']>(educationScenarios[0].id);
  const active = educationScenarios.find((item) => item.id === activeId) ?? educationScenarios[0];

  return (
    <section className="section edu-scenarios" id={educationAnchors.scenarios} aria-labelledby="education-scenarios-title">
      <div className="container">
        <Reveal>
          <SectionHeader title="Как проходит обращение" titleId="education-scenarios-title" />
        </Reveal>

        <Reveal>
          <GlassSurface className="edu-scenarios__panel" radius="xl" depth="raised" tint="education">
            <div className="edu-scenarios__tabs" role="tablist" aria-label="Сценарии обращений">
              {educationScenarios.map((scenario) => {
                const selected = scenario.id === active.id;
                return (
                  <button
                    key={scenario.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    className={`edu-scenarios__tab ${selected ? 'is-active' : ''}`}
                    onClick={() => setActiveId(scenario.id)}
                  >
                    <span className="edu-scenarios__tab-title">{scenario.title}</span>
                    <span className="edu-scenarios__tab-sub">{scenario.subtitle}</span>
                  </button>
                );
              })}
            </div>

            <div className="edu-scenarios__body" role="tabpanel">
              <h3>
                {active.title}
                <span className="edu-scenarios__subtitle">{active.subtitle}</span>
              </h3>
              <ol className="edu-scenarios__steps">
                {active.steps.map((step, index) => (
                  <li key={step}>
                    <span className="edu-scenarios__num" aria-hidden="true">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <p className="edu-scenarios__result">
                <strong>Результат.</strong> {active.result}
              </p>
              {active.note ? <p className="edu-scenarios__note">{active.note}</p> : null}
            </div>
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}

export function EducationKnowledge() {
  return (
    <section className="section edu-knowledge" id="education-knowledge" aria-labelledby="education-knowledge-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Актуальные ответы для всех каналов"
            titleId="education-knowledge-title"
            description="Программы, сроки и правила меняются. Ответы нейробота и подсказки сотрудникам опираются на согласованные материалы вашей организации."
          />
        </Reveal>

        <div className="edu-knowledge__layout">
          <Reveal>
            <ul className="edu-knowledge__sources">
              {educationKnowledgeSources.map((item) => (
                <li key={item}>
                  <GlassSurface className="edu-knowledge__card" radius="lg" depth="raised" tint="cyan">
                    <p>{item}</p>
                  </GlassSurface>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={70}>
            <p className="edu-knowledge__note">{educationKnowledgeNote}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function EducationAnalytics() {
  return (
    <section
      className="section section--dark edu-analytics"
      id="education-analytics"
      aria-labelledby="education-analytics-title"
    >
      <div className="section--dark__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Видеть, с чем обращаются и где возникают сложности"
            titleId="education-analytics-title"
            description="Речевая аналитика помогает разбирать содержание разговоров и качество консультаций по согласованным критериям."
            light
          />
        </Reveal>

        <Reveal>
          <GlassSurface className="edu-analytics__panel" radius="xl" depth="raised" tint="cyan" variant="dark">
            <p className="edu-analytics__label">Что можно анализировать</p>
            <ul>
              {educationAnalyticsItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="edu-analytics__closing">{educationAnalyticsClosing}</p>
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}

export function EducationInfrastructure() {
  return (
    <section className="section section--ink edu-infra" id="education-infra" aria-labelledby="education-infra-title">
      <div className="section--ink__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Подключаем к системам вашей организации"
            titleId="education-infra-title"
            description="Платформа разворачивается в инфраструктуре заказчика. Состав подключений и доступные действия определяем после изучения действующих систем и интерфейсов обмена."
          />
        </Reveal>

        <Reveal>
          <ul className="edu-infra__points-list" aria-label="Возможные точки подключения">
            {educationIntegrationPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <div className="edu-infra__grid">
          {educationInfraPoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 50}>
              <article className="edu-infra__card">
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

export function EducationLaunch() {
  return (
    <section className="section edu-launch" id="education-launch" aria-labelledby="education-launch-title">
      <div className="container">
        <Reveal>
          <SectionHeader title="Начните с одного процесса" titleId="education-launch-title" />
        </Reveal>

        <Reveal>
          <ul className="edu-launch__starts">
            {educationStartOptions.map((item) => (
              <li key={item}>
                <GlassSurface className="edu-launch__start" radius="lg" depth="raised" tint="yellow">
                  <p>{item}</p>
                </GlassSurface>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <ol className="edu-launch__route" aria-label="Этапы внедрения">
            {educationSteps.map((step, index) => (
              <li key={step}>
                <span aria-hidden="true">{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal>
          <GlassSurface className="edu-launch__timing" radius="xl" depth="raised" tint="education" tier="matte">
            <p className="edu-launch__timing-lead">{educationTiming.lead}</p>
            <p>{educationTiming.text}</p>
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}

export function EducationFinalCta() {
  return (
    <section className="section nb-final" id="contact" aria-labelledby={educationAnchors.finalTitle}>
      <div className="container nb-final__layout">
        <Reveal>
          <SectionHeader
            title="Обсудим задачи вашей образовательной организации"
            titleId={educationAnchors.finalTitle}
            description="Расскажите, какие обращения занимают больше всего времени и какие системы уже используются. Подберём продукты и определим первый этап внедрения."
          />
        </Reveal>

        <Reveal delay={60}>
          <GlassSurface className="nb-final__form-wrap" radius="xl" depth="raised" tint="yellow">
            <ContactForm
              id={educationAnchors.form}
              organizationLabel="Организация"
              contactFields="combined"
              messageRequired={false}
              submitLabel="Обсудить решение"
              direction="Для образования"
            />
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}
