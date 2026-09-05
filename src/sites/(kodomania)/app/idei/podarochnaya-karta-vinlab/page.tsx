import type { Metadata } from 'next'

import { clickHref } from '../../../components/AffiliateLink'
import ArticleShell from '../../../components/idei/ArticleShell'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('podarochnaya-karta-vinlab')!

export const metadata: Metadata = guideMetadata(guide)

const facts = [
  { k: 'до 10\u00A0000\u00A0₽', v: 'номиналы, шаг 1\u00A0000\u00A0₽' },
  { k: '1 год', v: 'срок действия' },
  { k: 'один чек', v: 'номинал берите чуть ниже покупки' },
]

/** Hero with a gift-card mock — the article is about the card itself. */
function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-2 pb-10">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide uppercase"
            style={{ background: 'rgb(var(--art-accent) / 0.1)', color: 'rgb(var(--art-accent))' }}
          >
            💳 Подарочная карта
          </span>
          <h1
            className="mt-5 text-[32px] leading-[1.06] font-extrabold sm:text-[44px]"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            Подарочная карта{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(120deg, var(--art-grad-1), var(--art-grad-2))',
              }}
            >
              ВинЛаб
            </span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: 'rgb(var(--color-muted))' }}>
            {guide.lead}
          </p>
          <a
            href={clickHref(guide.cta!.clickUrl)}
            target="_blank"
            rel="noopener sponsored"
            className="mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold text-white transition-transform hover:scale-[1.03]"
            style={{ background: 'linear-gradient(135deg, var(--art-grad-1), var(--art-grad-2))' }}
          >
            💳 Смотреть номиналы →
          </a>

          <dl className="mt-7 grid gap-3 sm:grid-cols-3">
            {facts.map((f) => (
              <div
                key={f.k}
                className="rounded-2xl px-4 py-3"
                style={{ background: 'rgb(var(--art-tint))' }}
              >
                <dt
                  className="kdm-display text-sm font-extrabold"
                  style={{ color: 'rgb(var(--art-ink))' }}
                >
                  {f.k}
                </dt>
                <dd className="mt-0.5 text-xs" style={{ color: 'rgb(var(--color-muted))' }}>
                  {f.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          className="relative overflow-hidden rounded-[24px] p-7 text-white shadow-[0_28px_60px_-30px_rgb(159_18_57_/_0.6)]"
          style={{ background: 'linear-gradient(135deg, var(--art-grad-1), var(--art-grad-2))' }}
        >
          <div
            className="pointer-events-none absolute -top-14 -right-10 h-44 w-44 rounded-full opacity-25"
            style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)' }}
            aria-hidden
          />
          <div className="relative">
            <div className="flex items-start justify-between">
              <span className="text-[11px] font-bold tracking-wide text-white/75 uppercase">
                Подарочная карта
              </span>
              <span className="text-2xl" aria-hidden>
                🍷
              </span>
            </div>
            <p className="kdm-display mt-10 text-4xl leading-none font-extrabold">5 000 ₽</p>
            <p className="mt-2 text-sm text-white/75">номинал на выбор · шаг 1 000 ₽</p>
            <div className="mt-6 flex items-center justify-between text-[11px] text-white/70">
              <span>действует 1 год</span>
              <span>любой магазин сети</span>
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
