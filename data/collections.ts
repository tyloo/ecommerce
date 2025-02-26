export type Collection = {
  name: string
  textColor: 'primary' | 'white'
  href: string
  imageUrl: string
}

export const collections: Record<string, Collection> = {
  'homme-nouveautes': {
    name: 'Nouveautés',
    textColor: 'primary',
    href: '/collections/homme-nouveautes',
    imageUrl: '/collections/homme-new.webp'
  },
  'homme-polos': {
    name: 'Polos',
    textColor: 'primary',
    href: '/collections/homme-polos',
    imageUrl: '/collections/homme-polos.webp'
  },
  'homme-sweatshirts': {
    name: 'Sweatshirts',
    textColor: 'white',
    href: '/collections/homme-sweatshirts',
    imageUrl: '/collections/homme-sweatshirts.webp'
  },
  'homme-survetements': {
    name: 'Survêtements',
    textColor: 'primary',
    href: '/collections/homme-survetements',
    imageUrl: '/collections/homme-survetements.webp'
  },
  'homme-manteaux-vestes': {
    name: 'Manteaux & Vestes',
    textColor: 'primary',
    href: '/collections/homme-manteaux-vestes',
    imageUrl: '/collections/homme-manteaux-vestes.webp'
  },
  'homme-t-shirts': {
    name: 'T-shirts',
    textColor: 'primary',
    href: '/collections/homme-t-shirts',
    imageUrl: '/collections/homme-t-shirts.webp'
  },
  'homme-pullovers': {
    name: 'Pullovers',
    textColor: 'primary',
    href: '/collections/homme-pullovers',
    imageUrl: '/collections/homme-pullovers.webp'
  },
  'homme-pantalons-shorts': {
    name: 'Pantalons & Shorts',
    textColor: 'primary',
    href: '/collections/homme-pantalons-shorts',
    imageUrl: '/collections/homme-pantalons-shorts.webp'
  },
  'homme-chemises': {
    name: 'Chemises',
    textColor: 'primary',
    href: '/collections/homme-chemises',
    imageUrl: '/collections/homme-chemises.webp'
  },
  'homme-maroquinerie': {
    name: 'Maroquinerie',
    textColor: 'primary',
    href: '/collections/homme-maroquinerie',
    imageUrl: '/collections/homme-maroquinerie.webp'
  },
  'homme-xs': {
    name: 'XS',
    textColor: 'primary',
    href: '/collections/homme-xs',
    imageUrl: '/collections/homme-xs.webp'
  },
  'homme-s': {
    name: 'S',
    textColor: 'primary',
    href: '/collections/homme-s',
    imageUrl: '/collections/homme-s.webp'
  },
  'homme-m': {
    name: 'M',
    textColor: 'primary',
    href: '/collections/homme-m',
    imageUrl: '/collections/homme-m.webp'
  },
  'homme-l': {
    name: 'L',
    textColor: 'primary',
    href: '/collections/homme-l',
    imageUrl: '/collections/homme-l.webp'
  },
  'homme-xl': {
    name: 'XL',
    textColor: 'primary',
    href: '/collections/homme-xl',
    imageUrl: '/collections/homme-xl.webp'
  },
  'homme-2xl-et-plus': {
    name: '2XL et plus',
    textColor: 'primary',
    href: '/collections/homme-2xl-et-plus',
    imageUrl: '/collections/homme-2xl-et-plus.webp'
  },
  'femme-nouveautes': {
    name: 'Nouveautés',
    textColor: 'primary',
    href: '/collections/femme-nouveautes',
    imageUrl: '/collections/femme-new.webp'
  },
  'femme-polos': {
    name: 'Polos',
    textColor: 'primary',
    href: '/collections/femme-polos',
    imageUrl: '/collections/femme-polos.webp'
  },
  'femme-sweatshirts': {
    name: 'Sweatshirts',
    textColor: 'primary',
    href: '/collections/femme-sweatshirts',
    imageUrl: '/collections/femme-sweatshirts.webp'
  },
  'femme-robes-jupes': {
    name: 'Robes & Jupes',
    textColor: 'primary',
    href: '/collections/femme-robes-jupes',
    imageUrl: '/collections/femme-robes-jupes.webp'
  },
  'femme-manteaux-et-vestes': {
    name: 'Manteaux et vestes',
    textColor: 'primary',
    href: '/collections/femme-manteaux-et-vestes',
    imageUrl: '/collections/femme-manteaux-et-vestes.webp'
  },
  'femme-pullovers': {
    name: 'Pullovers',
    textColor: 'primary',
    href: '/collections/femme-pullovers',
    imageUrl: '/collections/femme-pullovers.webp'
  },
  'femme-pantalons-shorts': {
    name: 'Pantalons & Shorts',
    textColor: 'primary',
    href: '/collections/femme-pantalons-shorts',
    imageUrl: '/collections/femme-pantalons-shorts.webp'
  },
  'femme-survetements': {
    name: 'Survêtements',
    textColor: 'primary',
    href: '/collections/femme-survetements',
    imageUrl: '/collections/femme-survetements.webp'
  },
  'femme-tops-chemises': {
    name: 'Tops & Chemises',
    textColor: 'primary',
    href: '/collections/femme-tops-chemises',
    imageUrl: '/collections/femme-tops-chemises.webp'
  },
  'femme-xs': {
    name: 'XS',
    textColor: 'primary',
    href: '/collections/femme-xs',
    imageUrl: '/collections/femme-xs.webp'
  },
  'femme-s': {
    name: 'S',
    textColor: 'primary',
    href: '/collections/femme-s',
    imageUrl: '/collections/femme-s.webp'
  },
  'femme-m': {
    name: 'M',
    textColor: 'primary',
    href: '/collections/femme-m',
    imageUrl: '/collections/femme-m.webp'
  },
  'femme-l': {
    name: 'L',
    textColor: 'primary',
    href: '/collections/femme-l',
    imageUrl: '/collections/femme-l.webp'
  },
  'femme-xl': {
    name: 'XL',
    textColor: 'primary',
    href: '/collections/femme-xl',
    imageUrl: '/collections/femme-xl.webp'
  },
  'femme-2xl-et-plus': {
    name: '2XL et plus',
    textColor: 'primary',
    href: '/collections/femme-2xl-et-plus',
    imageUrl: '/collections/femme-2xl-et-plus.webp'
  }
}
