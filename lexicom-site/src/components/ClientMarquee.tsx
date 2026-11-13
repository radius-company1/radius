import { useRef, useSyncExternalStore, type KeyboardEvent } from 'react';
import { clients } from '../data/clients';
import { useClientReady } from '../hooks/useClientReady';
import { ClientLogo } from './clients/ClientLogo';
import { Icon } from './ui/Icon';
import './ClientMarquee.css';

const motionQuery = '(prefers-reduced-motion: reduce)';
const subscribeMotion = (notify: () => void) => {
  const query = window.matchMedia(motionQuery);
  query.addEventListener('change', notify);
  return () => query.removeEventListener('change', notify);
};
const getMotionPreference = () => window.matchMedia(motionQuery).matches;
const serverMotionPreference = () => true;

function MarqueeTrack({ duplicate = false }: { duplicate?: boolean }) {
  return <ul className="client-marquee__track" aria-hidden={duplicate || undefined}>
    {clients.map(client => <li key={client.id} className="client-marquee__item">
      <div className={`client-marquee__logo-frame${client.background === 'dark' ? ' client-marquee__logo-frame--dark' : ''}`}>
        <ClientLogo client={client} />
      </div>
      <p className="client-marquee__name">{client.name}</p>
      <p className="client-marquee__region">{client.region}</p>
    </li>)}
  </ul>;
}

export function ClientMarquee({ variant = 'default' }: { variant?: 'default' | 'liquid' }) {
  const ready = useClientReady();
  const reducedMotion = useSyncExternalStore(subscribeMotion, getMotionPreference, serverMotionPreference);
  const viewportRef = useRef<HTMLDivElement>(null);

  const move = (direction: -1 | 1) => {
    const viewport = viewportRef.current;
    const track = viewport?.querySelector<HTMLElement>('.client-marquee__track');
    if (!viewport || !track) return;
    // Both copies have identical geometry: crossing their boundary is seamless.
    if (direction < 0 && viewport.scrollLeft < 1) viewport.scrollLeft = track.offsetWidth;
    if (direction > 0 && viewport.scrollLeft >= track.offsetWidth) viewport.scrollLeft -= track.offsetWidth;
    viewport.scrollBy({ left: direction * viewport.clientWidth * 0.85, behavior: reducedMotion ? 'instant' : 'smooth' });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      move(event.key === 'ArrowLeft' ? -1 : 1);
    }
    if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      const viewport = viewportRef.current;
      const track = viewport?.querySelector<HTMLElement>('.client-marquee__track');
      if (viewport && track) viewport.scrollLeft = event.key === 'Home' ? 0 : track.offsetWidth - viewport.clientWidth;
    }
  };

  return <section id="customers" className={`client-marquee client-marquee--${variant}`} aria-labelledby="customers-title">
    <div className="client-marquee__inner">
      <div className="client-marquee__heading">
        <h2 id="customers-title" className="client-marquee__label">Наши заказчики</h2>
        <div className="client-marquee__controls" hidden={!ready}>
          <button type="button" onClick={() => move(-1)} aria-label="Предыдущие заказчики" aria-controls="customers-list"><Icon name="arrow-left" size={18} /></button>
          <button type="button" onClick={() => move(1)} aria-label="Следующие заказчики" aria-controls="customers-list"><Icon name="arrow-right" size={18} /></button>
        </div>
      </div>
      <div id="customers-list" className="client-marquee__viewport" ref={viewportRef} role="region" aria-label="Логотипы и названия заказчиков" tabIndex={0} onKeyDown={handleKeyDown}>
        <div className="client-marquee__runner"><MarqueeTrack />{ready && <MarqueeTrack duplicate />}</div>
      </div>
    </div>
  </section>;
}
