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
        <script
          async
          defer
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TZ8GB974');`,
          }}
        ></script>
      </head>

      <body>{children}</body>
    </html>
  )
}

export default RootLayout
