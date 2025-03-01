import { CollectionTable, TYPE_TYPE } from '@/server/db/schema'
import { j, publicProcedure } from '@/server/jstack'
import { asc, eq } from 'drizzle-orm'
import { z } from 'zod'

export const collectionRouter = j.router({
  getCollections: publicProcedure.query(async ({ c, ctx }) => {
    const { db } = ctx
    const menuCollections = await db.select().from(CollectionTable)

    return c.superjson(menuCollections ?? null)
  }),

  getMenuCollections: publicProcedure.query(async ({ c, ctx }) => {
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
