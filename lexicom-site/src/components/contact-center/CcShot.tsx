import type { ContactCenterShot } from '../../data/contactCenterPage';
import { resolveDemoAsset } from '../../data/productDemos';

type CcShotProps = {
  shot: ContactCenterShot;
  onOpen: (shot: ContactCenterShot, trigger: HTMLButtonElement) => void;
  sizes: string;
  priority?: boolean;
  className?: string;
};

export function CcShot({ shot, onOpen, sizes, priority = false, className = '' }: CcShotProps) {
  return (
    <button
      type="button"
      className={`cc-shot ${className}`.trim()}
      onClick={(event) => onOpen(shot, event.currentTarget)}
      aria-label={`Увеличить: ${shot.caption}`}
    >
      <span className="cc-shot__frame">
        <img
          src={resolveDemoAsset(shot.srcSmall)}
          srcSet={`${resolveDemoAsset(shot.srcSmall)} 960w, ${resolveDemoAsset(shot.src)} 1920w`}
          sizes={sizes}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      </span>
      <span className="cc-shot__zoom" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
          <circle cx="10.5" cy="10.5" r="6" stroke="currentColor" strokeWidth="1.8" />
          <path d="M15 15l4.5 4.5M10.5 8v5M8 10.5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        Увеличить
      </span>
    </button>
  );
}
