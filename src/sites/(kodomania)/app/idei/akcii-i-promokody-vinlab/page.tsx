import type { Metadata } from 'next'

import ArticleShell from '../../../components/idei/ArticleShell'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('akcii-i-promokody-vinlab')!

export const metadata: Metadata = guideMetadata(guide)

const myth = [
  { k: 'Промокод', v: 'вводить негде', ok: false },
  { k: 'Акция каталога', v: 'применяется сама', ok: true },
  { k: 'Баллы WINCLUB', v: 'до 70% чека', ok: true },
  { k: 'Персональная цена', v: 'после регистрации', ok: true },
]

/** Hero as a myth-vs-reality checklist — the article's whole argument. */
function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-2 pb-10">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide uppercase"
            style={{ background: 'rgb(var(--art-accent) / 0.12)', color: 'rgb(var(--art-accent))' }}
          >
            🏷️ Акции и скидки
          </span>
          <h1
            className="mt-5 text-[32px] leading-[1.06] font-extrabold sm:text-[44px]"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            Акции и{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(120deg, var(--art-grad-1), var(--art-grad-2))',
              }}
            >
              промокоды ВинЛаб
            </span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: 'rgb(var(--color-muted))' }}>
            {guide.lead}
          </p>
        </div>

        <div
          className="rounded-[28px] border p-6"
          style={{
            background: 'rgb(var(--color-surface))',
            borderColor: 'rgb(var(--art-accent) / 0.2)',
          }}
        >
          <p
            className="text-[11px] font-bold tracking-wide uppercase"
            style={{ color: 'rgb(var(--art-accent))' }}
          >
            Что реально работает
          </p>
          <ul className="mt-4 space-y-2.5">
            {myth.map((m) => (
              <li key={m.k} className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-extrabold text-white"
                  style={{
                    background: m.ok ? 'rgb(var(--art-accent))' : 'rgb(var(--color-muted) / 0.45)',
                  }}
                  aria-hidden
                >
                  {m.ok ? '✓' : '×'}
                </span>
                <span className="min-w-0">
                  <span
                    className="block text-sm font-bold"
                    style={{
                      color: m.ok ? 'rgb(var(--color-fg))' : 'rgb(var(--color-muted))',
                      textDecoration: m.ok ? 'none' : 'line-through',
                    }}
                  >
                    {m.k}
                  </span>
                  <span className="block text-xs" style={{ color: 'rgb(var(--color-muted))' }}>
                    {m.v}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default function Page() {
  return <ArticleShell guide={guide} hero={<Hero />} />
}
