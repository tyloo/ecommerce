import Link from 'next/link'
import { Button } from './ui/button'

type ConceptProps = {
  height?: string
  title: string
  subtitle: string
  cta: {
    text: string
    href: string
  }
}

export function Concept({ title, subtitle, cta }: ConceptProps) {
  return (
    <div className='relative flex flex-col items-center justify-center'>
      <div className='absolute inset-0' />
      <div className='relative z-9 container max-w-4xl text-center'>
        <h1 className='text-primary mb-6 text-4xl font-bold uppercase'>{title}</h1>
        <p className='text-primary text-md mb-6'>{subtitle}</p>
        <div className='flex justify-center'>
          <Button asChild variant='default' size='lg' className='text-md font-bold uppercase'>
            <Link href={cta.href}>{cta.text}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
