import type { SiteConfig } from '@/config/sites/types'

export const siteConfig: SiteConfig = {
  id: 'edsider',
  brand: {
    name: 'EdSider',
    description: 'EdSider — витрина онлайн-курсов и независимые обзоры российских IT-школ.',
    logoUrl: '/logo.svg',
    faviconUrl: '/favicon.svg',
  },
  seo: {
    titleTemplate: '%s — EdSider',
    defaultDescription:
      'Независимые обзоры онлайн-школ и каталог актуальных курсов. Сравниваем программы, отзывы и цены, чтобы помочь выбрать.',
    canonicalUrl: 'https://edsider.ru',
  },
  locale: 'ru',
}
