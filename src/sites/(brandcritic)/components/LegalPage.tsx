import type { ReactNode } from 'react'

/** Общая обвязка текстовых страниц: о проекте, контакты, документы, раскрытие. */
export default function LegalPage({
  title,
  updatedAt,
  kicker = 'документ',
  children,
}: {
  title: string
  updatedAt: string
  kicker?: string
  children: ReactNode
}) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <span className="bc-kicker">{kicker}</span>
      <h1 className="mt-5 text-3xl font-bold sm:text-4xl" style={{ color: 'rgb(var(--color-fg))' }}>
        {title}
      </h1>
      <p
        className="bc-mono mt-3 text-[11px] tracking-[0.12em] uppercase"
        style={{ color: 'rgb(var(--color-muted))' }}
      >
        обновлено {updatedAt}
      </p>
      <div
        className="mt-10 space-y-5 text-[15px] leading-relaxed [&_a]:text-[rgb(var(--color-primary))] [&_a]:underline [&_a]:underline-offset-2 [&_code]:bg-[rgb(var(--color-raised))] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[13px] [&_h2]:mt-10 [&_h2]:text-lg [&_h2]:font-bold [&_li]:marker:text-[rgb(var(--color-primary))] [&_ul]:list-[square] [&_ul]:space-y-2 [&_ul]:pl-6"
        style={{ color: 'rgb(var(--color-fg) / 0.86)' }}
      >
        {children}
      </div>
    </main>
  )
}
