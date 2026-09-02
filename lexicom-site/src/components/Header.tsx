import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { mainNav } from '../data/navigation';
import { useViewTransitionNavigate } from '../hooks/useViewTransitionNavigate';
import { Button } from './ui/Button';
import { GlassSurface } from './ui/GlassSurface';
import { Logo } from './ui/Logo';

type HeaderProps = {
  onDiscussClick: () => void;
  scrolled?: boolean;
};

export function Header({ onDiscussClick, scrolled = false }: HeaderProps) {
  const location = useLocation();
  const navigate = useViewTransitionNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const headerCta = 'Обсудить проект';

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (href: string) => {
    closeMenu();
    const hash = href.replace('#', '');
    if (location.pathname !== '/') {
      navigate(`/#${hash}`);
      return;
    }
    document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
                closeMenu();
                if (location.pathname !== '/') {
                  e.preventDefault();
                  navigate('/');
                }
              }}
            >
              <Logo />
            </Link>

            <nav className="site-header__nav" aria-label="Основная навигация">
              {mainNav.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  className="site-header__link"
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <Button className="site-header__cta" onClick={() => { closeMenu(); onDiscussClick(); }}>
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

      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} hidden={!menuOpen}>
        <GlassSurface className="mobile-menu__panel" radius="lg">
          <nav aria-label="Мобильная навигация">
            {mainNav.map((item) => (
              <button key={item.href} type="button" onClick={() => handleNavClick(item.href)}>
                {item.label}
              </button>
            ))}
          </nav>
          <Button className="mobile-menu__cta" onClick={() => { closeMenu(); onDiscussClick(); }}>
            {headerCta}
          </Button>
        </GlassSurface>
      </div>
    </header>
  );
}
