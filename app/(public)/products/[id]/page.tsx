import { ProductCarousel } from '@/components/product-carousel'
import { Badge } from '@/components/ui/badge'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { products } from '@/data/products'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export default async function ProductPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  // Get related products (same gender and type)
  const relatedProducts = {
    homme: products.filter((p) => p.gender === 'homme' && p.id !== product.id).slice(0, 10),
    femme: products.filter((p) => p.gender === 'femme' && p.id !== product.id).slice(0, 10)
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
            <BreadcrumbLink href={`/collections/${product.gender}`}>
              {product.gender.charAt(0).toUpperCase() + product.gender.slice(1)}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className='mt-8 grid grid-cols-1 gap-x-8 lg:grid-cols-2'>
        {/* Product Images */}
        <div className='grid grid-cols-2 gap-4'>
          {product.images.map((image, index) => (
            <div key={index} className='relative aspect-square overflow-hidden'>
              <Image src={image} alt={`${product.name} - Image ${index + 1}`} fill className='object-cover' />
            </div>
          ))}
        </div>

        {/* Product Info */}
        <div className='mt-8 lg:mt-0'>
          <h1 className='text-3xl font-bold'>{product.name}</h1>

          <div className='mt-4 flex items-center gap-4'>
            <span className='text-3xl font-bold'>{product.price.toFixed(2)} €</span>
            {product.originalPrice && (
              <span className='text-muted-foreground text-xl line-through'>{product.originalPrice.toFixed(2)} €</span>
            )}
          </div>

          <div className='mt-6 space-y-6'>
            <div>
              <p className='text-muted-foreground mt-2'>{product.description}</p>
            </div>

            <div>
              <h3 className='font-medium'>Condition</h3>
              <Badge variant='outline' className='mt-2'>
                {product.condition.charAt(0).toUpperCase() + product.condition.slice(1)}
              </Badge>
            </div>

            <div>
              <h3 className='font-medium'>Size</h3>
              <Badge variant='outline' className='mt-2'>
                {product.size.toUpperCase()}
              </Badge>
            </div>

            <div>
              <h3 className='font-medium'>Color</h3>
              <Badge variant='outline' className='mt-2'>
                {product.color.charAt(0).toUpperCase() + product.color.slice(1)}
              </Badge>
            </div>

            <div>
              <h3 className='font-medium'>Material</h3>
              <Badge variant='outline' className='mt-2'>
                {product.material.charAt(0).toUpperCase() + product.material.slice(1)}
              </Badge>
            </div>

            <Button size='lg' className='w-full'>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {((product.gender === 'homme' && relatedProducts.homme.length > 0) ||
        (product.gender === 'femme' && relatedProducts.femme.length > 0)) && (
        <div className='mt-16'>
          <ProductCarousel
            title='Related Products'
            products={relatedProducts}
            callToAction={{
              label: 'View All',
              href: `/collections/${product.gender}`
            }}
          />
        </div>
      )}
    </div>
  )
}
