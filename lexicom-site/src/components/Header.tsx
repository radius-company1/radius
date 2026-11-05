import { useEffect, useId, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MotionLink as Link } from './ui/MotionLink';
import { mainNav } from '../data/navigation';
import { useViewTransitionNavigate } from '../hooks/useViewTransitionNavigate';
import { normalizePath } from '../theme/directions';
import { Button } from './ui/Button';
import { GlassSurface } from './ui/GlassSurface';
import { Logo } from './ui/Logo';

type HeaderProps = {
  onDiscussClick: () => void;
  scrolled?: boolean;
};

type NavChild = { label: string; href: string };

function sectionTo(href: string) {
  return href.startsWith('#') ? `/${href}` : href;
}

const menus = mainNav.filter((item): item is Extract<(typeof mainNav)[number], { children: readonly NavChild[] }> => 'children' in item);

export function Header({ onDiscussClick, scrolled = false }: HeaderProps) {
  const location = useLocation();
  const currentPath = normalizePath(location.pathname);
  const { onLinkClick } = useViewTransitionNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<Record<string, boolean>>({});
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const menuIdBase = useId();
  const menuId = (label: string) => `${menuIdBase}-${menus.findIndex((m) => m.label === label)}`;
  const headerCta = 'Обсудить проект';
  const activeMenu = menus.find((m) => m.label === openMenu);

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
    const burger = document.querySelector<HTMLButtonElement>('.burger');
    if (main) main.inert = true;
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
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      if (main) main.inert = false;
      if (burger?.offsetParent !== null) burger?.focus({preventScroll:true});
    };
  }, [menuOpen]);

  useEffect(() => {
    setOpenMenu(null);
  }, [location.pathname]);

  useEffect(() => {
    if (!openMenu) return;

    const updatePos = () => {
      const rect = buttonRefs.current[openMenu]?.getBoundingClientRect();
      if (!rect) return;
      setDropdownPos({ top: rect.bottom + 6, left: rect.left });
    };

    updatePos();

    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      buttonRefs.current[openMenu]?.focus();
      setOpenMenu(null);
    };

    const onPointer = (event: PointerEvent) => {
      const target = event.target as Node;
      if (buttonRefs.current[openMenu]?.contains(target) || dropdownRef.current?.contains(target)) return;
      setOpenMenu(null);
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
  }, [openMenu]);

  const closeMenus = () => {
    setMenuOpen(false);
    setOpenMenu(null);
  };

  const handleSectionClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    closeMenus();
    onLinkClick(event, sectionTo(href));
  };

  const toggleMenu = (label: string) => {
    const rect = buttonRefs.current[label]?.getBoundingClientRect();
    if (rect) setDropdownPos({ top: rect.bottom + 6, left: rect.left });
    setOpenMenu((open) => (open === label ? null : label));
  };

  const handleMenuKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, label: string) => {
    if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleMenu(label);
      requestAnimationFrame(() => dropdownRef.current?.querySelector<HTMLAnchorElement>('a')?.focus());
    }
    if (event.key === 'Escape') {
      event.preventDefault();
      setOpenMenu(null);
    }
  };

  const isMobileGroupOpen = (label: string) =>
    mobileOpen[label] ?? (label === 'Продукты' || menus.find((m) => m.label === label)?.children.some((c) => c.href === currentPath));

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
                'children' in item ? (
                  <div key={item.label} className={`site-header__item ${openMenu === item.label ? 'is-open' : ''}`}>
                    <button
                      ref={(element) => { buttonRefs.current[item.label] = element; }}
                      type="button"
                      className={`site-header__link site-header__link--menu${item.children.some((c) => c.href === currentPath) ? ' is-current' : ''}`}
                      aria-expanded={openMenu === item.label}
                      aria-controls={menuId(item.label)}
                      onClick={() => toggleMenu(item.label)}
                      onKeyDown={(event) => handleMenuKeyDown(event, item.label)}
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
              onClick={() => setMenuOpen((open) => !open)}
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
          id={activeMenu ? menuId(activeMenu.label) : undefined}
          className={`site-header__dropdown ${activeMenu ? 'is-open' : ''}`}
          inert={!activeMenu} aria-hidden={!activeMenu}
          style={{ top: dropdownPos.top, left: dropdownPos.left }}
        >
          {activeMenu ? (
            <ul className="site-header__menu" aria-label={activeMenu.label}>
              {activeMenu.children.map((child) => (
                <li key={child.href}>
                  <Link
                    to={child.href}
                    className="site-header__menu-link"
                    aria-current={child.href === currentPath ? 'page' : undefined}
                    onClick={(event) => {
                      closeMenus();
                      onLinkClick(event, child.href);
                    }}
                  >
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} inert={!menuOpen} aria-hidden={!menuOpen}>
        <GlassSurface className="mobile-menu__panel" radius="lg">
          <nav aria-label="Мобильная навигация">
            {mainNav.map((item) =>
              'children' in item ? (
                <div key={item.label} className="mobile-menu__group">
                  <button
                    type="button"
                    className="mobile-menu__parent"
                    aria-expanded={isMobileGroupOpen(item.label)}
                    aria-controls={`${menuId(item.label)}-mobile`}
                    onClick={() => setMobileOpen((state) => ({ ...state, [item.label]: !isMobileGroupOpen(item.label) }))}
                  >
                    {item.label}
                    <span className="site-header__caret" aria-hidden="true" />
                  </button>
                  <div id={`${menuId(item.label)}-mobile`} hidden={!isMobileGroupOpen(item.label)}>
                    <ul className="mobile-menu__sub">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            to={child.href}
                            aria-current={child.href === currentPath ? 'page' : undefined}
                            onClick={(event) => {
                              closeMenus();
                              onLinkClick(event, child.href);
                            }}
                          >
                            {child.label}<span className="mobile-menu__arrow" aria-hidden="true">↗</span>
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
