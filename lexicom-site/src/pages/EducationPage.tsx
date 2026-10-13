import { useCallback, useRef, useState } from 'react';
import { CaseStudy } from '../components/CaseStudy';
import {
  EducationAnalytics,
  EducationFinalCta,
  EducationHero,
  EducationInfrastructure,
  EducationKnowledge,
  EducationLaunch,
  EducationProducts,
  EducationScenarios,
  EducationTasks,
} from '../components/education/EducationSections';
import { Footer } from '../components/Footer';
import { VideoDemoModal } from '../components/VideoDemoModal';
import { educationAnchors, educationCase, educationPageMeta } from '../data/directions/education';
import type { ProductDemo } from '../data/productDemos';
import { scrollBelowChrome, scrollToProductForm } from '../hooks/scrollBelowChrome';
import { usePageMeta } from '../hooks/usePageMeta';

export function EducationPage() {
  usePageMeta(educationPageMeta);
  const [activeDemo, setActiveDemo] = useState<ProductDemo | null>(null);
  const returnFocusRef = useRef<HTMLButtonElement | null>(null);

  const scrollToForm = useCallback(
    () => scrollToProductForm(educationAnchors.finalTitle, educationAnchors.form),
    [],
  );

  const scrollToTasks = useCallback(() => {
    const section = document.getElementById(educationAnchors.tasks);
    const title = section?.querySelector<HTMLElement>('h2') ?? section;
    if (title) scrollBelowChrome(title);
  }, []);

  const onOpenDemo = useCallback((demo: ProductDemo, trigger: HTMLButtonElement | null) => {
    returnFocusRef.current = trigger;
    setActiveDemo(demo);
  }, []);

  return (
    <div
      className="page-view page-view--direction page-view--education"
      style={{ viewTransitionName: 'page-content' } as React.CSSProperties}
    >
      <main>
        <EducationHero onDiscuss={scrollToForm} onShowTasks={scrollToTasks} />
        <EducationTasks />
        <EducationProducts onOpenDemo={onOpenDemo} />
        <EducationScenarios />
        <EducationKnowledge />
        <EducationAnalytics />
        <EducationInfrastructure />
        <EducationLaunch />
        <CaseStudy data={educationCase} />
        <EducationFinalCta />
      </main>
      <Footer />
      <VideoDemoModal demo={activeDemo} onClose={() => setActiveDemo(null)} returnFocusRef={returnFocusRef} />
    </div>
  );
}
