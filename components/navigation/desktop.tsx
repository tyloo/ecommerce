'use client'

import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import { navigation } from '@/data/navigation'
import { ChevronRight, ShoppingBag, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { CollectionCard } from '../collection-card'
import { SearchMenu } from '../search-menu'

export function DesktopNavigation() {
  return (
    <div className='hidden lg:flex'>
      <div className='justify-star flex flex-1 items-center gap-8'>
        <Link href='/'>
          <Image src='/croco.svg' alt='croco' width={26} height={20} />
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            {navigation.map((link, index) => (
              <NavigationMenuItem key={`desktop-menu-${index}`}>
                <NavigationMenuTrigger>
                  <Link href={link.href!}>{link.title}</Link>
                </NavigationMenuTrigger>
                {link.items && (
                  <NavigationMenuContent className='bg-background min-w-screen border-b px-10 py-8'>
                    <div className='flex flex-row justify-between'>
                      <div className='flex flex-row gap-20'>
                        {link.items.map((linkItem, indexLinkItem) => (
                          <div className='flex flex-col' key={`desktop-menu-item-${indexLinkItem}`}>
                            <div className='text-md mb-4 font-bold uppercase'>{linkItem.title}</div>
                            {linkItem.items?.map((subLinkItem, indexSubLinkItem) => (
                              <Link
                                key={`desktop-menu-subitem-${indexSubLinkItem}`}
                                href={subLinkItem.href!}
                                className='mb-1.5 text-sm hover:underline'
                              >
                                {subLinkItem.title}
                              </Link>
                            ))}
                            {typeof linkItem.href !== 'undefined' && (
                              <Link href={link.href!} className='mt-4 flex items-center text-sm hover:underline'>
                                Voir tout <ChevronRight />
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className='flex flex-row gap-4'>
                        <CollectionCard
                          key='collection-homme-polos'
                          collection={{
                            name: 'Polos',
                            textColor: 'primary',
                            href: '/collections/homme-polos',
                            imageUrl: '/collections/homme-polos.webp'
                          }}
                        />
                        <CollectionCard
                          key='collection-homme-new'
                          collection={{
                            name: 'Nouveautés',
                            textColor: 'primary',
                            href: '/collections/homme-new',
                            imageUrl: '/collections/homme-new.webp'
                          }}
                        />
                      </div>
                    </div>
                  </NavigationMenuContent>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className='flex shrink-0 items-center justify-center rounded-lg'>
        <Link href='/'>
          <Image src='/logo.svg' alt='logo' width={114} height={30} />
        </Link>
      </div>
      <div className='hidden flex-1 items-center justify-end rounded-lg sm:flex'>
        <SearchMenu />
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
