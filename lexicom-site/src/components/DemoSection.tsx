import { ProductFinder } from './ProductFinder';
import { companyContacts } from '../data/company';
import { ContactForm } from './ContactForm';
import { GlassSurface } from './ui/GlassSurface';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';
import { Icon } from './ui/Icon';

export function DemoSection() {
  return (
    <section className="section section-zone section-zone--demo demo" id="contact" aria-labelledby="demo-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Обсудить проект"
            titleId="demo-title"
            description="Разберём вашу задачу и определим, какие продукты, интеграции и ресурсы нужны для первого этапа."
          />
        </Reveal>

        {import.meta.env.VITE_CONTACT_ENDPOINT ? <div className="final-contact-methods">
          <div><a href={`mailto:${companyContacts.email}`}>{companyContacts.email} <Icon name="arrow-up-right" /></a><a href={companyContacts.phoneHref}>{companyContacts.phone} <Icon name="arrow-up-right" /></a></div>
          <p>Можно написать нам напрямую или позвонить, чтобы обсудить задачу.</p>
        </div> : null}

        <Reveal>
          <GlassSurface className="demo__form-wrap" radius="xl" depth="raised" tint="cyan">
            <ContactForm />
          </GlassSurface>
        </Reveal>

        <ProductFinder />
      </div>
    </section>
  );
}
