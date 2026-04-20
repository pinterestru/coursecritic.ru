import 'server-only'
import { cache } from 'react'

import { env } from '@/config/env'
import { fetcher } from '@/lib/http/fetcher'
import { logger } from '@/lib/logging/logger'

import {
  elasticSearchResponseSchema,
  type BaseProduct,
  type ProductFilters,
  type ProductListResponse,
  type ProductOptions,
  type ProductResponse,
  type ProductTransformer,
} from './cms.types'

interface ElasticsearchQuery {
  from?: number
  size: number
  sort: Array<Record<string, unknown>>
  _source: { includes?: string[]; excludes?: string[] }
  query: {
    bool: {
      filter: Array<Record<string, unknown>>
      must_not: Array<Record<string, unknown>>
    }
  }
}

function buildQuery(filters: ProductFilters): ElasticsearchQuery {
  const {
    slug,
    slugs,
    status = 'published',
    tag,
    tags,
    type,
    types,
    search,
    page,
    pageSize = 20,
    limit,
    storeId,
    withRich,
    includeFields,
    excludeFields,
  } = filters

  const size = limit ?? pageSize
  const from = page ? (page - 1) * pageSize : undefined

  const query: ElasticsearchQuery = {
    from,
    size,
    sort: [
      {
        'search_data.number_dynamic.value': {
          missing: '_last',
          mode: 'avg',
          order: 'desc',
          nested: {
            path: 'search_data.number_dynamic',
            filter: {
              term: { 'search_data.number_dynamic.name': 'position_boost|default' },
            },
          },
        },
      },
    ],
    _source: { includes: includeFields ?? ['search_result_data'] },
    query: {
      bool: {
        filter: [],
        must_not: [{ term: { 'hidden.id_list': 'default' } }],
      },
    },
  }

  if (slug) {
    query.query.bool.filter.push({
      bool: {
        should: [
          { term: { 'search_data.slug': slug } },
          { term: { 'search_data.ecommerce_product_id': slug } },
        ],
      },
    })
  }

  if (slugs?.length) {
    query.query.bool.filter.push({
      bool: {
        should: [
          { terms: { 'search_data.slug': slugs } },
          { terms: { 'search_data.ecommerce_product_id': slugs } },
        ],
      },
    })
  }

  if (status) {
    query.query.bool.filter.push({
      bool: {
        should: [
          { term: { 'search_data.status': '' } },
          { term: { 'search_data.status': status } },
        ],
      },
    })
  }

  if (types) {
    query.query.bool.filter.push({ terms: { 'search_data.product_type': types } })
  } else if (type) {
    query.query.bool.filter.push({ term: { 'search_data.product_type': type } })
  }

  if (tag) query.query.bool.filter.push({ term: { 'search_data.tags': tag } })
  if (tags?.length) query.query.bool.filter.push({ terms: { 'search_data.tags': tags } })

  if (storeId) {
    query.query.bool.filter.push({ term: { 'search_data.ecommerce_store_id': storeId } })
  }

  if (search) {
    query.query.bool.filter.push({
      query_string: {
        query: `*${search.toLowerCase().replace('%', '')}*`,
        default_field: 'search_data.full_text',
      },
    })
  }

  if (!withRich && !includeFields) {
    query._source.excludes = [
      '*.article_body',
      '*.description_rich',
      '*.source_article_body',
      '*.source_description_rich',
    ]
  }
  if (excludeFields) {
    query._source.excludes = (query._source.excludes ?? []).concat(excludeFields)
  }

  return query
}

function parseWidgetsJson(raw: unknown): Record<string, unknown> {
  if (typeof raw !== 'string' || !raw) return {}
  try {
    const parsed = JSON.parse(raw)
    return parsed && typeof parsed === 'object' ? (parsed as Record<string, unknown>) : {}
  } catch (err) {
    logger.warn({ err }, 'Failed to parse article_widgets_json — falling back to {}')
    return {}
  }
}

export const defaultProductTransformer: ProductTransformer<BaseProduct> = (item) => {
  const version =
    item.version && typeof item.version === 'object'
      ? (item.version as Record<string, unknown>)
      : {}
  const src = { ...version }

  for (const k of [
    'ecommerce_product_id',
    'id',
    'ecommerce_store_id',
    'tags',
    'slug',
    'status',
    'product_type',
  ]) {
    if (src[k] == null && item[k] != null) src[k] = item[k]
  }

  const widgetsJson = src.article_widgets_json ?? item.article_widgets_json

  return {
    id: String(src.ecommerce_product_id ?? src.id ?? ''),
    slug: String(src.slug ?? ''),
    title: String(src.title ?? src.name ?? 'Untitled'),
    description: String(src.description ?? ''),
    tags: Array.isArray(src.tags) ? (src.tags as string[]) : [],
    storeId: src.ecommerce_store_id ? String(src.ecommerce_store_id) : undefined,
    productType: String(src.product_type ?? 'article'),
    publishedAt: src.published_at ? String(src.published_at) : undefined,
    status: src.status ? String(src.status) : undefined,
    widgets: parseWidgetsJson(widgetsJson),
  }
}

function assertApiBaseUrl(): string {
  if (!env.API_BASE_URL) {
    throw new Error(
      'API_BASE_URL is not set. The CMS service requires it; add it to your .env or Docker build args.'
    )
  }
  return env.API_BASE_URL
}

export const productList = cache(
  async <T = BaseProduct>(
    filters: ProductFilters = {},
    options: ProductOptions = {},
    transformer: ProductTransformer<T> = defaultProductTransformer as ProductTransformer<T>
  ): Promise<ProductListResponse<T>> => {
    const started = Date.now()
    const productType = filters.type ?? 'unknown'
    const base = assertApiBaseUrl()

    const query = buildQuery(filters)
    const url =
      `${base}/ecommerce_product_view_list` +
      `?is_search=true&postprocess=default&query=${encodeURIComponent(JSON.stringify(query))}`

    try {
      const response = await fetcher<Record<string, unknown>>(url, {
        next: {
          revalidate: options.revalidate ?? 3600,
          tags: [
            'cms',
            `cms:type:${productType}`,
            ...(filters.tag ? [`cms:tag:${filters.tag}`] : []),
            ...(options.tags ?? []),
          ],
        },
      })

      const parsed = elasticSearchResponseSchema.safeParse(response)
      if (!parsed.success) {
        logger.error({ err: parsed.error, productType }, 'CMS response failed schema validation')
        throw new Error(`Invalid CMS response: ${parsed.error.message}`)
      }

      const itemList = (parsed.data.item_list ?? []).map((item) => transformer(item))
      const itemTotal = parsed.data.size ?? 0
      const pageSize = filters.pageSize ?? 20
      const pageTotal = pageSize > 0 ? Math.ceil(itemTotal / pageSize) : 0

      logger.info(
        { productType, count: itemList.length, itemTotal, ms: Date.now() - started },
        'CMS productList'
      )

      return { itemList, itemTotal, page: filters.page ?? 1, pageTotal }
    } catch (err) {
      logger.error({ err, productType, filters }, 'CMS productList failed')
      throw err
    }
  }
)

export const productGet = cache(
  async <T = BaseProduct>(
    slug: string,
    filters: Omit<ProductFilters, 'slug'> = {},
    options: ProductOptions = {},
    transformer: ProductTransformer<T> = defaultProductTransformer as ProductTransformer<T>
  ): Promise<ProductResponse<T>> => {
    const { itemList } = await productList<T>(
      { ...filters, slug, withRich: true },
      options,
      transformer
    )
    return { item: itemList[0] ?? null }
  }
)
