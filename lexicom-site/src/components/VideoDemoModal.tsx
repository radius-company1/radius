import { useEffect, useId, useRef, useState, type RefObject } from 'react';
import { createPortal } from 'react-dom';
import type { ProductDemo } from '../data/productDemos';
import { resolveDemoAsset } from '../data/productDemos';

type VideoDemoModalProps = {
  demo: ProductDemo | null;
  onClose: () => void;
  returnFocusRef?: RefObject<HTMLElement | null>;
};

function clearVideo(video: HTMLVideoElement) {
  video.pause();
  video.removeAttribute('src');
  while (video.firstChild) video.removeChild(video.firstChild);
  // Do not call video.load() on an empty element — browsers fire a spurious error.
}

export function VideoDemoModal({ demo, onClose, returnFocusRef }: VideoDemoModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const wasOpenRef = useRef(false);
  /** Only surface media errors from an intentional demo load, not from teardown. */
  const acceptErrorsRef = useRef(false);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (!demo) {
      acceptErrorsRef.current = false;
      const video = videoRef.current;
      if (video) clearVideo(video);
      if (dialog.open) dialog.close();
      document.body.classList.remove('video-demo-open');
      if (wasOpenRef.current) {
        const target = returnFocusRef?.current;
        if (target && typeof target.focus === 'function') {
          window.requestAnimationFrame(() => target.focus());
        }
      }
      wasOpenRef.current = false;
      setLoadError(false);
      return;
    }

    wasOpenRef.current = true;
    setLoadError(false);
    document.body.classList.add('video-demo-open');
    if (!dialog.open) dialog.showModal();

    const video = videoRef.current;
    const src = resolveDemoAsset(demo.src);

    if (video) {
      acceptErrorsRef.current = false;
      clearVideo(video);
      acceptErrorsRef.current = true;
      video.src = src;
      video.load();
      const tryPlay = () => {
        if (!acceptErrorsRef.current) return;
        void video.play().catch(() => {
          /* Autoplay may be blocked — native Play remains. */
        });
      };
      video.addEventListener('loadeddata', tryPlay, { once: true });
    }

    window.requestAnimationFrame(() => closeRef.current?.focus());

    const onCancel = (event: Event) => {
      event.preventDefault();
      onClose();
    };
    dialog.addEventListener('cancel', onCancel);
    return () => {
      acceptErrorsRef.current = false;
      dialog.removeEventListener('cancel', onCancel);
      document.body.classList.remove('video-demo-open');
      if (videoRef.current) clearVideo(videoRef.current);
      if (dialog.open) dialog.close();
    };
  }, [demo, onClose, returnFocusRef]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <dialog
      ref={dialogRef}
      className="video-demo-dialog"
      aria-labelledby={titleId}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
    >
      <div className="video-demo-panel" role="document" onClick={(event) => event.stopPropagation()}>
        <header className="video-demo-panel__header">
          <h2 className="video-demo-panel__title" id={titleId}>
            {demo?.title ?? 'Видеодемонстрация'}
          </h2>
          <button
            ref={closeRef}
            type="button"
            className="video-demo-panel__close"
            aria-label="Закрыть видео"
            onClick={onClose}
          >
            ×
          </button>
        </header>

        <div className="video-demo-panel__stage">
          <video
            ref={videoRef}
            className="video-demo-panel__video"
            controls
            playsInline
            preload="metadata"
            poster={demo ? resolveDemoAsset(demo.poster) : undefined}
            onError={() => {
              if (!acceptErrorsRef.current) return;
              if (!videoRef.current?.getAttribute('src')) return;
              setLoadError(true);
            }}
          />
          {loadError ? (
            <p className="video-demo-panel__error" role="alert">
              Не удалось загрузить видео. Проверьте соединение и попробуйте снова.
            </p>
          ) : null}
        </div>
      </div>
    </dialog>,
    document.body,
  );
}
