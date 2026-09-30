import { useCallback, useRef, useState } from 'react';
import { Footer } from '../components/Footer';
import { ImageLightbox, type LightboxImage } from '../components/ImageLightbox';
import { SaCapabilities } from '../components/speech-analytics/SaCapabilities';
import { SaFaq, SaFinalCta } from '../components/speech-analytics/SaFaqAndForm';
import { SaHero } from '../components/speech-analytics/SaHero';
import { SaIndustries } from '../components/speech-analytics/SaIndustries';
import { SaInfrastructure } from '../components/speech-analytics/SaInfrastructure';
import { SaReview } from '../components/speech-analytics/SaReview';
import { SaSplit } from '../components/speech-analytics/SaSplit';
import { SaTeamwork } from '../components/speech-analytics/SaTeamwork';
import { VideoDemoModal } from '../components/VideoDemoModal';
import { productDemoById, resolveDemoAsset, type ProductDemo } from '../data/productDemos';
import {
  saDashboardPoints,
  saDashboardShot,
  saQualityPoints,
  saQualityShot,
  speechAnalyticsAnchors,
  speechAnalyticsPageMeta,
  type SpeechAnalyticsShot,
} from '../data/speechAnalyticsPage';
import { scrollToProductForm } from '../hooks/scrollBelowChrome';
import { usePageMeta } from '../hooks/usePageMeta';

const speechAnalyticsDemo = productDemoById['speech-analytics'];

export function SpeechAnalyticsPage() {
  usePageMeta(speechAnalyticsPageMeta);

  const [activeDemo, setActiveDemo] = useState<ProductDemo | null>(null);
  const [activeImage, setActiveImage] = useState<LightboxImage | null>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const closeDemo = useCallback(() => setActiveDemo(null), []);
  const closeImage = useCallback(() => setActiveImage(null), []);

  const openDemo = useCallback((trigger: HTMLButtonElement) => {
    returnFocusRef.current = trigger;
    setActiveDemo(speechAnalyticsDemo);
  }, []);

  const openShot = useCallback((shot: SpeechAnalyticsShot, trigger: HTMLButtonElement) => {
    returnFocusRef.current = trigger;
    setActiveImage({
      src: resolveDemoAsset(shot.src),
      alt: shot.alt,
      caption: shot.caption,
      width: shot.width,
      height: shot.height,
    });
  }, []);

  const scrollToForm = useCallback(
    () => scrollToProductForm(speechAnalyticsAnchors.finalTitle, speechAnalyticsAnchors.form),
    [],
  );

  return (
    <div
      className="page-view page-view--product page-view--speech-analytics"
      style={{ viewTransitionName: 'page-content' } as React.CSSProperties}
    >
      <main>
        <SaHero onWatchVideo={openDemo} onDiscuss={scrollToForm} onOpenShot={openShot} />
        <SaCapabilities />
        <SaReview onOpenShot={openShot} />
        <SaSplit
          id="sa-quality"
          title="Оценка по вашим чек-листам"
          description="Критерии, веса и критические нарушения задаёте вы. Каждый разговор проверяется по одним и тем же правилам."
          points={saQualityPoints}
          shot={saQualityShot}
          onOpenShot={openShot}
        />
        <SaSplit
          id="sa-dashboards"
          title="Картина по всем обращениям"
          description="Дашборды для руководителя: что происходит в обслуживании и где нужны изменения."
          points={saDashboardPoints}
          shot={saDashboardShot}
          onOpenShot={openShot}
          reverse
        />
        <SaTeamwork />
        <SaIndustries />
        <SaInfrastructure />
        <SaFaq />
        <SaFinalCta />
      </main>
      <Footer />
      <VideoDemoModal demo={activeDemo} onClose={closeDemo} returnFocusRef={returnFocusRef} />
      <ImageLightbox image={activeImage} onClose={closeImage} returnFocusRef={returnFocusRef} />
    </div>
  );
}
