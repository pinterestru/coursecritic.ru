import type { Metadata } from 'next'

import { clickHref } from '../../../components/AffiliateLink'
import ArticleShell from '../../../components/idei/ArticleShell'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('kruiz-online-kak-zabronirovat')!

export const metadata: Metadata = guideMetadata(guide)

const fields = [
  { label: 'Направление', value: 'Волга · Север · Море' },
  { label: 'Отправление', value: 'Москва, СПб, Сочи' },
  { label: 'Длительность', value: 'от 2 до 13 дней' },
]

const badges = [
  'до 20% раннее бронирование',
  '500 миль за регистрацию в приложении',
  'ежедневно 8:00–21:00',
]

/** Hero built around a search-widget mock — the navigational article. */
function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-2 pb-10">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide uppercase"
            style={{ background: 'rgb(var(--art-accent) / 0.1)', color: 'rgb(var(--art-accent))' }}
          >
            🧾 Как забронировать
          </span>
          <h1
            className="mt-5 text-[32px] leading-[1.06] font-extrabold sm:text-[44px]"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            Круиз.онлайн:{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(120deg, var(--art-grad-1), var(--art-grad-2))',
              }}
            >
              как забронировать круиз
            </span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: 'rgb(var(--color-muted))' }}>
            {guide.lead}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className="rounded-full px-3 py-1.5 text-xs font-semibold"
                style={{
                  background: 'rgb(var(--art-tint))',
                  color: 'rgb(var(--art-ink))',
                }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        <div
          className="rounded-[28px] border p-6 shadow-[0_28px_60px_-34px_rgb(67_56_202_/_0.55)]"
          style={{
            background: 'rgb(var(--color-surface))',
            borderColor: 'rgb(var(--art-accent) / 0.18)',
          }}
        >
          <p
            className="text-[11px] font-bold tracking-wide uppercase"
            style={{ color: 'rgb(var(--art-accent))' }}
          >
            Подбор круиза
          </p>
          <div className="mt-4 space-y-3">
            {fields.map((f) => (
              <div
                key={f.label}
                className="rounded-2xl border px-4 py-3"
                style={{ borderColor: 'rgb(var(--color-rule))' }}
              >
                <div
                  className="text-[10px] font-bold tracking-wide uppercase"
                  style={{ color: 'rgb(var(--color-muted))' }}
                >
                  {f.label}
                </div>
                <div
                  className="mt-0.5 text-sm font-semibold"
                  style={{ color: 'rgb(var(--color-fg))' }}
                >
                  {f.value}
                </div>
              </div>
            ))}
          </div>
          <a
            href={clickHref('https://kruiz.online/search-kruiz')}
            target="_blank"
            rel="noopener sponsored"
            className="mt-4 block rounded-full px-4 py-3 text-center text-sm font-extrabold text-white transition-transform hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, var(--art-grad-1), var(--art-grad-2))',
            }}
          >
            Найти рейс →
          </a>
        </div>
      </div>
    </section>
  )
}

export default function Page() {
  return <ArticleShell guide={guide} hero={<Hero />} />
}
