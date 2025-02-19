'use client'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { collections } from '@/data/collections'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import Image from 'next/image'
import { CollectionCard } from './collection-card'
import { Progress } from './ui/progress'

export function CartMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon'>
          <ShoppingBag />
        </Button>
      </SheetTrigger>
      <SheetContent className='flex h-full flex-col'>
        <SheetHeader className='space-y-2'>
          <SheetTitle className='text-xl font-bold'>Mon Panier</SheetTitle>
          <SheetDescription className='hidden'>Gérez vos articles et passez à la caisse</SheetDescription>
        </SheetHeader>
        <div className='flex-1 overflow-y-auto'>
          <div className='flex flex-col gap-1 text-sm'>
            <div>Plus que 91,05 € pour bénéficier de la livraison offerte</div>
            <Progress value={58.95} max={150} />
            <div className='flex flex-row justify-between'>
              <div>58,95 €</div>
              <div>150,00 €</div>
            </div>
          </div>

          <div className='space-y-4'>
            {/* Cart Items */}
            <div className='flex items-start justify-between gap-4'>
              <div className='relative h-24 w-24 flex-shrink-0'>
                <Image src='/collections/homme-polos.webp' alt='Product' fill className='object-cover' />
              </div>
              <div className='flex flex-1 flex-col'>
                <div className='flex justify-between'>
                  <div>
                    <h3 className='font-medium'>Polo Classic Fit</h3>
                    <p className='text-sm text-gray-500'>Taille: M</p>
                  </div>
                  <Button variant='ghost' size='icon'>
                    <X className='h-4 w-4' />
                  </Button>
                </div>
                <div className='mt-2 flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <Button variant='outline' size='icon'>
                      <Minus className='h-4 w-4' />
                    </Button>
                    <span>1</span>
                    <Button variant='outline' size='icon'>
                      <Plus className='h-4 w-4' />
                    </Button>
                  </div>
                  <p className='font-medium'>120,00 €</p>
                </div>
              </div>
            </div>
            <Separator />
          </div>
        </div>
        {/* Cart Summary */}
        <div className='space-y-4 border-t pt-6'>
          <div className='flex justify-between'>
            <span>Sous-total</span>
            <span className='font-medium'>360,00 €</span>
          </div>
          <div className='flex justify-between'>
            <span>Livraison</span>
            <span className='font-medium'>Gratuite</span>
          </div>
          <div className='flex justify-between font-bold'>
            <span>Total</span>
            <span>360,00 €</span>
          </div>
          <Button className='w-full'>Commander</Button>
        </div>
        {/* Related Products */}
        <div className='border-t pt-6'>
          <h3 className='mb-4 font-bold uppercase'>Vous aimerez aussi</h3>
          <div className='grid grid-cols-2 gap-4'>
            {collections.slice(0, 2).map((collection) => (
              <CollectionCard key={collection.href} collection={collection} />
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
