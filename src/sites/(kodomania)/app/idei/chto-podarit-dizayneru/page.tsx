import type { Metadata } from 'next'

import ArticleShell from '../../../components/idei/ArticleShell'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('chto-podarit-dizayneru')!

export const metadata: Metadata = guideMetadata(guide)

const swatches = [
  'var(--art-grad-1)',
  'var(--art-grad-2)',
  'rgb(var(--art-accent-2))',
  'rgb(var(--art-accent))',
]

/** Split hero with a designer «canvas»: swatches + type specimen. */
function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-2 pb-10">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide uppercase"
            style={{ background: 'rgb(var(--art-accent) / 0.1)', color: 'rgb(var(--art-accent))' }}
          >
            🎨 Дизайнеру
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
              дизайнеру
            </span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: 'rgb(var(--color-muted))' }}>
            {guide.lead}
          </p>
        </div>

        <div
          className="rounded-[28px] border p-6 shadow-[0_24px_50px_-28px_rgb(244_63_94_/_0.45)]"
          style={{
            background: 'rgb(var(--color-surface))',
            borderColor: 'rgb(var(--art-accent) / 0.15)',
          }}
          aria-hidden
        >
          <div
            className="flex items-end justify-between rounded-2xl px-5 py-6"
            style={{ background: 'linear-gradient(135deg, var(--art-grad-1), var(--art-grad-2))' }}
          >
            <span className="text-6xl leading-none font-black text-white">Aa</span>
            <span className="text-xs font-semibold text-white/80">Type · Grid · Color</span>
          </div>
          <div className="mt-4 flex gap-2">
            {swatches.map((c, i) => (
              <span key={i} className="h-10 flex-1 rounded-xl" style={{ background: c }} />
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span
              className="h-2 w-2/3 rounded-full"
              style={{ background: 'rgb(var(--art-accent) / 0.3)' }}
            />
            <span
              className="h-2 flex-1 rounded-full"
              style={{ background: 'rgb(var(--art-accent) / 0.15)' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Page() {
  return <ArticleShell guide={guide} hero={<Hero />} />
}
