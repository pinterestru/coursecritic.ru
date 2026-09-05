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
    <main className="mx-auto max-w-2xl px-6 py-16 sm:py-20">
      <span className="kdm-kicker">Документ · {updatedAt}</span>
      <h1
        className="mt-5 text-3xl leading-tight font-extrabold sm:text-[40px]"
        style={{ color: 'rgb(var(--color-fg))' }}
      >
        {title}
      </h1>
      <div className="kdm-prose mt-8">{children}</div>
    </main>
  )
}
