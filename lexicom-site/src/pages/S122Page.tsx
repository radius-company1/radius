import { s122DemoState, s122PageMeta } from '../data/directions/s122';
import { scrollBelowChrome } from '../hooks/scrollBelowChrome';
import { usePageMeta } from '../hooks/usePageMeta';
import { Footer } from '../components/Footer';
import { S122Analytics } from '../components/s122/S122Analytics';
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
import { S122Scenarios } from '../components/s122/S122Scenarios';
import { S122TrustBar } from '../components/s122/S122TrustBar';

export function S122Page() {
  usePageMeta(s122PageMeta);

  const scrollToDialogue = () => {
    const el = document.getElementById(s122DemoState.dialogueAnchor);
    if (el) scrollBelowChrome(el);
  };

  const scrollToForm = () => {
    const form = document.getElementById(s122DemoState.formAnchor);
    const contact = document.getElementById('contact');
    const target = form ?? contact;
    if (target) scrollBelowChrome(target);
    const field = form?.querySelector<HTMLElement>('input, textarea, button');
    field?.focus({ preventScroll: true });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) scrollBelowChrome(el);
  };

  return (
    <div
      className="page-view page-view--direction page-view--s122"
      style={{ viewTransitionName: 'page-content' } as React.CSSProperties}
    >
      <main>
        <S122Hero onRequestDemo={scrollToDialogue} onDiscuss={scrollToContact} />
        <S122TrustBar />
        <S122Outcome />
        <S122Journey />
        <S122Scenarios />
        <S122Dialogue onRequestDemo={scrollToForm} />
        <S122Handoff />
        <S122Integration />
        <S122Analytics />
        <S122OnPrem />
        <S122Implementation />
        <S122Faq />
        <S122FinalCta />
      </main>
      <Footer />
    </div>
  );
}
