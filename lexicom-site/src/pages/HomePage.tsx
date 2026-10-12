import { useRef, useState } from 'react';
import { scrollBelowChrome } from '../hooks/scrollBelowChrome';
import { ClientMarquee } from '../components/ClientMarquee';
import { About } from '../components/About';
import { Cases } from '../components/Cases';
import { ChatWidget } from '../components/ChatWidget';
import { DemoSection } from '../components/DemoSection';
import { Directions } from '../components/Directions';
import { Products } from '../components/Products';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';
import { Government } from '../components/Government';
import { Hero } from '../components/Hero';
import { Implementation } from '../components/Implementation';
import { Metrics } from '../components/Metrics';
import { Solutions } from '../components/Solutions';

export function HomePage() {
  const [chatOpen, setChatOpen] = useState(false);
  const openChatRef = useRef<HTMLButtonElement>(null);

  const scrollToContact = () => {
    const contact = document.getElementById('contact');
    if (contact) scrollBelowChrome(contact);
  };

  return (
    <div className="page-view page-view--home" style={{ viewTransitionName: 'page-content' } as React.CSSProperties}>
      <main>
        <div className="hero-stack">
          <Hero onDiscussClick={scrollToContact} />
          <Metrics />
        </div>
        <Products />
        <Directions />
        <Solutions />
        <About />
        <Government />
        <Cases />
        <ClientMarquee />
        <Implementation />
        <FAQ />
        <DemoSection onOpenChat={() => setChatOpen(true)} openChatRef={openChatRef} />
      </main>
      <Footer />
      <ChatWidget open={chatOpen} onClose={() => setChatOpen(false)} returnFocusRef={openChatRef} />
    </div>
  );
}
