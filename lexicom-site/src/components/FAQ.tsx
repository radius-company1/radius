import { faqItems } from '../data/faq';
import { Accordion } from './ui/Accordion';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';

export function FAQ() {
  return (
    <section className="section faq" id="faq" aria-labelledby="faq-title">
      <div className="container container--narrow">
        <Reveal>
          <SectionHeader
            eyebrow="Вопросы о внедрении"
            title="Что важно знать до начала проекта"
            titleId="faq-title"
          />
        </Reveal>
        <Reveal>
          <div className="surface-calm">
            <Accordion items={faqItems} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
