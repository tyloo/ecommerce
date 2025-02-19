import { Button } from '@/components/ui/button'
import { navigation } from '@/data/navigation'
import { Search, ShoppingBag, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function DesktopNavigation() {
  return (
    <div className='hidden lg:flex'>
      <div className='justify-star flex flex-1 items-center gap-8'>
        <Link href='/'>
          <Image src='/croco.svg' alt='croco' width={26} height={20} />
        </Link>
        {navigation.map((item) => (
          <Link key={item.title} href={item.href} className='text-sm font-bold hover:underline'>
            {item.title}
          </Link>
        ))}
      </div>
      <div className='flex shrink-0 items-center justify-center rounded-lg'>
        <Link href='/'>
          <Image src='/logo.svg' alt='logo' width={114} height={30} />
        </Link>
      </div>
      <div className='hidden flex-1 items-center justify-end rounded-lg sm:flex'>
        <Button variant='ghost' size='icon'>
          <Search />
        </Button>
        <Button variant='ghost' size='icon'>
          <User />
        </Button>
        <Button variant='ghost' size='icon'>
          <ShoppingBag />
        </Button>
      </div>
    </div>
  )
}
