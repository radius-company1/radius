export type Client = {
  id: string;
  name: string;
  region: string;
  src: string;
  width: number;
  height: number;
  background: 'light' | 'dark';
};

/** Customer names and logos supplied by the owner; source registry: docs/customers/logo-sources.json. */
export const clients: readonly Client[] = [
  {
    "id": "rzd",
    "name": "РЖД",
    "region": "Российские железные дороги",
    "src": "/customers/rzd.svg",
    "width": 284,
    "height": 126,
    "background": "light"
  },
  {
    "id": "belarusbank",
    "name": "Беларусбанк",
    "region": "Беларусь",
    "src": "/customers/belarusbank.svg",
    "width": 225,
    "height": 20,
    "background": "light"
  },
  {
    "id": "kuzbass-mfc",
    "name": "МФЦ «Мои документы»",
    "region": "Кемеровская область — Кузбасс",
    "src": "/customers/kuzbass-mfc.webp",
    "width": 900,
    "height": 900,
    "background": "light"
  },
  {
    "id": "novosibirsk-mfc",
    "name": "МФЦ «Мои документы»",
    "region": "Новосибирская область",
    "src": "/customers/novosibirsk-mfc.svg",
    "width": 174,
    "height": 76,
    "background": "light"
  },
  {
    "id": "primorye-mindigital",
    "name": "Минцифры",
    "region": "Приморский край",
    "src": "/customers/primorye-mindigital.webp",
    "width": 320,
    "height": 320,
    "background": "light"
  },
  {
    "id": "voronezh-government",
    "name": "Правительство области",
    "region": "Воронежская область",
    "src": "/customers/voronezh-government.svg",
    "width": 40,
    "height": 40,
    "background": "light"
  },
  {
    "id": "smolensk-cit",
    "name": "Центр информационных технологий",
    "region": "Смоленская область",
    "src": "/customers/smolensk-cit.svg",
    "width": 211,
    "height": 78,
    "background": "dark"
  },
  {
    "id": "buryatia-mfc",
    "name": "МФЦ «Мои документы»",
    "region": "Республика Бурятия",
    "src": "/customers/buryatia-mfc.webp",
    "width": 157,
    "height": 118,
    "background": "light"
  },
  {
    "id": "primorye-mfc",
    "name": "МФЦ «Мои документы»",
    "region": "Приморский край",
    "src": "/customers/primorye-mfc.webp",
    "width": 767,
    "height": 313,
    "background": "light"
  },
  {
    "id": "belgorod-mfc",
    "name": "МФЦ «Мои документы»",
    "region": "Белгородская область",
    "src": "/customers/belgorod-mfc.svg",
    "width": 195,
    "height": 57,
    "background": "light"
  },
  {
    "id": "irkutsk-mfc",
    "name": "МФЦ «Мои документы»",
    "region": "Иркутская область",
    "src": "/customers/irkutsk-mfc.webp",
    "width": 473,
    "height": 92,
    "background": "dark"
  },
  {
    "id": "kostroma-miac",
    "name": "МИАЦ",
    "region": "Костромская область",
    "src": "/customers/kostroma-miac.webp",
    "width": 90,
    "height": 92,
    "background": "light"
  },
  {
    "id": "rostov-courts",
    "name": "Суды Ростовской области",
    "region": "Ростовская область",
    "src": "/customers/rostov-courts.webp",
    "width": 97,
    "height": 117,
    "background": "light"
  },
  {
    "id": "rostov-mindigital",
    "name": "Минцифры",
    "region": "Ростовская область",
    "src": "/customers/rostov-mindigital.webp",
    "width": 180,
    "height": 180,
    "background": "light"
  },
  {
    "id": "tver-miac",
    "name": "МИАЦ",
    "region": "Тверская область",
    "src": "/customers/tver-miac.webp",
    "width": 500,
    "height": 500,
    "background": "light"
  },
  {
    "id": "ulyanovsk-mfc",
    "name": "МФЦ «Мои документы»",
    "region": "Ульяновская область",
    "src": "/customers/ulyanovsk-mfc.webp",
    "width": 218,
    "height": 124,
    "background": "light"
  },
  {
    "id": "zabaikal-government",
    "name": "Правительство края",
    "region": "Забайкальский край",
    "src": "/customers/zabaikal-government.webp",
    "width": 104,
    "height": 125,
    "background": "light"
  },
  {
    "id": "lnr-mintrud",
    "name": "Министерство труда и социальной политики",
    "region": "Луганская Народная Республика",
    "src": "/customers/lnr-mintrud.webp",
    "width": 1360,
    "height": 1361,
    "background": "light"
  },
  {
    "id": "yanao-mfc",
    "name": "МФЦ «Мои документы»",
    "region": "Ямало-Ненецкий автономный округ",
    "src": "/customers/yanao-mfc.webp",
    "width": 136,
    "height": 41,
    "background": "light"
  },
  {
    "id": "sevastopol-mfc",
    "name": "МФЦ «Мои документы»",
    "region": "Севастополь",
    "src": "/customers/sevastopol-mfc.svg",
    "width": 1000,
    "height": 408,
    "background": "light"
  },
  {
    "id": "sevastopol-government",
    "name": "Департамент цифрового развития",
    "region": "Севастополь",
    "src": "/customers/sevastopol-government.webp",
    "width": 83,
    "height": 100,
    "background": "light"
  }
];
