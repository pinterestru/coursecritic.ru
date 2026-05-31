import CourseCard from '../components/CourseCard'
import { categoriesOrder, courses } from '../data/practicum-courses'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CategorySections />
      <WhyUs />
      <Faq />
    </main>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 sm:pt-24">
        <div className="flex items-center gap-3">
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ background: 'rgb(var(--color-primary))' }}
            aria-hidden
          />
          <span
            className="text-[11px] font-bold tracking-[0.22em] uppercase"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            Главная · витрина онлайн-курсов
          </span>
        </div>

        <h1
          className="font-editorial mt-8 max-w-4xl text-[42px] leading-[1.05] font-bold tracking-tight sm:text-[64px]"
          style={{ color: 'rgb(var(--color-fg))' }}
        >
          Выбор школы — как выбор
          <br />
          <span style={{ color: 'rgb(var(--color-primary))' }}>нового направления</span> жизни.
        </h1>

        <p
          className="mt-8 max-w-2xl text-lg leading-[1.65]"
          style={{ color: 'rgb(var(--color-fg))' }}
        >
          Независимый каталог российских онлайн-школ. Собираем цены, программы и отзывы в одном
          месте — без редакционных мест за деньги. Читаем учебные планы целиком, сверяем с рынком,
          публикуем и плюсы, и минусы.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs">
          <Pill label="Обновляется еженедельно" />
          <Pill label="Без платных подборок" />
          <Pill label="Отзывы без редактуры" />
        </div>
      </div>
    </section>
  )
}

function Pill({ label }: { label: string }) {
  return (
    <span className="flex items-center gap-2" style={{ color: 'rgb(var(--color-muted))' }}>
      <span
        className="inline-block h-[1px] w-6"
        style={{ background: 'rgb(var(--color-fg))' }}
        aria-hidden
      />
      <span className="font-medium tracking-wide uppercase">{label}</span>
    </span>
  )
}

function CategorySections() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="space-y-24">
        {categoriesOrder.map((category, idx) => {
          const list = courses.filter((c) => c.category === category)
          if (list.length === 0) return null
          return (
            <div key={category} className="relative">
              <CategoryHeader index={idx + 1} title={category} list={list} />
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((c) => (
                  <CourseCard key={c.slug} course={c} mode="home" />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function CategoryHeader({
  index,
  title,
  list,
}: {
  index: number
  title: string
  list: typeof courses
}) {
  const avg = (list.reduce((s, c) => s + c.rating, 0) / list.length).toFixed(1)
  return (
    <header className="rule-dot pt-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex items-baseline gap-4">
          <span
            className="font-editorial text-[13px] font-bold tabular-nums"
            style={{ color: 'rgb(var(--color-primary))' }}
          >
            {String(index).padStart(2, '0')}
          </span>
          <h2
            className="font-editorial text-[34px] leading-none font-bold tracking-tight sm:text-[42px]"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            {title}
          </h2>
        </div>
        <div className="flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase">
          <span style={{ color: 'rgb(var(--color-muted))' }}>средняя оценка</span>
          <span
            className="rounded-sm px-2 py-0.5 font-bold tabular-nums"
            style={{
              background: 'rgb(var(--color-fg))',
              color: 'rgb(var(--color-bg))',
            }}
          >
            ★ {avg}
          </span>
        </div>
      </div>
    </header>
  )
}

function WhyUs() {
  const items = [
    {
      num: '01',
      title: 'Проверяем программы, а не обложки',
      body: 'Читаем учебные планы, сверяем с вакансиями рынка, запрашиваем актуальные цены у школ.',
    },
    {
      num: '02',
      title: 'Отзывы без фильтра',
      body: 'Собираем отзывы из открытых источников — и хвалебные, и негативные. Показываем целиком.',
    },
    {
      num: '03',
      title: 'Без платных мест в подборках',
      body: 'Школы не покупают у нас рейтинг. Порядок — по структурированным критериям, а не по бюджету.',
    },
  ]
  return (
    <section
      className="border-y"
      style={{
        borderColor: 'rgb(var(--color-rule))',
        background: 'rgb(var(--color-surface))',
      }}
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p
          className="text-[11px] font-bold tracking-[0.22em] uppercase"
          style={{ color: 'rgb(var(--color-primary))' }}
        >
          Редакционная политика
        </p>
        <h2
          className="font-editorial mt-4 max-w-2xl text-[40px] leading-[1.1] font-bold tracking-tight sm:text-[52px]"
          style={{ color: 'rgb(var(--color-fg))' }}
        >
          Как мы отбираем школы.
        </h2>
        <div className="mt-14 grid gap-12 sm:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="relative">
              <span
                className="font-editorial text-6xl leading-none font-bold tabular-nums"
                style={{ color: 'rgb(var(--color-primary))' }}
              >
                {item.num}
              </span>
              <h3
                className="font-editorial mt-6 text-2xl leading-[1.2] font-bold"
                style={{ color: 'rgb(var(--color-fg))' }}
              >
                {item.title}
              </h3>
              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ color: 'rgb(var(--color-muted))' }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Faq() {
  const items = [
    {
      q: 'Вы принадлежите какой-то школе?',
      a: 'Нет. EDсайдер — независимый информационный проект. Редакция не входит в состав ни одной из онлайн-школ и не получает платы за место в подборках.',
    },
    {
      q: 'Можно ли оплатить обучение через EDсайдер?',
      a: 'Нет. Мы не принимаем оплату и не заключаем договоры на образовательные услуги. Покупка курса возможна только на сайте самой школы.',
    },
    {
      q: 'Как часто обновляется каталог?',
      a: 'Цены и доступность программ мы проверяем каждую неделю. Отзывы собираем по мере их появления в публичных источниках. Дата последнего обновления указана в подвале сайта.',
    },
    {
      q: 'Как предложить свою школу для обзора?',
      a: 'Напишите на почту из раздела «Контакты». Рассмотрим и ответим, даже если решим не публиковать.',
    },
  ]
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <p
        className="text-[11px] font-bold tracking-[0.22em] uppercase"
        style={{ color: 'rgb(var(--color-primary))' }}
      >
        Частые вопросы
      </p>
      <h2
        className="font-editorial mt-4 text-[38px] leading-[1.1] font-bold tracking-tight"
        style={{ color: 'rgb(var(--color-fg))' }}
      >
        Что спрашивают чаще всего.
      </h2>
      <div className="mt-10 divide-y" style={{ borderColor: 'rgb(var(--color-rule))' }}>
        {items.map((item) => (
          <details
            key={item.q}
            className="group py-6"
            style={{ borderColor: 'rgb(var(--color-rule))' }}
          >
            <summary
              className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg font-semibold"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              <span className="font-editorial font-bold">{item.q}</span>
              <span
                className="mt-1 inline-block h-5 w-5 flex-shrink-0 text-center leading-5 transition-transform group-open:rotate-45"
                style={{ color: 'rgb(var(--color-primary))' }}
                aria-hidden
              >
                +
              </span>
            </summary>
            <p
              className="mt-4 text-[15px] leading-relaxed"
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
