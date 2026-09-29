import { contactCenterAnchors } from '../../data/contactCenterPage';
import { ContactForm } from '../ContactForm';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function CcFinalCta() {
  return (
    <section className="section cc-final" id="contact" aria-labelledby={contactCenterAnchors.finalTitle}>
      <div className="container cc-final__layout">
        <Reveal>
          <SectionHeader
            title="Покажем контактный центр на задачах вашей команды"
            titleId={contactCenterAnchors.finalTitle}
            description="Обсудим каналы, работу операторов и действующие системы. Подберём состав решения и покажем подходящие возможности Lexicom."
          />
        </Reveal>

        <Reveal delay={60}>
          <GlassSurface className="cc-final__form-wrap" radius="xl" depth="raised" tint="blue">
            <ContactForm
              id={contactCenterAnchors.form}
              messageRequired={false}
              submitLabel="Запросить демонстрацию КЦ"
              product="Контактный центр"
            />
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}
