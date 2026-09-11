import { socialDemoState, socialPageMeta } from '../data/directions/social';
import { usePageMeta } from '../hooks/usePageMeta';
import { Footer } from '../components/Footer';
import { SocialAnalytics } from '../components/social/SocialAnalytics';
import { SocialCase } from '../components/social/SocialCase';
import { SocialDemo } from '../components/social/SocialDemo';
import { SocialFaq } from '../components/social/SocialFaq';
import { SocialFinalCta } from '../components/social/SocialFinalCta';
import { SocialHero } from '../components/social/SocialHero';
import { SocialImplementation } from '../components/social/SocialImplementation';
import { SocialIntegration } from '../components/social/SocialIntegration';
import { SocialKnowledge } from '../components/social/SocialKnowledge';
import { SocialProducts } from '../components/social/SocialProducts';
import { SocialScenarios } from '../components/social/SocialScenarios';
import { SocialSpecialist } from '../components/social/SocialSpecialist';
import { SocialTrustBar } from '../components/social/SocialTrustBar';
import { SocialVendor } from '../components/social/SocialVendor';

export function SocialPage() {
  usePageMeta(socialPageMeta);

  const scrollToForm = () => {
    const form = document.getElementById(socialDemoState.formAnchor);
    const contact = document.getElementById('contact');
    (form ?? contact)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const field = form?.querySelector<HTMLElement>('input, textarea, button');
    field?.focus({ preventScroll: true });
  };

  const scrollToDemo = () => {
    document.getElementById(socialDemoState.demoAnchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      className="page-view page-view--direction page-view--social"
      style={{ viewTransitionName: 'page-content' } as React.CSSProperties}
    >
      <main>
        <SocialHero onDiscuss={scrollToForm} onViewDemo={scrollToDemo} />
        <SocialTrustBar />
        <SocialProducts />
        <SocialScenarios />
        <SocialDemo onRequestDemo={scrollToForm} />
        <SocialKnowledge />
        <SocialSpecialist />
        <SocialAnalytics />
        <SocialIntegration />
        <SocialVendor />
        <SocialCase />
        <SocialImplementation />
        <SocialFaq />
        <SocialFinalCta />
      </main>
      <Footer />
    </div>
  );
}
