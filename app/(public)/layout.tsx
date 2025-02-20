import { Footer } from '@/components/footer'
import { Navigation } from '@/components/navigation'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='flex flex-col'>
      <Navigation />
      <div className='grid grid-flow-col overflow-auto'>{children}</div>
      <Footer />
    </div>
  )
}
