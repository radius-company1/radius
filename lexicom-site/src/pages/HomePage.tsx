import { useRef, useState } from 'react';
import { ClientMarquee } from '../components/ClientMarquee';
import { About } from '../components/About';
import { Cases } from '../components/Cases';
import { ChatWidget } from '../components/ChatWidget';
import { DemoSection } from '../components/DemoSection';
import { Directions } from '../components/Directions';
import { LexaDemo } from '../components/LexaDemo';
import { DesignProducts as Products } from '../components/DesignProducts';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';
import { Government } from '../components/Government';
import { DesignHero as Hero } from '../components/DesignHero';
import { Implementation } from '../components/Implementation';
import { Solutions } from '../components/Solutions';
import { DemoShowcase } from '../components/DemoShowcase';
import '../styles/final-experiment.css';

export function HomePage() {
  const [chatOpen, setChatOpen] = useState(false);
  const openChatRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="page-view page-view--home page-view--final" style={{ viewTransitionName: 'page-content' } as React.CSSProperties}>
      <main>
        <Hero />
        <Products />
        <Solutions />
        <Directions />
        <DemoShowcase />
        <LexaDemo />
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
