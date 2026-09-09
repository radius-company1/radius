import { eddsDemoState, eddsPageMeta } from '../data/directions/edds';
import { usePageMeta } from '../hooks/usePageMeta';
import { Footer } from '../components/Footer';
import { EddsAnalytics } from '../components/edds/EddsAnalytics';
import { EddsCase } from '../components/edds/EddsCase';
import { EddsChallenges } from '../components/edds/EddsChallenges';
import { EddsDemo } from '../components/edds/EddsDemo';
import { EddsFaq } from '../components/edds/EddsFaq';
import { EddsFinalCta } from '../components/edds/EddsFinalCta';
import { EddsHandoff } from '../components/edds/EddsHandoff';
import { EddsHero } from '../components/edds/EddsHero';
import { EddsImplementation } from '../components/edds/EddsImplementation';
import { EddsIntegration } from '../components/edds/EddsIntegration';
import { EddsProducts } from '../components/edds/EddsProducts';
import { EddsScenarios } from '../components/edds/EddsScenarios';
import { EddsTrustBar } from '../components/edds/EddsTrustBar';
import { EddsVendor } from '../components/edds/EddsVendor';

export function EddsPage() {
  usePageMeta(eddsPageMeta);

  const scrollToForm = () => {
    const form = document.getElementById(eddsDemoState.formAnchor);
    const contact = document.getElementById('contact');
    (form ?? contact)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const field = form?.querySelector<HTMLElement>('input, textarea, button');
    field?.focus({ preventScroll: true });
  };

  const scrollToScenarios = () => {
    document.getElementById(eddsDemoState.scenariosAnchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      className="page-view page-view--direction page-view--edds"
      style={{ viewTransitionName: 'page-content' } as React.CSSProperties}
    >
      <main>
        <EddsHero onDiscuss={scrollToForm} onViewScenarios={scrollToScenarios} />
        <EddsTrustBar />
        <EddsChallenges />
        <EddsProducts />
        <EddsScenarios />
        <EddsDemo onRequestDemo={scrollToForm} />
        <EddsHandoff />
        <EddsIntegration />
        <EddsAnalytics />
        <EddsVendor />
        <EddsCase />
        <EddsImplementation />
        <EddsFaq />
        <EddsFinalCta onDiscuss={scrollToForm} />
      </main>
      <Footer />
    </div>
  );
}
