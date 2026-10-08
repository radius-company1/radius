import { Link } from 'react-router-dom';
import {
  ekcAnchors,
  ekcAudiences,
  ekcAudiencesNote,
  ekcDeliverables,
  ekcHeroScheme,
  ekcPlatform,
  ekcPlatformNotes,
  ekcProcessIntro,
  ekcProcessNote,
  ekcProcessResponsibility,
  ekcProcessSteps,
  ekcProjectNote,
  ekcProjectStages,
  ekcScope,
  ekcScopeNote,
  ekcStartModes,
  ekcTraining,
  ekcTrainingNote,
} from '../../data/ekcPage';
import { ContactForm } from '../ContactForm';
import { ProductBreadcrumbs } from '../ProductBreadcrumbs';
import { Button } from '../ui/Button';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

type EkcHeroProps = {
  onDiscuss: () => void;
  onShowScope: () => void;
};

export function EkcHero({ onDiscuss, onShowScope }: EkcHeroProps) {
  return (
    <section className="cc-hero ekc-hero section-zone" id="ekc-top" aria-labelledby="ekc-hero-title">
      <div className="container">
        <ProductBreadcrumbs current="ЕКЦ 110" />

        <div className="cc-hero__grid">
          <div className="cc-hero__content">
            <Reveal>
              <p className="cc-hero__eyebrow">ЕКЦ 110 Lexicom</p>
            </Reveal>
            <Reveal delay={60}>
              <h1
                id="ekc-hero-title"
                className="cc-hero__title"
                style={{ viewTransitionName: 'hero-title' } as React.CSSProperties}
              >
                ЕКЦ 110 под ключ для вашего региона
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="cc-hero__lead">
                Создаём единый контактный центр для обращений жителей: проектируем решение, поставляем оборудование,
                оснащаем рабочие места, разворачиваем платформу Lexicom и обучаем команду заказчика.
              </p>
              <p className="cc-hero__lead">
                Нейробот, операторы и профильные службы работают по согласованным правилам — с общей базой знаний,
                передачей контекста и аналитикой обращений.
              </p>
              <ul className="ekc-hero__deliverables" aria-label="Что входит в проект">
                {ekcDeliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={160}>
              <div className="cc-hero__actions">
                <Button onClick={onDiscuss}>Обсудить создание ЕКЦ</Button>
                <Button variant="secondary" onClick={onShowScope}>
                  Что входит в проект
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <GlassSurface
              className="ekc-scheme"
              radius="xl"
              depth="float"
              tint="yellow"
              style={{ viewTransitionName: 'hero-viz' } as React.CSSProperties}
            >
              <ol className="ekc-scheme__list" aria-label="Как устроен ЕКЦ">
                {ekcHeroScheme.map((row) => (
                  <li key={row.id} className={`ekc-scheme__row ekc-scheme__row--${row.id}`}>
                    <p className="ekc-scheme__title">{row.title}</p>
                    <ul className="ekc-scheme__items">
                      {row.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </GlassSurface>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function EkcAudiences() {
  return (
    <section className="section nb-channels ekc-audiences" id="ekc-audiences" aria-labelledby="ekc-audiences-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Жителю — понятный ответ. Региону — управляемая работа с обращениями"
            titleId="ekc-audiences-title"
          />
        </Reveal>

        <Reveal delay={60}>
          <GlassSurface className="nb-channels__panel" radius="xl" depth="raised" tint="yellow" tier="matte">
            <div className="nb-channels__zones">
              {ekcAudiences.map((item, index) => (
                <article key={item.title} className="nb-channels__zone">
                  <span className="ekc-audiences__index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </GlassSurface>
        </Reveal>

        <Reveal>
          <p className="nb-channels__note">{ekcAudiencesNote}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function EkcScope() {
  return (
    <section className="section ekc-scope" id={ekcAnchors.scope} aria-labelledby="ekc-scope-title">
      <div className="container">
        <Reveal>
          <SectionHeader title="Всё необходимое для запуска центра" titleId="ekc-scope-title" />
        </Reveal>

        <Reveal delay={60}>
          <GlassSurface className="ekc-scope__panel" radius="xl" depth="raised" tint="blue" tier="matte">
            <table className="ekc-scope__table">
              <thead>
                <tr>
                  <th scope="col">Часть проекта</th>
                  <th scope="col">Что входит</th>
                </tr>
              </thead>
              <tbody>
                {ekcScope.map((row) => (
                  <tr key={row.part}>
                    <th scope="row">{row.part}</th>
                    <td>{row.text}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </GlassSurface>
        </Reveal>

        <Reveal>
          <GlassSurface className="nb-infra__timing ekc-scope__note" radius="xl" depth="raised" tint="yellow" tier="matte">
            <p className="nb-infra__timing-lead">{ekcScopeNote.lead}</p>
            <p>{ekcScopeNote.text}</p>
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}

export function EkcProcess() {
  return (
    <section className="section nb-process ekc-process" id="ekc-process" aria-labelledby="ekc-process-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="От первого вопроса до следующего действия"
            titleId="ekc-process-title"
            description={ekcProcessIntro}
          />
        </Reveal>

        <Reveal delay={60}>
          <GlassSurface className="nb-process__panel" radius="xl" depth="raised" tint="cyan">
            <ol className="nb-process__flow">
              {ekcProcessSteps.map((step, index) => (
                <li
                  key={step.title}
                  className={`nb-process__step ${index === ekcProcessSteps.length - 1 ? 'is-last' : ''}`}
                >
                  <span className="nb-process__num" aria-hidden="true">
                    {index + 1}
                  </span>
                  <div className="ekc-process__body">
                    <p className="nb-process__label">{step.title}</p>
                    <p className="ekc-process__text">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </GlassSurface>
        </Reveal>

        <Reveal>
          <p className="ekc-process__responsibility">{ekcProcessResponsibility}</p>
          <p className="nb-process__note ekc-process__note">{ekcProcessNote}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function EkcPlatform() {
  return (
    <section className="section nb-capabilities ekc-platform" id="ekc-platform" aria-labelledby="ekc-platform-title">
      <div className="container nb-capabilities__layout">
        <div className="nb-capabilities__intro">
          <Reveal>
            <SectionHeader title="Собственная платформа Lexicom в основе ЕКЦ" titleId="ekc-platform-title" />
          </Reveal>
          <Reveal delay={60}>
            <div className="ekc-platform__notes">
              {ekcPlatformNotes.map((note) => (
                <p key={note} className="nb-capabilities__combine">
                  {note}
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        <ol className="nb-capabilities__list">
          {ekcPlatform.map((item, index) => (
            <li key={item.title}>
              <Reveal delay={index * 60}>
                <span className="nb-capabilities__index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  {'link' in item ? (
                    <Link className="ekc-platform__link" to={item.link}>
                      Подробнее о продукте
                      <span aria-hidden="true">→</span>
                    </Link>
                  ) : null}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function EkcTraining() {
  return (
    <section className="section section--dark nb-team ekc-training" id="ekc-training" aria-labelledby="ekc-training-title">
      <div className="section--dark__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Готовим сотрудников к работе"
            titleId="ekc-training-title"
            description="Запуск центра включает подготовку команды заказчика."
            light
          />
        </Reveal>

        <div className="nb-team__grid ekc-training__grid">
          {ekcTraining.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <GlassSurface
                className="nb-team__part"
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
          <p className="sa-team__note">{ekcTrainingNote}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function EkcStart() {
  return (
    <section className="section section--ink nb-infra ekc-start" id="ekc-start" aria-labelledby="ekc-start-title">
      <div className="section--ink__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader title="Создаём новый центр или развиваем действующий" titleId="ekc-start-title" />
        </Reveal>

        <div className="ekc-start__modes">
          {ekcStartModes.map((mode, index) => (
            <Reveal key={mode.title} delay={index * 80}>
              <GlassSurface className="ekc-start__mode" radius="xl" depth="raised" tint={index === 0 ? 'yellow' : 'cyan'}>
                <h3>{mode.title}</h3>
                <p>{mode.text}</p>
              </GlassSurface>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="ekc-start__route-title">Проект проходит последовательно:</p>
          <ol className="nb-infra__route ekc-start__route" aria-label="Этапы проекта">
            {ekcProjectStages.map((stage, index) => (
              <li key={stage}>
                <span aria-hidden="true">{index + 1}</span>
                {stage}
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal>
          <p className="sa-infra__note">{ekcProjectNote}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function EkcFinalCta() {
  return (
    <section className="section nb-final" id="contact" aria-labelledby={ekcAnchors.finalTitle}>
      <div className="container nb-final__layout">
        <Reveal>
          <SectionHeader
            title="Обсудим состав и запуск ЕКЦ вашего региона"
            titleId={ekcAnchors.finalTitle}
            description="Расскажите, какие службы нужно объединить и что уже работает. Определим состав оборудования, программных продуктов, интеграций и подготовки команды."
          />
        </Reveal>

        <Reveal delay={60}>
          <GlassSurface className="nb-final__form-wrap" radius="xl" depth="raised" tint="yellow">
            <ContactForm
              id={ekcAnchors.form}
              organizationLabel="Регион или организация"
              contactFields="combined"
              messageRequired={false}
              submitLabel="Обсудить проект ЕКЦ"
              product="ЕКЦ 110"
            />
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}
