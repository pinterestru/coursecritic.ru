import type { Metadata } from 'next'

import ArticleShell from '../../../components/idei/ArticleShell'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('chto-podarit-studentu')!

export const metadata: Metadata = guideMetadata(guide)

const checklist = [
  'Навыки для карьеры ещё до диплома',
  'Английский для стажировок',
  'Комфорт на парах и сессиях',
]

/** Split hero with a «что реально пригодится» checklist card. */
function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-2 pb-10">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide uppercase"
            style={{ background: 'rgb(var(--art-accent) / 0.1)', color: 'rgb(var(--art-accent))' }}
          >
            🎒 Студенту
          </span>
          <h1
            className="mt-5 text-[34px] leading-[1.05] font-extrabold sm:text-[46px]"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            Что подарить студенту
          </h1>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: 'rgb(var(--color-muted))' }}>
            {guide.lead}
          </p>
        </div>

        <div
          className="rounded-[28px] border p-6 shadow-[0_24px_50px_-28px_rgb(31_122_224_/_0.5)]"
          style={{
            background: 'rgb(var(--color-surface))',
            borderColor: 'rgb(var(--art-accent) / 0.15)',
          }}
        >
          <p
            className="text-[11px] font-bold tracking-wide uppercase"
            style={{ color: 'rgb(var(--art-accent))' }}
          >
            Что реально пригодится
          </p>
          <ul className="mt-4 space-y-3">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-extrabold text-white"
                  style={{ background: 'rgb(var(--art-accent))' }}
                  aria-hidden
                >
                  ✓
                </span>
                <span className="text-sm font-semibold" style={{ color: 'rgb(var(--color-fg))' }}>
                  {item}
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
