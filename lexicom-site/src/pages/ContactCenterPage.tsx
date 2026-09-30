import { useCallback, useRef, useState } from 'react';
import { CcChannels } from '../components/contact-center/CcChannels';
import { CcConfigs } from '../components/contact-center/CcConfigs';
import { CcFinalCta } from '../components/contact-center/CcFinalCta';
import { CcHero } from '../components/contact-center/CcHero';
import { CcInfrastructure } from '../components/contact-center/CcInfrastructure';
import { CcLaunch } from '../components/contact-center/CcLaunch';
import { CcPrompter } from '../components/contact-center/CcPrompter';
import { CcSupervisor } from '../components/contact-center/CcSupervisor';
import { CcWorkspace } from '../components/contact-center/CcWorkspace';
import { Footer } from '../components/Footer';
import { ImageLightbox, type LightboxImage } from '../components/ImageLightbox';
import { VideoDemoModal } from '../components/VideoDemoModal';
import {
  contactCenterAnchors,
  contactCenterPageMeta,
  type ContactCenterShot,
} from '../data/contactCenterPage';
import { productDemoById, resolveDemoAsset, type ProductDemo } from '../data/productDemos';
import { usePageMeta } from '../hooks/usePageMeta';
import { scrollToProductForm } from '../hooks/scrollBelowChrome';

const contactCenterDemo = productDemoById['contact-center'];

export function ContactCenterPage() {
  usePageMeta(contactCenterPageMeta);

  const [activeDemo, setActiveDemo] = useState<ProductDemo | null>(null);
  const [activeImage, setActiveImage] = useState<LightboxImage | null>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const closeDemo = useCallback(() => setActiveDemo(null), []);
  const closeImage = useCallback(() => setActiveImage(null), []);

  const openDemo = useCallback((trigger: HTMLButtonElement) => {
    returnFocusRef.current = trigger;
    setActiveDemo(contactCenterDemo);
  }, []);

  const openShot = useCallback((shot: ContactCenterShot, trigger: HTMLButtonElement) => {
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
    () => scrollToProductForm(contactCenterAnchors.finalTitle, contactCenterAnchors.form),
    [],
  );

  return (
    <div
      className="page-view page-view--product page-view--contact-center"
      style={{ viewTransitionName: 'page-content' } as React.CSSProperties}
    >
      <main>
        <CcHero onWatchVideo={openDemo} onDiscuss={scrollToForm} onOpenShot={openShot} />
        <CcWorkspace onOpenShot={openShot} />
        <CcChannels />
        <CcPrompter />
        <CcSupervisor onOpenShot={openShot} />
        <CcConfigs />
        <CcInfrastructure />
        <CcLaunch />
        <CcFinalCta />
      </main>
      <Footer />
      <VideoDemoModal demo={activeDemo} onClose={closeDemo} returnFocusRef={returnFocusRef} />
      <ImageLightbox image={activeImage} onClose={closeImage} returnFocusRef={returnFocusRef} />
    </div>
  );
}
