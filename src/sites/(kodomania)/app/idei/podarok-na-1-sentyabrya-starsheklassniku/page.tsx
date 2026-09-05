import type { Metadata } from 'next'

import ArticleShell from '../../../components/idei/ArticleShell'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('podarok-na-1-sentyabrya-starsheklassniku')!

export const metadata: Metadata = guideMetadata(guide)

/** Hero with a seasonal band — the one day a study gift reads as support. */
function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-2 pb-10">
      <div
        className="overflow-hidden rounded-[32px] border"
        style={{
          borderColor: 'rgb(var(--art-accent) / 0.2)',
          background: `linear-gradient(135deg, ${guide.theme.grad[0]}14, ${guide.theme.grad[1]}22)`,
        }}
      >
        <div className="px-7 py-11 sm:px-12 sm:py-14">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide uppercase"
            style={{ background: 'rgb(var(--art-accent))', color: '#fff' }}
          >
            🍁 1 сентября
          </span>
          <h1
            className="mt-5 max-w-2xl text-[34px] leading-[1.05] font-extrabold sm:text-[48px]"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            Подарок на 1 сентября старшекласснику
          </h1>
          <p
            className="mt-5 max-w-xl text-lg leading-relaxed"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            {guide.lead}
          </p>
        </div>

        <div
          className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t px-7 py-4 text-sm sm:px-12"
          style={{
            borderColor: 'rgb(var(--art-accent) / 0.2)',
            background: 'rgb(var(--color-surface) / 0.6)',
          }}
        >
          <span className="font-bold" style={{ color: 'rgb(var(--art-accent))' }}>
            Почему сейчас
          </span>
          <span style={{ color: 'rgb(var(--color-muted))' }}>
            Школы держат летние цены до начала занятий, дальше прайс поднимается вместе со стартом
            курса
          </span>
        </div>
      </div>
    </section>
  )
}

export default function Page() {
  return <ArticleShell guide={guide} hero={<Hero />} />
}
