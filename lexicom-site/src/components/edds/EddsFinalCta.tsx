import { Button } from '../ui/Button';
import { ContactForm } from '../ContactForm';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';
import { eddsDemoState } from '../../data/directions/edds';

type EddsFinalCtaProps = {
  onDiscuss: () => void;
};

export function EddsFinalCta({ onDiscuss }: EddsFinalCtaProps) {
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
          <div className="edds-final__actions">
            <Button onClick={onDiscuss}>{eddsDemoState.discussCtaLabel}</Button>
          </div>
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
