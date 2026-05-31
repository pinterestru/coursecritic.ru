import 'server-only'
import { cache } from 'react'
import type { z } from 'zod'

import { activeSiteConfig } from '@/config/sites/active.generated'
import { logger } from '@/lib/logging/logger'

import { productGet, productList } from './cms.service'
import {
  ProductNotFoundError,
  ProductValidationError,
  type BaseProduct,
  type ProductFilters,
  type ProductOptions,
  type Result,
} from './cms.types'

/**
 * Typed CMS product with a site-specific `widgets` payload.
 * Infer this from the factory's return value, or use `CmsProduct<YourWidgetsSchema>`.
 */
export type CmsProduct<TWidgets> = Omit<BaseProduct, 'widgets'> & { widgets: TWidgets }

interface FactoryConfig<TWidgets> {
  /** Zod schema describing the shape of this site's widgets JSON. */
  widgetsSchema: z.ZodType<TWidgets>
  /** CMS product_type filter. Defaults to activeSiteConfig.cms.productType. */
  productType?: string
  /** ISR revalidate seconds. Defaults to activeSiteConfig.cms.defaultTTL. */
  defaultTTL?: number
}

function resolveCmsBinding() {
  const binding = activeSiteConfig.cms
  if (!binding) {
    throw new Error(
      `Site "${activeSiteConfig.id}" has no cms binding in config.ts — cannot call CMS services.`
    )
  }
  return binding
}

/**
 * Factory: returns a memoized `getBySlug(slug)` that fetches one product,
 * parses its `article_widgets_json` against the provided Zod schema, and
 * returns a fully typed `CmsProduct<TWidgets>` (or a typed error Result).
 */
export function createGetProductBySlug<TWidgets>(config: FactoryConfig<TWidgets>) {
  return cache(async (slug: string): Promise<Result<CmsProduct<TWidgets>>> => {
    const binding = resolveCmsBinding()
    const productType = config.productType ?? binding.productType
    const revalidate = config.defaultTTL ?? binding.defaultTTL

    try {
      const { item } = await productGet(
        slug,
        { type: productType, storeId: binding.storeId },
        { revalidate }
      )

      if (!item) {
        return { success: false, error: new ProductNotFoundError(slug, productType) }
      }

      const parsed = config.widgetsSchema.safeParse(item.widgets)
      if (!parsed.success) {
        logger.error(
          { slug, productType, issues: parsed.error.issues },
          'CMS product widgets failed site schema validation'
        )
        return {
          success: false,
          error: new ProductValidationError(
            `Widgets payload for "${slug}" doesn't match site schema`,
            parsed.error
          ),
        }
      }

      return { success: true, data: { ...item, widgets: parsed.data } }
    } catch (err) {
      logger.error({ err, slug, productType }, 'CMS product fetch failed')
      return {
        success: false,
        error: err instanceof Error ? err : new Error('Unknown CMS error'),
      }
    }
  })
}

/**
 * Factory: returns a memoized `getList(filters?)` — handy for site landing
 * indexes, sitemap generation, or `generateStaticParams`.
 */
export function createGetProducts<TWidgets>(config: FactoryConfig<TWidgets>) {
  return cache(
    async (
      filters: Omit<ProductFilters, 'type' | 'storeId'> = {},
      options?: ProductOptions
    ): Promise<Result<Array<CmsProduct<TWidgets>>>> => {
      const binding = resolveCmsBinding()
      const productType = config.productType ?? binding.productType
      const revalidate = config.defaultTTL ?? binding.defaultTTL

      try {
        const { itemList } = await productList(
          { ...filters, type: productType, storeId: binding.storeId },
          { revalidate, ...options }
        )

        const validated: Array<CmsProduct<TWidgets>> = []
        for (const item of itemList) {
          const parsed = config.widgetsSchema.safeParse(item.widgets)
          if (parsed.success) {
            validated.push({ ...item, widgets: parsed.data })
          } else {
            logger.warn(
              { slug: item.slug, issues: parsed.error.issues },
              'Skipped CMS product — widgets failed site schema'
            )
          }
        }

        return { success: true, data: validated }
      } catch (err) {
        logger.error({ err, productType }, 'CMS productList fetch failed')
        return {
          success: false,
          error: err instanceof Error ? err : new Error('Unknown CMS error'),
        }
      }
    }
  )
}
