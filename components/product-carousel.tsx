'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import type { Product } from '@/data/products'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type ProductCarouselProps = {
  title: string
  tabs?: { id: string; label: string }[]
  products: Product[]
  callToAction?: {
    label: string
    href: string
  }
}

export function ProductCarousel({ title, tabs, products, callToAction }: ProductCarouselProps) {
  return (
    <div className='w-full space-y-6'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold'>{title}</h2>
        {tabs && (
          <Tabs defaultValue={tabs[0].id}>
            <TabsList>
              {tabs.map((tab) => (
                <TabsTrigger key={tab.id} value={tab.id}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        )}
      </div>

      <div className='relative'>
        <Button
          variant='ghost'
          size='icon'
          className='absolute top-1/2 left-0 z-10 -translate-y-1/2 bg-white/80 hover:bg-white'
        >
          <ChevronLeft className='h-6 w-6' />
        </Button>

        <div className='scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6'>
          {products.map((product) => (
            <Card key={product.id} className='min-w-[280px] flex-none snap-start'>
              <Link href={product.href}>
                <div className='relative aspect-square overflow-hidden'>
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className='object-cover transition-transform hover:scale-105'
                  />
                </div>
                <div className='p-4'>
                  <h3 className='font-medium'>{product.name}</h3>
                  <div className='mt-2 flex items-center gap-2'>
                    <span className='font-bold'>{product.price.toFixed(2)} €</span>
                    {product.originalPrice && (
                      <span className='text-muted-foreground line-through'>{product.originalPrice.toFixed(2)} €</span>
                    )}
                    {product.discount && <span className='text-primary text-sm font-bold'>-{product.discount}%</span>}
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>

        <Button
          variant='ghost'
          size='icon'
          className='absolute top-1/2 right-0 z-10 -translate-y-1/2 bg-white/80 hover:bg-white'
        >
          <ChevronRight className='h-6 w-6' />
        </Button>
      </div>

      {callToAction && (
        <div className='flex justify-center'>
          <Button asChild>
            <Link href={callToAction.href}>{callToAction.label}</Link>
          </Button>
        </div>
      )}
    </div>
  )
}
