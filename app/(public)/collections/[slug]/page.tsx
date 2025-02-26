import { Filters } from '@/components/filter'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { collections } from '@/data/collections'
import { notFound } from 'next/navigation'
import { use } from 'react'

export default function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const collection = collections[use(params).slug]

  if (!collection) {
    notFound()
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{collection.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div>
        <h1 className='mt-10 text-5xl font-bold uppercase'>{collection.name}</h1>
        <div className='my-6 text-sm text-gray-500'>666 products</div>
        <Filters />
      </div>
    </div>
  )
}
