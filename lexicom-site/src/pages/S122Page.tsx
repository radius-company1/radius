import { s122DemoState, s122PageMeta } from '../data/directions/s122';
import { usePageMeta } from '../hooks/usePageMeta';
import { Footer } from '../components/Footer';
import { S122Analytics } from '../components/s122/S122Analytics';
import { S122Benefits } from '../components/s122/S122Benefits';
import { S122Dialogue } from '../components/s122/S122Dialogue';
import { S122Faq } from '../components/s122/S122Faq';
import { S122FinalCta } from '../components/s122/S122FinalCta';
import { S122Handoff } from '../components/s122/S122Handoff';
import { S122Hero } from '../components/s122/S122Hero';
import { S122Implementation } from '../components/s122/S122Implementation';
import { S122Integration } from '../components/s122/S122Integration';
import { S122Journey } from '../components/s122/S122Journey';
import { S122OnPrem } from '../components/s122/S122OnPrem';
import { S122Outcome } from '../components/s122/S122Outcome';
import { S122Peak } from '../components/s122/S122Peak';
import { S122Proof } from '../components/s122/S122Proof';
import { S122Scenarios } from '../components/s122/S122Scenarios';

export function S122Page() {
  usePageMeta(s122PageMeta);

  const scrollToDialogue = () => {
    document.getElementById(s122DemoState.dialogueAnchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToForm = () => {
    const form = document.getElementById(s122DemoState.formAnchor);
    const contact = document.getElementById('contact');
    (form ?? contact)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const field = form?.querySelector<HTMLElement>('input, textarea, button');
    field?.focus({ preventScroll: true });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      className="page-view page-view--direction page-view--s122"
      style={{ viewTransitionName: 'page-content' } as React.CSSProperties}
    >
      <main>
        <S122Hero onRequestDemo={scrollToDialogue} onDiscuss={scrollToContact} />
        <S122Outcome />
        <S122Journey />
        <S122Scenarios />
        <S122Dialogue onRequestDemo={scrollToForm} />
        <S122Peak />
        <S122Handoff />
        <S122Integration />
        <S122Analytics />
        <S122OnPrem />
        <S122Benefits />
        <S122Proof />
        <S122Implementation />
        <S122Faq />
        <S122FinalCta onRequestDemo={scrollToDialogue} onDiscuss={scrollToForm} />
      </main>
      <Footer />
    </div>
  );
}
