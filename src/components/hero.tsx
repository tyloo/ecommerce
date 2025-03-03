import { Button } from '@/components/ui/button'
import Link from 'next/link'

type HeroProps = {
  height?: string
  backgroundImage: string
  title: string
  subtitle: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA: {
    text: string
    href: string
  }
}

export function Hero({ height = '80vh', backgroundImage, title, subtitle, primaryCTA, secondaryCTA }: HeroProps) {
  return (
    <div
      className='relative flex items-center justify-center'
      style={{ height, backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      {/* Overlay for better text visibility */}
      <div className='absolute inset-0 bg-black/50' />
      <div className='relative z-9 container'>
        <h1 className='text-background mb-4 text-3xl font-bold uppercase md:text-5xl lg:text-7xl'>{title}</h1>
        <p className='text-background mb-8 text-xl uppercase md:text-2xl lg:text-4xl'>{subtitle}</p>
        <div className='justify-left flex gap-4'>
          <Button asChild variant='outline' size='lg' className='text-md font-bold uppercase'>
            <Link href={primaryCTA.href}>{primaryCTA.text}</Link>
          </Button>
          <Button asChild variant='outline' size='lg' className='text-md font-bold uppercase'>
            <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
