import type { Collection } from '@/data/collections'
import Image from 'next/image'
import Link from 'next/link'

export function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <Link key={collection.href} href={collection.href} className='h-full w-full'>
      <div className='hover:border-primary group relative aspect-[237/315] w-full max-w-[237px] border-2 border-transparent'>
        <Image
          src={collection.imageUrl}
          alt={collection.name}
          width={237}
          height={315}
          className='h-full w-full object-cover'
        />
        <div className='absolute inset-0 flex items-center justify-center'>
          <span className='group-hover:text-background group-hover:bg-primary border-primary text-primary bg-background md:text-md border-2 px-3 py-1 text-xs font-bold uppercase'>
            {collection.name}
          </span>
        </div>
      </div>
    </Link>
  )
}
