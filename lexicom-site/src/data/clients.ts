export const clients = [
  {
    id: 'rzd',
    name: 'РЖД',
    alt: 'Российские железные дороги',
  },
] as const;

export type Client = (typeof clients)[number];
