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
import { UtilitiesVendor } from '../components/utilities/UtilitiesVendor';

export function UtilitiesPage() {
  usePageMeta(utilitiesPageMeta);

  const scrollToForm = () => {
    const form = document.getElementById(utilitiesDemoState.formAnchor);
    const contact = document.getElementById('contact');
    (form ?? contact)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const field = form?.querySelector<HTMLElement>('input, textarea, button');
    field?.focus({ preventScroll: true });
  };

  const scrollToDemo = () => {
    document.getElementById(utilitiesDemoState.demoAnchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
        <UtilitiesFaq />
        <UtilitiesFinalCta />
      </main>
      <Footer />
    </div>
  );
}
