import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'مرشد',
  description: '',
}

type RootLayoutTypes = {
  children: React.ReactNode
}

function RootLayout({ children }: RootLayoutTypes) {
  return (
    <html lang="fa-IR">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
