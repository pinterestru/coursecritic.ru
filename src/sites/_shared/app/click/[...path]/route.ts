import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

import { logger } from '@/lib/logging/logger'
import { marketingProcess } from '@/lib/services/tracker/tracker.api'
import { notify } from '@/lib/services/notification/notification.api'
import { getWebsiteUrl } from '@/lib/utils/domain'

// Always render dynamically — this is a real-time redirect, never cached.
export const dynamic = 'force-dynamic'
export const revalidate = 0

// When the offer domain and its path are concatenated into the first segment
// (e.g. "practicum.yandex.ru" + "frontend-developer"), split on the TLD.
const splitPattern = /\.(com|net|org|ru)(?!\/)(?=.)/

function normalizeTags(tags: string[]): string[] {
  const first = tags[0]
  const match = splitPattern.exec(first)
  if (!match) return tags

  const tldStart = match.index
  const tldLen = match[0].length
  const domain = first.slice(0, tldStart + tldLen)
  const path = first.slice(tldStart + tldLen)

  tags.splice(0, 1, domain, path)
  return tags
}

function noStoreHeaders(): Headers {
  const headers = new Headers()
  headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
  headers.set('Pragma', 'no-cache')
  headers.set('Expires', '0')
  headers.set('Referrer-Policy', 'no-referrer')
  return headers
}

/**
 * Affiliate redirect handler.
 *
 * Handles /click/<offer_domain>/<path>?params — records the click through the
 * marketing tracker and redirects the visitor to the advertiser. If the tracker
 * returns a redirect URL we use it; otherwise we fall back to the offer's own
 * deep link (https://<offer_domain>/<path>). No client-side fingerprinting,
 * cloaking gate or analytics — just tracked redirect.
 */
export async function GET(request: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  const { path } = await params
  const headers = noStoreHeaders()

  try {
    // Split the catch-all into offer tag + deep-link path.
    const tags = normalizeTags([...path])
    const tag = (tags.shift() || '').replace(/^www\./, '')
    const rest = tags.filter((v) => !!v).join('/')

    // Guard against malformed links (no real domain in the tag).
    if (!tag.includes('.')) {
      return NextResponse.redirect(new URL('/', getWebsiteUrl()), { status: 302, headers })
    }

    const fallback = `https://${tag}${rest ? `/${rest}` : ''}`

    // Persist the per-offer MTFI cookie so the tracker can stitch the click to
    // the visitor's earlier flow.
    const cookieStore = await cookies()
    const mtfiKey = `_mtfi__${tag}${rest ? `__${rest.split('/').join('_')}` : ''}`
    const mtfi = cookieStore.get(mtfiKey)?.value || undefined

    // Forward query params (utm_*, etc.) to the tracker, plus the deep-link path.
    const query: Record<string, string> = {}
    request.nextUrl.searchParams.forEach((value, key) => {
      query[key] = value
    })
    if (rest) query.path = `/${rest}`

    const clientMeta = {
      ip:
        request.headers.get('cf-connecting-ip') ||
        request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
        '',
      user_agent: request.headers.get('user-agent') || '',
      domain: request.headers.get('host') || '',
      url: request.url,
      mtfi,
      created_at: new Date().toISOString(),
      headers: Array.from(request.headers.entries())
        .map(([name, value]) => `${name}: ${value}`)
        .join('\r\n'),
    }

    const result = await marketingProcess(tag, query, { clientMeta })

    // Tracker call failed entirely — still send the visitor to the advertiser.
    if (!result.success) {
      logger.error({ tag, error: result.error.message }, 'Marketing process failed')
      return NextResponse.redirect(fallback, { status: 302, headers })
    }

    const response = result.data

    // Tracker reported a problem with the campaign — notify and fall back.
    if (response.message && response.message !== 'ok') {
      void notify(
        `Broken Campaign: <b>${tag}</b> | ${fallback} | domain: ${clientMeta.domain || 'no_domain'} | ip: ${clientMeta.ip || ''} | err: ${response.message}`
      )
      return NextResponse.redirect(fallback, { status: 302, headers })
    }

    // Carry forward an updated MTFI cookie if the tracker returned one.
    if (response.mtfi) {
      headers.append(
        'Set-Cookie',
        `${mtfiKey}=${response.mtfi}; Expires=${new Date(Date.now() + 24 * 60 * 60 * 1000).toUTCString()}; Path=/`
      )
    }

    // Prefer the tracker's resolved URL; otherwise use the offer deep link.
    const target = response.type === 'redirect' && response.url ? response.url : fallback
    return NextResponse.redirect(target, { status: 302, headers })
  } catch (error) {
    logger.error(
      {
        error: error instanceof Error ? error.message : 'Unknown error',
        path,
      },
      'Failed to process affiliate redirect'
    )
    return NextResponse.redirect(new URL('/', getWebsiteUrl()), { status: 302, headers })
  }
}
