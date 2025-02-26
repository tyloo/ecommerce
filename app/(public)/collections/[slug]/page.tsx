import { Filters } from '@/components/filter'
import { ProductCard } from '@/components/product-card'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { collections } from '@/data/collections'
import { seedProducts } from '@/data/seed-products'
import { notFound } from 'next/navigation'
import { use } from 'react'

export default function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const collection = collections[use(params).slug]

  if (!collection) {
    notFound()
  }

  // Filter products based on collection
  const isGenderCollection = collection.name.toLowerCase() === 'homme' || collection.name.toLowerCase() === 'femme'
  const filteredProducts = seedProducts.filter((product) => {
    if (isGenderCollection) {
      return product.gender === collection.name.toLowerCase()
    }
    // For specific category collections (e.g. homme-polos, femme-robes-jupes)
    const [gender, ...category] = use(params).slug.split('-')
    return product.gender === gender && category.join('-') === product.href.split('/')[3]
  })

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
        <div className='my-6 text-sm text-gray-500'>{filteredProducts.length} products</div>
        <Filters />
        <div className='mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
