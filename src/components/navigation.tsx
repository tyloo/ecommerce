'use client'

import { CartMenu } from '@/components/cart-menu'
import { CollectionCard } from '@/components/collection-card'
import { SearchMenu } from '@/components/search-menu'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { navigation } from '@/data/navigation'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { ChevronRight, Mail, Menu, MessageCircleQuestion, Truck, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'

export function Navigation() {
  return (
    <>
      <div className='bg-primary text-background sticky top-0 z-10'>
        <DesktopNavigation />
        <MobileNavigation />
      </div>
    </>
  )
}

function DesktopNavigation() {
  return (
    <div>
      <div className='bg-background text-primary flex items-center justify-center p-3 text-xs uppercase'>
        Retour vers
        <Link href='/' className='ml-1 underline hover:no-underline'>
          lacoste.com
        </Link>
      </div>
      <div className='hidden px-6 py-3 lg:flex'>
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
          <CartMenu />
          <Suspense>
            <SignedOut>
              <SignInButton>
                <Button variant='ghost' size='icon'>
                  <User />
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <div className='flex size-9 items-center justify-center'>
                <UserButton />
              </div>
            </SignedIn>
          </Suspense>
        </div>
      </div>
    </div>
  )
}

function MobileNavigation() {
  return (
    <div className='flex px-6 py-3 lg:hidden'>
      <div className='justify-star flex flex-1 items-center gap-4 text-sm'>
        <Sheet>
          <SheetTrigger asChild>
            <Menu />
          </SheetTrigger>
          <SheetContent side='left'>
            <SheetTitle className='hidden'>Menu</SheetTitle>
            <SheetDescription className='hidden'>Menu</SheetDescription>
            <Link href='/' className='relative p-3'>
              <Image src='/logo-black.svg' alt='logo' width={114} height={30} />
            </Link>
            <Separator />
            <Accordion type='single' collapsible className='text-md w-full'>
              {navigation.map((link, index) => (
                <AccordionItem key={`item-${index}`} value={`item-${index}`}>
                  <AccordionTrigger className='p-4'>
                    <Link href={link.href!} className='text-md font-bold uppercase'>
                      {link.title}
                    </Link>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className='flex flex-col text-sm'>
                      {link.items?.map((item, index) => (
                        <div key={`item-${index}`}>
                          <div className='bg-primary/30 text-background p-4 font-bold uppercase'>{item.title}</div>
                          {item.items?.map((subItem) => (
                            <div key={`sub-item-${subItem.title}`} className='hover:bg-primary/10 p-4 uppercase'>
                              <Link href={subItem.href!} className='hover:underline'>
                                {subItem.title}
                              </Link>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Separator />
            <div className='m-2 grid grid-cols-2 gap-2 text-xs'>
              <div className='hover:text-background hover:bg-primary border-primary flex aspect-square flex-col items-center justify-center gap-2 border-2'>
                <User />
                <div className='text-md font-bold uppercase'>Mon compte</div>
              </div>
              <div className='hover:text-background hover:bg-primary border-primary flex aspect-square flex-col items-center justify-center gap-2 border-2'>
                <MessageCircleQuestion />
                <div className='text-md font-bold uppercase'>FAQ</div>
              </div>
              <div className='hover:text-background hover:bg-primary border-primary flex aspect-square flex-col items-center justify-center gap-2 border-2'>
                <Mail />
                <div className='text-md font-bold uppercase'>Nous écrire</div>
              </div>
              <div className='hover:text-background hover:bg-primary border-primary flex aspect-square flex-col items-center justify-center gap-2 border-2'>
                <Truck />
                <div className='text-md font-bold uppercase'>Suivi de commande</div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <Image src='/croco.svg' alt='croco' width={26} height={20} />
      </div>
      <div className='flex shrink-0 items-center justify-center rounded-lg'>
        <Image src='/logo.svg' alt='logo' width={114} height={30} />
      </div>
      <div className='flex flex-1 items-center justify-end rounded-lg'>
        <SearchMenu />
        <CartMenu />
        <Suspense>
          <SignedOut>
            <SignInButton>
              <Button variant='ghost' size='icon'>
                <User />
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Suspense>
      </div>
    </div>
  )
}
