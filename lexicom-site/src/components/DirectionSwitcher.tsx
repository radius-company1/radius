import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { directionModes } from '../theme/directions';
import './DirectionSwitcher.css';

type LensRect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

const LENS_PAD_X = 6;
const LENS_PAD_Y = 2;
const LENS_MOVE_MS = 300;

type DirectionSwitcherProps = {
  scrolled?: boolean;
};

export function DirectionSwitcher({ scrolled = false }: DirectionSwitcherProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const movingTimerRef = useRef<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [ready, setReady] = useState(false);
  const [moving, setMoving] = useState(false);

  const activeIndex = directionModes.findIndex((mode) => mode.href === location.pathname);
  const safeActiveIndex = activeIndex >= 0 ? activeIndex : 0;
  const [lensTarget, setLensTarget] = useState(safeActiveIndex);
  const visualIndex = hoverIndex ?? lensTarget;

  const [lens, setLens] = useState<LensRect>({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    setLensTarget(safeActiveIndex);
  }, [safeActiveIndex]);

  const measureLens = useCallback((index: number): LensRect | null => {
    const track = trackRef.current;
    const item = itemRefs.current[index];
    if (!track || !item) return null;

    const lensHeight = Math.max(item.offsetHeight + LENS_PAD_Y * 2, track.clientHeight - 4);
    const lensTop = Math.max(0, (track.clientHeight - lensHeight) / 2);

    return {
      x: item.offsetLeft - LENS_PAD_X,
      y: lensTop,
      width: item.offsetWidth + LENS_PAD_X * 2,
      height: lensHeight,
    };
  }, []);

  const applyLens = useCallback(
    (index: number) => {
      const rect = measureLens(index);
      if (!rect) return;
      setLens(rect);
      setReady(true);
    },
    [measureLens],
  );

  useLayoutEffect(() => {
    applyLens(visualIndex);
  }, [visualIndex, applyLens]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new ResizeObserver(() => applyLens(visualIndex));
    observer.observe(track);

    const onResize = () => applyLens(visualIndex);
    window.addEventListener('resize', onResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', onResize);
    };
  }, [visualIndex, applyLens]);

  useLayoutEffect(() => {
    const activeEl = itemRefs.current[lensTarget];
    const scrollEl = scrollRef.current;
    if (!activeEl || !scrollEl) return;

    const itemLeft = activeEl.offsetLeft;
    const itemWidth = activeEl.offsetWidth;
    const scrollLeft = itemLeft - (scrollEl.clientWidth - itemWidth) / 2;
    scrollEl.scrollTo({ left: Math.max(0, scrollLeft), behavior: 'auto' });
    applyLens(visualIndex);
  }, [lensTarget, applyLens, visualIndex]);

  useEffect(() => {
    return () => {
      if (movingTimerRef.current !== null) {
        window.clearTimeout(movingTimerRef.current);
      }
    };
  }, []);

  const handleSelect = (href: string, index: number) => {
    if (href === location.pathname) return;

    setLensTarget(index);
    setMoving(true);
    navigate(href);

    if (movingTimerRef.current !== null) {
      window.clearTimeout(movingTimerRef.current);
    }

    movingTimerRef.current = window.setTimeout(() => {
      setMoving(false);
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
                  transform: `translate3d(${lens.x}px, ${lens.y}px, 0)`,
                  width: lens.width,
                  height: lens.height,
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
