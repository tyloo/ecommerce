import { SignUp } from '@clerk/nextjs'
import Image from 'next/image'
import { Suspense } from 'react'

export default function Page() {
  return (
    <div className='grid min-h-[90svh] lg:grid-cols-2'>
      <div className='bg-muted relative hidden lg:block'>
        <Image
          src='/identification-image-1.webp'
          alt='Image'
          className='absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
          fill
          sizes='(max-width: 1024px) 0vw, 50vw'
        />
      </div>
      <div className='flex flex-col gap-4 p-6 md:p-10'>
        <div className='flex flex-1 items-center justify-center'>
          <div className='w-full max-w-xs'>
            <Suspense fallback='Loading...'>
              <SignUp />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
