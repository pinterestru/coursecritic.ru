import type { Metadata } from 'next'

import ArticleShell from '../../../components/idei/ArticleShell'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('chto-podarit-analitiku-dannyh')!

export const metadata: Metadata = guideMetadata(guide)

const bars = [38, 62, 48, 80, 56, 94, 72]

/** Split hero with a mini analytics-dashboard widget. */
function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-2 pb-10">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide uppercase"
            style={{ background: 'rgb(var(--art-accent) / 0.1)', color: 'rgb(var(--art-accent))' }}
          >
            📊 Аналитику данных
          </span>
          <h1
            className="mt-5 text-[34px] leading-[1.05] font-extrabold sm:text-[46px]"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            Что подарить{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(120deg, var(--art-grad-1), var(--art-grad-2))',
              }}
            >
              аналитику данных
            </span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: 'rgb(var(--color-muted))' }}>
            {guide.lead}
          </p>
        </div>

        <div
          className="rounded-[28px] border p-6 shadow-[0_24px_50px_-28px_rgb(8_145_178_/_0.5)]"
          style={{
            background: 'rgb(var(--color-surface))',
            borderColor: 'rgb(var(--art-accent) / 0.15)',
          }}
          aria-hidden
        >
          <div className="flex items-center justify-between">
            <span
              className="text-[11px] font-bold tracking-wide uppercase"
              style={{ color: 'rgb(var(--color-muted))' }}
            >
              Рост навыка
            </span>
            <span
              className="rounded-full px-2 py-0.5 text-[11px] font-extrabold"
              style={{
                background: 'rgb(var(--art-accent) / 0.12)',
                color: 'rgb(var(--art-accent))',
              }}
            >
              +38%
            </span>
          </div>
          <div className="mt-5 flex h-28 items-end gap-2">
            {bars.map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-t-md"
                style={{
                  height: `${h}%`,
                  background:
                    i === bars.length - 2
                      ? 'linear-gradient(var(--art-grad-1), var(--art-grad-2))'
                      : 'rgb(var(--art-accent) / 0.2)',
                }}
              />
            ))}
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-xl px-3 py-2.5" style={{ background: 'rgb(var(--art-tint))' }}>
              <div
                className="kdm-display text-lg font-extrabold"
                style={{ color: 'rgb(var(--art-accent))' }}
              >
                SQL · Python
              </div>
              <div className="text-[11px]" style={{ color: 'rgb(var(--color-muted))' }}>
                уже в работе
              </div>
            </div>
            <div className="rounded-xl px-3 py-2.5" style={{ background: 'rgb(var(--art-tint))' }}>
              <div
                className="kdm-display text-lg font-extrabold"
                style={{ color: 'rgb(var(--art-accent))' }}
              >
                ML
              </div>
              <div className="text-[11px]" style={{ color: 'rgb(var(--color-muted))' }}>
                следующая ступень
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Page() {
  return <ArticleShell guide={guide} hero={<Hero />} />
}
