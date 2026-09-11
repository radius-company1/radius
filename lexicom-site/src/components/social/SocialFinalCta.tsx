import { socialDemoState } from '../../data/directions/social';
import { ContactForm } from '../ContactForm';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function SocialFinalCta() {
  return (
    <section className="section social-final" id="contact" aria-labelledby="social-final-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Обсудим, какие обращения вашей службы можно автоматизировать"
            titleId="social-final-title"
            description="Подберём состав продуктов, сценарии и интеграции под задачи вашей организации."
          />
        </Reveal>

        <Reveal>
          <GlassSurface className="social-final__form-wrap" radius="xl" depth="raised" tint="social">
            <ContactForm
              id={socialDemoState.formAnchor}
              organizationLabel="Организация"
              messageRequired={false}
              submitLabel="Обсудить проект"
              direction="Социальная защита"
            />
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}
