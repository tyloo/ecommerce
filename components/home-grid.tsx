import Image from 'next/image'
import Link from 'next/link'

import { Button } from './ui/button'

export function HomeGrid() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      <div className='group relative aspect-square overflow-hidden lg:order-1'>
        <Link href='#'>
          <Image
            src='/home-sell.webp'
            alt='Sell your items'
            fill
            className='object-cover transition-transform duration-300 group-hover:scale-110'
          />
          <div className='absolute inset-0 flex items-center justify-center bg-black/30'>
            <Button variant='link' className='cursor-pointer text-5xl text-white uppercase hover:no-underline'>
              Vendre
            </Button>
          </div>
        </Link>
      </div>
      <div className='flex flex-col items-center justify-center gap-8 p-8 lg:order-2'>
        <h2 className='text-primary text-center text-xl font-bold uppercase md:text-2xl lg:text-4xl'>
          Des ventes facilitées
        </h2>
        <div className='grid grid-cols-2 gap-6'>
          <div className='flex flex-col items-center justify-start gap-4 text-center'>
            <Image src='/icons/icon-laptop.svg' alt='Laptop icon' width={48} height={48} />
            <span>Obtenez rapidement l'estimation de votre pièce en répondant à quelques questions</span>
          </div>
          <div className='flex flex-col items-center justify-start gap-4 text-center'>
            <Image
              src='/icons/icon-recycle.webp'
              alt='Recycle icon'
              width={48}
              height={48}
              className='aspect-square object-contain'
            />
            <span>Envoyez votre pièce gratuitement, sans frais de livraison</span>
          </div>
          <div className='flex flex-col items-center justify-start gap-4 text-center'>
            <Image src='/icons/icon-authentified.svg' alt='Authentified icon' width={48} height={48} />
            <span>Nos experts contrôlent et authentifient votre pièce dès sa réception</span>
          </div>
          <div className='flex flex-col items-center justify-start gap-4 text-center'>
            <Image src='/icons/icon-giftcard.svg' alt='Giftcard icon' width={48} height={48} />
            <span>Profitez d'un bon d'achat sur Lacoste seconde main ou chez Lacoste</span>
          </div>
        </div>
        <div>
          <Button asChild size='lg' className='text-md mt-4 font-bold uppercase'>
            <Link href='#'>Estimer ma pièce</Link>
          </Button>
        </div>
      </div>
      <div className='group relative aspect-square overflow-hidden lg:order-4'>
        <Link href='#'>
          <Image
            src='/home-buy.webp'
            alt='Buy your items'
            fill
            className='object-cover transition-transform duration-300 group-hover:scale-110'
          />
          <div className='absolute inset-0 flex items-center justify-center bg-black/30'>
            <Button variant='link' className='cursor-pointer text-5xl text-white uppercase hover:no-underline'>
              Acheter
            </Button>
          </div>
        </Link>
      </div>
      <div className='flex flex-col items-center justify-center gap-8 p-8 lg:order-3'>
        <h2 className='text-primary text-center text-xl font-bold uppercase md:text-2xl lg:text-4xl'>
          Des achats en toute confiance
        </h2>
        <div className='grid grid-cols-2 gap-6'>
          <div className='flex flex-col items-center justify-start gap-4 text-center'>
            <Image
              src='/icons/icon-laptop.webp'
              alt='Laptop icon'
              width={48}
              height={48}
              className='aspect-square object-contain'
            />
            <span>Articles authentifiés et nettoyés en France par Lacoste</span>
          </div>
          <div className='flex flex-col items-center justify-start gap-4 text-center'>
            <Image
              src='/icons/icon-free.webp'
              alt='Free icon'
              width={48}
              height={48}
              className='aspect-square object-contain'
            />
            <span>Retours sous 14 jours</span>
          </div>
          <div className='flex flex-col items-center justify-start gap-4 text-center'>
            <Image
              src='/icons/icon-search.webp'
              alt='Search icon'
              width={48}
              height={48}
              className='aspect-square object-contain'
            />
            <span>Livraison gratuite à partir de 150€ d'achat</span>
          </div>
          <div className='flex flex-col items-center justify-start gap-4 text-center'>
            <Image
              src='/icons/icon-voucher.webp'
              alt='Voucher icon'
              width={48}
              height={48}
              className='aspect-square object-contain'
            />
            <span>Paiement 100% sécurisé</span>
          </div>
        </div>
        <div>
          <Button asChild size='lg' className='text-md mt-4 font-bold uppercase'>
            <Link href='#'>Découvrir les pièces</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
