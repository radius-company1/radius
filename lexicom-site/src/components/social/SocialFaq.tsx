import { socialFaqItems } from '../../data/directions/social';
import { Accordion } from '../ui/Accordion';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function SocialFaq() {
  return (
    <section className="section social-faq social-section--compact" id="social-faq" aria-labelledby="social-faq-title">
      <div className="container container--narrow">
        <Reveal>
          <SectionHeader title="Частые вопросы" titleId="social-faq-title" />
        </Reveal>
        <Reveal>
          <div className="social-faq__panel surface-calm">
            <Accordion items={socialFaqItems} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
