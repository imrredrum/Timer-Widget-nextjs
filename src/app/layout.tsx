import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { TimerStoreProvider } from '@/providers/timer'
import theme from '@/libs/themes'
import { StopwatchStoreProvider } from '@/providers/stopwatch'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Timer Widget@Next.js',
  description: 'A timer widget built with Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='zh-Hant-TW'>
      <body className={roboto.variable}>
        <AppRouterCacheProvider options={{ key: 'css' }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <TimerStoreProvider>
              <StopwatchStoreProvider>{children}</StopwatchStoreProvider>
            </TimerStoreProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
