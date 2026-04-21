import CourseCard from '../components/CourseCard'
import { categories, courses } from '../data/practicum-courses'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Categories />
      <Catalog />
      <WhyUs />
      <Faq />
    </main>
  )
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-12 sm:pt-24 sm:pb-20">
      <p
        className="text-sm font-semibold tracking-wider uppercase"
        style={{ color: 'rgb(var(--color-primary))' }}
      >
        Витрина онлайн-курсов
      </p>
      <h1
        className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl"
        style={{ color: 'rgb(var(--color-fg))' }}
      >
        Сравниваем онлайн-школы и программы — чтобы учиться было у кого.
      </h1>
      <p
        className="mt-5 max-w-2xl text-lg leading-relaxed"
        style={{ color: 'rgb(var(--color-muted))' }}
      >
        EDсайдер — независимый каталог российских IT-школ. Собираем программы, цены, отзывы и читаем
        мелкий шрифт, чтобы выбор был осознанным, а не по картинке в рекламе.
      </p>
      <dl
        className="mt-10 grid max-w-2xl grid-cols-3 gap-6 border-t pt-6 text-sm"
        style={{ borderColor: 'rgb(var(--color-rule))' }}
      >
        <Stat label="Школ в каталоге" value="24" />
        <Stat label="Программ" value="420+" />
        <Stat label="Отзывов" value="7.8 тыс." />
      </dl>
    </section>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs tracking-wider uppercase" style={{ color: 'rgb(var(--color-muted))' }}>
        {label}
      </dt>
      <dd className="mt-1 text-2xl font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
        {value}
      </dd>
    </div>
  )
}

function Categories() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <h2
        className="text-xs font-semibold tracking-wider uppercase"
        style={{ color: 'rgb(var(--color-muted))' }}
      >
        Категории
      </h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {categories.map((c) => (
          <span
            key={c}
            className="rounded-full border px-4 py-2 text-sm font-medium"
            style={{
              borderColor: 'rgb(var(--color-rule))',
              background: 'rgb(var(--color-surface))',
              color: 'rgb(var(--color-fg))',
            }}
          >
            {c}
          </span>
        ))}
      </div>
    </section>
  )
}

function Catalog() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2
            className="text-2xl font-bold tracking-tight"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            Популярные программы
          </h2>
          <p className="mt-2 text-sm" style={{ color: 'rgb(var(--color-muted))' }}>
            Подборка живых курсов Яндекс Практикума. Каждая карточка ведёт на официальную страницу
            школы.
          </p>
        </div>
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <CourseCard key={c.slug} course={c} mode="direct" />
        ))}
      </div>
    </section>
  )
}

function WhyUs() {
  const items = [
    {
      title: 'Проверяем программы, а не обложки',
      body: 'Читаем учебные планы, сверяем с вакансиями рынка, запрашиваем актуальные цены у школ.',
    },
    {
      title: 'Отзывы без фильтра',
      body: 'Собираем отзывы из открытых источников — и хвалебные, и негативные. Показываем целиком.',
    },
    {
      title: 'Без платных мест в подборках',
      body: 'Школы не покупают у нас рейтинг. Порядок — по структурированным критериям, а не по бюджету.',
    },
  ]
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-bold tracking-tight" style={{ color: 'rgb(var(--color-fg))' }}>
        Как мы отбираем школы
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border p-6"
            style={{
              borderColor: 'rgb(var(--color-rule))',
              background: 'rgb(var(--color-surface))',
            }}
          >
            <h3 className="text-base font-semibold" style={{ color: 'rgb(var(--color-fg))' }}>
              {item.title}
            </h3>
            <p
              className="mt-2 text-sm leading-relaxed"
              style={{ color: 'rgb(var(--color-muted))' }}
            >
              {item.body}
            </p>
          </div>
        ))}
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
      q: 'Почему в подборках почти только Яндекс Практикум?',
      a: 'Мы постепенно открываем витрину, школа за школой. Практикум запустили первым как самую крупную. Остальные добавляем по мере редакционного обзора.',
    },
    {
      q: 'Как предложить свою школу для обзора?',
      a: 'Напишите на почту из раздела «Контакты». Рассмотрим и ответим, даже если решим не публиковать.',
    },
  ]
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="text-2xl font-bold tracking-tight" style={{ color: 'rgb(var(--color-fg))' }}>
        Частые вопросы
      </h2>
      <div className="mt-6 divide-y" style={{ borderColor: 'rgb(var(--color-rule))' }}>
        {items.map((item) => (
          <details
            key={item.q}
            className="group py-5"
            style={{ borderColor: 'rgb(var(--color-rule))' }}
          >
            <summary
              className="flex cursor-pointer list-none items-center justify-between text-base font-semibold"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              {item.q}
              <span
                className="ml-4 inline-block h-5 w-5 flex-shrink-0 transition-transform group-open:rotate-45"
                style={{ color: 'rgb(var(--color-muted))' }}
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
