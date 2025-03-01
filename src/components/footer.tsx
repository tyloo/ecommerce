import { Reinsurance } from '@/components/reinsurance'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className='bg-primary text-background'>
      <Reinsurance />
      <Separator />
      <div className='mx-auto max-w-7xl px-4 py-12'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-4'>
          {/* Newsletter Section */}
          <div className='lg:col-span-1'>
            <h3 className='text-lg font-semibold'>Newsletter</h3>
            <p className='mt-2 text-sm'>Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className='mt-4'>
              <Input placeholder='Enter your email' />

              <Button variant={'outline'} className='text-primary mt-4 w-full'>
                Subscribe
              </Button>
            </form>
          </div>

          {/* Navigation Links */}
          <div className='grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3'>
            <div>
              <h3 className='text-lg font-semibold'>Categories</h3>
              <ul className='mt-4 space-y-2'>
                <li>
                  <Link href='#' className='text-sm hover:underline'>
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href='#' className='text-sm hover:underline'>
                    Men
                  </Link>
                </li>
                <li>
                  <Link href='#' className='text-sm hover:underline'>
                    Women
                  </Link>
                </li>
                <li>
                  <Link href='#' className='text-sm hover:underline'>
                    Sport
                  </Link>
                </li>
                <li>
                  <Link href='#' className='text-sm hover:underline'>
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-lg font-semibold'>Help</h3>
              <ul className='mt-4 space-y-2'>
                <li>
                  <Link href='#' className='text-sm hover:underline'>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href='#' className='text-sm hover:underline'>
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link href='#' className='text-sm hover:underline'>
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href='#' className='text-sm hover:underline'>
                    Size Guide
                  </Link>
                </li>
                <li>
                  <Link href='#' className='text-sm hover:underline'>
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-lg font-semibold'>About</h3>
              <ul className='mt-4 space-y-2'>
                <li>
                  <Link href='#' className='text-sm hover:underline'>
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href='#' className='text-sm hover:underline'>
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link href='#' className='text-sm hover:underline'>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href='#' className='text-sm hover:underline'>
                    Press
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Section */}
        <div className='mt-12 border-t border-gray-200 pt-8'>
          <div className='flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0'>
            <div className='flex space-x-6'>
              <Link href='#' className='hover:text-background text-background/50'>
                <Facebook size={20} />
              </Link>
              <Link href='#' className='hover:text-background text-background/50'>
                <Instagram size={20} />
              </Link>
              <Link href='#' className='hover:text-background text-background/50'>
                <Twitter size={20} />
              </Link>
              <Link href='#' className='hover:text-background text-background/50'>
                <Youtube size={20} />
              </Link>
            </div>
            <div className='flex space-x-6 text-sm'>
              <Link href='#' className='hover:underline'>
                Privacy Policy
              </Link>
              <Link href='#' className='hover:underline'>
                Terms of Service
              </Link>
              <Link href='#' className='hover:underline'>
                Cookie Policy
              </Link>
            </div>
            <p className='text-background/50 text-sm'>&copy; 2025 Costela. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
