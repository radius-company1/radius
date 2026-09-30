import { useCallback, useRef, useState } from 'react';
import { Footer } from '../components/Footer';
import { NbCapabilities } from '../components/neurobot/NbCapabilities';
import { NbChannels } from '../components/neurobot/NbChannels';
import { NbFaq, NbFinalCta } from '../components/neurobot/NbFaqAndForm';
import { NbHero } from '../components/neurobot/NbHero';
import { NbIndustries } from '../components/neurobot/NbIndustries';
import { NbInfrastructure } from '../components/neurobot/NbInfrastructure';
import { NbProcess } from '../components/neurobot/NbProcess';
import { NbTeamwork } from '../components/neurobot/NbTeamwork';
import { VideoDemoModal } from '../components/VideoDemoModal';
import { neurobotAnchors, neurobotPageMeta } from '../data/neurobotPage';
import { productDemoById, type ProductDemo } from '../data/productDemos';
import { scrollToProductForm } from '../hooks/scrollBelowChrome';
import { usePageMeta } from '../hooks/usePageMeta';

const neurobotDemo = productDemoById.neurobot;

export function NeurobotPage() {
  usePageMeta(neurobotPageMeta);

  const [activeDemo, setActiveDemo] = useState<ProductDemo | null>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const closeDemo = useCallback(() => setActiveDemo(null), []);
  const openDemo = useCallback((trigger: HTMLButtonElement) => {
    returnFocusRef.current = trigger;
    setActiveDemo(neurobotDemo);
  }, []);
  const scrollToForm = useCallback(() => scrollToProductForm(neurobotAnchors.finalTitle, neurobotAnchors.form), []);

  return (
    <div
      className="page-view page-view--product page-view--neurobot"
      style={{ viewTransitionName: 'page-content' } as React.CSSProperties}
    >
      <main>
        <NbHero onPlay={openDemo} onDiscuss={scrollToForm} />
        <NbChannels />
        <NbCapabilities />
        <NbProcess />
        <NbTeamwork />
        <NbIndustries />
        <NbInfrastructure />
        <NbFaq />
        <NbFinalCta />
      </main>
      <Footer />
      <VideoDemoModal demo={activeDemo} onClose={closeDemo} returnFocusRef={returnFocusRef} />
    </div>
  );
}
