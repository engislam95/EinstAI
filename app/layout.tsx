import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from './components/Header'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'EinstAI',
  description:
    'Explore a collection of fun and creative AI side projects – from chatbots to more and more.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gradient-to-br from-zinc-900 via-zinc-800 to-black antialiased`}
      >
        <Header />
        <div className="mx-auto lg:px-8">{children}</div>
      </body>
    </html>
  )
}
