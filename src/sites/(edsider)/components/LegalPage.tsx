import type { ReactNode } from 'react'

export default function LegalPage({
  title,
  updatedAt,
  children,
}: {
  title: string
  updatedAt: string
  children: ReactNode
}) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-xs tracking-wider uppercase" style={{ color: 'rgb(var(--color-muted))' }}>
        Правовая информация · обновлено {updatedAt}
      </p>
      <h1
        className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
        style={{ color: 'rgb(var(--color-fg))' }}
      >
        {title}
      </h1>
      <div
        className="mt-8 space-y-5 text-[15px] leading-relaxed [&_a]:underline [&_h2]:mt-10 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:tracking-tight [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6"
        style={{ color: 'rgb(var(--color-fg))' }}
      >
        {children}
      </div>
    </main>
  )
}
