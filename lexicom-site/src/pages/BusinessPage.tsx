import { useCallback, useRef, useState } from 'react';
import {
  BusinessFinalCta,
  BusinessFlexibility,
  BusinessHero,
  BusinessInfrastructure,
  BusinessLaunch,
  BusinessProducts,
  BusinessScenarios,
} from '../components/business/BusinessSections';
import { RzdCase } from '../components/business/RzdCase';
import { Footer } from '../components/Footer';
import { VideoDemoModal } from '../components/VideoDemoModal';
import { businessAnchors } from '../data/directions/business';
import type { ProductDemo } from '../data/productDemos';
import { scrollBelowChrome, scrollToProductForm } from '../hooks/scrollBelowChrome';

export function BusinessPage() {
  const [activeDemo, setActiveDemo] = useState<ProductDemo | null>(null);
  const returnFocusRef = useRef<HTMLButtonElement | null>(null);

  const scrollToForm = useCallback(() => scrollToProductForm(businessAnchors.finalTitle, businessAnchors.form), []);
  const scrollToScenarios = useCallback(() => {
    const section = document.getElementById(businessAnchors.scenarios);
    const title = section?.querySelector<HTMLElement>('h2') ?? section;
    if (title) scrollBelowChrome(title);
  }, []);

  const onOpenDemo = useCallback((demo: ProductDemo, trigger: HTMLButtonElement | null) => {
    returnFocusRef.current = trigger;
    setActiveDemo(demo);
  }, []);

  return (
    <div
      className="page-view page-view--direction page-view--business"
      style={{ viewTransitionName: 'page-content' } as React.CSSProperties}
    >
      <main>
        <BusinessHero onDiscuss={scrollToForm} onShowScenarios={scrollToScenarios} />
        <BusinessScenarios />
        <BusinessFlexibility onDiscuss={scrollToForm} />
        <BusinessProducts onOpenDemo={onOpenDemo} />
        <RzdCase />
        <BusinessInfrastructure />
        <BusinessLaunch />
        <BusinessFinalCta />
      </main>
      <Footer />
      <VideoDemoModal demo={activeDemo} onClose={() => setActiveDemo(null)} returnFocusRef={returnFocusRef} />
    </div>
  );
}
