import { s122FaqItems } from '../../data/directions/s122';
import { Accordion } from '../ui/Accordion';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function S122Faq() {
  return (
    <section className="section s122-faq s122-section--compact" id="s122-faq" aria-labelledby="s122-faq-title">
      <div className="container container--narrow">
        <Reveal>
          <SectionHeader title="Вопросы перед стартом проекта" titleId="s122-faq-title" />
        </Reveal>
        <Reveal>
          <div className="s122-faq__panel surface-calm">
            <Accordion items={s122FaqItems} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
