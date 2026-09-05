/**
 * Все бренды сайта, слитые в один справочник `id → Provider`.
 *
 * Именно это делает общие компоненты независимыми от вертикали: RankCard,
 * RatingSummary и CtaBanner достают сервис по id отсюда, поэтому один разбор
 * может смешивать вертикали, и ни один компонент об этом не узнает. Из этого
 * следует требование: id должны быть уникальны по всем реестрам сразу.
 */
import type { Author, Provider } from './guides/types'
import type { VerticalId } from './verticals'
import { cruiseAuthor, cruiseProviders } from './cruise/providers'
import { educationAuthor, educationProviders } from './education/providers'
import { retailAuthor, retailProviders } from './retail/providers'

export const providers: Record<string, Provider> = {
  ...retailProviders,
  ...cruiseProviders,
  ...educationProviders,
}

/** Автор с подписью для каждой вертикали. */
export const authors: Record<VerticalId, Author> = {
  retail: retailAuthor,
  cruise: cruiseAuthor,
  education: educationAuthor,
}

export function getProvider(id: string): Provider | undefined {
  return providers[id]
}

/** Все бренды вертикали, лучший редакционный балл первым. */
export function providersByVertical(vertical: VerticalId): Provider[] {
  return Object.values(providers)
    .filter((p) => p.vertical === vertical)
    .sort((a, b) => b.score - a.score)
}

/** Бренды, у которых есть своя страница под /brands, лучший балл первым. */
export function providersWithBrandPage(): Provider[] {
  return Object.values(providers)
    .filter((p) => !!p.brandSlug)
    .sort((a, b) => b.score - a.score)
}
