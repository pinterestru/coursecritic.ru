import Link from 'next/link'

import GuideCard from '../components/GuideCard'
import { guides, guideGroups } from '../data/guides'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Guides />
      <EducationPillar />
      <Faq />
    </main>
  )
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-14 pb-6 sm:pt-20">
      <span className="kdm-kicker">🎁 гид по подаркам</span>
      <h1
        className="mt-6 max-w-3xl text-[38px] leading-[1.03] font-extrabold sm:text-[60px]"
        style={{ color: 'rgb(var(--color-fg))' }}
      >
        Идеи подарков, которые{' '}
        <span
          className="rounded-2xl px-3 py-0.5"
          style={{ background: 'rgb(var(--color-primary))', color: 'rgb(var(--color-primary-fg))' }}
        >
          действительно радуют
        </span>
      </h1>
      <p
        className="mt-6 max-w-xl text-lg leading-relaxed"
        style={{ color: 'rgb(var(--color-muted))' }}
      >
        Подборки подарков на любой повод и для любого человека. Без банальных советов — только идеи,
        которыми реально пользуются, с ценами и ссылками, где посмотреть.
      </p>
      <div className="mt-8 flex flex-wrap gap-2">
        {guides.slice(0, 6).map((g) => (
          <Link
            key={g.slug}
            href={`/idei/${g.slug}`}
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold no-underline transition-colors hover:bg-black/5"
            style={{ borderColor: 'rgb(var(--color-rule))', color: 'rgb(var(--color-fg))' }}
          >
            <span aria-hidden>{g.emoji}</span>
            {g.tag}
          </Link>
        ))}
      </div>
    </section>
  )
}

const groupHeading: Record<string, string> = {
  'Обучение в подарок': 'Обучение в подарок',
  'Впечатления в подарок': 'Впечатления в подарок',
  'Вкусные подарки': 'Подарки к столу',
  'По профессии': 'Подарки по профессии',
  'По ситуации': 'Подарки по ситуации',
  'Кому подарить': 'Подарки по получателю',
}

function Guides() {
  return (
    <section id="idei" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-12">
      {guideGroups.map((group) => {
        const list = guides.filter((g) => g.group === group)
        if (list.length === 0) return null
        return (
          <div key={group} className="mb-14">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <h2
                className="text-[26px] leading-tight font-extrabold sm:text-[34px]"
                style={{ color: 'rgb(var(--color-fg))' }}
              >
                {groupHeading[group] ?? group}
              </h2>
              <Link
                href="/idei"
                className="text-sm font-bold no-underline hover:underline"
                style={{ color: 'rgb(var(--color-primary))' }}
              >
                Все подборки →
              </Link>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((g) => (
                <GuideCard key={g.slug} guide={g} />
              ))}
            </div>
          </div>
        )
      })}
    </section>
  )
}

function EducationPillar() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div
        className="rounded-[32px] px-6 py-12 sm:px-12"
        style={{ background: 'rgb(var(--color-fg))' }}
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <span
              className="inline-flex rounded-full px-3 py-1 text-[11px] font-bold tracking-wide uppercase"
              style={{
                background: 'rgb(var(--color-accent) / 0.2)',
                color: 'rgb(var(--color-accent))',
              }}
            >
              Подарок №1
            </span>
            <h2
              className="mt-4 text-[28px] leading-tight font-extrabold sm:text-[38px]"
              style={{ color: 'rgb(var(--color-bg))' }}
            >
              Обучение в подарок
            </h2>
            <p
              className="mt-3 text-base leading-relaxed"
              style={{ color: 'rgb(var(--color-bg) / 0.7)' }}
            >
              Курс — редкий подарок, который остаётся с человеком надолго и может изменить
              профессию. Разобрали, как подарить обучение без риска: бесплатное начало, рассрочка и
              возврат.
            </p>
          </div>
          <Link
            href="/idei/obuchenie-v-podarok"
            className="inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3 text-sm font-bold no-underline transition-transform hover:scale-[1.03]"
            style={{
              background: 'rgb(var(--color-primary))',
              color: 'rgb(var(--color-primary-fg))',
            }}
          >
            🎓 Как подарить курс →
          </Link>
        </div>
      </div>
    </section>
  )
}

function Faq() {
  const items = [
    {
      q: 'Как выбрать подарок, если не знаешь, что подарить?',
      a: 'Определитесь с получателем — и загляните в соответствующую подборку. Мы собираем идеи по получателю (программисту, студенту, выпускнику, аналитику, дизайнеру) и отдельно — обучение и курс в подарок, чтобы быстро найти вариант под ситуацию.',
    },
    {
      q: 'Вы продаёте подарки?',
      a: 'Нет. Kodomania — информационный проект: мы собираем идеи и ведём на сайты магазинов и школ.',
    },
    {
      q: 'Насколько актуальны цены?',
      a: 'Цены указаны ориентировочно, как отправная точка. Точную стоимость смотрите на сайте магазина по ссылке — она может отличаться в зависимости от продавца и акций.',
    },
    {
      q: 'Почему обучение стоит первым во многих подборках?',
      a: 'Курс — подарок, который остаётся надолго и способен изменить доход. У ряда школ есть бесплатное начало и рассрочка, так что подарить обучение проще, чем кажется.',
    },
  ]
  return (
    <section className="mx-auto max-w-3xl px-6 py-14">
      <span className="kdm-kicker">Вопросы</span>
      <h2
        className="mt-4 text-[30px] leading-tight font-extrabold"
        style={{ color: 'rgb(var(--color-fg))' }}
      >
        Коротко о главном
      </h2>
      <div className="mt-8 space-y-3">
        {items.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border px-5 py-4"
            style={{
              borderColor: 'rgb(var(--color-rule))',
              background: 'rgb(var(--color-surface))',
            }}
          >
            <summary
              className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-bold"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              {item.q}
              <span
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm transition-transform group-open:rotate-45"
                style={{
                  background: 'rgb(var(--color-primary) / 0.12)',
                  color: 'rgb(var(--color-primary))',
                }}
                aria-hidden
              >
                +
              </span>
            </summary>
            <p
              className="mt-3 text-sm leading-relaxed"
              style={{ color: 'rgb(var(--color-muted))' }}
            >
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  )
}
