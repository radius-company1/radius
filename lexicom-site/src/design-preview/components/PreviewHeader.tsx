import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { mainNav } from '../../data/navigation';
import { Logo } from '../../components/ui/Logo';
import { GlassSurface } from './GlassSurface';
import './PreviewHeader.css';

export function PreviewHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  return (
    <header className={`preview-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="preview-header__wrap">
        <GlassSurface className="preview-header__panel" radius="xl" variant="tinted">
          <div className="preview-header__inner">
            <Link to="/" className="preview-header__brand" aria-label="Lexicom — на главную">
              <Logo />
            </Link>

            <nav className="preview-header__nav" aria-label="Основная навигация">
              {mainNav.map((item) => (
                <a key={item.href} href={item.href} className="preview-header__link">
                  {item.label}
                </a>
              ))}
            </nav>

            <span className="preview-header__cta-wrap">
              <span className="preview-header__cta-glow" aria-hidden="true" />
              <button type="button" className="preview-header__cta">
                Обсудить проект
              </button>
            </span>

            <button
              type="button"
              className={`preview-header__burger ${menuOpen ? 'is-open' : ''}`}
              aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span /><span /><span />
            </button>
          </div>
        </GlassSurface>
      </div>

      {menuOpen ? (
        <GlassSurface className="preview-header__mobile" radius="lg">
          <nav aria-label="Мобильная навигация">
            {mainNav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
          <button type="button" className="preview-header__cta preview-header__cta--mobile">
            Обсудить проект
          </button>
        </GlassSurface>
      ) : null}
    </header>
  );
}
