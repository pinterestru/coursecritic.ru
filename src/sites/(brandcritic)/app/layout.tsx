import type { Metadata } from 'next'
import { IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google'
import type { ReactNode } from 'react'

import { activeSiteConfig } from '@/config/sites/active.generated'
import '@/styles/globals.css'

import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'

/**
 * Пара IBM Plex: гротеск для текста и моноширинный для служебного слоя —
 * рубрик, номеров, оценок и меток. Оба подключены с кириллицей; на моно держится
 * весь «технический» язык интерфейса, которым этот сайт и отличается от соседних.
 */
const plexSans = IBM_Plex_Sans({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-body',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-mono',
})

export const metadata: Metadata = {
  // Позволяет страницам отдавать относительные canonical/OG, которые
  // разворачиваются в абсолютные.
  metadataBase: new URL(activeSiteConfig.seo.canonicalUrl),
  title: {
    default: `${activeSiteConfig.brand.name} — независимые разборы сервисов`,
    template: activeSiteConfig.seo.titleTemplate,
  },
  description: activeSiteConfig.seo.defaultDescription,
  icons: { icon: activeSiteConfig.brand.faviconUrl },
  // Общие карточки шаринга на весь сайт. Страницы, объявившие собственный
  // `openGraph`, заменяют этот блок целиком (Next сливает метаданные
  // поверхностно), поэтому разборы и страницы брендов сохраняют свои карточки, а
  // юридические страницы, которые ничего не объявляют, наследуют вменяемую
  // вместо полного отсутствия OG-тегов. `url` намеренно отсутствует: статичный
  // og:url здесь был бы неверным на каждой наследующей странице.
  openGraph: {
    type: 'website',
    title: `${activeSiteConfig.brand.name} — независимые разборы сервисов`,
    description: activeSiteConfig.seo.defaultDescription,
    siteName: activeSiteConfig.brand.name,
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary',
    title: `${activeSiteConfig.brand.name} — независимые разборы сервисов`,
    description: activeSiteConfig.seo.defaultDescription,
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={activeSiteConfig.locale} className={`${plexSans.variable} ${plexMono.variable}`}>
      <body className="flex min-h-screen flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  )
}
