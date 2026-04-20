import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'

import { activeSiteConfig } from '@/config/sites/active.generated'
import '@/styles/globals.css'

import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'

const inter = Inter({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-body',
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
    <html lang={activeSiteConfig.locale} className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  )
}
