import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Degen Capital',
  description: 'Community-Driven Crypto-fund',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body>{children}</body>
      </html>
  )
}