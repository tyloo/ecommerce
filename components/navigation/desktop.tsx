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
                  <NavigationMenuContent className='bg-background min-w-screen px-10 py-8'>
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
                        <div className='relative h-[315px] w-[237px]'>
                          <Image
                            src='/homme-polos.webp'
                            alt='homme-polos'
                            width={237}
                            height={315}
                            className='h-full w-full object-cover'
                          />
                          <div className='absolute inset-0 flex items-center justify-center'>
                            <span className='text-primary text-xl font-bold uppercase'>Polos</span>
                          </div>
                        </div>
                        <div className='relative h-[315px] w-[237px]'>
                          <Image
                            src='/homme-new.webp'
                            alt='homme-polos'
                            width={237}
                            height={315}
                            className='h-full w-full object-cover'
                          />
                          <div className='absolute inset-0 flex items-center justify-center'>
                            <span className='text-primary text-xl font-bold uppercase'>Nouveautés</span>
                          </div>
                        </div>
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
