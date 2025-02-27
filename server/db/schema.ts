import { index, pgEnum, pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core'

export const moodEnum = pgEnum('color', ['primary', 'white'])

export const collections = pgTable(
  'collections',
  {
    id: serial('id').primaryKey(),
    name: varchar('name').notNull(),
    description: text('description'),
    slug: varchar('slug').notNull().unique(),
    image: varchar('image').notNull(),
    color: moodEnum().notNull().default('primary'),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
    updatedAt: timestamp('updatedAt').defaultNow().notNull()
  },
  (table) => [index('Collection_slug_idx').on(table.slug)]
)
