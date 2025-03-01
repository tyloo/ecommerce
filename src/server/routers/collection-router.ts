import { CollectionTable, GENDER_FEMALE, GENDER_MALE, TYPE_SIZE, TYPE_TYPE } from '@/server/db/schema'
import { j, publicProcedure } from '@/server/jstack'
import { and, asc, eq } from 'drizzle-orm'
import { z } from 'zod'

const getCollectionsParameters = z.object({
  gender: z.enum([GENDER_MALE, GENDER_FEMALE]),
  type: z.enum([TYPE_TYPE, TYPE_SIZE])
})

export const collectionRouter = j.router({
  collectionsByGenderAndType: publicProcedure.input(getCollectionsParameters).query(async ({ c, ctx, input }) => {
    const { db } = ctx
    const collections = await db
      .select()
      .from(CollectionTable)
      .where(and(eq(CollectionTable.gender, input.gender), eq(CollectionTable.type, input.type)))

    return c.superjson(collections ?? null)
  }),

  getSearchMenuCollections: publicProcedure.query(async ({ c, ctx }) => {
    const { db } = ctx
    const menuCollections = await db
      .select()
      .from(CollectionTable)
      .where(eq(CollectionTable.type, TYPE_TYPE))
      .orderBy(asc(CollectionTable.gender))

    return c.superjson(menuCollections ?? null)
  }),

  findOneBySlug: publicProcedure
    .input(
      z.object({
        slug: z.string()
      })
    )
    .query(async ({ c, ctx, input }) => {
      const { db } = ctx

      const collection = async () => {
        await db.select().from(CollectionTable).where(eq(CollectionTable.slug, input.slug)).limit(1)
      }

      return c.superjson(collection ?? null)
    })
})
