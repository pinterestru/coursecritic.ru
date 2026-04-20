import 'server-only'
import { z } from 'zod'

/**
 * Base shape returned by the CMS product endpoint, post-transform.
 * Each site layers its own Zod schema on top of `widgets` to get a typed
 * page payload (see `createGetProductBySlug`).
 */
export interface BaseProduct {
  id: string
  slug: string
  title: string
  description: string
  tags: string[]
  storeId?: string
  productType: string
  publishedAt?: string
  status?: string
  /** Arbitrary per-site JSON; shape defined by each site's widget schema. */
  widgets: Record<string, unknown>
}

export interface ProductFilters {
  slug?: string
  slugs?: string[]
  status?: string
  tag?: string
  tags?: string[]
  type?: string
  types?: string[]
  search?: string
  page?: number
  pageSize?: number
  limit?: number
  storeId?: string
  withRich?: boolean
  includeFields?: string[]
  excludeFields?: string[]
}

export interface ProductOptions {
  /** Next.js ISR revalidate seconds. */
  revalidate?: number
  /** Next.js cache tags, for on-demand invalidation. */
  tags?: string[]
}

export interface ProductListResponse<T = BaseProduct> {
  itemList: T[]
  itemTotal: number
  page: number
  pageTotal: number
}

export interface ProductResponse<T = BaseProduct> {
  item: T | null
}

export type Result<T> = { success: true; data: T } | { success: false; error: Error }

export class ProductNotFoundError extends Error {
  constructor(identifier: string, productType: string) {
    super(`${productType} not found: ${identifier}`)
    this.name = 'ProductNotFoundError'
  }
}

export class ProductValidationError extends Error {
  public cause?: unknown
  constructor(message: string, cause?: unknown) {
    super(message)
    this.name = 'ProductValidationError'
    this.cause = cause
  }
}

/** Shape of the raw CMS search response. */
export const elasticSearchResponseSchema = z.object({
  item_list: z.array(z.record(z.string(), z.unknown())).optional(),
  size: z.number().optional(),
  message: z.string().optional(),
  status: z.number().optional(),
})

export type ProductTransformer<T> = (item: Record<string, unknown>) => T
