'use client'

import { SidebarProvider } from '@/contexts/sidebar-context'
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HTTPException } from 'hono/http-exception'
import { ThemeProvider } from 'next-themes'
import { PropsWithChildren, useState } from 'react'

export const Providers = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: (err) => {
            if (err instanceof HTTPException) {
              // global error handling, e.g. toast notification ...
            }
          }
        })
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider enableSystem attribute='class' defaultTheme='system' disableTransitionOnChange>
        <SidebarProvider>{children}</SidebarProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
