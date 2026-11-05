import type { Client } from '../../data/clients';

export function ClientLogo({ client }: { client: Client }) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return <img
    className={`client-logo client-logo--${client.id}`}
    src={`${base}${client.src}`}
    alt=""
    width={client.width}
    height={client.height}
    loading="lazy"
    decoding="async"
    draggable={false}
  />;
}
