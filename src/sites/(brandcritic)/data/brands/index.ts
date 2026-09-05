/**
 * Реестр всех страниц брендов.
 *
 * `app/brands/[slug]/page.tsx` рисует их все одним шаблоном, поэтому новая
 * страница бренда — это новый файл здесь плюс строка в `brandPages`, без
 * работы с маршрутами. Сервис из `providerId` обязан существовать в
 * ../providers.ts; проверка ниже роняет сборку, вместо того чтобы отрисовать
 * страницу без бренда.
 */
import { providers } from '../providers'

import type { BrandPage } from './types'
import { kruizOnline } from './kruiz-online'
import { umschool } from './umschool'
import { winelab } from './winelab'

export const brandPages: BrandPage[] = [
  // Ритейл
  winelab,
  // Круизы
  kruizOnline,
  // Образование
  umschool,
]

for (const page of brandPages) {
  if (!providers[page.providerId]) {
    throw new Error(
      `Страница бренда «${page.slug}» ссылается на несуществующий сервис «${page.providerId}». ` +
        `Добавьте его в data/providers.ts или исправьте id.`
    )
  }
}

export function getBrandPage(slug: string): BrandPage | undefined {
  return brandPages.find((b) => b.slug === slug)
}

export function brandSlugs(): string[] {
  return brandPages.map((b) => b.slug)
}
