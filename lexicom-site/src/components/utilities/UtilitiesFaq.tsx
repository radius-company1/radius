import { utilitiesFaqItems } from '../../data/directions/utilities';
import { Accordion } from '../ui/Accordion';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function UtilitiesFaq() {
  return (
    <section
      className="section utilities-faq utilities-section--compact"
      id="utilities-faq"
      aria-labelledby="utilities-faq-title"
    >
      <div className="container container--narrow">
        <Reveal>
          <SectionHeader title="Частые вопросы" titleId="utilities-faq-title" />
        </Reveal>
        <Reveal>
          <div className="utilities-faq__panel surface-calm">
            <Accordion items={utilitiesFaqItems} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
