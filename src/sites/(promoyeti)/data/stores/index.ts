/**
 * Registry of every store on the site.
 *
 * `app/stores/[slug]/page.tsx` renders all of them from one template, so adding
 * a store is a new object in its category file — no route work. The checks at
 * the bottom run at import time and fail the BUILD rather than shipping a page
 * that is silently wrong. They exist because the two mistakes that matter on a
 * coupon site are both invisible at runtime:
 *
 *   - a `kind: 'code'` offer with no code, which renders a "reveal code" button
 *     that reveals nothing and burns a paid click;
 *   - a duplicate slug, which makes one store unreachable.
 */
import { categories, type CategoryId } from '../categories'
import type { Store } from '../types'

import { autoStores } from './auto'
import { beautyStores } from './beauty'
import { electronicsStores } from './electronics'
import { experienceStores } from './experiences'
import { fashionStores } from './fashion'
import { foodStores } from './food'
import { gamingStores } from './gaming'
import { homeStores } from './home'
import { learningStores } from './learning'
import { marketplaceStores } from './marketplaces'
import { mediaStores } from './media'
import { securityStores } from './security'
import { serviceStores } from './services'
import { softwareStores } from './software'
import { travelStores } from './travel'

export const stores: Store[] = [
  ...fashionStores,
  ...beautyStores,
  ...electronicsStores,
  ...marketplaceStores,
  ...homeStores,
  ...foodStores,
  ...travelStores,
  ...experienceStores,
  ...autoStores,
  ...securityStores,
  ...softwareStores,
  ...learningStores,
  ...mediaStores,
  ...gamingStores,
  ...serviceStores,
]

// ── Build-time integrity checks ────────────────────────────────────────────
{
  const seenSlugs = new Set<string>()
  const knownCategories = new Set<string>(categories.map((c) => c.id))

  for (const store of stores) {
    if (seenSlugs.has(store.slug)) {
      throw new Error(`Duplicate store slug: "${store.slug}".`)
    }
    seenSlugs.add(store.slug)

    if (!knownCategories.has(store.category)) {
      throw new Error(`Store "${store.slug}" has unknown category "${store.category}".`)
    }

    if (store.offers.length === 0) {
      throw new Error(
        `Store "${store.slug}" has no offers. A store page with nothing on it is a bounced click.`
      )
    }

    const seenOfferIds = new Set<string>()
    let bestCount = 0

    for (const offer of store.offers) {
      if (seenOfferIds.has(offer.id)) {
        throw new Error(`Store "${store.slug}" has duplicate offer id "${offer.id}".`)
      }
      seenOfferIds.add(offer.id)

      if (offer.kind === 'code' && !offer.code?.trim()) {
        throw new Error(
          `Offer "${offer.id}" on "${store.slug}" is kind:'code' with no code. ` +
            `Either supply the real code or make it kind:'deal' — never a reveal button with nothing behind it.`
        )
      }
      if (offer.kind === 'deal' && offer.code) {
        throw new Error(
          `Offer "${offer.id}" on "${store.slug}" is kind:'deal' but carries a code. Set kind:'code'.`
        )
      }
      if (!offer.value?.trim()) {
        throw new Error(`Offer "${offer.id}" on "${store.slug}" has no \`value\` label.`)
      }
      if (offer.value.length > 16) {
        throw new Error(
          `Offer "${offer.id}" on "${store.slug}" has a ${offer.value.length}-character value ` +
            `label ("${offer.value}"). The card's value column fits about 14 — shorten it.`
        )
      }

      if (offer.best) bestCount += 1
    }

    if (bestCount > 1) {
      throw new Error(`Store "${store.slug}" marks ${bestCount} offers as \`best\`. Pick one.`)
    }
  }
}

export function getStore(slug: string): Store | undefined {
  return stores.find((s) => s.slug === slug)
}

export function storeSlugs(): string[] {
  return stores.map((s) => s.slug)
}

/** Stores in a category, alphabetically. */
export function storesByCategory(category: CategoryId): Store[] {
  return stores
    .filter((s) => s.category === category)
    .sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }))
}

/** Every store, A–Z. */
export function storesAlphabetical(): Store[] {
  return [...stores].sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }))
}

/** Total live offers across the site — used in copy that must not overclaim. */
export function offerCount(): number {
  return stores.reduce((total, store) => total + store.offers.length, 0)
}

/** How many offers carry a real code (as opposed to a no-code deal). */
export function codeCount(): number {
  return stores.reduce(
    (total, store) => total + store.offers.filter((o) => o.kind === 'code').length,
    0
  )
}

/**
 * One offer per store for the home page's "today's picks" rail.
 *
 * Round-robins across categories rather than slicing the registry, which would
 * return seventeen fashion stores and call it a cross-section of the site. Each
 * store contributes its flagged `best` offer, or its first if none is flagged.
 */
export function featuredOffers(limit: number): { store: Store; offer: Store['offers'][number] }[] {
  const byCategory = categories.map((c) => storesByCategory(c.id))
  const picked: { store: Store; offer: Store['offers'][number] }[] = []

  for (let round = 0; picked.length < limit; round += 1) {
    let addedThisRound = false
    for (const list of byCategory) {
      const store = list[round]
      if (!store) continue
      picked.push({ store, offer: store.offers.find((o) => o.best) ?? store.offers[0] })
      addedThisRound = true
      if (picked.length === limit) return picked
    }
    if (!addedThisRound) break // every category exhausted
  }

  return picked
}
