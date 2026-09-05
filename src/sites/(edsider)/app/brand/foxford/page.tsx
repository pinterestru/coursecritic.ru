import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'

import AffiliateButton from '../../../components/articles/AffiliateButton'
import CourseCard from '../../../components/CourseCard'
import Rating from '../../../components/Rating'
import ReviewCard from '../../../components/ReviewCard'
import { affiliateHref } from '../../../data/ege/schools'
import { foxford, programs, reviews } from '../../../data/brands/foxford'

const categories = [...new Set(programs.map((p) => p.category))]

export const metadata: Metadata = {
  title: 'Фоксфорд — обзор онлайн-школы, программы и цены',
  description:
    'Полный обзор онлайн-школы Фоксфорд: подготовка к ЕГЭ и ОГЭ, домашняя школа, олимпиады и репетиторы. Программы, цены, формат обучения и реальные отзывы учеников.',
}

const average = reviews.reduce((s, r) => s + r.rating, 0) / reviews.length

export default function FoxfordPage() {
  return (
    <main>
      <Hero />
      <KeyFacts />
      <AboutSchool />
      <Programs />
      <ProsCons />
      <Reviews />
      <Bottom />
    </main>
  )
}

/** Inline tracked affiliate link for body copy. */
function Aff({ to, children }: { to: string; children: ReactNode }) {
  return (
    <a
      href={affiliateHref(to)}
      target="_blank"
      rel="noopener sponsored"
      className="underline underline-offset-2 hover:opacity-80"
      style={{ color: 'rgb(var(--color-primary))' }}
    >
      {children}
    </a>
  )
}

function Hero() {
  return (
    <section
      className="border-b"
      style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-surface))' }}
    >
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <nav
          className="text-xs"
          style={{ color: 'rgb(var(--color-muted))' }}
          aria-label="breadcrumbs"
        >
          <Link href="/" className="hover:underline" style={{ color: 'rgb(var(--color-muted))' }}>
            Главная
          </Link>
          <span className="mx-2">/</span>
          <span>{foxford.name}</span>
        </nav>

        <div className="mt-6 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            <span
              className="flex h-16 w-16 items-center justify-center rounded-2xl text-xl font-extrabold"
              style={{ background: 'rgb(var(--color-fg))', color: 'rgb(var(--color-surface))' }}
            >
              {foxford.badge}
            </span>
            <div>
              <p
                className="text-xs font-semibold tracking-wider uppercase"
                style={{ color: 'rgb(var(--color-primary))' }}
              >
                Онлайн-школа · {foxford.region}
              </p>
              <h1
                className="mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl"
                style={{ color: 'rgb(var(--color-fg))' }}
              >
                {foxford.name}
              </h1>
              <div className="mt-3">
                <Rating value={average} count={1680} />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 sm:items-end">
            <AffiliateButton to="foxford.ru/ege">Перейти на сайт школы →</AffiliateButton>
            <span className="text-xs" style={{ color: 'rgb(var(--color-muted))' }}>
              {foxford.site}
            </span>
          </div>
        </div>

        <p
          className="mt-8 max-w-3xl text-lg leading-relaxed"
          style={{ color: 'rgb(var(--color-muted))' }}
        >
          {foxford.intro}
        </p>
      </div>
    </section>
  )
}

