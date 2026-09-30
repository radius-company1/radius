import {
  prCapabilities,
  prCapabilitiesNote,
  prFaq,
  prInfraPoints,
  prLaunchNote,
  prLaunchSteps,
  prProcessNote,
  prProcessSteps,
  prUseCases,
  protocolAnchors,
} from '../../data/protocolPage';
import { ContactForm } from '../ContactForm';
import { Accordion } from '../ui/Accordion';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function PrProcess() {
  return (
    <section className="section nb-process" id="pr-process" aria-labelledby="pr-process-title">
      <div className="container">
        <Reveal>
          <SectionHeader eyebrow="Как это работает" title="От записи до протокола" titleId="pr-process-title" />
        </Reveal>

        <Reveal delay={60}>
          <GlassSurface className="nb-process__panel" radius="xl" depth="raised" tint="cyan">
            <ol className="nb-process__flow">
              {prProcessSteps.map((step, index) => (
                <li key={step} className={`nb-process__step ${index === prProcessSteps.length - 1 ? 'is-last' : ''}`}>
                  <span className="nb-process__num" aria-hidden="true">
                    {index + 1}
                  </span>
                  <p className="nb-process__label">{step}</p>
                </li>
              ))}
            </ol>
          </GlassSurface>
        </Reveal>

        <Reveal>
          <p className="nb-process__note">{prProcessNote}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function PrCapabilities() {
  return (
    <section className="section nb-capabilities" id="pr-capabilities" aria-labelledby="pr-capabilities-title">
      <div className="container nb-capabilities__layout">
        <div className="nb-capabilities__intro">
          <Reveal>
            <SectionHeader title="Стенограмма, протокол и краткая выжимка" titleId="pr-capabilities-title" />
          </Reveal>
          <Reveal delay={60}>
            <p className="nb-capabilities__combine">{prCapabilitiesNote}</p>
          </Reveal>
        </div>

        <ol className="nb-capabilities__list">
          {prCapabilities.map((item, index) => (
            <li key={item.title}>
              <Reveal delay={index * 70}>
                <span className="nb-capabilities__index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function PrUseCases() {
  return (
    <section className="section section--dark nb-team pr-uses" id="pr-uses" aria-labelledby="pr-uses-title">
      <div className="section--dark__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader title="Для каких записей" titleId="pr-uses-title" light />
        </Reveal>

        <div className="nb-team__grid">
          {prUseCases.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <GlassSurface
                className="nb-team__part"
                radius="xl"
                depth="raised"
                variant="dark"
                tint={index === 0 ? 'cyan' : 'yellow'}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </GlassSurface>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PrInfrastructure() {
  return (
    <section className="section section--ink nb-infra" id="pr-infrastructure" aria-labelledby="pr-infra-title">
      <div className="section--ink__grid-bg" aria-hidden="true" />
      <div className="container">
        <div className="nb-infra__layout">
          <Reveal>
            <SectionHeader
              title="Встраиваем в вашу инфраструктуру и процессы"
              titleId="pr-infra-title"
              description="Протоколирование разворачивается в инфраструктуре заказчика. Источники записей и формат протокола согласуем под ваши процессы."
            />
          </Reveal>
          <Reveal delay={60}>
            <ul className="nb-infra__points">
              {prInfraPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal>
          <ol className="nb-infra__route" aria-label="Этапы внедрения">
            {prLaunchSteps.map((step, index) => (
              <li key={step}>
                <span aria-hidden="true">{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal>
          <p className="sa-infra__note">{prLaunchNote}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function PrFaq() {
  return (
    <section className="section nb-faq" id="pr-faq" aria-labelledby="pr-faq-title">
      <div className="container container--narrow">
        <Reveal>
          <SectionHeader title="Частые вопросы" titleId="pr-faq-title" />
        </Reveal>
        <Reveal>
          <div className="surface-calm nb-faq__panel">
            <Accordion items={prFaq} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function PrFinalCta() {
  return (
    <section className="section nb-final" id="contact" aria-labelledby={protocolAnchors.finalTitle}>
      <div className="container nb-final__layout">
        <Reveal>
          <SectionHeader
            title="Покажем, как готовится протокол по вашим правилам"
            titleId={protocolAnchors.finalTitle}
            description="Расскажите, какие встречи или заседания нужно протоколировать и в каком формате. Обсудим источники записей и подготовим демонстрацию."
          />
        </Reveal>

        <Reveal delay={60}>
          <GlassSurface className="nb-final__form-wrap" radius="xl" depth="raised" tint="cyan">
            <ContactForm
              id={protocolAnchors.form}
              messageRequired={false}
              submitLabel="Запросить демонстрацию протоколирования"
              product="Протоколирование"
            />
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}
