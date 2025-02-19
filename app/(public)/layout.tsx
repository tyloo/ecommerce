import { Footer } from '@/components/footer'
import { Navigation } from '@/components/navigation/navigation'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='flex max-h-screen flex-col'>
      <Navigation />
      <div className='grid grid-flow-col overflow-auto'>
        <div className='overflow-x-hidden px-2 pb-4'>{children}</div>
      </div>
      <Footer />
    </div>
  )
}
