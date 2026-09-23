import { utilitiesDemoState } from '../../data/directions/utilities';
import { ContactForm } from '../ContactForm';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function UtilitiesFinalCta() {
  return (
    <section className="section utilities-final utilities-section--compact" id="contact" aria-labelledby="utilities-final-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Обсудим задачи вашей службы и покажем решение на ваших сценариях"
            titleId="utilities-final-title"
          />
        </Reveal>

        <Reveal>
          <GlassSurface className="utilities-final__form-wrap" radius="xl" depth="raised" tint="utilities">
            <ContactForm
              id={utilitiesDemoState.formAnchor}
              organizationLabel="Организация"
              messageRequired={false}
              submitLabel="Обсудить проект"
              direction="Ресурсоснабжение"
            />
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}
