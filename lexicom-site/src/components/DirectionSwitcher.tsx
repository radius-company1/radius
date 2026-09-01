import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { directionModes } from '../theme/directions';
import { useViewTransitionNavigate } from '../hooks/useViewTransitionNavigate';
import './DirectionSwitcher.css';

type LensState = {
  left: number;
  top: number;
  width: number;
  height: number;
  skew: number;
  stretch: number;
  morph: string;
};

const MORPH_REST = '999px';
const MORPH_HOVER = '58% 42% 54% 46% / 48% 52% 48% 52%';
const MORPH_MOVE = '62% 38% 56% 44% / 44% 56% 42% 58%';
const LENS_MOVE_MS = 560;

type DirectionSwitcherProps = {
  scrolled?: boolean;
};

export function DirectionSwitcher({ scrolled = false }: DirectionSwitcherProps) {
  const location = useLocation();
  const navigate = useViewTransitionNavigate();
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const prevIndexRef = useRef(0);
  const movingTimerRef = useRef<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [ready, setReady] = useState(false);
  const [moving, setMoving] = useState(false);
  const [lens, setLens] = useState<LensState>({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    skew: 0,
    stretch: 0,
    morph: MORPH_REST,
  });

  const activeIndex = directionModes.findIndex((mode) => mode.href === location.pathname);
  const safeActiveIndex = activeIndex >= 0 ? activeIndex : 0;
  const targetIndex = hoverIndex ?? safeActiveIndex;

  const updateLens = useCallback((isMoving = false, index = targetIndex) => {
    const track = trackRef.current;
    const item = itemRefs.current[index];
    if (!track || !item) return;

    const padX = 6;
    const padY = 2;
    const direction = index - prevIndexRef.current;
    let stretch = 0;
    let skew = 0;

    if (hoverIndex !== null && hoverIndex !== safeActiveIndex) {
      stretch = 10;
      skew = hoverIndex > safeActiveIndex ? 2 : -2;
    } else if (isMoving && direction !== 0) {
      stretch = 14;
      skew = direction > 0 ? 3 : -3;
    }

    const lensHeight = Math.max(item.offsetHeight + padY * 2, track.clientHeight - 4);
    const lensTop = Math.max(0, (track.clientHeight - lensHeight) / 2);

    setLens({
      left: item.offsetLeft - padX,
      top: lensTop,
      width: item.offsetWidth + padX * 2 + stretch,
      height: lensHeight,
      skew,
      stretch,
      morph: isMoving ? MORPH_MOVE : hoverIndex !== null ? MORPH_HOVER : MORPH_REST,
    });
    setReady(true);
  }, [hoverIndex, safeActiveIndex, targetIndex]);

  useLayoutEffect(() => {
    updateLens(moving, targetIndex);
  }, [targetIndex, location.pathname, moving, hoverIndex, updateLens]);

  useEffect(() => {
    const track = trackRef.current;
    const scrollEl = scrollRef.current;
    if (!track) return;

    const onResize = () => updateLens(moving, targetIndex);
    window.addEventListener('resize', onResize);

    const observer = new ResizeObserver(() => updateLens(moving, targetIndex));
    observer.observe(track);

    const onScroll = () => updateLens(moving, targetIndex);
    scrollEl?.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', onResize);
      observer.disconnect();
      scrollEl?.removeEventListener('scroll', onScroll);
    };
  }, [targetIndex, location.pathname, moving, updateLens]);

  useEffect(() => {
    const activeEl = itemRefs.current[safeActiveIndex];
    const scrollEl = scrollRef.current;
    if (!activeEl || !scrollEl) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const frame = window.requestAnimationFrame(() => {
      const itemLeft = activeEl.offsetLeft;
      const itemWidth = activeEl.offsetWidth;
      const scrollLeft = itemLeft - (scrollEl.clientWidth - itemWidth) / 2;
      scrollEl.scrollTo({ left: Math.max(0, scrollLeft), behavior: prefersReduced ? 'auto' : 'smooth' });
      window.requestAnimationFrame(() => updateLens(moving, safeActiveIndex));
    });

    return () => window.cancelAnimationFrame(frame);
  }, [safeActiveIndex, location.pathname, moving, updateLens]);

  useEffect(() => {
    return () => {
      if (movingTimerRef.current !== null) {
        window.clearTimeout(movingTimerRef.current);
      }
    };
  }, []);

  const handleSelect = (href: string, index: number) => {
    if (href === location.pathname) return;

    setMoving(true);
    prevIndexRef.current = safeActiveIndex;
    navigate(href);

    if (movingTimerRef.current !== null) {
      window.clearTimeout(movingTimerRef.current);
    }

    movingTimerRef.current = window.setTimeout(() => {
      setMoving(false);
      prevIndexRef.current = index;
      movingTimerRef.current = null;
    }, LENS_MOVE_MS);
  };

  const focusItem = (index: number) => {
    itemRefs.current[index]?.focus();
  };

  const handleTabKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const { key } = event;
    const lastIndex = directionModes.length - 1;

    if (key === 'ArrowRight' || key === 'ArrowDown') {
      event.preventDefault();
      const next = Math.min(safeActiveIndex + 1, lastIndex);
      if (next !== safeActiveIndex) handleSelect(directionModes[next].href, next);
      focusItem(next);
      return;
    }

    if (key === 'ArrowLeft' || key === 'ArrowUp') {
      event.preventDefault();
      const next = Math.max(safeActiveIndex - 1, 0);
      if (next !== safeActiveIndex) handleSelect(directionModes[next].href, next);
      focusItem(next);
      return;
    }

    if (key === 'Home') {
      event.preventDefault();
      if (safeActiveIndex !== 0) handleSelect(directionModes[0].href, 0);
      focusItem(0);
      return;
    }

    if (key === 'End') {
      event.preventDefault();
      if (safeActiveIndex !== lastIndex) handleSelect(directionModes[lastIndex].href, lastIndex);
      focusItem(lastIndex);
    }
  };

  return (
    <div
      className={`direction-switcher-wrap ${scrolled ? 'is-scrolled' : ''}`}
      style={{ viewTransitionName: 'direction-switcher' } as React.CSSProperties}
    >
      <div className="container direction-switcher-container">
        <div className="direction-switcher">
          <div className="direction-switcher__shell" aria-hidden="true">
            <span className="direction-switcher__shell-glass" />
            <span className="direction-switcher__shell-reflex" />
          </div>

          <div className="direction-switcher__scroll" ref={scrollRef}>
            <div
              className="direction-switcher__track"
              ref={trackRef}
              role="tablist"
              aria-label="Режим платформы"
              onKeyDown={handleTabKeyDown}
            >
              <div
                className={`direction-switcher__lens ${ready ? 'is-ready' : ''} ${moving ? 'is-moving' : ''}`}
                style={{
                  transform: `translate(${lens.left}px, ${lens.top}px) skewX(${lens.skew}deg)`,
                  width: lens.width,
                  height: lens.height,
                  borderRadius: lens.morph,
                }}
                aria-hidden="true"
              >
                <span className="direction-switcher__lens-fill" />
                <span className="direction-switcher__lens-shine" />
                <span className="direction-switcher__lens-reflex direction-switcher__lens-reflex--cyan" />
                <span className="direction-switcher__lens-reflex direction-switcher__lens-reflex--violet" />
                <span className="direction-switcher__lens-reflex direction-switcher__lens-reflex--yellow" />
              </div>

              {directionModes.map((mode, index) => {
                const isActive = mode.href === location.pathname;
                return (
                  <button
                    key={mode.id}
                    ref={(el) => {
                      itemRefs.current[index] = el;
                    }}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    tabIndex={isActive ? 0 : -1}
                    className={`direction-switcher__item ${isActive ? 'is-active' : ''}`}
                    onClick={() => handleSelect(mode.href, index)}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                    onFocus={() => setHoverIndex(index)}
                    onBlur={() => setHoverIndex(null)}
                  >
                    {mode.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
