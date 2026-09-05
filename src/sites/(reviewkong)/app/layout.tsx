import type { Metadata } from 'next'
import { Inter, Source_Serif_4 } from 'next/font/google'
import type { ReactNode } from 'react'

import { activeSiteConfig } from '@/config/sites/active.generated'
import '@/styles/globals.css'

import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-editorial',
})

export const metadata: Metadata = {
  // Lets pages emit relative canonical/OG URLs that resolve to absolute ones.
  metadataBase: new URL(activeSiteConfig.seo.canonicalUrl),
  title: {
    default: `${activeSiteConfig.brand.name} — independent buying guides`,
    template: activeSiteConfig.seo.titleTemplate,
  },
  description: activeSiteConfig.seo.defaultDescription,
  icons: { icon: activeSiteConfig.brand.faviconUrl },
  // Ownership proof for the Mitgo affiliate network. Must stay on every page.
  other: { 'mitgo-verification': 'ef46bc8a-7650-4b61-ad5c-bd4b04f86d24' },
  // Sitewide share-card defaults. Pages that declare their own `openGraph`
  // replace this block wholesale (Next merges metadata shallowly), so the
  // guides and brand pages keep their per-page cards; the legal pages, which
  // declare none, inherit something sane instead of shipping no OG tags at all.
  // `url` is deliberately absent — a static og:url here would be wrong on every
  // page that inherits it.
  openGraph: {
    type: 'website',
    title: `${activeSiteConfig.brand.name} — independent buying guides`,
    description: activeSiteConfig.seo.defaultDescription,
    siteName: activeSiteConfig.brand.name,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: `${activeSiteConfig.brand.name} — independent buying guides`,
    description: activeSiteConfig.seo.defaultDescription,
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={activeSiteConfig.locale} className={`${inter.variable} ${sourceSerif.variable}`}>
      <body className="flex min-h-screen flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  )
}
