import type { Metadata } from 'next'
import Link from 'next/link'

import Advisory from '../../components/Advisory'
import BrandRow from '../../components/BrandRow'
import { brandPages } from '../../data/brands'
import { providers } from '../../data/providers'
import { verticals } from '../../data/verticals'

export const metadata: Metadata = {
  title: 'Разборы брендов',
  description:
    'Независимые разборы сервисов и магазинов: что каждый делает хорошо, сколько стоит на самом деле и кому он не подойдёт.',
  alternates: { canonical: '/brands' },
}

export default function BrandsIndexPage() {
  const reviewed = brandPages
    .map((page) => providers[page.providerId])
    .filter((p): p is NonNullable<typeof p> => !!p)
    .sort((a, b) => b.score - a.score)

  // Оговорка категории (18+) — на этой странице бренды из разных вертикалей идут
  // вперемешку, поэтому она выводится один раз и покрывает всю страницу.
  const advisory = Object.values(providers).find((p) => p.advisory)?.advisory

  return (
    <main>
      <section
        className="border-b"
        style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-surface))' }}
      >
        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
          <nav
            className="bc-mono text-[11px]"
            style={{ color: 'rgb(var(--color-muted))' }}
            aria-label="Хлебные крошки"
          >
            <Link
              href="/"
              className="hover:text-[rgb(var(--color-primary))]"
              style={{ color: 'inherit' }}
            >
              Главная
            </Link>
            <span className="mx-2 opacity-50">/</span>
            <span style={{ color: 'rgb(var(--color-fg))' }}>Бренды</span>
          </nav>

          <div className="mt-7 max-w-3xl">
            <span className="bc-kicker">разборы · по одному бренду</span>
            <h1
              className="mt-5 text-[36px] leading-[1.06] font-bold sm:text-[52px]"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              Разборы брендов, вместе с минусами
            </h1>
            <p
              className="mt-6 text-lg leading-relaxed"
              style={{ color: 'rgb(var(--color-muted))' }}
            >
              Каждый разбор идёт по одному и тому же маршруту: что сервис действительно делает
              хорошо, из чего складывается итоговая цена, как он оценён на публичных площадках и
              кому стоит выбрать что-то другое.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        {advisory && (
          <div className="mb-10">
            <Advisory text={advisory} />
          </div>
        )}

        <h2 className="text-2xl font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
          Разобраны подробно
        </h2>
        <div className="mt-6 space-y-3">
          {reviewed.map((provider, i) => (
            <BrandRow key={provider.id} provider={provider} rank={i + 1} />
          ))}
        </div>

        {verticals.map((vertical) => {
          const rest = Object.values(providers)
            .filter((p) => p.vertical === vertical.id && !p.brandSlug)
            .sort((a, b) => b.score - a.score)
          if (rest.length === 0) return null
          return (
            <div key={vertical.id} className="mt-16">
              <h2 className="text-2xl font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
                Также сравнивали: {vertical.name.toLowerCase()}
              </h2>
              <p className="mt-2 max-w-2xl text-sm" style={{ color: 'rgb(var(--color-muted))' }}>
                Эти бренды участвуют в наших рейтингах, отдельный разбор в работе.
              </p>
              <div className="mt-6 space-y-3">
                {rest.map((provider, i) => (
                  <BrandRow key={provider.id} provider={provider} rank={i + 1} />
                ))}
              </div>
            </div>
          )
        })}
      </section>
    </main>
  )
}
