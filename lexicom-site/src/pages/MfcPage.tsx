import { useState } from 'react';
import { mfcPageMeta } from '../data/directions/mfc';
import { usePageMeta } from '../hooks/usePageMeta';
import { ChatWidget } from '../components/ChatWidget';
import { Footer } from '../components/Footer';
import { MfcAnalytics } from '../components/mfc/MfcAnalytics';
import { MfcCitizenTopics } from '../components/mfc/MfcCitizenTopics';
import { MfcDemoShowcase } from '../components/mfc/MfcDemoShowcase';
import { MfcEcosystem } from '../components/mfc/MfcEcosystem';
import { MfcExperience } from '../components/mfc/MfcExperience';
import { MfcFaq } from '../components/mfc/MfcFaq';
import { MfcFinalCta } from '../components/mfc/MfcFinalCta';
import { MfcFlow } from '../components/mfc/MfcFlow';
import { MfcHero } from '../components/mfc/MfcHero';
import { MfcImplementation } from '../components/mfc/MfcImplementation';
import { MfcIntegration } from '../components/mfc/MfcIntegration';
import { MfcOnPrem } from '../components/mfc/MfcOnPrem';
import { MfcScenarios } from '../components/mfc/MfcScenarios';

export function MfcPage() {
  const [chatOpen, setChatOpen] = useState(false);

  usePageMeta(mfcPageMeta);

  const openChat = () => setChatOpen(true);
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="page-view page-view--direction page-view--mfc" style={{ viewTransitionName: 'page-content' } as React.CSSProperties}>
      <main>
        <MfcHero onTalkToLexa={openChat} onDiscuss={scrollToContact} />
        <MfcCitizenTopics />
        <MfcEcosystem />
        <MfcScenarios />
        <MfcFlow />
        <MfcIntegration />
        <MfcAnalytics />
        <MfcOnPrem />
        <MfcExperience />
        <MfcImplementation />
        <MfcDemoShowcase onRequestDemo={scrollToContact} />
        <MfcFaq />
        <MfcFinalCta onTalkToLexa={openChat} />
      </main>
      <Footer />
      <ChatWidget open={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
}
