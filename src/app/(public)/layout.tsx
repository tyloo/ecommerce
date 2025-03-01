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
      {children}
      <Footer />
    </div>
  )
}
