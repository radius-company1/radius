import { ContactForm } from '../ContactForm';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';
import { s122DemoState } from '../../data/directions/s122';

export function S122FinalCta() {
  return (
    <section className="section s122-final" id="contact" aria-labelledby="s122-final-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Покажем, как Lexicom будет работать в вашем контуре 122"
            titleId="s122-final-title"
            description="Разберём реальные сценарии, существующие системы и точки интеграции и определим состав решения для вашей службы 122."
          />
        </Reveal>

        <Reveal>
          <GlassSurface className="s122-final__form-wrap" radius="xl" depth="raised" tint="s122">
            <ContactForm
              id={s122DemoState.formAnchor}
              organizationLabel="Организация и регион"
              messageRequired={false}
              submitLabel="Отправить заявку"
              direction="Служба 122"
            />
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}
