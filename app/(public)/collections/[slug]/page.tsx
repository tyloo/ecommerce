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
import { Button } from '@/components/ui/button'
import { collections } from '@/data/collections'
import { Product } from '@/data/products'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type ProductsResponse = {
  products: Product[]
  pagination: {
    page: number
    totalItems: number
    totalPages: number
  }
}

async function getProducts(params: { slug: string }, searchParams: URLSearchParams) {
  const collection = collections[params.slug]
  if (!collection) return null

  const isGenderCollection = collection.name.toLowerCase() === 'homme' || collection.name.toLowerCase() === 'femme'
  const [gender, ...category] = params.slug.split('-')

  // Build API URL with all filters
  const apiUrl = new URL('/api/products', process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000')

  // Add collection-specific filters
  if (isGenderCollection) {
    apiUrl.searchParams.set('gender', collection.name.toLowerCase())
  } else {
    apiUrl.searchParams.set('gender', gender)
    apiUrl.searchParams.set('category', category.join(' '))
  }

  // Add all other filters from searchParams
  for (const [key, value] of Array.from(searchParams.entries())) {
    apiUrl.searchParams.set(key, value)
  }

  const response = await fetch(apiUrl)
  if (!response.ok) return null
  return response.json() as Promise<ProductsResponse>
}

function PaginationControls({
  currentPage,
  totalPages,
  createPageUrl
}: {
  currentPage: number
  totalPages: number
  createPageUrl: (page: number) => string
}) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  const maxVisiblePages = 5

  let visiblePages = pages
  if (totalPages > maxVisiblePages) {
    const start = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    const end = Math.min(totalPages, start + maxVisiblePages - 1)
    visiblePages = pages.slice(start - 1, end)
  }

  return (
    <div className='mt-8 flex justify-center gap-2'>
      {currentPage > 1 && (
        <Button variant='outline' asChild>
          <Link href={createPageUrl(currentPage - 1)}>Previous</Link>
        </Button>
      )}

      {visiblePages[0] > 1 && (
        <>
          <Button variant='outline' asChild>
            <Link href={createPageUrl(1)}>1</Link>
          </Button>
          {visiblePages[0] > 2 && <span className='px-2'>...</span>}
        </>
      )}

      {visiblePages.map((page) => (
        <Button key={page} variant={currentPage === page ? 'default' : 'outline'} asChild>
          <Link href={createPageUrl(page)}>{page}</Link>
        </Button>
      ))}

      {visiblePages[visiblePages.length - 1] < totalPages && (
        <>
          {visiblePages[visiblePages.length - 1] < totalPages - 1 && <span className='px-2'>...</span>}
          <Button variant='outline' asChild>
            <Link href={createPageUrl(totalPages)}>{totalPages}</Link>
          </Button>
        </>
      )}

      {currentPage < totalPages && (
        <Button variant='outline' asChild>
          <Link href={createPageUrl(currentPage + 1)}>Next</Link>
        </Button>
      )}
    </div>
  )
}

export default async function CollectionPage({
  params,
  searchParams
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const collection = collections[params.slug]

  if (!collection) {
    notFound()
  }

  const searchParamsObj = new URLSearchParams()
  Object.entries(searchParams).forEach(([key, value]) => {
    if (typeof value === 'string') {
      searchParamsObj.set(key, value)
    }
  })

  const currentPage = parseInt((searchParams.page as string) || '1')
  searchParamsObj.set('page', currentPage.toString())

  const response = await getProducts(params, searchParamsObj)
  if (!response) return null

  const { products, pagination } = response

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParamsObj)
    params.set('page', page.toString())
    return `?${params.toString()}`
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
        <div className='my-6 text-sm text-gray-500'>{pagination.totalItems} products</div>
        <Filters />
        <div className='mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <PaginationControls
          currentPage={pagination.page}
          totalPages={pagination.totalPages}
          createPageUrl={createPageUrl}
        />
      </div>
    </div>
  )
}
