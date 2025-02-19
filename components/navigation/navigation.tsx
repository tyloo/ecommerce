import Link from 'next/link'
import { DesktopNavigation } from './desktop'
import { MobileNavigation } from './mobile'

export function Navigation() {
  return (
    <>
      <div className='flex items-center justify-center p-3 text-xs uppercase'>
        Retour vers
        <Link href='/' className='ml-1 underline hover:no-underline'>
          lacoste.com
        </Link>
      </div>
      <div className='bg-primary text-background sticky top-0 px-6 py-3'>
        <DesktopNavigation />
        <MobileNavigation />
      </div>
    </>
  )
}
