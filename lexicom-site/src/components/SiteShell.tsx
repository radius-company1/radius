import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { cancelPendingNavigation } from '../hooks/useViewTransitionNavigate';
import { AmbientBackground } from './AmbientBackground';
import { Header } from './Header';
import { scrollBelowChrome } from '../hooks/scrollBelowChrome';
import { getDirectionFromPath } from '../theme/directions';

export function SiteShell() {
  const location = useLocation();
  const navigate = useNavigate();
  const direction = getDirectionFromPath(location.pathname);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => { cancelPendingNavigation(); }, [location.key]);

  useEffect(() => {
    document.documentElement.dataset.direction = direction;
  }, [direction]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);



  const scrollToContact = () => {
    const contact = document.getElementById('contact');
    if (contact) {
      scrollBelowChrome(contact);
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
      </div>
      <div className="page-transition-root" id="main-content">
        <Outlet />
      </div>
    </div>
  );
}
