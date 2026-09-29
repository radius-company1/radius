import { useEffect, useId, useRef, useState, type RefObject } from 'react';
import { createPortal } from 'react-dom';

export type LightboxImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

type ImageLightboxProps = {
  image: LightboxImage | null;
  onClose: () => void;
  returnFocusRef?: RefObject<HTMLElement | null>;
};

export function ImageLightbox({ image, onClose, returnFocusRef }: ImageLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const wasOpenRef = useRef(false);
  const [actualSize, setActualSize] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (!image) {
      if (dialog.open) dialog.close();
      document.body.classList.remove('image-lightbox-open');
      if (wasOpenRef.current) {
        const target = returnFocusRef?.current;
        if (target && typeof target.focus === 'function') {
          window.requestAnimationFrame(() => target.focus());
        }
      }
      wasOpenRef.current = false;
      setActualSize(false);
      return;
    }

    wasOpenRef.current = true;
    setActualSize(false);
    document.body.classList.add('image-lightbox-open');
    if (!dialog.open) dialog.showModal();
    window.requestAnimationFrame(() => closeRef.current?.focus());

    const onCancel = (event: Event) => {
      event.preventDefault();
      onClose();
    };
    dialog.addEventListener('cancel', onCancel);
    return () => {
      dialog.removeEventListener('cancel', onCancel);
      document.body.classList.remove('image-lightbox-open');
      if (dialog.open) dialog.close();
    };
  }, [image, onClose, returnFocusRef]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <dialog
      ref={dialogRef}
      className="image-lightbox"
      aria-labelledby={titleId}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
    >
      <div className="image-lightbox__panel" role="document">
        <header className="image-lightbox__header">
          <h2 className="image-lightbox__title" id={titleId}>
            {image?.caption ?? 'Интерфейс'}
          </h2>
          <div className="image-lightbox__tools">
            <button
              type="button"
              className="image-lightbox__zoom"
              aria-pressed={actualSize}
              onClick={() => setActualSize((value) => !value)}
            >
              {actualSize ? 'Вписать в экран' : 'Исходный размер'}
            </button>
            <button
              ref={closeRef}
              type="button"
              className="image-lightbox__close"
              aria-label="Закрыть изображение"
              onClick={onClose}
            >
              ×
            </button>
          </div>
        </header>
        <div className={`image-lightbox__stage ${actualSize ? 'is-actual' : ''}`}>
          {image ? (
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              decoding="async"
            />
          ) : null}
        </div>
      </div>
    </dialog>,
    document.body,
  );
}
