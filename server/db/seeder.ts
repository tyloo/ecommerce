import { neon } from '@neondatabase/serverless'
import 'dotenv/config'
import { drizzle } from 'drizzle-orm/neon-http'

import * as schema from '../db/schema'

const sql = neon(process.env.DATABASE_URL!)
// @ts-ignore
const db = drizzle(sql, { schema })

async function main() {
  try {
    console.log('Seed started...')

    console.log('Seeding collections...')
    await db.insert(schema.CollectionTable).values([
      {
        name: 'Homme',
        description: 'Collection Homme',
        handle: 'homme',
        image: '/collections/homme-new.webp',
        gender: schema.GENDER_MALE,
        type: schema.TYPE_CATEGORY
      },
      {
        name: 'Nouveautés',
        description: 'Collection Nouveautés',
        handle: 'homme-nouveautes',
        image: '/collections/homme-new.webp',
        gender: schema.GENDER_MALE,
        type: schema.TYPE_DEFAULT
      },
      {
        name: 'Polos',
        description: 'Collection Polos',
        handle: 'homme-polos',
        image: '/collections/homme-polos.webp',
        gender: schema.GENDER_MALE,
        type: schema.TYPE_TYPE
      },
      {
        name: 'Sweatshirts',
        description: 'Collection Sweatshirts',
        handle: 'homme-sweatshirts',
        image: '/collections/homme-sweatshirts.webp',
        gender: schema.GENDER_MALE,
        type: schema.TYPE_TYPE
      },
      {
        name: 'Survêtements',
        description: 'Collection Survêtements',
        handle: 'homme-survetements',
        image: '/collections/homme-survetements.webp',
        gender: schema.GENDER_MALE,
        type: schema.TYPE_TYPE
      },
      {
        name: 'Manteaux & Vestes',
        description: 'Collection Manteaux & Vestes',
        handle: 'homme-manteaux-vestes',
        image: '/collections/homme-manteaux-vestes.webp',
        gender: schema.GENDER_MALE,
        type: schema.TYPE_TYPE
      },
      {
        name: 'T-shirts',
        description: 'Collection T-shirts',
        handle: 'homme-t-shirts',
        image: '/collections/homme-t-shirts.webp',
        gender: schema.GENDER_MALE,
        type: schema.TYPE_TYPE
      },
      {
        name: 'Pullovers',
        description: 'Collection Pullovers',
        handle: 'homme-pullovers',
        image: '/collections/homme-pullovers.webp',
        gender: schema.GENDER_MALE,
        type: schema.TYPE_TYPE
      },
      {
        name: 'Pantalons & Shorts',
        description: 'Collection Pantalons & Shorts',
        handle: 'homme-pantalons-shorts',
        image: '/collections/homme-pantalons-shorts.webp',
        gender: schema.GENDER_MALE,
        type: schema.TYPE_TYPE
      },
      {
        name: 'Chemises',
        description: 'Collection Chemises',
        handle: 'homme-chemises',
        image: '/collections/homme-chemises.webp',
        gender: schema.GENDER_MALE,
        type: schema.TYPE_TYPE
      },
      {
        name: 'Maroquinerie',
        description: 'Collection Maroquinerie',
        handle: 'homme-maroquinerie',
        image: '/collections/homme-maroquinerie.webp',
        gender: schema.GENDER_MALE,
        type: schema.TYPE_TYPE
      },
      {
        name: 'XS',
        description: 'Collection XS',
        handle: 'homme-xs',
        image: '/collections/homme-xs.webp',
        gender: schema.GENDER_MALE,
        type: schema.TYPE_SIZE
      },
      {
        name: 'S',
        description: 'Collection S',
        handle: 'homme-s',
        image: '/collections/homme-s.webp',
        gender: schema.GENDER_MALE,
        type: schema.TYPE_SIZE
      },
      {
        name: 'M',
        description: 'Collection M',
        handle: 'homme-m',
        image: '/collections/homme-m.webp',
        gender: schema.GENDER_MALE,
        type: schema.TYPE_SIZE
      },
      {
        name: 'L',
        description: 'Collection L',
        handle: 'homme-l',
        image: '/collections/homme-l.webp',
        gender: schema.GENDER_MALE,
        type: schema.TYPE_SIZE
      },
      {
        name: 'XL',
        description: 'Collection XL',
        handle: 'homme-xl',
        image: '/collections/homme-xl.webp',
        gender: schema.GENDER_MALE,
        type: schema.TYPE_SIZE
      },
      {
        name: '2XL et plus',
        description: 'Collection 2XL et plus',
        handle: 'homme-2xl-et-plus',
        image: '/collections/homme-2xl-et-plus.webp',
        gender: schema.GENDER_MALE,
        type: schema.TYPE_SIZE
      },
      {
        name: 'Femme',
        description: 'Collection Femme',
        handle: 'femme',
        image: '/collections/femme-new.webp',
        gender: schema.GENDER_FEMALE,
        type: schema.TYPE_CATEGORY
      },
      {
        name: 'Nouveautés',
        description: 'Collection Nouveautés',
        handle: 'femme-nouveautes',
        image: '/collections/femme-new.webp',
        gender: schema.GENDER_FEMALE,
        type: schema.TYPE_DEFAULT
      },
      {
        name: 'Polos',
        description: 'Collection Polos',
        handle: 'femme-polos',
        image: '/collections/femme-polos.webp',
        gender: schema.GENDER_FEMALE,
        type: schema.TYPE_TYPE
      },
      {
        name: 'Sweatshirts',
        description: 'Collection Sweatshirts',
        handle: 'femme-sweatshirts',
        image: '/collections/femme-sweatshirts.webp',
        gender: schema.GENDER_FEMALE,
        type: schema.TYPE_TYPE
      },
      {
        name: 'Robes & Jupes',
        description: 'Collection Robes & Jupes',
        handle: 'femme-robes-jupes',
        image: '/collections/femme-robes-jupes.webp',
        gender: schema.GENDER_FEMALE,
        type: schema.TYPE_TYPE
      },
      {
        name: 'Manteaux et vestes',
        description: 'Collection Manteaux et vestes',
        handle: 'femme-manteaux-et-vestes',
        image: '/collections/femme-manteaux-et-vestes.webp',
        gender: schema.GENDER_FEMALE,
        type: schema.TYPE_TYPE
      },
      {
        name: 'Pullovers',
        description: 'Collection Pullovers',
        handle: 'femme-pullovers',
        image: '/collections/femme-pullovers.webp',
        gender: schema.GENDER_FEMALE,
        type: schema.TYPE_TYPE
      },
      {
        name: 'Pantalons & Shorts',
        description: 'Collection Pantalons & Shorts',
        handle: 'femme-pantalons-shorts',
        image: '/collections/femme-pantalons-shorts.webp',
        gender: schema.GENDER_FEMALE,
        type: schema.TYPE_TYPE
      },
      {
        name: 'Survêtements',
        description: 'Collection Survêtements',
        handle: 'femme-survetements',
        image: '/collections/femme-survetements.webp',
        gender: schema.GENDER_FEMALE,
        type: schema.TYPE_TYPE
      },
      {
        name: 'Tops & Chemises',
        description: 'Collection Tops & Chemises',
        handle: 'femme-tops-chemises',
        image: '/collections/femme-tops-chemises.webp',
        gender: schema.GENDER_FEMALE,
        type: schema.TYPE_TYPE
      },
      {
        name: 'XS',
        description: 'Collection XS',
        handle: 'femme-xs',
        image: '/collections/femme-xs.webp',
        gender: schema.GENDER_FEMALE,
        type: schema.TYPE_SIZE
      },
      {
        name: 'S',
        description: 'Collection S',
        handle: 'femme-s',
        image: '/collections/femme-s.webp',
        gender: schema.GENDER_FEMALE,
        type: schema.TYPE_SIZE
      },
      {
        name: 'M',
        description: 'Collection M',
        handle: 'femme-m',
        image: '/collections/femme-m.webp',
        gender: schema.GENDER_FEMALE,
        type: schema.TYPE_SIZE
      },
      {
        name: 'L',
        description: 'Collection L',
        handle: 'femme-l',
        image: '/collections/femme-l.webp',
        gender: schema.GENDER_FEMALE,
        type: schema.TYPE_SIZE
      },
      {
        name: 'XL',
        description: 'Collection XL',
        handle: 'femme-xl',
        image: '/collections/femme-xl.webp',
        gender: schema.GENDER_FEMALE,
        type: schema.TYPE_SIZE
      },
      {
        name: '2XL et plus',
        description: 'Collection 2XL et plus',
        handle: 'femme-2xl-et-plus',
        image: '/collections/femme-2xl-et-plus.webp',
        gender: schema.GENDER_FEMALE,
        type: schema.TYPE_SIZE
      }
    ])

    console.log('Seeding products...')

    console.log('Linking products to collections...')

    console.log('Seed finished...')
  } catch (error) {
    console.error(error)
    throw new Error('Seed error...')
  }
}
main()
