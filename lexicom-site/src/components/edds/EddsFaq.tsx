import { eddsFaqItems } from '../../data/directions/edds';
import { Accordion } from '../ui/Accordion';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function EddsFaq() {
  return (
    <section className="section edds-faq edds-section--compact" id="edds-faq" aria-labelledby="edds-faq-title">
      <div className="container container--narrow">
        <Reveal>
          <SectionHeader title="Частые вопросы" titleId="edds-faq-title" />
        </Reveal>
        <Reveal>
          <div className="edds-faq__panel surface-calm">
            <Accordion items={eddsFaqItems} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
