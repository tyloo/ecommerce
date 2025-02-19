import { Providers } from '@/contexts/providers'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lacoste Recommerce',
  description: 'Recommerce for Lacoste',
  icons: [{ rel: 'icon', url: '/favicon.ico' }]
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='bg-background antialiased'>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
