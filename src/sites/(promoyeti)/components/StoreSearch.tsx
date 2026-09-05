'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'

import { contrastText } from './contrastText'

export interface SearchEntry {
  slug: string
  name: string
  badge: string
  color: string
  /** Short category label, e.g. 'Fashion'. */
  category: string
  /** Offer count, shown so a result says what is behind it. */
  offers: number
}

/**
 * Store finder for the home page.
 *
 * The whole index is shipped to the browser as props — 77 short objects, a few
 * kilobytes — so filtering is instant and there is no search endpoint to build,
 * rate-limit or keep in sync. Revisit this if the index reaches four figures.
 *
 * Matching is a plain case- and accent-insensitive substring test on the store
 * name. Deliberately not fuzzy: on a list this size fuzzy matching mostly
 * produces confident wrong answers, and someone typing "adid" wants Adidas.
 */
export default function StoreSearch({ entries }: { entries: SearchEntry[] }) {
  const [query, setQuery] = useState('')

  const normalised = useMemo(() => entries.map((e) => ({ entry: e, key: fold(e.name) })), [entries])

  const results = useMemo(() => {
    const q = fold(query.trim())
    if (q.length < 2) return []
    return (
      normalised
        .filter(({ key }) => key.includes(q))
        // Prefix matches first: "new" should surface New Balance above Joe's.
        .sort((a, b) => {
          const ap = a.key.startsWith(q) ? 0 : 1
          const bp = b.key.startsWith(q) ? 0 : 1
          return ap - bp || a.key.localeCompare(b.key)
        })
        .slice(0, 8)
        .map(({ entry }) => entry)
    )
  }, [normalised, query])

  const showEmpty = query.trim().length >= 2 && results.length === 0

  return (
    <div className="relative">
      <label htmlFor="store-search" className="sr-only">
        Search stores
      </label>
      <input
        id="store-search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search a store — SHEIN, Lenovo, Trip.com…"
        autoComplete="off"
        className="w-full rounded-xl border-[1.5px] px-4 py-3.5 text-[15px] outline-none focus:border-[rgb(var(--color-primary))]"
        style={{
          borderColor: 'rgb(var(--color-rule))',
          background: 'rgb(var(--color-surface))',
          color: 'rgb(var(--color-fg))',
        }}
      />

      {(results.length > 0 || showEmpty) && (
        <div
          className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border-[1.5px] shadow-[0_24px_48px_-24px_rgba(21,22,31,0.4)]"
          style={{
            borderColor: 'rgb(var(--color-rule))',
            background: 'rgb(var(--color-surface))',
          }}
        >
          {showEmpty ? (
            <p className="px-4 py-4 text-sm" style={{ color: 'rgb(var(--color-muted))' }}>
              No store called “{query.trim()}” here yet. The full A–Z is on the{' '}
              <Link
                href="/stores"
                className="underline"
                style={{ color: 'rgb(var(--color-primary))' }}
              >
                stores page
              </Link>
              .
            </p>
          ) : (
            <ul>
              {results.map((entry) => (
                <li key={entry.slug}>
                  <Link
                    href={`/stores/${entry.slug}`}
                    className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-[rgb(var(--color-bg))]"
                  >
                    <span
                      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-[10px] font-extrabold"
                      style={{ background: entry.color, color: contrastText(entry.color) }}
                      aria-hidden
                    >
                      {entry.badge}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className="block truncate text-sm font-bold"
                        style={{ color: 'rgb(var(--color-fg))' }}
                      >
                        {entry.name}
                      </span>
                      <span
                        className="block text-[11px]"
                        style={{ color: 'rgb(var(--color-muted))' }}
                      >
                        {entry.category} · {entry.offers} offer{entry.offers === 1 ? '' : 's'}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

/** Lowercase, strip diacritics and punctuation so "Joe's" matches "joes". */
function fold(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '')
}
