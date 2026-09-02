import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ClientMarquee } from '../components/ClientMarquee';
import { About } from '../components/About';
import { Benefits } from '../components/Benefits';
import { Cases } from '../components/Cases';
import { ChatWidget } from '../components/ChatWidget';
import { DemoSection } from '../components/DemoSection';
import { Directions } from '../components/Directions';
import { Products } from '../components/Products';
import { FAQ } from '../components/FAQ';
import { Flexibility } from '../components/Flexibility';
import { Footer } from '../components/Footer';
import { Government } from '../components/Government';
import { Hero } from '../components/Hero';
import { Implementation } from '../components/Implementation';
import { Metrics } from '../components/Metrics';
import { Roadmap } from '../components/Roadmap';
import { Solutions } from '../components/Solutions';

export function HomePage() {
  const location = useLocation();
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace('#', '');
    window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [location.hash]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
        <Benefits />
        <Flexibility />
        <Cases />
        <ClientMarquee />
        <About />
        <Government />
        <Implementation />
        <Roadmap />
        <FAQ />
        <DemoSection onOpenChat={() => setChatOpen(true)} onDiscussClick={scrollToContact} />
      </main>
      <Footer />
      <ChatWidget open={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
}
