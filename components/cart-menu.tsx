'use client'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { collections } from '@/data/collections'
import { ShoppingBag, Trash } from 'lucide-react'
import Image from 'next/image'
import { CollectionCard } from './collection-card'
import { Badge } from './ui/badge'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Progress } from './ui/progress'

export function CartMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon'>
          <ShoppingBag />
        </Button>
      </SheetTrigger>
      <SheetContent className='flex h-full w-full flex-col sm:max-w-lg'>
        <SheetHeader className='sticky top-0 z-10 space-y-2'>
          <SheetTitle className='hidden'>Mon Panier</SheetTitle>
          <SheetDescription className='hidden'>Gérez vos articles et passez à la caisse</SheetDescription>
          <div className='text-xl font-bold'>Mon panier</div>
        </SheetHeader>
        <div className='flex flex-1 flex-col overflow-y-auto border-t border-b bg-gray-100'>
          <div className='p-6'>
            <div className='flex flex-col gap-1 text-sm'>
              <div>Plus que 91,05 € pour bénéficier de la livraison offerte</div>
              <Progress value={58.95} max={150} />
              <div className='flex flex-row justify-between'>
                <div>58,95 €</div>
                <div>150,00 €</div>
              </div>
            </div>
          </div>
          <div className='flex-1 p-4'>
            <div className='space-y-4'>
              <div className='flex items-start justify-between gap-4'>
                <div className='relative h-24 w-24 flex-shrink-0'>
                  <Image src='/collections/homme-polos.webp' alt='Product' fill className='object-cover' />
                </div>
                <div className='flex flex-1 flex-col'>
                  <div className='flex justify-between'>
                    <div className='my-3 text-sm'>
                      <div className='font-medium'>Polo homme</div>
                      <div className='mb-2 text-gray-500'>5 - L • MANDARINIER 08E • Très bon état</div>
                      <div className='flex items-center justify-start gap-1'>
                        <div className='text-muted line-through'>120 €</div>

                        <div className='text-primary font-bold'>54 €</div>
                        <Badge className='rounded-none px-1'>-55 %</Badge>
                      </div>
                    </div>
                    <Button variant='ghost' size='icon'>
                      <Trash className='h-4 w-4' />
                    </Button>
                  </div>
                </div>
              </div>
              <div className='flex items-start justify-between gap-4'>
                <div className='relative h-24 w-24 flex-shrink-0'>
                  <Image src='/collections/homme-polos.webp' alt='Product' fill className='object-cover' />
                </div>
                <div className='flex flex-1 flex-col'>
                  <div className='flex justify-between'>
                    <div className='my-3 text-sm'>
                      <div className='font-medium'>Polo homme</div>
                      <div className='mb-2 text-gray-500'>5 - L • MANDARINIER 08E • Très bon état</div>
                      <div className='flex items-center justify-start gap-1'>
                        <div className='text-muted line-through'>120 €</div>

                        <div className='text-primary font-bold'>54 €</div>
                        <Badge className='rounded-none px-1'>-55 %</Badge>
                      </div>
                    </div>
                    <Button variant='ghost' size='icon'>
                      <Trash className='h-4 w-4' />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='p-4'>
            <div className='border-t pt-6'>
              <h3 className='mb-4 font-bold uppercase'>Vous aimerez aussi</h3>
              <div className='grid grid-cols-2 gap-4'>
                {collections.slice(0, 2).map((collection) => (
                  <CollectionCard key={collection.href} collection={collection} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <SheetFooter className='sticky bottom-0 z-10'>
          <div className='grid w-full items-center gap-1.5'>
            <Label htmlFor='picture'>Code promo</Label>
            <Input id='picture' className='rounded-none' />
          </div>
          <ul className='mb-2 text-sm/10'>
            <li className='flex flex-row items-start justify-between'>
              <div>Sous-total</div>
              <div>54,00 €</div>
            </li>
            <li className='flex flex-row items-start justify-between'>
              <div className='text-sm/4'>
                <div>Livraison</div>
                <div className='text-muted/40'>Livraison à domicile sans signature (Colissimo)</div>
              </div>
              <div className='text-sm'>4,95 €</div>
            </li>
          </ul>
          <Button className='cursor-pointer rounded-none'>Voir mon panier - 58,95 €</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
