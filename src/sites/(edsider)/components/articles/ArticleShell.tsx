import Link from 'next/link'
import type { ReactNode } from 'react'

import type { ArticleMeta, Author } from '../../data/guides/types'
import { ldJson } from '../../data/guides/ldJson'
import { otherArticles } from '../../data/ege/articles'
import { author as egeAuthor } from '../../data/ege/schools'

import ReadingProgress from './ReadingProgress'

function formatDate(iso: string): string {
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ]
  const d = new Date(iso)
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
}

/**
 * Shared chrome for every rating guide: reading-progress bar, hero with
 * breadcrumb + H1 + lead + author byline, the content column, and a footer of
 * other guides. Body sections are passed as children from each article's own
 * page. Everything vertical-specific (kicker, author, the related list) is
 * optional and defaults to ЕГЭ.
 */
export default function ArticleShell({
  meta,
  lead,
  children,
  author = egeAuthor,
  kicker = 'Рейтинг · ЕГЭ 2027',
  related,
  relatedTitle = 'Другие подборки по ЕГЭ',
}: {
  meta: ArticleMeta
  lead: string
  children: ReactNode
  author?: Author
  /** Eyebrow line above the H1. */
  kicker?: string
  /** Cross-link cards; defaults to the other ЕГЭ guides. */
  related?: ArticleMeta[]
  relatedTitle?: string
}) {
  const others = related ?? otherArticles(meta.slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: meta.metaDescription,
    datePublished: meta.updated,
    dateModified: meta.updated,
    author: { '@type': 'Person', name: author.name, jobTitle: author.role },
    publisher: { '@type': 'Organization', name: 'EDсайдер' },
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
            aria-label="breadcrumbs"
          >
            <Link href="/" className="hover:underline" style={{ color: 'rgb(var(--color-muted))' }}>
              Главная
            </Link>
            <span className="mx-2">/</span>
            <span>Подборки</span>
            <span className="mx-2">/</span>
            <span>{meta.shortSubject}</span>
          </nav>

          <p
            className="mt-6 text-[11px] font-bold tracking-[0.2em] uppercase"
            style={{ color: 'rgb(var(--color-primary))' }}
          >
            {kicker}
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
              обновлено {formatDate(meta.updated)} · {meta.readingTime} чтения
            </span>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="mx-auto max-w-3xl space-y-14 px-6 py-12">{children}</div>

      {/* Other guides */}
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
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
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
                    {a.shortSubject}
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
