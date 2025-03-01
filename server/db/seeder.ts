import { collections } from '@/server/db/data/collections'
import * as schema from '@/server/db/schema'
import { neon } from '@neondatabase/serverless'
import 'dotenv/config'
import { drizzle } from 'drizzle-orm/neon-http'
import { reset } from 'drizzle-seed'
import { products } from './data/products'

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql, { schema })

async function main() {
  try {
    console.log('Seed started...')

    console.log('Resetting database...')
    await reset(db, schema)
    await db.execute('ALTER SEQUENCE collection_id_seq RESTART WITH 1')
    await db.execute('ALTER SEQUENCE product_id_seq RESTART WITH 1')

    console.log('Seeding collections...')
    await db.insert(schema.CollectionTable).values(collections)

    console.log('Seeding products...')
    await db.insert(schema.ProductTable).values(products)

    console.log('Seed success.')
  } catch (error) {
    console.error(error)
    throw new Error('Seed error.')
  }
}
main()
