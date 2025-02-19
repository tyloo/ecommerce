import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { collections } from '@/data/collections'
import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Input } from './ui/input'

export function SearchMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon'>
          <Search />
        </Button>
      </SheetTrigger>
      <SheetContent side='top' className='px-4 py-2'>
        <SheetHeader className='p-0'>
          <SheetTitle className='hidden'>Search</SheetTitle>
          <SheetDescription className='hidden'>Search products</SheetDescription>

          <div className='relative mr-9'>
            <Input size={2} placeholder='Rechercher des produits...' className='h-10 py-2 pr-8' />
            <Search className='text-muted-foreground absolute top-1/2 right-2 h-4 w-4 -translate-y-1/2' />
          </div>
        </SheetHeader>
        <div className='my-4 flex flex-row justify-between gap-10'>
          <div>
            <div className='mb-3 text-lg font-bold uppercase'>Suggestions</div>
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
            <div className='mb-3 text-lg font-bold uppercase'>Collections</div>
            <div className='grid grid-cols-4 space-y-2 space-x-4'>
              {collections.map((collection) => (
                <Link key={collection.href} href={collection.href}>
                  <div className='hover:border-primary group relative h-[315px] w-[237px] border-2 border-transparent'>
                    <Image
                      src={collection.imageUrl}
                      alt={collection.name}
                      width={237}
                      height={315}
                      className='h-full w-full object-cover'
                    />
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <span className='group-hover:text-background group-hover:bg-primary border-primary text-primary bg-background border-2 px-3 py-1 text-sm font-bold uppercase'>
                        {collection.name}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
