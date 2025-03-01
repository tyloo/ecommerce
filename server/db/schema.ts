import { index, pgEnum, pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core'

export const GENDER_MALE = 'male'
export const GENDER_FEMALE = 'female'
export const genderEnum = pgEnum('gender', [GENDER_MALE, GENDER_FEMALE])

export const TYPE_CATEGORY = 'category'
export const TYPE_DEFAULT = 'default'
export const TYPE_TYPE = 'type'
export const TYPE_SIZE = 'size'
export const typeEnum = pgEnum('type', [TYPE_CATEGORY, TYPE_DEFAULT, TYPE_TYPE, TYPE_SIZE])

export const CollectionTable = pgTable(
  'collections',
  {
    id: serial('id').primaryKey(),
    name: varchar('name').notNull(),
    description: text('description'),
    slug: varchar('slug').notNull().unique(),
    gender: genderEnum().notNull().default(GENDER_MALE),
    type: typeEnum().notNull().default(TYPE_DEFAULT),
    image: varchar('image').notNull(),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
    updatedAt: timestamp('updatedAt').defaultNow().notNull()
  },
  (table) => [
    index('Collection_slug_idx').on(table.slug),
    index('Collection_gender_idx').on(table.gender),
    index('Collection_type_idx').on(table.type)
  ]
)
