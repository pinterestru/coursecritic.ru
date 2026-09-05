import type { Metadata } from 'next'
import { Inter, Instrument_Sans } from 'next/font/google'
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

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
})

const DEFAULT_TITLE = `${activeSiteConfig.brand.name} — discount codes that actually work`

export const metadata: Metadata = {
  // Lets pages emit relative canonical/OG URLs that resolve to absolute ones.
  metadataBase: new URL(activeSiteConfig.seo.canonicalUrl),
  title: {
    default: DEFAULT_TITLE,
    template: activeSiteConfig.seo.titleTemplate,
  },
  description: activeSiteConfig.seo.defaultDescription,
  icons: { icon: activeSiteConfig.brand.faviconUrl },
  // Ownership proof for the Mitgo affiliate network. It lives in the root
  // layout so it is emitted on EVERY page — Mitgo may verify against any URL,
  // and a tag present only on the home page fails that check. Do not move it
  // into a page-level `metadata` export.
  other: { 'mitgo-verification': 'a2abedcc-5f63-4fc1-9622-4e0adc560ae5' },
  // Sitewide share-card defaults. Pages that declare their own `openGraph`
  // replace this block wholesale (Next merges metadata shallowly), so the store
  // and category pages keep their per-page cards; the legal pages, which
  // declare none, inherit something sane instead of shipping no OG tags at all.
  // `url` is deliberately absent — a static og:url here would be wrong on every
  // page that inherits it.
  openGraph: {
    type: 'website',
    title: DEFAULT_TITLE,
    description: activeSiteConfig.seo.defaultDescription,
    siteName: activeSiteConfig.brand.name,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: DEFAULT_TITLE,
    description: activeSiteConfig.seo.defaultDescription,
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={activeSiteConfig.locale} className={`${inter.variable} ${instrumentSans.variable}`}>
      <body className="flex min-h-screen flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  )
}
