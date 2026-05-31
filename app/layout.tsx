import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'SR NEXTGEN EDUCATION | Top College Admissions in India 2026',
  description: 'Your gateway to top colleges in India. Engineering, Degree & PG admissions across Gujarat, Maharashtra, Bengaluru, Tamil Nadu & Andhra Pradesh. Expert counseling & free college visits.',
  icons: {
    icon: [
      {
        url: 'https://res.cloudinary.com/dvp5tek75/image/upload/v1777791644/IMG_20260503_122309.jpg_etyvmd.jpg',
        type: 'image/jpeg',
      },
    ],
    apple: 'https://res.cloudinary.com/dvp5tek75/image/upload/v1777791644/IMG_20260503_122309.jpg_etyvmd.jpg',
  },
}

import { FloatingContact } from '@/components/floating-contact'
import { StickyCTA } from '@/components/sticky-cta'
import { DevToolHider } from '@/components/dev-tool-hider'
import { FooterToggle } from '@/components/footer-toggle'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased pb-20 md:pb-24">
        {children}
        <DevToolHider />
        <StickyCTA />
        <FloatingContact />
        <FooterToggle />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
