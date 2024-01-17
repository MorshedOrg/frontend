import 'swiper/css'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'مرشد',
  description: '',
}

type RootLayoutTypes = {
  children: React.ReactNode
}

function RootLayout({ children }: RootLayoutTypes) {
  return (
    <html lang="fa-IR" dir="rtl">
      <head>
        <link rel="preconnect" href="//fdn.fontcdn.ir" />
        <link rel="preconnect" href="//v1.fontapi.ir" />
        <link href="https://v1.fontapi.ir/css/Estedad" rel="stylesheet" />
      </head>

      <body>{children}</body>
    </html>
  )
}

export default RootLayout
