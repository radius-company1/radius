import { forwardRef } from 'react';
import type { ProductDemo } from '../data/productDemos';
import { resolveDemoAsset } from '../data/productDemos';

type ProductDemoTriggerProps = {
  demo: ProductDemo;
  onOpen: () => void;
};

export const ProductDemoTrigger = forwardRef<HTMLButtonElement, ProductDemoTriggerProps>(
  function ProductDemoTrigger({ demo, onOpen }, ref) {
    return (
      <button
        ref={ref}
        type="button"
        className="product-demo-trigger"
        onClick={onOpen}
        aria-label={`${demo.ctaLabel}, длительность ${demo.durationLabel}`}
      >
        <span className="product-demo-trigger__thumb" aria-hidden="true">
          <img src={resolveDemoAsset(demo.poster)} alt="" width={120} height={68} loading="lazy" decoding="async" />
          <span className="product-demo-trigger__play">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <circle cx="12" cy="12" r="11" fill="currentColor" opacity="0.92" />
              <path d="M10 8.2v7.6L16.5 12 10 8.2z" fill="#0c1020" />
            </svg>
          </span>
        </span>
        <span className="product-demo-trigger__copy">
          <span className="product-demo-trigger__label">{demo.ctaLabel}</span>
          {demo.note ? <span className="product-demo-trigger__note">{demo.note}</span> : null}
          <span className="product-demo-trigger__meta">{demo.durationLabel}</span>
        </span>
      </button>
    );
  },
);
