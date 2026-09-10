import { ContactForm } from '../ContactForm';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';
import { mfcDemoState } from '../../data/directions/mfc';

export function MfcFinalCta() {
  return (
    <section className="section mfc-final" id="contact" aria-labelledby="mfc-final-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Начнём с одного процесса вашего МФЦ"
            titleId="mfc-final-title"
            description="Разберём поток обращений, выберем первый сценарий и определим состав решения с учётом вашей инфраструктуры."
          />
        </Reveal>

        <Reveal>
          <GlassSurface className="mfc-final__form-wrap" radius="xl" depth="raised" tint="mfc">
            <ContactForm
              id={mfcDemoState.formAnchor}
              organizationLabel="Организация и регион"
              messageRequired={false}
              submitLabel="Отправить заявку"
              direction="МФЦ"
            />
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}
