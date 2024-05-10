import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'
import '~/styles/globals.css'
import { cn } from '~/utils/cn'

const sourceSans3 = Source_Sans_3({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Netimóveis - Imóveis para comprar, vender ou ...',
  description: 'Imóveis para comprar, vender ou alugar',
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn([sourceSans3.className, 'flex min-h-screen flex-col'])}
      >
        {children}
      </body>
    </html>
  )
}
