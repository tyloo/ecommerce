'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import type { Product } from '@/data/products'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
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
              <Card
                key={product.id}
                className='border-background hover:border-primary min-w-[237px] flex-none snap-start rounded-none border-2 shadow-none'
              >
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
