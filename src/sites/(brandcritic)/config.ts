import type { SiteConfig } from '@/config/sites/types'

import { brandPages } from './data/brands'
import { providers } from './data/providers'
import { SITE, siteUrl } from './data/site'

/**
 * Все хосты, на которые сайту разрешено уводить посетителя через /click.
 *
 * Список выводится из данных, а не пишется руками: добавленный бренд не может
 * остаться с заблокированной ссылкой, а удалённый — оставить разрешённым чужой
 * хост. Покрывает `domain` сервисов и хосты `deepLink` со страниц брендов;
 * ссылки внутри разборов переиспользуют домены сервисов.
 */
const offerHosts = Array.from(
  new Set(
    [
      ...Object.values(providers).map((p) => p.domain),
      ...brandPages.map((b) => b.deepLink).filter((d): d is string => !!d),
    ].map((value) =>
      value
        .replace(/^https?:\/\//, '')
        .split('/')[0]
        .toLowerCase()
    )
  )
).sort()

/**
 * Регистрация сайта для мультисайтовой сборки (см. scripts/prepare-site.mjs).
 * Активация: `SITE_CONFIG=brandcritic pnpm dev`.
 *
 * Название бренда и домен живут в ./data/site.ts.
 */
export const siteConfig: SiteConfig = {
  id: 'brandcritic',
  brand: {
    name: SITE.name,
    description: `${SITE.name} — независимые разборы российских сервисов и магазинов: оценки по опубликованным критериям, цены и то, что написано мелким шрифтом.`,
    logoUrl: '/logo.svg',
    faviconUrl: '/favicon.svg',
  },
  seo: {
    titleTemplate: `%s — ${SITE.name}`,
    defaultDescription:
      'Независимые разборы сервисов и магазинов: как устроена доставка и самовывоз, что на самом деле входит в цену, где скрыты доплаты и кому сервис не подойдёт.',
    canonicalUrl: siteUrl,
  },
  locale: 'ru',
  offerHosts,
}
