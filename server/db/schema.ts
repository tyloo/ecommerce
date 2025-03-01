import { index, integer, jsonb, pgEnum, pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core'

export const CONDITION_NEW = 'new'
export const CONDITION_EXCELLENT = 'excellent'
export const CONDITION_VERY_GOOD = 'very_good'
export const CONDITION_GOOD = 'good'
export type AVAILABLE_CONDITIONS =
  | typeof CONDITION_NEW
  | typeof CONDITION_EXCELLENT
  | typeof CONDITION_VERY_GOOD
  | typeof CONDITION_GOOD

export const conditionEnum = pgEnum('condition', [
  CONDITION_NEW,
  CONDITION_EXCELLENT,
  CONDITION_VERY_GOOD,
  CONDITION_GOOD
])

export const GENDER_MALE = 'male'
export const GENDER_FEMALE = 'female'
export type AVAILABLE_GENDERS = typeof GENDER_MALE | typeof GENDER_FEMALE
export const genderEnum = pgEnum('gender', [GENDER_MALE, GENDER_FEMALE])

export const TYPE_CATEGORY = 'category'
export const TYPE_DEFAULT = 'default'
export const TYPE_TYPE = 'type'
export const TYPE_SIZE = 'size'
export type AVAILABLE_TYPES = typeof TYPE_CATEGORY | typeof TYPE_DEFAULT | typeof TYPE_TYPE | typeof TYPE_SIZE
export const typeEnum = pgEnum('type', [TYPE_CATEGORY, TYPE_DEFAULT, TYPE_TYPE, TYPE_SIZE])

export const ProductTable = pgTable(
  'product',
  {
    id: serial('id').primaryKey(),
    slug: varchar('slug').notNull().unique(),
    name: varchar('name').notNull(),
    description: text('description'),
    price: integer('price').notNull(),
    originalPrice: integer('original_price').notNull(),
    condition: conditionEnum().notNull().default(CONDITION_NEW),
    size: text('size').notNull(),
    color: text('color').notNull(),
    images: jsonb('images').notNull(),
    collections: jsonb('collections').notNull(),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
    updatedAt: timestamp('updatedAt').defaultNow().notNull()
  },
  (table) => [
    index('Product_slug_idx').on(table.slug),
    index('Product_condition_idx').on(table.condition),
    index('Product_size_idx').on(table.size),
    index('Product_color_idx').on(table.color)
  ]
)

export const CollectionTable = pgTable(
  'collection',
  {
    id: serial('id').primaryKey(),
    slug: varchar('slug').notNull().unique(),
    name: varchar('name').notNull(),
    description: text('description'),
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
