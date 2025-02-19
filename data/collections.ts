export type Collection = {
  name: string
  textColor: 'primary' | 'white'
  href: string
  imageUrl: string
}

export const collections: Collection[] = [
  {
    name: 'Polos',
    textColor: 'primary',
    href: '/collections/homme-polos',
    imageUrl: '/collections/homme-polos.webp'
  },
  {
    name: 'Sweatshirts',
    textColor: 'white',
    href: '/collections/homme-sweatshirts',
    imageUrl: '/collections/homme-sweatshirts.webp'
  },
  {
    name: 'Survêtements',
    textColor: 'primary',
    href: '/collections/homme-survetements',
    imageUrl: '/collections/homme-survetements.webp'
  },
  {
    name: 'Manteaux & Vestes',
    textColor: 'primary',
    href: '/collections/homme-manteaux-vestes',
    imageUrl: '/collections/homme-manteaux-vestes.webp'
  },
  {
    name: 'Polos',
    textColor: 'primary',
    href: '/collections/femme-polos',
    imageUrl: '/collections/femme-polos.webp'
  },
  {
    name: 'Sweatshirts',
    textColor: 'primary',
    href: '/collections/femme-sweatshirts',
    imageUrl: '/collections/femme-sweatshirts.webp'
  },
  {
    name: 'Robes & Jupes',
    textColor: 'primary',
    href: '/collections/femme-robes-jupes',
    imageUrl: '/collections/femme-robes-jupes.webp'
  },
  {
    name: 'Manteaux et vestes',
    textColor: 'primary',
    href: '/collections/femme-manteaux-et-vestes',
    imageUrl: '/collections/femme-manteaux-et-vestes.webp'
  }
]
