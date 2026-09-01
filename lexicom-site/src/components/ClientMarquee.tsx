import { clients } from '../data/clients';
import { ClientLogo } from './clients/ClientLogo';
import './ClientMarquee.css';

const LOOP_COPIES = 6;

type ClientMarqueeProps = {
  variant?: 'default' | 'liquid';
};

function MarqueeTrack({ prefix }: { prefix: string }) {
  const items = Array.from({ length: LOOP_COPIES }, () => clients).flat();

  return (
    <div className="client-marquee__track">
      {items.map((client, index) => (
        <div key={`${prefix}-${client.id}-${index}`} className="client-marquee__item">
          <ClientLogo id={client.id} />
          {prefix === 'a' && index === 0 ? (
            <span className="visually-hidden">{client.name}</span>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function ClientMarquee({ variant = 'default' }: ClientMarqueeProps) {
  return (
    <section
      className={`client-marquee client-marquee--${variant}`}
      aria-label="Заказчики Lexicom"
    >
      <div className="client-marquee__inner">
        <p className="client-marquee__label">Нам доверяют</p>
        <div className="client-marquee__viewport">
          <div className="client-marquee__runner">
            <MarqueeTrack prefix="a" />
            <MarqueeTrack prefix="b" />
          </div>
        </div>
      </div>
    </section>
  );
}
