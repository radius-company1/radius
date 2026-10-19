import { useEffect, useId, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MotionLink as Link } from './ui/MotionLink';
import { mainNav, productNav } from '../data/navigation';
import { useViewTransitionNavigate } from '../hooks/useViewTransitionNavigate';
import { Button } from './ui/Button';
import { GlassSurface } from './ui/GlassSurface';
import { Logo } from './ui/Logo';

type HeaderProps = {
  onDiscussClick: () => void;
  scrolled?: boolean;
};

function sectionTo(href: string) {
  return href.startsWith('#') ? `/${href}` : href;
}

export function Header({ onDiscussClick, scrolled = false }: HeaderProps) {
  const location = useLocation();
  const { onLinkClick } = useViewTransitionNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(true);
  const productsRef = useRef<HTMLDivElement>(null);
  const productsButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const productsMenuId = useId();
  const mobileProductsId = useId();
  const headerCta = 'Обсудить проект';

  useEffect(() => {
    const desktop = matchMedia('(min-width: 1024px)');
    const reset = () => { if (desktop.matches) setMenuOpen(false); };
    desktop.addEventListener('change', reset);
    return () => desktop.removeEventListener('change', reset);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const main = document.querySelector<HTMLElement>('#main-content');
    const directions = document.querySelector<HTMLElement>('.design-directions');
    const burger = document.querySelector<HTMLButtonElement>('.burger');
    if (main) main.inert = true;
    if (directions) directions.inert = true;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        const elements = [...document.querySelectorAll<HTMLElement>('.site-header a, .site-header button')].filter(el => el.offsetParent !== null);
        const first = elements[0]; const last = elements.at(-1);
        if (event.shiftKey && document.activeElement === first) {event.preventDefault();last?.focus();}
        if (!event.shiftKey && document.activeElement === last) {event.preventDefault();first?.focus();}
      }
      if (event.key !== 'Escape') return;
      event.preventDefault();
      setMenuOpen(false);
      setMobileProductsOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      if (main) main.inert = false;
      if (directions) directions.inert = false;
      if (burger?.offsetParent !== null) burger?.focus({preventScroll:true});
    };
  }, [menuOpen]);

  useEffect(() => {
    setProductsOpen(false);
    setMobileProductsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!productsOpen) return;

    const updatePos = () => {
      const rect = productsButtonRef.current?.getBoundingClientRect();
      if (!rect) return;
      setDropdownPos({ top: rect.bottom + 6, left: rect.left });
    };

    updatePos();

    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      setProductsOpen(false);
      productsButtonRef.current?.focus();
    };

    const onPointer = (event: PointerEvent) => {
      const target = event.target as Node;
      if (productsRef.current?.contains(target) || dropdownRef.current?.contains(target)) return;
      setProductsOpen(false);
    };

    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    window.addEventListener('resize', updatePos);
    window.addEventListener('scroll', updatePos, true);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
      window.removeEventListener('resize', updatePos);
      window.removeEventListener('scroll', updatePos, true);
    };
  }, [productsOpen]);

  const closeMenus = () => {
    setMenuOpen(false);
    setProductsOpen(false);
    setMobileProductsOpen(false);
  };

  const handleSectionClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    closeMenus();
    onLinkClick(event, sectionTo(href));
  };

  const handleProductKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setProductsOpen(true);
      requestAnimationFrame(() => dropdownRef.current?.querySelector<HTMLAnchorElement>('a')?.focus());
    }
    if (event.key === 'Escape') {
      event.preventDefault();
      setProductsOpen(false);
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container site-header__float">
        <GlassSurface className="site-header__panel" radius="xl">
          <div className="site-header__inner">
            <Link
              to="/"
              className="site-header__brand"
              aria-label="Lexicom — на главную"
              onClick={(e) => {
                closeMenus();
                if (location.pathname !== '/') {
                  onLinkClick(e, '/');
                }
              }}
            >
              <Logo />
            </Link>

            <nav className="site-header__nav" aria-label="Основная навигация">
              {mainNav.map((item) =>
                'children' in item && item.children ? (
                  <div
                    key={item.label}
                    className={`site-header__item ${productsOpen ? 'is-open' : ''}`}
                    ref={productsRef}
                  >
                    <button
                      ref={productsButtonRef}
                      type="button"
                      className="site-header__link site-header__link--menu"
                      aria-expanded={productsOpen}
                      aria-controls={productsMenuId}
                      onClick={() => {
                        const rect = productsButtonRef.current?.getBoundingClientRect();
                        if (rect) setDropdownPos({ top: rect.bottom + 6, left: rect.left });
                        setProductsOpen((open) => !open);
                      }}
                      onKeyDown={handleProductKeyDown}
                    >
                      {item.label}
                      <span className="site-header__caret" aria-hidden="true" />
                    </button>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    to={sectionTo(item.href)}
                    className="site-header__link"
                    onClick={(event) => handleSectionClick(event, item.href)}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>

            <Button className="site-header__cta" onClick={() => { closeMenus(); onDiscussClick(); }}>
              {headerCta}
            </Button>

            <button
              type="button"
              className={`burger ${menuOpen ? 'is-open' : ''}`}
              aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => {setMenuOpen((open) => !open);setMobileProductsOpen(true);}}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </GlassSurface>
      </div>

      <div
          ref={dropdownRef}
          id={productsMenuId}
          className={`site-header__dropdown ${productsOpen ? 'is-open' : ''}`}
          inert={!productsOpen} aria-hidden={!productsOpen}
          style={{ top: dropdownPos.top, left: dropdownPos.left }}
        >
          <ul className="site-header__menu" aria-label="Продукты Lexicom">
            {productNav.map((product) => (
              <li key={product.href}>
                <Link
                  to={product.href}
                  className="site-header__menu-link"
                  onClick={(event) => {
                    closeMenus();
                    onLinkClick(event, product.href);
                  }}
                >
                  {product.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} inert={!menuOpen} aria-hidden={!menuOpen}>
        <GlassSurface className="mobile-menu__panel" radius="lg">
          <nav aria-label="Мобильная навигация">
            {mainNav.map((item) =>
              'children' in item && item.children ? (
                <div key={item.label} className="mobile-menu__group">
                  <button
                    type="button"
                    className="mobile-menu__parent"
                    aria-expanded={mobileProductsOpen}
                    aria-controls={mobileProductsId}
                    onClick={() => setMobileProductsOpen((open) => !open)}
                  >
                    {item.label}
                    <span className="site-header__caret" aria-hidden="true" />
                  </button>
                  <div id={mobileProductsId} hidden={!mobileProductsOpen}>
                    <ul className="mobile-menu__sub">
                      {productNav.map((product) => (
                        <li key={product.href}>
                          <Link
                            to={product.href}
                            onClick={(event) => {
                              closeMenus();
                              onLinkClick(event, product.href);
                            }}
                          >
                            {product.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  to={sectionTo(item.href)}
                  onClick={(event) => handleSectionClick(event, item.href)}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <Button className="mobile-menu__cta" onClick={() => { closeMenus(); onDiscussClick(); }}>
            {headerCta}
          </Button>
        </GlassSurface>
      </div>
    </header>
  );
}
