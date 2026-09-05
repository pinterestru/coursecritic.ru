/**
 * Every ranked guide on the site, merged across verticals.
 *
 * Guides under /articles are primarily direct-open landers for paid traffic,
 * and the /articles INDEX is still noindex and still unlinked — it is not part
 * of the browsable site.
 *
 * The guides themselves are no longer hidden: the home page links four of them
 * (one per vertical, newest first) from its "Ranked guides" strip. They were
 * always indexable and always in the sitemap, so linking them is consistent
 * with how the rest of the site already treated them — and a review site with
 * no visible buying guides reads as thinner than it is.
 *
 * The header and footer still do not link /articles. Cross-linking between
 * guides happens through `relatedArticles()` below.
 */
import type { ArticleMeta } from './guides/types'
import type { VerticalId } from './verticals'
import { hostingArticles } from './hosting/articles'
import { securityArticles } from './security/articles'
import { travelArticles } from './travel/articles'
import { vpnArticles } from './vpn/articles'

export const articles: ArticleMeta[] = [
  ...vpnArticles,
  ...securityArticles,
  ...travelArticles,
  ...hostingArticles,
]

/**
 * Look up a guide by slug. Throws rather than returning undefined: every call
 * site is a page that cannot render without it, and a typo should fail the
 * build instead of rendering an empty hero.
 */
export function getArticle(slug: string): ArticleMeta {
  const article = articles.find((a) => a.slug === slug)
  if (!article) throw new Error(`Unknown article slug: ${slug}`)
  return article
}

export function articlesByVertical(vertical: VerticalId): ArticleMeta[] {
  return articles.filter((a) => a.vertical === vertical)
}

/**
 * Cross-link targets for the footer of a guide: the other guides in the same
 * vertical first, topped up with guides from other verticals if the vertical
 * only has one or two.
 */
export function relatedArticles(slug: string, limit = 4): ArticleMeta[] {
  const current = getArticle(slug)
  const sameVertical = articles.filter((a) => a.slug !== slug && a.vertical === current.vertical)
  const otherVerticals = articles.filter((a) => a.slug !== slug && a.vertical !== current.vertical)
  return [...sameVertical, ...otherVerticals].slice(0, limit)
}
