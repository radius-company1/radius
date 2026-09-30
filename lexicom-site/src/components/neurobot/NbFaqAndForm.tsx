import { neurobotAnchors, neurobotFaq } from '../../data/neurobotPage';
import { ContactForm } from '../ContactForm';
import { Accordion } from '../ui/Accordion';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function NbFaq() {
  return (
    <section className="section nb-faq" id="nb-faq" aria-labelledby="nb-faq-title">
      <div className="container container--narrow">
        <Reveal>
          <SectionHeader title="Частые вопросы" titleId="nb-faq-title" />
        </Reveal>
        <Reveal>
          <div className="surface-calm nb-faq__panel">
            <Accordion items={neurobotFaq} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function NbFinalCta() {
  return (
    <section className="section nb-final" id="contact" aria-labelledby={neurobotAnchors.finalTitle}>
      <div className="container nb-final__layout">
        <Reveal>
          <SectionHeader
            title="Покажем нейробота на вашем сценарии"
            titleId={neurobotAnchors.finalTitle}
            description="Расскажите, какие обращения хотите автоматизировать. Обсудим каналы, базу знаний и интеграции и подготовим подходящую демонстрацию."
          />
        </Reveal>

        <Reveal delay={60}>
          <GlassSurface className="nb-final__form-wrap" radius="xl" depth="raised" tint="cyan">
            <ContactForm
              id={neurobotAnchors.form}
              messageRequired={false}
              submitLabel="Запросить демонстрацию нейробота"
              product="Нейробот"
            />
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}
