import { mfcFaqItems } from '../../data/directions/mfc';
import { FaqList } from '../ui/FaqList';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function MfcFaq() {
  return (
    <section className="section mfc-faq" id="mfc-faq" aria-labelledby="mfc-faq-title">
      <div className="container">
        <Reveal>
          <SectionHeader title="Что важно знать до начала проекта" titleId="mfc-faq-title" />
        </Reveal>
        <Reveal>
          <FaqList items={mfcFaqItems} />
        </Reveal>
      </div>
    </section>
  );
}
