import * as schema from '@/server/db/schema'

export type Collection = {
  name: string
  description: string
  slug: string
  image: string
  gender: schema.AVAILABLE_GENDERS
  type: schema.AVAILABLE_TYPES
}

export const collections: Collection[] = [
  {
    name: 'Homme',
    description: 'Collection Homme',
    slug: 'homme',
    image: '/collections/homme-new.webp',
    gender: schema.GENDER_MALE,
    type: schema.TYPE_CATEGORY
  },
  {
    name: 'Nouveautés',
    description: 'Collection Nouveautés',
    slug: 'homme-nouveautes',
    image: '/collections/homme-new.webp',
    gender: schema.GENDER_MALE,
    type: schema.TYPE_DEFAULT
  },
  {
    name: 'Polos',
    description: 'Collection Polos',
    slug: 'homme-polos',
    image: '/collections/homme-polos.webp',
    gender: schema.GENDER_MALE,
    type: schema.TYPE_TYPE
  },
  {
    name: 'Sweatshirts',
    description: 'Collection Sweatshirts',
    slug: 'homme-sweatshirts',
    image: '/collections/homme-sweatshirts.webp',
    gender: schema.GENDER_MALE,
    type: schema.TYPE_TYPE
  },
  {
    name: 'Survêtements',
    description: 'Collection Survêtements',
    slug: 'homme-survetements',
    image: '/collections/homme-survetements.webp',
    gender: schema.GENDER_MALE,
    type: schema.TYPE_TYPE
  },
  {
    name: 'Manteaux & Vestes',
    description: 'Collection Manteaux & Vestes',
    slug: 'homme-manteaux-vestes',
    image: '/collections/homme-manteaux-vestes.webp',
    gender: schema.GENDER_MALE,
    type: schema.TYPE_TYPE
  },
  {
    name: 'T-shirts',
    description: 'Collection T-shirts',
    slug: 'homme-t-shirts',
    image: '/collections/homme-t-shirts.webp',
    gender: schema.GENDER_MALE,
    type: schema.TYPE_TYPE
  },
  {
    name: 'Pullovers',
    description: 'Collection Pullovers',
    slug: 'homme-pullovers',
    image: '/collections/homme-pullovers.webp',
    gender: schema.GENDER_MALE,
    type: schema.TYPE_TYPE
  },
  {
    name: 'Pantalons & Shorts',
    description: 'Collection Pantalons & Shorts',
    slug: 'homme-pantalons-shorts',
    image: '/collections/homme-pantalons-shorts.webp',
    gender: schema.GENDER_MALE,
    type: schema.TYPE_TYPE
  },
  {
    name: 'Chemises',
    description: 'Collection Chemises',
    slug: 'homme-chemises',
    image: '/collections/homme-chemises.webp',
    gender: schema.GENDER_MALE,
    type: schema.TYPE_TYPE
  },
  {
    name: 'Maroquinerie',
    description: 'Collection Maroquinerie',
    slug: 'homme-maroquinerie',
    image: '/collections/homme-maroquinerie.webp',
    gender: schema.GENDER_MALE,
    type: schema.TYPE_TYPE
  },
  {
    name: 'XS',
    description: 'Collection XS',
    slug: 'homme-xs',
    image: '/collections/homme-xs.webp',
    gender: schema.GENDER_MALE,
    type: schema.TYPE_SIZE
  },
  {
    name: 'S',
    description: 'Collection S',
    slug: 'homme-s',
    image: '/collections/homme-s.webp',
    gender: schema.GENDER_MALE,
    type: schema.TYPE_SIZE
  },
  {
    name: 'M',
    description: 'Collection M',
    slug: 'homme-m',
    image: '/collections/homme-m.webp',
    gender: schema.GENDER_MALE,
    type: schema.TYPE_SIZE
  },
  {
    name: 'L',
    description: 'Collection L',
    slug: 'homme-l',
    image: '/collections/homme-l.webp',
    gender: schema.GENDER_MALE,
    type: schema.TYPE_SIZE
  },
  {
    name: 'XL',
    description: 'Collection XL',
    slug: 'homme-xl',
    image: '/collections/homme-xl.webp',
    gender: schema.GENDER_MALE,
    type: schema.TYPE_SIZE
  },
  {
    name: '2XL et plus',
    description: 'Collection 2XL et plus',
    slug: 'homme-2xl-et-plus',
    image: '/collections/homme-2xl-et-plus.webp',
    gender: schema.GENDER_MALE,
    type: schema.TYPE_SIZE
  },
  {
    name: 'Femme',
    description: 'Collection Femme',
    slug: 'femme',
    image: '/collections/femme-new.webp',
    gender: schema.GENDER_FEMALE,
    type: schema.TYPE_CATEGORY
  },
  {
    name: 'Nouveautés',
    description: 'Collection Nouveautés',
    slug: 'femme-nouveautes',
    image: '/collections/femme-new.webp',
    gender: schema.GENDER_FEMALE,
    type: schema.TYPE_DEFAULT
  },
  {
    name: 'Polos',
    description: 'Collection Polos',
    slug: 'femme-polos',
    image: '/collections/femme-polos.webp',
    gender: schema.GENDER_FEMALE,
    type: schema.TYPE_TYPE
  },
  {
    name: 'Sweatshirts',
    description: 'Collection Sweatshirts',
    slug: 'femme-sweatshirts',
    image: '/collections/femme-sweatshirts.webp',
    gender: schema.GENDER_FEMALE,
    type: schema.TYPE_TYPE
  },
  {
    name: 'Robes & Jupes',
    description: 'Collection Robes & Jupes',
    slug: 'femme-robes-jupes',
    image: '/collections/femme-robes-jupes.webp',
    gender: schema.GENDER_FEMALE,
    type: schema.TYPE_TYPE
  },
  {
    name: 'Manteaux et vestes',
    description: 'Collection Manteaux et vestes',
    slug: 'femme-manteaux-et-vestes',
    image: '/collections/femme-manteaux-et-vestes.webp',
    gender: schema.GENDER_FEMALE,
    type: schema.TYPE_TYPE
  },
  {
    name: 'Pullovers',
    description: 'Collection Pullovers',
    slug: 'femme-pullovers',
    image: '/collections/femme-pullovers.webp',
    gender: schema.GENDER_FEMALE,
    type: schema.TYPE_TYPE
  },
  {
    name: 'Pantalons & Shorts',
    description: 'Collection Pantalons & Shorts',
    slug: 'femme-pantalons-shorts',
    image: '/collections/femme-pantalons-shorts.webp',
    gender: schema.GENDER_FEMALE,
    type: schema.TYPE_TYPE
  },
  {
    name: 'Survêtements',
    description: 'Collection Survêtements',
    slug: 'femme-survetements',
    image: '/collections/femme-survetements.webp',
    gender: schema.GENDER_FEMALE,
    type: schema.TYPE_TYPE
  },
  {
    name: 'Tops & Chemises',
    description: 'Collection Tops & Chemises',
    slug: 'femme-tops-chemises',
    image: '/collections/femme-tops-chemises.webp',
    gender: schema.GENDER_FEMALE,
    type: schema.TYPE_TYPE
  },
  {
    name: 'XS',
    description: 'Collection XS',
    slug: 'femme-xs',
    image: '/collections/femme-xs.webp',
    gender: schema.GENDER_FEMALE,
    type: schema.TYPE_SIZE
  },
  {
    name: 'S',
    description: 'Collection S',
    slug: 'femme-s',
    image: '/collections/femme-s.webp',
    gender: schema.GENDER_FEMALE,
    type: schema.TYPE_SIZE
  },
  {
    name: 'M',
    description: 'Collection M',
    slug: 'femme-m',
    image: '/collections/femme-m.webp',
    gender: schema.GENDER_FEMALE,
    type: schema.TYPE_SIZE
  },
  {
    name: 'L',
    description: 'Collection L',
    slug: 'femme-l',
    image: '/collections/femme-l.webp',
    gender: schema.GENDER_FEMALE,
    type: schema.TYPE_SIZE
  },
  {
    name: 'XL',
    description: 'Collection XL',
    slug: 'femme-xl',
    image: '/collections/femme-xl.webp',
    gender: schema.GENDER_FEMALE,
    type: schema.TYPE_SIZE
  },
  {
    name: '2XL et plus',
    description: 'Collection 2XL et plus',
    slug: 'femme-2xl-et-plus',
    image: '/collections/femme-2xl-et-plus.webp',
    gender: schema.GENDER_FEMALE,
    type: schema.TYPE_SIZE
  }
]
