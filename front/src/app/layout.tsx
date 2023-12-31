import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer'
import Providers from '@/components/providers'
import Navbar from '@/components/Navbar/index'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pulsar',
  description: 'Deciphering Data, Simplifying Insights',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            {children}
            <div className="grow" />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
