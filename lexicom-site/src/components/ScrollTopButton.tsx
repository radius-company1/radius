import { useEffect, useState } from 'react';
import { Icon } from './ui/Icon';
import '../styles/scroll-top.css';

export function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 2);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <button
      type="button"
      className={`scroll-top ${visible ? 'is-visible' : ''}`}
      aria-label="Наверх страницы"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      onClick={scrollTop}
    >
      <Icon name="arrow-up" size={20} />
    </button>
  );
}
