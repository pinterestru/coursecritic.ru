import type { Metadata } from 'next'
import Link from 'next/link'

import AffiliateLink from '../../components/AffiliateLink'
import CourseCard from '../../components/CourseCard'
import Rating from '../../components/Rating'
import ReviewCard from '../../components/ReviewCard'
import { categoriesOrder, courses as allCourses } from '../../data/home'
import { practicum, reviews } from '../../data/brands/practicum'

const courses = allCourses.filter((c) => c.schoolId === 'practicum')
const categories = categoriesOrder.filter((cat) => courses.some((c) => c.category === cat))

export const metadata: Metadata = {
  title: 'Яндекс Практикум — обзор онлайн-школы и все курсы',
  description:
    'Полный обзор Яндекс Практикума: программы, цены, формат обучения, реальные отзывы студентов. Сравниваем курсы школы и собираем всё в одном месте.',
}

const average = reviews.reduce((s, r) => s + r.rating, 0) / reviews.length

export default function YandexPracticumPage() {
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

function Hero() {
  return (
    <section
      className="border-b"
      style={{
        borderColor: 'rgb(var(--color-rule))',
        background: 'rgb(var(--color-surface))',
      }}
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
          <span>{practicum.name}</span>
        </nav>

        <div className="mt-6 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            <span
              className="flex h-16 w-16 items-center justify-center rounded-2xl text-xl font-extrabold"
              style={{
                background: 'rgb(var(--color-fg))',
                color: 'rgb(var(--color-surface))',
              }}
            >
              {practicum.badge}
            </span>
            <div>
              <p
                className="text-xs font-semibold tracking-wider uppercase"
                style={{ color: 'rgb(var(--color-primary))' }}
              >
                Онлайн-школа · {practicum.region}
              </p>
              <h1
                className="mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl"
                style={{ color: 'rgb(var(--color-fg))' }}
              >
                {practicum.name}
              </h1>
              <div className="mt-3">
                <Rating value={average} count={reviews.length * 410} />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 sm:items-end">
            <AffiliateLink deepLink="/" variant="button">
              Перейти на сайт школы →
            </AffiliateLink>
            <span className="text-xs" style={{ color: 'rgb(var(--color-muted))' }}>
              {practicum.site}
            </span>
          </div>
        </div>

        <p
          className="mt-8 max-w-3xl text-lg leading-relaxed"
          style={{ color: 'rgb(var(--color-muted))' }}
        >
          {practicum.intro}
        </p>
      </div>
    </section>
  )
}

function KeyFacts() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {practicum.facts.map((f) => (
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
        {practicum.about.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
        <p>
          Практикум работает по оферте, предлагает рассрочку через банки-партнёры и возврат денег за
          неоконченное обучение. У школы собственный{' '}
          <AffiliateLink deepLink="/career-center/">центр карьеры</AffiliateLink> и{' '}
          <AffiliateLink deepLink="/community/">комьюнити</AffiliateLink> выпускников в Слаке.
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
            Программы Яндекс Практикума
          </h2>
          <p className="mt-2 max-w-2xl text-sm" style={{ color: 'rgb(var(--color-muted))' }}>
            Актуальные программы по всем направлениям школы. Нажмите на карточку, чтобы перейти на
            официальный сайт и изучить подробности.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          {categories.map((c) => (
            <span
              key={c}
              className="rounded-full border px-3 py-1"
              style={{
                borderColor: 'rgb(var(--color-rule))',
                color: 'rgb(var(--color-muted))',
              }}
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <CourseCard key={c.slug} course={c} mode="affiliate" />
        ))}
      </div>

      <div className="mt-10 text-center">
        <AffiliateLink deepLink="/catalog/programming/" variant="button">
          Смотреть все программы школы
        </AffiliateLink>
        <p className="mt-3 text-xs" style={{ color: 'rgb(var(--color-muted))' }}>
          Откроется официальный каталог на practicum.yandex.ru
        </p>
      </div>
    </section>
  )
}

function ProsCons() {
  const { pros, cons } = practicum
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
      style={{
        borderColor: 'rgb(var(--color-rule))',
        background: 'rgb(var(--color-surface))',
      }}
    >
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              Отзывы студентов
            </h2>
            <p className="mt-2 max-w-2xl text-sm" style={{ color: 'rgb(var(--color-muted))' }}>
              Подборка из {reviews.length} отзывов, собранных редакцией EDсайдер. Мы публикуем и
              положительные, и критичные, без редактуры смысла.
            </p>
          </div>
          <div className="flex flex-col items-end">
            <Rating value={average} count={reviews.length * 410} />
            <AffiliateLink deepLink="/reviews/">Смотреть все отзывы на сайте школы →</AffiliateLink>
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
        Большинство программ Яндекс Практикума начинается с{' '}
        <AffiliateLink deepLink="/python-free/">бесплатной части</AffiliateLink>: 10–20 часов,
        настоящая теория и практика. Это быстрый способ понять, ваше или нет, без рисков.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <AffiliateLink deepLink="/python-free/" variant="button">
          Начать бесплатно
        </AffiliateLink>
        <AffiliateLink deepLink="/catalog/programming/" variant="button">
          Каталог программ
        </AffiliateLink>
      </div>
      <p className="mt-6 text-xs" style={{ color: 'rgb(var(--color-muted))' }}>
        Все ссылки в этом разделе ведут на официальный сайт Яндекс Практикума.
      </p>
    </section>
  )
}
