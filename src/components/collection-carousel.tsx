'use client'

import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { client } from '@/lib/client'
import { TYPE_SIZE, TYPE_TYPE } from '@/server/db/schema'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { useState } from 'react'
import { NewCollectionCard } from './new-collection-card'

type CollectionCarouselProps = {
  title: string
  type: typeof TYPE_TYPE | typeof TYPE_SIZE
  callToAction?: {
    label: string
    href: string
  }
}

export function CollectionCarousel({ title, type, callToAction }: CollectionCarouselProps) {
  const [activeTab, setActiveTab] = useState('male')

  const collections = {
    male: useQuery({
      queryKey: [`get-collection-carousel-male-${type}`],
      queryFn: async () => {
        const res = await client.collection.carouselCollections.$get({ gender: 'male', type })
        return await res.json()
      }
    }),
    female: useQuery({
      queryKey: [`get-collection-carousel-female-${type}`],
      queryFn: async () => {
        const res = await client.collection.carouselCollections.$get({ gender: 'female', type })
        return await res.json()
      }
    })
  }

  return (
    <div className='container my-4 space-y-4'>
      <div className='mx-4 flex items-center justify-between'>
        <h2 className='text-3xl font-bold uppercase'>{title}</h2>
        <Tabs defaultValue='male' onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value='male'>Homme</TabsTrigger>
            <TabsTrigger value='female'>Femme</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <Carousel className='mx-4 w-[calc(w-full-4rem)]'>
        <CarouselContent>
          {collections[activeTab as keyof typeof collections].isPending ? (
            <div>Loading...</div>
          ) : collections[activeTab as keyof typeof collections].error ? (
            <div>Error</div>
          ) : (
            collections[activeTab as keyof typeof collections].data?.map((collection, index) => (
              <CarouselItem key={index} className='basis-1/3 md:basis-1/4 lg:basis-1/5'>
                <NewCollectionCard collection={collection} />
              </CarouselItem>
            ))
          )}
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
