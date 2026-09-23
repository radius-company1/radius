import { utilitiesDemoState, utilitiesPageMeta } from '../data/directions/utilities';
import { usePageMeta } from '../hooks/usePageMeta';
import { Footer } from '../components/Footer';
import { UtilitiesAnalytics } from '../components/utilities/UtilitiesAnalytics';
import { UtilitiesCase } from '../components/utilities/UtilitiesCase';
import { UtilitiesDemo } from '../components/utilities/UtilitiesDemo';
import { UtilitiesFaq } from '../components/utilities/UtilitiesFaq';
import { UtilitiesFinalCta } from '../components/utilities/UtilitiesFinalCta';
import { UtilitiesHero } from '../components/utilities/UtilitiesHero';
import { UtilitiesImplementation } from '../components/utilities/UtilitiesImplementation';
import { UtilitiesIntegration } from '../components/utilities/UtilitiesIntegration';
import { UtilitiesMassInfo } from '../components/utilities/UtilitiesMassInfo';
import { UtilitiesProducts } from '../components/utilities/UtilitiesProducts';
import { UtilitiesScenarios } from '../components/utilities/UtilitiesScenarios';
import { UtilitiesSpecialist } from '../components/utilities/UtilitiesSpecialist';
import { UtilitiesTrustBar } from '../components/utilities/UtilitiesTrustBar';
import { UtilitiesProofStrip } from '../components/utilities/UtilitiesProofStrip';
import { UtilitiesVendor } from '../components/utilities/UtilitiesVendor';

export function UtilitiesPage() {
  usePageMeta(utilitiesPageMeta);

  const scrollBelowChrome = (element: HTMLElement, onDone?: () => void) => {
    const desiredTop = () => {
      const chrome = document.querySelector('.app-chrome');
      const chromeBottom = chrome instanceof HTMLElement ? Math.ceil(chrome.getBoundingClientRect().bottom) : 0;
      return chromeBottom + 20;
    };

    const align = () => {
      const top = window.scrollY + element.getBoundingClientRect().top - desiredTop();
      window.scrollTo({ top: Math.max(0, top), behavior: 'instant' });
    };

    align();
    requestAnimationFrame(() => {
      align();
      requestAnimationFrame(() => {
        align();
        onDone?.();
      });
    });
  };

  const scrollToForm = () => {
    const title = document.getElementById('utilities-final-title');
    const contact = document.getElementById('contact');
    const form = document.getElementById(utilitiesDemoState.formAnchor);
    const target = title ?? contact ?? form;
    if (!target) return;
    scrollBelowChrome(target, () => {
      const field = form?.querySelector<HTMLElement>('input, textarea, button');
      field?.focus({ preventScroll: true });
    });
  };

  const scrollToDemo = () => {
    const demoTitle = document.getElementById('utilities-demo-title');
    const demo = document.getElementById(utilitiesDemoState.demoAnchor);
    const target = demoTitle ?? demo;
    if (target) scrollBelowChrome(target);
  };

  return (
    <div
      className="page-view page-view--direction page-view--utilities"
      style={{ viewTransitionName: 'page-content' } as React.CSSProperties}
    >
      <main>
        <UtilitiesHero onDiscuss={scrollToForm} onViewDemo={scrollToDemo} />
        <UtilitiesTrustBar />
        <UtilitiesProducts />
        <UtilitiesDemo onRequestDemo={scrollToForm} />
        <UtilitiesScenarios />
        <UtilitiesMassInfo />
        <UtilitiesSpecialist />
        <UtilitiesAnalytics />
        <UtilitiesIntegration />
        <UtilitiesVendor />
        <UtilitiesCase />
        <UtilitiesImplementation />
        <UtilitiesProofStrip />
        <UtilitiesFaq />
        <UtilitiesFinalCta />
      </main>
      <Footer />
    </div>
  );
}
