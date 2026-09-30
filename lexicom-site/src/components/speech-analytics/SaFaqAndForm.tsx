import { saFaq, speechAnalyticsAnchors } from '../../data/speechAnalyticsPage';
import { ContactForm } from '../ContactForm';
import { Accordion } from '../ui/Accordion';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function SaFaq() {
  return (
    <section className="section nb-faq" id="sa-faq" aria-labelledby="sa-faq-title">
      <div className="container container--narrow">
        <Reveal>
          <SectionHeader title="Частые вопросы" titleId="sa-faq-title" />
        </Reveal>
        <Reveal>
          <div className="surface-calm nb-faq__panel">
            <Accordion items={saFaq} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SaFinalCta() {
  return (
    <section className="section nb-final" id="contact" aria-labelledby={speechAnalyticsAnchors.finalTitle}>
      <div className="container nb-final__layout">
        <Reveal>
          <SectionHeader
            title="Покажем разбор разговоров по вашим критериям"
            titleId={speechAnalyticsAnchors.finalTitle}
            description="Расскажите, какие разговоры и критерии качества для вас важны. Обсудим источники записей и интеграции и подготовим демонстрацию."
          />
        </Reveal>

        <Reveal delay={60}>
          <GlassSurface className="nb-final__form-wrap" radius="xl" depth="raised" tint="cyan">
            <ContactForm
              id={speechAnalyticsAnchors.form}
              messageRequired={false}
              submitLabel="Запросить демонстрацию аналитики"
              product="Речевая аналитика"
            />
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}
