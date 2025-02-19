import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { navigation } from '@/data/navigation'
import { Mail, Menu, MessageCircleQuestion, ShoppingBag, Truck, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { SearchMenu } from '../search-menu'

export function MobileNavigation() {
  return (
    <div className='flex lg:hidden'>
      <div className='justify-star flex flex-1 items-center gap-4 text-sm'>
        <Sheet>
          <SheetTrigger asChild>
            <Menu />
          </SheetTrigger>
          <SheetContent side='left'>
            <SheetTitle className='hidden'>Menu</SheetTitle>
            <SheetDescription className='hidden'>Menu</SheetDescription>
            <div className='p-3'>
              <Link href='/'>
                <Image src='/logo-black.svg' alt='logo' width={114} height={30} />
              </Link>
            </div>
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
                      {link.items?.map((item) => (
                        <>
                          <div className='bg-primary/30 text-background p-4 font-bold uppercase'>{item.title}</div>
                          {item.items?.map((subItem) => (
                            <div key={`sub-item-${subItem.title}`} className='hover:bg-primary/10 p-4 uppercase'>
                              <Link href={subItem.href!} className='hover:underline'>
                                {subItem.title}
                              </Link>
                            </div>
                          ))}
                        </>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Separator />
            <div className='m-2 grid grid-cols-2 gap-2 text-xs'>
              <div className='hover:text-background hover:bg-primary border-primary flex aspect-square flex-col items-center justify-center gap-2 border border-2'>
                <User />
                <div className='text-md font-bold uppercase'>Mon compte</div>
              </div>
              <div className='hover:text-background hover:bg-primary border-primary flex aspect-square flex-col items-center justify-center gap-2 border border-2'>
                <MessageCircleQuestion />
                <div className='text-md font-bold uppercase'>FAQ</div>
              </div>
              <div className='hover:text-background hover:bg-primary border-primary flex aspect-square flex-col items-center justify-center gap-2 border border-2'>
                <Mail />
                <div className='text-md font-bold uppercase'>Nous écrire</div>
              </div>
              <div className='hover:text-background hover:bg-primary border-primary flex aspect-square flex-col items-center justify-center gap-2 border border-2'>
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
