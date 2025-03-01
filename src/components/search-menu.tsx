import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { client } from '@/lib/client'
import { useQuery } from '@tanstack/react-query'
import { Search } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { NewCollectionCard } from './new-collection-card'

export function SearchMenu() {
  const [open, setOpen] = useState(false)

  const { data, error, isPending } = useQuery({
    queryKey: ['get-menu-collections'],
    queryFn: async () => {
      const res = await client.collection.getMenuCollections.$get()
      return await res.json()
    }
  })

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon'>
          <Search />
        </Button>
      </SheetTrigger>
      <SheetContent side='top' className='flex max-h-screen flex-col overflow-y-auto px-4 py-2'>
        <SheetHeader className='p-0'>
          <SheetTitle className='hidden'>Search</SheetTitle>
          <SheetDescription className='hidden'>Search products</SheetDescription>

          <div className='relative'>
            <Input size={2} placeholder='Rechercher des produits...' className='h-10 py-2 pr-8' />
            <Search className='text-muted-foreground absolute top-1/2 right-2 h-4 w-4 -translate-y-1/2' />
          </div>
        </SheetHeader>
        <div className='my-4 flex h-full flex-col justify-between gap-4 md:flex-row'>
          <div className='flex grow flex-row justify-between gap-4 lg:flex-col lg:justify-start'>
            <div>
              <div className='mb-3 text-sm font-bold uppercase'>Suggestions</div>
              <ul>
                <li className='mb-2 text-sm'>
                  <Link href='/collections/femme-nouveautes' className='hover:underline'>
                    Femme - Nouveautés
                  </Link>
                </li>
                <li className='mb-2 text-sm'>
                  <Link href='/collections/homme-nouveautes' className='hover:underline'>
                    Homme - Nouveautés
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className='mb-3 text-sm font-bold uppercase'>Derniéres recherches</div>
              <ul>
                <li className='mb-2 text-sm'>
                  <Link href='/collections/femme-nouveautes' className='hover:underline'>
                    qwerty
                  </Link>
                </li>
                <li className='mb-2 text-sm'>
                  <Link href='/collections/homme-nouveautes' className='hover:underline'>
                    tyuiop
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='text-sm font-bold uppercase'>Collections</div>
            <div className='mx-auto grid auto-rows-auto grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4'>
              {isPending ? (
                <div className='flex h-full flex-col justify-center gap-4'>
                  <div className='h-8 w-8 animate-spin rounded-full border-t-2 border-b-2 border-slate-200' />
                  <div className='text-sm'>Loading...</div>
                </div>
              ) : error ? (
                <div className='flex h-full flex-col justify-center gap-4'>
                  <div className='text-red-500'>Error</div>
                  <div className='text-sm'>{error.message}</div>
                </div>
              ) : data ? (
                data.map((collection) => (
                  <NewCollectionCard
                    key={`menu-collection-${collection.slug}`}
                    collection={collection}
                    onClick={() => setOpen(false)}
                  />
                ))
              ) : null}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