function KeyFacts() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {foxford.facts.map((f) => (
          <div
            key={f.label}
            className="rounded-2xl border p-5"
            style={{
              borderColor: 'rgb(var(--color-rule))',
              background: 'rgb(var(--color-surface))',
            }}
          >
            <dt
              className="text-xs tracking-wider uppercase"
              style={{ color: 'rgb(var(--color-muted))' }}
            >
              {f.label}
            </dt>
            <dd className="mt-1 text-xl font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
              {f.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

function AboutSchool() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <h2 className="text-2xl font-bold tracking-tight" style={{ color: 'rgb(var(--color-fg))' }}>
        О школе
      </h2>
      <div
        className="mt-6 space-y-4 text-base leading-relaxed"
        style={{ color: 'rgb(var(--color-fg))' }}
      >
        {foxford.about.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
        <p>
          Главные направления школы — <Aff to="foxford.ru/ege">подготовка к ЕГЭ</Aff> и{' '}
          <Aff to="foxford.ru/oge">ОГЭ</Aff>, а также{' '}
          <Aff to="foxford.ru/home-school">домашняя школа</Aff> для 1–11 классов. Обучение можно
          оплатить материнским капиталом и оформить налоговый вычет 13%.
        </p>
      </div>
    </section>
  )
}

function Programs() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2
            className="text-2xl font-bold tracking-tight"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            Программы Фоксфорда
          </h2>
          <p className="mt-2 max-w-2xl text-sm" style={{ color: 'rgb(var(--color-muted))' }}>
            Все направления школы — от подготовки к экзаменам до домашней школы и олимпиад. Нажмите
            на карточку, чтобы перейти на официальный сайт и изучить подробности.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          {categories.map((c) => (
            <span
              key={c}
              className="rounded-full border px-3 py-1"
              style={{ borderColor: 'rgb(var(--color-rule))', color: 'rgb(var(--color-muted))' }}
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {programs.map((c) => (
          <CourseCard key={c.slug} course={c} mode="affiliate" />
        ))}
      </div>

      <div className="mt-10 text-center">
        <AffiliateButton to="foxford.ru/catalog/courses">Смотреть все курсы школы</AffiliateButton>
        <p className="mt-3 text-xs" style={{ color: 'rgb(var(--color-muted))' }}>
          Откроется официальный каталог на foxford.ru
        </p>
      </div>
    </section>
  )
}

function ProsCons() {
  const { pros, cons } = foxford
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="text-2xl font-bold tracking-tight" style={{ color: 'rgb(var(--color-fg))' }}>
        Плюсы и минусы
      </h2>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <h3
            className="text-sm font-bold tracking-wider uppercase"
            style={{ color: 'rgb(var(--color-success))' }}
          >
            Плюсы
          </h3>
          <ul className="mt-4 space-y-4">
            {pros.map((p) => (
              <li
                key={p.title}
                className="rounded-xl border p-4"
                style={{
                  borderColor: 'rgb(var(--color-rule))',
                  background: 'rgb(var(--color-surface))',
                }}
              >
                <p className="text-sm font-semibold" style={{ color: 'rgb(var(--color-fg))' }}>
                  {p.title}
                </p>
                <p
                  className="mt-1 text-sm leading-relaxed"
                  style={{ color: 'rgb(var(--color-muted))' }}
                >
                  {p.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3
            className="text-sm font-bold tracking-wider uppercase"
            style={{ color: 'rgb(var(--color-danger))' }}
          >
            Минусы
          </h3>
          <ul className="mt-4 space-y-4">
            {cons.map((c) => (
              <li
                key={c.title}
                className="rounded-xl border p-4"
                style={{
                  borderColor: 'rgb(var(--color-rule))',
                  background: 'rgb(var(--color-surface))',
                }}
              >
                <p className="text-sm font-semibold" style={{ color: 'rgb(var(--color-fg))' }}>
                  {c.title}
                </p>
                <p
                  className="mt-1 text-sm leading-relaxed"
                  style={{ color: 'rgb(var(--color-muted))' }}
                >
                  {c.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  return (
    <section
      className="border-t"
      style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-surface))' }}
    >
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              Отзывы учеников
            </h2>
            <p className="mt-2 max-w-2xl text-sm" style={{ color: 'rgb(var(--color-muted))' }}>
              Подборка из {reviews.length} отзывов, собранных редакцией EDсайдер. Мы публикуем и
              положительные, и критичные — без редактуры смысла.
            </p>
          </div>
          <div className="flex flex-col items-end">
            <Rating value={average} count={1680} />
            <Aff to="foxford.ru/about">Смотреть отзывы на сайте школы →</Aff>
          </div>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {reviews.map((r) => (
            <ReviewCard key={r.id} review={r} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Bottom() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 text-center">
      <h2
        className="text-3xl font-extrabold tracking-tight sm:text-4xl"
        style={{ color: 'rgb(var(--color-fg))' }}
      >
        Попробуйте школу бесплатно
      </h2>
      <p
        className="mx-auto mt-4 max-w-2xl text-base leading-relaxed"
        style={{ color: 'rgb(var(--color-muted))' }}
      >
        У Фоксфорда есть бесплатные вводные занятия и открытые курсы по большинству предметов. Это
        быстрый способ оценить преподавателей и платформу до оплаты — и понять, ваш это формат или
        нет.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <AffiliateButton to="foxford.ru/ege">Записаться на бесплатное занятие</AffiliateButton>
        <AffiliateButton to="foxford.ru/catalog/courses">Каталог программ</AffiliateButton>
      </div>
      <p className="mt-6 text-xs" style={{ color: 'rgb(var(--color-muted))' }}>
        Все ссылки в этом разделе ведут на официальный сайт Фоксфорда.
      </p>
    </section>
  )
}
