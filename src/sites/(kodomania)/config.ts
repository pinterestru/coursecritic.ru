import type { SiteConfig } from '@/config/sites/types'

export const siteConfig: SiteConfig = {
  id: 'kodomania',
  brand: {
    name: 'Kodomania',
    description:
      'Kodomania — идеи подарков, которые остаются надолго. Подборки с ценами и ссылками: обучение и курс в подарок, круиз и впечатления, подарочные карты и напитки к столу.',
    logoUrl: '/logo.svg',
    faviconUrl: '/favicon.svg',
  },
  seo: {
    titleTemplate: '%s — Kodomania',
    defaultDescription:
      'Идеи подарков, которые остаются надолго: обучение и курс в подарок, круиз и впечатления, подарочные карты. Подборки по получателю и поводу — с ценами и ссылками.',
    canonicalUrl: 'https://kodomania.ru',
  },
  locale: 'ru',
  // Destinations the /click redirect may forward to. Without this the path
  // segment is free-form and /click/<anything> is an open redirect on our own
  // domain. Keep in sync with the advertisers used in data/*.ts.
  offerHosts: ['market.yandex.ru', 'kruiz.online', 'winelab.ru', 'umschool.net'],
}
