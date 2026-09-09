import { s122DemoState, s122PageMeta } from '../data/directions/s122';
import { usePageMeta } from '../hooks/usePageMeta';
import { Footer } from '../components/Footer';
import { S122Analytics } from '../components/s122/S122Analytics';
import { S122CitizenTopics } from '../components/s122/S122CitizenTopics';
import { S122DemoShowcase } from '../components/s122/S122DemoShowcase';
import { S122Ecosystem } from '../components/s122/S122Ecosystem';
import { S122Experience } from '../components/s122/S122Experience';
import { S122Faq } from '../components/s122/S122Faq';
import { S122FinalCta } from '../components/s122/S122FinalCta';
import { S122Flow } from '../components/s122/S122Flow';
import { S122Hero } from '../components/s122/S122Hero';
import { S122Implementation } from '../components/s122/S122Implementation';
import { S122Integration } from '../components/s122/S122Integration';
import { S122OnPrem } from '../components/s122/S122OnPrem';
import { S122Scenarios } from '../components/s122/S122Scenarios';

export function S122Page() {
  usePageMeta(s122PageMeta);

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
        <S122Hero onRequestDemo={scrollToForm} onDiscuss={scrollToContact} />
        <S122Ecosystem />
        <S122CitizenTopics />
        <S122Scenarios />
        <S122DemoShowcase onRequestDemo={scrollToForm} />
        <S122Flow />
        <S122Integration />
        <S122Analytics />
        <S122OnPrem />
        <S122Experience />
        <S122Implementation />
        <S122Faq />
        <S122FinalCta onRequestDemo={scrollToForm} />
      </main>
      <Footer />
    </div>
  );
}
