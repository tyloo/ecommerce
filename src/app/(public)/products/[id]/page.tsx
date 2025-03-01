'use client'

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
import { useEffect, useRef, useState } from 'react'

function ImageZoom({ src, alt }: { src: string; alt: string }) {
  const [isZoomed, setIsZoomed] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (imageRef.current && imageRef.current.complete) {
      setDimensions({
        width: imageRef.current.naturalWidth,
        height: imageRef.current.naturalHeight
      })
    }
  }, [src])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    setPosition({ x, y })
  }

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setDimensions({
      width: e.currentTarget.naturalWidth,
      height: e.currentTarget.naturalHeight
    })
  }

  const aspectRatio = dimensions.width && dimensions.height ? dimensions.width / dimensions.height : 4 / 3

  return (
    <div
      className='relative w-full overflow-hidden bg-gray-100'
      style={{ aspectRatio }}
      onMouseEnter={() => setIsZoomed(true)}
      onMouseLeave={() => setIsZoomed(false)}
      onMouseMove={handleMouseMove}
    >
      <Image
        ref={imageRef}
        src={src}
        alt={alt}
        fill
        className={`object-contain transition-transform duration-200 ${isZoomed ? 'scale-150' : 'scale-100'}`}
        style={
          isZoomed
            ? {
                transformOrigin: `${position.x}% ${position.y}%`
              }
            : undefined
        }
        onLoad={handleImageLoad}
        sizes='(max-width: 768px) 100vw, 50vw'
      />
    </div>
  )
}

export default function ProductPage(props: { params: Promise<{ id: string }> }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [product, setProduct] = useState<(typeof products)[0] | null>(null)
  const [relatedProducts, setRelatedProducts] = useState<{
    homme: typeof products
    femme: typeof products
  }>({ homme: [], femme: [] })

  useEffect(() => {
    async function loadData() {
      const params = await props.params
      const foundProduct = products.find((p) => p.id === params.id)

      if (!foundProduct) {
        notFound()
        return
      }

      setProduct(foundProduct)

      // Get related products (same gender and type)
      setRelatedProducts({
        homme: products.filter((p) => p.gender === 'homme' && p.id !== foundProduct.id).slice(0, 10),
        femme: products.filter((p) => p.gender === 'femme' && p.id !== foundProduct.id).slice(0, 10)
      })
    }

    loadData()
  }, [props.params])

  if (!product) {
    return null // or a loading state
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
        <div className='space-y-4'>
          {/* Main Image */}
          <div className='w-full overflow-hidden rounded-lg'>
            <ImageZoom src={product.images[selectedImage]} alt={`${product.name} - Image ${selectedImage + 1}`} />
          </div>
          {/* Thumbnail Grid */}
          <div className='grid grid-cols-6 gap-4'>
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative aspect-square overflow-hidden rounded-lg border-2 ${
                  selectedImage === index ? 'border-primary' : 'border-transparent'
                }`}
              >
                <Image
                  src={image}
                  alt={`${product.name} - Thumbnail ${index + 1}`}
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 16vw, 8vw'
                />
              </button>
            ))}
          </div>
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
