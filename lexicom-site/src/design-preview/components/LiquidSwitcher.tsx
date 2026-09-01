import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { previewThemes, type PreviewThemeId } from '../themes';
import './LiquidSwitcher.css';

type LiquidSwitcherProps = {
  active: PreviewThemeId;
  onChange: (id: PreviewThemeId) => void;
};

type LensState = {
  left: number;
  width: number;
  skew: number;
  stretch: number;
  morph: string;
};

const MORPH_REST = '58% 42% 54% 46% / 48% 52% 48% 52%';
const MORPH_HOVER = '62% 38% 56% 44% / 44% 56% 42% 58%';
const MORPH_MOVE = '64% 36% 58% 42% / 42% 58% 40% 60%';

export function LiquidSwitcher({ active, onChange }: LiquidSwitcherProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const prevIndexRef = useRef(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [ready, setReady] = useState(false);
  const [moving, setMoving] = useState(false);
  const [lens, setLens] = useState<LensState>({
    left: 0,
    width: 0,
    skew: 0,
    stretch: 0,
    morph: MORPH_REST,
  });

  const activeIndex = previewThemes.findIndex((t) => t.id === active);
  const safeActive = activeIndex >= 0 ? activeIndex : 0;
  const targetIndex = hoverIndex ?? safeActive;

  const updateLens = (isMoving = false) => {
    const track = trackRef.current;
    const item = itemRefs.current[targetIndex];
    if (!track || !item) return;

    const trackRect = track.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    const pad = 10;
    const direction = targetIndex - prevIndexRef.current;
    let stretch = 0;
    let skew = 0;

    if (hoverIndex !== null && hoverIndex !== safeActive) {
      stretch = 18;
      skew = hoverIndex > safeActive ? 4 : -4;
    } else if (isMoving && direction !== 0) {
      stretch = 22;
      skew = direction > 0 ? 6 : -6;
    }

    setLens({
      left: itemRect.left - trackRect.left - pad,
      width: itemRect.width + pad * 2 + stretch,
      skew,
      stretch,
      morph: isMoving ? MORPH_MOVE : hoverIndex !== null ? MORPH_HOVER : MORPH_REST,
    });
    setReady(true);
  };

  useLayoutEffect(() => {
    updateLens(moving);
  }, [targetIndex, active, moving, hoverIndex]);

  useEffect(() => {
    const onResize = () => updateLens();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [targetIndex, active]);

  useEffect(() => {
    const el = itemRefs.current[safeActive];
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'nearest', inline: 'center' });
  }, [safeActive]);

  const handleSelect = (id: PreviewThemeId, index: number) => {
    if (id === active) return;
    setMoving(true);
    prevIndexRef.current = safeActive;
    onChange(id);
    window.setTimeout(() => {
      setMoving(false);
      prevIndexRef.current = index;
    }, 560);
  };

  return (
    <div className="liquid-switcher-wrap">
      <svg className="liquid-switcher__filters" aria-hidden="true">
        <defs>
          <filter id="liquid-lens-goo" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className="liquid-switcher">
        <div className="liquid-switcher__shell" aria-hidden="true">
          <span className="liquid-switcher__shell-glass" />
          <span className="liquid-switcher__shell-reflex" />
        </div>

        <div className="liquid-switcher__scroll" ref={scrollRef}>
          <div className="liquid-switcher__track" ref={trackRef} role="tablist" aria-label="Режим платформы">
            <div
              className={`liquid-switcher__lens ${ready ? 'is-ready' : ''} ${moving ? 'is-moving' : ''}`}
              style={{
                transform: `translateX(${lens.left}px) skewX(${lens.skew}deg)`,
                width: lens.width,
                borderRadius: lens.morph,
              }}
              aria-hidden="true"
            >
              <span className="liquid-switcher__lens-body" style={{ filter: 'url(#liquid-lens-goo)' }}>
                <span className="liquid-switcher__lens-fill" />
                <span className="liquid-switcher__lens-shine" />
                <span className="liquid-switcher__lens-reflex liquid-switcher__lens-reflex--cyan" />
                <span className="liquid-switcher__lens-reflex liquid-switcher__lens-reflex--violet" />
                <span className="liquid-switcher__lens-reflex liquid-switcher__lens-reflex--yellow" />
              </span>
            </div>

            {previewThemes.map((theme, index) => {
              const isActive = theme.id === active;
              return (
                <button
                  key={theme.id}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`liquid-switcher__item ${isActive ? 'is-active' : ''}`}
                  onClick={() => handleSelect(theme.id, index)}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  onFocus={() => setHoverIndex(index)}
                  onBlur={() => setHoverIndex(null)}
                >
                  {theme.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
