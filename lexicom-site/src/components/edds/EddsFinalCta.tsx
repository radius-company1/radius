import { ContactForm } from '../ContactForm';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';
import { eddsDemoState } from '../../data/directions/edds';

export function EddsFinalCta() {
  return (
    <section className="section edds-final" id="contact" aria-labelledby="edds-final-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Обсудим задачи вашей ЕДДС"
            titleId="edds-final-title"
            description="Расскажите, как организован приём обращений и какие процессы хотите улучшить. Предложим состав решения и сценарий первого этапа."
          />
        </Reveal>

        <Reveal>
          <GlassSurface className="edds-final__form-wrap" radius="xl" depth="raised" tint="edds">
            <ContactForm
              id={eddsDemoState.formAnchor}
              organizationLabel="Организация и муниципалитет"
              messageRequired={false}
              submitLabel="Отправить заявку"
              direction="ЕДДС"
            />
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}
