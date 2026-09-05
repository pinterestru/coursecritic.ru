import type { Metadata } from 'next'
import { Manrope, Unbounded } from 'next/font/google'
import type { ReactNode } from 'react'

import { activeSiteConfig } from '@/config/sites/active.generated'
import '@/styles/globals.css'

import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'

const manrope = Manrope({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-body',
})

const unbounded = Unbounded({
  subsets: ['cyrillic', 'latin'],
  weight: ['500', '700', '800'],
  display: 'swap',
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: {
    default: activeSiteConfig.brand.name,
    template: activeSiteConfig.seo.titleTemplate,
  },
  description: activeSiteConfig.seo.defaultDescription,
  icons: { icon: activeSiteConfig.brand.faviconUrl },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={activeSiteConfig.locale} className={`${manrope.variable} ${unbounded.variable}`}>
      <body className="flex min-h-screen flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  )
}
