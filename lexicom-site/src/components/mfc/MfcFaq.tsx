import { mfcFaqItems } from '../../data/directions/mfc';
import { Accordion } from '../ui/Accordion';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function MfcFaq() {
  return (
    <section className="section mfc-faq mfc-section--compact" id="mfc-faq" aria-labelledby="mfc-faq-title">
      <div className="container container--narrow">
        <Reveal>
          <SectionHeader title="Что важно знать до начала проекта" titleId="mfc-faq-title" />
        </Reveal>
        <Reveal>
          <div className="mfc-faq__panel surface-calm">
            <Accordion items={mfcFaqItems} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
