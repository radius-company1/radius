import { useCallback, useRef, useState } from 'react';
import { Footer } from '../components/Footer';
import { ImageLightbox, type LightboxImage } from '../components/ImageLightbox';
import { PrHero } from '../components/protocol/PrHero';
import {
  PrCapabilities,
  PrFaq,
  PrFinalCta,
  PrInfrastructure,
  PrProcess,
  PrUseCases,
} from '../components/protocol/PrSections';
import { SaSplit } from '../components/speech-analytics/SaSplit';
import { VideoDemoModal } from '../components/VideoDemoModal';
import { productDemoById, resolveDemoAsset, type ProductDemo } from '../data/productDemos';
import {
  prProtocolPoints,
  prProtocolShot,
  protocolAnchors,
  protocolPageMeta,
  type ProtocolShot,
} from '../data/protocolPage';
import { scrollToProductForm } from '../hooks/scrollBelowChrome';
import { usePageMeta } from '../hooks/usePageMeta';

const protocolDemo = productDemoById.protocol;

export function ProtocolPage() {
  usePageMeta(protocolPageMeta);

  const [activeDemo, setActiveDemo] = useState<ProductDemo | null>(null);
  const [activeImage, setActiveImage] = useState<LightboxImage | null>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const closeDemo = useCallback(() => setActiveDemo(null), []);
  const closeImage = useCallback(() => setActiveImage(null), []);

  const openDemo = useCallback((trigger: HTMLButtonElement) => {
    returnFocusRef.current = trigger;
    setActiveDemo(protocolDemo);
  }, []);

  const openShot = useCallback((shot: ProtocolShot, trigger: HTMLButtonElement) => {
    returnFocusRef.current = trigger;
    setActiveImage({
      src: resolveDemoAsset(shot.src),
      alt: shot.alt,
      caption: shot.caption,
      width: shot.width,
      height: shot.height,
    });
  }, []);

  const scrollToForm = useCallback(() => scrollToProductForm(protocolAnchors.finalTitle, protocolAnchors.form), []);

  return (
    <div
      className="page-view page-view--product page-view--protocol"
      style={{ viewTransitionName: 'page-content' } as React.CSSProperties}
    >
      <main>
        <PrHero onWatchVideo={openDemo} onDiscuss={scrollToForm} onOpenShot={openShot} />
        <PrProcess />
        <PrCapabilities />
        <SaSplit
          id="pr-protocol"
          title="Протокол по стенограмме"
          description="Отправляете стенограмму и получаете готовый протокол встречи."
          points={prProtocolPoints}
          shot={prProtocolShot}
          onOpenShot={openShot}
        />
        <PrUseCases />
        <PrInfrastructure />
        <PrFaq />
        <PrFinalCta />
      </main>
      <Footer />
      <VideoDemoModal demo={activeDemo} onClose={closeDemo} returnFocusRef={returnFocusRef} />
      <ImageLightbox image={activeImage} onClose={closeImage} returnFocusRef={returnFocusRef} />
    </div>
  );
}
