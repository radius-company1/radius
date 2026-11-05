import { useCallback } from 'react';
import {
  EkcAudiences,
  EkcCaseStudy,
  EkcFinalCta,
  EkcHero,
  EkcPlatform,
  EkcProcess,
  EkcScope,
  EkcStart,
  EkcTraining,
} from '../components/ekc/EkcSections';
import { TicketProductReference } from '../components/TicketProductReference';
import { Footer } from '../components/Footer';
import { ekcAnchors } from '../data/ekcPage';
import { scrollBelowChrome, scrollToProductForm } from '../hooks/scrollBelowChrome';

export function EkcPage() {

  const scrollToForm = useCallback(() => scrollToProductForm(ekcAnchors.finalTitle, ekcAnchors.form), []);
  const scrollToScope = useCallback(() => {
    const scope = document.getElementById(ekcAnchors.scope);
    const title = scope?.querySelector<HTMLElement>('h2') ?? scope;
    if (title) scrollBelowChrome(title);
  }, []);

  return (
    <div
      className="page-view page-view--product page-view--ekc"
      style={{ viewTransitionName: 'page-content' } as React.CSSProperties}
    >
      <main>
        <EkcHero onDiscuss={scrollToForm} onShowScope={scrollToScope} />
        <EkcAudiences />
        <EkcScope />
        <EkcProcess />
        <EkcPlatform />
        <TicketProductReference context="ekc" />
        <EkcTraining />
        <EkcStart />
        <EkcCaseStudy />
        <EkcFinalCta />
      </main>
      <Footer />
    </div>
  );
}
