import type { Metadata } from 'next'
import Link from 'next/link'

import GuideCard from '../../components/GuideCard'
import { guides, guideGroups } from '../../data/guides'

export const metadata: Metadata = {
  title: { absolute: 'Идеи подарков — обучение, круизы и карты' },
  description:
    'Подборки идей подарков Kodomania: обучение и курс в подарок, круиз и впечатления, подарочные карты и напитки к столу, подарки по профессии и поводу.',
}

export default function IdeiIndexPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
      <nav
        className="text-xs"
        style={{ color: 'rgb(var(--color-muted))' }}
        aria-label="breadcrumbs"
      >
        <Link href="/" className="hover:underline" style={{ color: 'rgb(var(--color-muted))' }}>
          Главная
        </Link>
        <span className="mx-1.5">→</span>
        <span>Идеи подарков</span>
      </nav>

      <span className="kdm-kicker mt-6">Все подборки</span>
      <h1
        className="mt-5 max-w-3xl text-[38px] leading-[1.04] font-extrabold sm:text-[54px]"
        style={{ color: 'rgb(var(--color-fg))' }}
      >
        Идеи подарков, которые остаются надолго
      </h1>
      <p
        className="mt-6 max-w-2xl text-lg leading-relaxed"
        style={{ color: 'rgb(var(--color-muted))' }}
      >
        Подборки для тех, кому хочется подарить не вещь, а рост. В каждой — идеи с ценами и
        ссылками, а на первом месте обучение, которое меняет профессию и доход.
      </p>

      <div className="mt-14 space-y-14">
        {guideGroups.map((group) => {
          const list = guides.filter((g) => g.group === group)
          if (list.length === 0) return null
          return (
            <div key={group}>
              <h2
                className="kdm-display text-[24px] font-extrabold sm:text-[30px]"
                style={{ color: 'rgb(var(--color-fg))' }}
              >
                {group}
              </h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((g) => (
                  <GuideCard key={g.slug} guide={g} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}
