import { activeSiteConfig } from '@/config/sites/active.generated'

/**
 * Get the full website URL with protocol for the active site.
 *
 * Client-side: the current origin. Server-side: the active site's configured
 * canonical URL (never derived from request headers, which behind a reverse
 * proxy in standalone mode can resolve to the upstream bind address).
 */
export function getWebsiteUrl(): string {
  if (typeof window !== 'undefined') {
    return window.location.origin
  }
  return activeSiteConfig.seo.canonicalUrl || 'http://localhost:3000'
}
