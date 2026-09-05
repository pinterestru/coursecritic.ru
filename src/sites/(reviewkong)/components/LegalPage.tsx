import type { ReactNode } from 'react'

/** Shared chrome for the static text pages: about, contact, legal, disclosure. */
export default function LegalPage({
  title,
  updatedAt,
  kicker = 'Legal',
  standfirst,
  children,
}: {
  title: string
  updatedAt: string
  kicker?: string
  /** Optional one-line summary shown under the H1, above the body. */
  standfirst?: string
  children: ReactNode
}) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-xs tracking-wider uppercase" style={{ color: 'rgb(var(--color-muted))' }}>
        {kicker} · last updated {updatedAt}
      </p>
      <h1
        className="font-editorial mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
        style={{ color: 'rgb(var(--color-fg))' }}
      >
        {title}
      </h1>
      {standfirst && (
        <p
          className="font-editorial mt-4 text-lg leading-relaxed"
          style={{ color: 'rgb(var(--color-muted))' }}
        >
          {standfirst}
        </p>
      )}
      <div
        className="mt-8 space-y-5 text-[15px] leading-relaxed [&_a]:underline [&_h2]:mt-10 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:tracking-tight [&_h3]:mt-6 [&_h3]:text-[15px] [&_h3]:font-bold [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6"
        style={{ color: 'rgb(var(--color-fg))' }}
      >
        {children}
      </div>
    </main>
  )
}

/**
 * A bordered table for the pages that owe the reader specifics rather than
 * prose — the cookie register, the lawful-basis grid, the retention schedule.
 * Scrolls horizontally on a phone instead of forcing the page to.
 */
export function LegalTable({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="-mx-6 overflow-x-auto px-6 sm:mx-0 sm:px-0">
      <table className="w-full min-w-[34rem] border-collapse text-left text-[13px]">
        <thead>
          <tr>
            {head.map((cell) => (
              <th
                key={cell}
                className="border-b px-3 py-2 text-[11px] font-bold tracking-[0.12em] uppercase"
                style={{
                  borderColor: 'rgb(var(--color-rule))',
                  color: 'rgb(var(--color-muted))',
                }}
              >
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="border-b px-3 py-3 align-top"
                  style={{ borderColor: 'rgb(var(--color-rule))' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
