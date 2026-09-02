import { faqItems } from '../data/faq';
import { FaqList } from './ui/FaqList';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';

export function FAQ() {
  return (
    <section className="section faq" id="faq" aria-labelledby="faq-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Что важно знать до начала проекта"
            titleId="faq-title"
          />
        </Reveal>
        <Reveal>
          <FaqList items={faqItems} />
        </Reveal>
      </div>
    </section>
  );
}
