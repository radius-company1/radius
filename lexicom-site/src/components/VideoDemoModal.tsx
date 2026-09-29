import { useEffect, useId, useRef, useState, type RefObject } from 'react';
import { createPortal } from 'react-dom';
import type { ProductDemo } from '../data/productDemos';
import { resolveDemoAsset } from '../data/productDemos';

type VideoDemoModalProps = {
  demo: ProductDemo | null;
  onClose: () => void;
  returnFocusRef?: RefObject<HTMLElement | null>;
};

export function VideoDemoModal({ demo, onClose, returnFocusRef }: VideoDemoModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const wasOpenRef = useRef(false);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (!demo) {
      const video = videoRef.current;
      if (video) {
        video.pause();
        video.removeAttribute('src');
        video.src = '';
        while (video.firstChild) video.removeChild(video.firstChild);
        video.load();
      }
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
    if (video) {
      video.pause();
      while (video.firstChild) video.removeChild(video.firstChild);
      const source = document.createElement('source');
      source.src = resolveDemoAsset(demo.src);
      source.type = 'video/mp4';
      video.appendChild(source);
      video.load();
      const tryPlay = () => {
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
      dialog.removeEventListener('cancel', onCancel);
      document.body.classList.remove('video-demo-open');
      const v = videoRef.current;
      if (v) {
        v.pause();
        while (v.firstChild) v.removeChild(v.firstChild);
        v.removeAttribute('src');
        v.src = '';
        v.load();
      }
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
            onError={() => setLoadError(true)}
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
