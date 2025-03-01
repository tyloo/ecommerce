import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Product } from '@/data/products'
import Image from 'next/image'
import Link from 'next/link'

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card key={product.id} className='group min-w-[237px] flex-none snap-start rounded-none border-none shadow-none'>
      <Link href={`/products/${product.id}`}>
        <div className='relative aspect-square overflow-hidden group-hover:hidden'>
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className='object-cover transition-transform hover:scale-105'
          />
        </div>
        <div className='relative hidden aspect-square overflow-hidden group-hover:block'>
          <Image
            src={product.images[1]}
            alt={product.name}
            fill
            className='object-cover transition-transform hover:scale-105'
          />
        </div>
        <div className='flex flex-col'>
          <div className='mt-2 flex flex-row justify-between'>
            <h3 className='text-md font-medium'>{product.name}</h3>
            <div className='flex items-center gap-2'>
              {product.originalPrice && (
                <span className='text-muted-foreground text-xs line-through'>{product.originalPrice.toFixed(2)} €</span>
              )}
              <span className='text-primary text-md font-bold'>{product.price.toFixed(2)} €</span>
            </div>
          </div>
          <div className='mt-2 flex items-center gap-1'>
            <Badge variant={'outline'}>M</Badge>
            <Badge variant={'outline'}>L</Badge>
            <Badge variant={'outline'}>XL</Badge>
          </div>
        </div>
      </Link>
    </Card>
  )
}
