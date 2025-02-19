import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { collections } from '@/data/collections'
import { Search } from 'lucide-react'
import Link from 'next/link'
import { CollectionCard } from './collection-card'
import { Input } from './ui/input'

export function SearchMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon'>
          <Search />
        </Button>
      </SheetTrigger>
      <SheetContent side='top' className='flex flex-col px-4 py-2'>
        <SheetHeader className='p-0'>
          <SheetTitle className='hidden'>Search</SheetTitle>
          <SheetDescription className='hidden'>Search products</SheetDescription>

          <div className='relative mr-9'>
            <Input size={2} placeholder='Rechercher des produits...' className='h-10 py-2 pr-8' />
            <Search className='text-muted-foreground absolute top-1/2 right-2 h-4 w-4 -translate-y-1/2' />
          </div>
        </SheetHeader>
        <div className='my-4 flex h-full flex-col justify-between gap-4 overflow-auto md:flex-row'>
          <div className='flex grow flex-col gap-4'>
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
            <div className='mx-auto grid auto-rows-auto grid-cols-2 gap-4 sm:grid-cols-3'>
              {collections.map((collection) => (
                <CollectionCard key={collection.href} collection={collection} />
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
