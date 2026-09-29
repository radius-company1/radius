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

const contactCenterDemo = productDemoById['contact-center'];

function scrollBelowChrome(element: HTMLElement, onDone?: () => void) {
  const desiredTop = () => {
    const chrome = document.querySelector('.app-chrome');
    const chromeBottom = chrome instanceof HTMLElement ? Math.ceil(chrome.getBoundingClientRect().bottom) : 0;
    return chromeBottom + 20;
  };

  const align = () => {
    const top = window.scrollY + element.getBoundingClientRect().top - desiredTop();
    window.scrollTo({ top: Math.max(0, top), behavior: 'instant' });
  };

  // Re-align after layout settles: the chrome shrinks once the page is scrolled.
  align();
  requestAnimationFrame(() => {
    align();
    requestAnimationFrame(() => {
      align();
      onDone?.();
    });
  });
}

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

  const scrollToForm = useCallback(() => {
    const title = document.getElementById(contactCenterAnchors.finalTitle);
    const form = document.getElementById(contactCenterAnchors.form);
    const target = title ?? form;
    if (!target) return;
    scrollBelowChrome(target, () => {
      form?.querySelector<HTMLElement>('input:not([type="hidden"]), textarea')?.focus({ preventScroll: true });
    });
  }, []);

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
