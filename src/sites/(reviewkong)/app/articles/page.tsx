import type { Metadata } from 'next'
import Link from 'next/link'

import { articlesByVertical } from '../../data/articles'
import { authors } from '../../data/providers'
import { verticals } from '../../data/verticals'
import { contrastText } from '../../components/contrastText'

/**
 * Index of the ranked guides.
 *
 * These guides are direct-open landers for paid traffic, so nothing in the site
 * chrome links here — this page exists for readers who arrive on one guide and
 * want the rest, and for us while authoring. It is deliberately noindex: the
 * individual guides carry the search value, not the hub.
 */
export const metadata: Metadata = {
  title: 'All rankings',
  description:
    'Every ranked buying guide: VPNs, travel eSIMs and insurance, web hosting. Scored on renewal price, coverage and the terms that decide the outcome.',
  robots: { index: false, follow: true },
}

export default function ArticlesIndexPage() {
  return (
    <main>
      <section
        className="border-b"
        style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-surface))' }}
      >
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
          <p
            className="text-[11px] font-bold tracking-[0.22em] uppercase"
            style={{ color: 'rgb(var(--color-primary))' }}
          >
            Rankings · updated 2026
          </p>
          <h1
            className="font-editorial mt-5 max-w-3xl text-[40px] leading-[1.06] font-bold tracking-tight sm:text-[56px]"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            Every ranking we publish, in one place
          </h1>
          <p
            className="mt-6 max-w-2xl text-lg leading-relaxed"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            Each guide takes one decision, compares the four or five options that are actually worth
            considering, and names a winner. Prices are quoted at renewal, and every commercial link
            is disclosed.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        {verticals.map((vertical, vIdx) => {
          const list = articlesByVertical(vertical.id)
          if (list.length === 0) return null
          const author = authors[vertical.id]
          return (
            <div key={vertical.id} className={vIdx > 0 ? 'mt-16' : undefined}>
              <h2
                className="font-editorial text-2xl font-bold tracking-tight"
                style={{ color: 'rgb(var(--color-fg))' }}
              >
                {vertical.name}
              </h2>
              <p className="mt-2 max-w-2xl text-sm" style={{ color: 'rgb(var(--color-muted))' }}>
                {vertical.blurb} Written by {author.name}, {author.role.toLowerCase()}.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((a, i) => (
                  <Link
                    key={a.slug}
                    href={`/articles/${a.slug}`}
                    className="group flex h-full flex-col rounded-2xl border-[1.5px] p-6 transition-all hover:shadow-[0_20px_40px_-20px_rgba(22,24,28,0.25)]"
                    style={{
                      borderColor: 'rgb(var(--color-rule))',
                      background: 'rgb(var(--color-surface))',
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="font-editorial text-[13px] font-bold tabular-nums"
                        style={{ color: 'rgb(var(--color-primary))' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span
                        className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide uppercase"
                        style={{
                          background: vertical.accent,
                          color: contrastText(vertical.accent),
                        }}
                      >
                        {vertical.label}
                      </span>
                    </div>
                    <h3
                      className="font-editorial mt-4 text-[22px] leading-[1.15] font-bold"
                      style={{ color: 'rgb(var(--color-fg))' }}
                    >
                      {a.shortTopic}
                    </h3>
                    <p
                      className="mt-3 flex-1 text-sm leading-relaxed"
                      style={{ color: 'rgb(var(--color-muted))' }}
                    >
                      {a.blurb}
                    </p>
                    <div
                      className="mt-5 flex items-center justify-between border-t pt-4 text-xs"
                      style={{
                        borderColor: 'rgb(var(--color-rule))',
                        color: 'rgb(var(--color-muted))',
                      }}
                    >
                      <span>{a.readingTime} read</span>
                      <span
                        className="font-bold tracking-wider uppercase"
                        style={{ color: 'rgb(var(--color-primary))' }}
                      >
                        Open ranking →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </section>
    </main>
  )
}
