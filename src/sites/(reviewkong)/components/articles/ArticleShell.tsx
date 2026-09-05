import Link from 'next/link'
import type { ReactNode } from 'react'

import { activeSiteConfig } from '@/config/sites/active.generated'

import type { ArticleMeta } from '../../data/guides/types'
import { ldJson } from '../../data/guides/ldJson'
import { relatedArticles } from '../../data/articles'
import { siteUrl } from '../../data/site'
import { authors } from '../../data/providers'
import { getVertical } from '../../data/verticals'

import ReadingProgress from './ReadingProgress'

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/**
 * Shared chrome for every ranked guide: reading-progress bar, hero with
 * breadcrumb + H1 + lead + author byline, the content column, and a footer of
 * related guides. Body sections are passed as children from each guide's page.
 *
 * The author, kicker and related list all default from the guide's vertical, so
 * a new guide only has to pass `meta` and `lead`. The breadcrumb deliberately
 * does not link to /articles — those pages are paid-traffic landers and the
 * index is not part of the browsable site.
 */
export default function ArticleShell({
  meta,
  lead,
  children,
  kicker,
  related,
  relatedTitle = 'More rankings',
}: {
  meta: ArticleMeta
  lead: string
  children: ReactNode
  /** Eyebrow above the H1. Defaults to the vertical's kicker. */
  kicker?: string
  /** Cross-link cards. Defaults to related guides from the same vertical. */
  related?: ArticleMeta[]
  relatedTitle?: string
}) {
  const vertical = getVertical(meta.vertical)
  const author = authors[meta.vertical]
  const others = related ?? relatedArticles(meta.slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: meta.metaDescription,
    datePublished: meta.updated,
    dateModified: meta.updated,
    // `url` disambiguates the author — Google's Article guidance asks for a page
    // that uniquely identifies them; every byline has a bio on /about.
    author: {
      '@type': 'Person',
      name: author.name,
      jobTitle: author.role,
      url: `${siteUrl}/about`,
    },
    publisher: { '@type': 'Organization', name: activeSiteConfig.brand.name },
  }

  return (
    <main>
      <ReadingProgress />

      {/* Hero */}
      <section
        className="border-b"
        style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-surface))' }}
      >
        <div className="mx-auto max-w-3xl px-6 py-10 sm:py-14">
          <nav
            className="text-xs"
            style={{ color: 'rgb(var(--color-muted))' }}
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:underline" style={{ color: 'rgb(var(--color-muted))' }}>
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>{vertical.name}</span>
            <span className="mx-2">/</span>
            <span>{meta.shortTopic}</span>
          </nav>

          <p
            className="mt-6 text-[11px] font-bold tracking-[0.2em] uppercase"
            style={{ color: 'rgb(var(--color-primary))' }}
          >
            {kicker ?? vertical.kicker}
          </p>
          <h1
            className="font-editorial mt-3 text-[32px] leading-[1.1] font-bold tracking-tight sm:text-[44px]"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            {meta.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: 'rgb(var(--color-muted))' }}>
            {lead}
          </p>

          <div
            className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 border-t pt-5 text-sm"
            style={{ borderColor: 'rgb(var(--color-rule))' }}
          >
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold"
              style={{
                background: 'rgb(var(--color-primary) / 0.15)',
                color: 'rgb(var(--color-primary))',
              }}
            >
              {author.initials}
            </span>
            <span className="font-semibold" style={{ color: 'rgb(var(--color-fg))' }}>
              {author.name}
            </span>
            <span style={{ color: 'rgb(var(--color-muted))' }}>
              updated {formatDate(meta.updated)} · {meta.readingTime} read
            </span>
          </div>

          <p className="mt-4 text-xs" style={{ color: 'rgb(var(--color-muted))' }}>
            Some links on this page earn us a commission. It never affects the ranking — see our{' '}
            <Link href="/disclosure" className="underline">
              disclosure
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Body */}
      <div className="mx-auto max-w-3xl space-y-14 px-6 py-12">{children}</div>

      {/* Related guides */}
      {others.length > 0 && (
        <section
          className="border-t"
          style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-surface))' }}
        >
          <div className="mx-auto max-w-3xl px-6 py-12">
            <h2
              className="font-editorial text-2xl font-bold tracking-tight"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              {relatedTitle}
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {others.map((a) => (
                <Link
                  key={a.slug}
                  href={`/articles/${a.slug}`}
                  className="block rounded-xl border p-4 transition-colors hover:bg-[rgb(var(--color-bg))]"
                  style={{ borderColor: 'rgb(var(--color-rule))' }}
                >
                  <p
                    className="text-xs tracking-wider uppercase"
                    style={{ color: 'rgb(var(--color-primary))' }}
                  >
                    {a.shortTopic}
                  </p>
                  <p
                    className="font-editorial mt-1 text-base font-bold"
                    style={{ color: 'rgb(var(--color-fg))' }}
                  >
                    {a.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(jsonLd) }} />
    </main>
  )
}
