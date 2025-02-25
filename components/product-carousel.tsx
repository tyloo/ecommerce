'use client'

import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import type { Product } from '@/data/products'
import Link from 'next/link'
import { useState } from 'react'
import { ProductCard } from './product-card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'

type ProductCarouselProps = {
  title: string
  products: {
    homme: Product[]
    femme: Product[]
  }
  callToAction?: {
    label: string
    href: string
  }
}

export function ProductCarousel({ title, products, callToAction }: ProductCarouselProps) {
  const [activeTab, setActiveTab] = useState('homme')

  return (
    <div className='container my-4 space-y-4'>
      <div className='mx-4 flex items-center justify-between'>
        <h2 className='text-3xl font-bold uppercase'>{title}</h2>
        <Tabs defaultValue='homme' onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value='homme'>Homme</TabsTrigger>
            <TabsTrigger value='femme'>Femme</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <Carousel className='mx-4 w-[calc(w-full-4rem)]'>
        <CarouselContent>
          {products[activeTab as keyof typeof products].map((product, index) => (
            <CarouselItem key={index} className='basis-1/4'>
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {callToAction && (
        <div className='flex justify-center'>
          <Button asChild variant='outline' size='lg' className='text-md mt-4 font-bold uppercase'>
            <Link href={callToAction.href}>{callToAction.label}</Link>
          </Button>
        </div>
      )}
    </div>
  )
}
