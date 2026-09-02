import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AmbientBackground } from './AmbientBackground';
import { DirectionSwitcher } from './DirectionSwitcher';
import { Header } from './Header';
import { getDirectionFromPath } from '../theme/directions';

export function SiteShell() {
  const location = useLocation();
  const navigate = useNavigate();
  const direction = getDirectionFromPath(location.pathname);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.direction = direction;
  }, [direction]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (location.hash) return;
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  const scrollToContact = () => {
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    navigate('/#contact');
  };

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Перейти к содержанию
      </a>
      <AmbientBackground />
      <div
        className={`app-chrome ${scrolled ? 'is-scrolled' : ''}`}
        style={{ viewTransitionName: 'app-chrome' } as React.CSSProperties}
      >
        <Header onDiscussClick={scrollToContact} scrolled={scrolled} />
        <DirectionSwitcher scrolled={scrolled} />
      </div>
      <div className="page-transition-root" id="main-content">
        <Outlet />
      </div>
    </div>
  );
}
