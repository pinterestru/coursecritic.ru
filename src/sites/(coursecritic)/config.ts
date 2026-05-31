import type { SiteConfig } from '@/config/sites/types'

export const siteConfig: SiteConfig = {
  id: 'coursecritic',
  brand: {
    name: 'Путь в код',
    description: 'Личный блог Ани Широковой о смене профессии на backend-разработку.',
    logoUrl: '/logo.svg',
    faviconUrl: '/favicon.svg',
  },
  seo: {
    titleTemplate: '%s — Путь в код',
    defaultDescription:
      'Честные заметки о том, как копирайтер учится программировать. Без успешного успеха.',
    canonicalUrl: 'https://coursecritic.ru',
  },
  locale: 'ru',
}
