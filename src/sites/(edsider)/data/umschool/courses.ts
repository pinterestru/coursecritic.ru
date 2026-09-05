/**
 * The nine year-long ЕГЭ courses Умскул leads with, captured from umschool.net
 * in August 2026.
 *
 * Every one of them is priced identically — 45 315 ₽, struck through from
 * 53 300 ₽, 5 290 ₽ a month — which is itself the most useful fact in the file.
 * A school that charges the same for physics as for English is not pricing by
 * subject at all; it is pricing by seat. That is what makes the kit arithmetic
 * work so cleanly and what lets every article reuse the same ladder.
 *
 * The teacher is the exception: it is the one thing that genuinely differs
 * between these courses, and it is what reviews are actually about.
 */
import type { YearCourse } from './types'

/** Every year course carries the same price, so the numbers live in one place. */
const PRICE = 45_315
const PRICE_OLD = 53_300
const PER_MONTH = 5_290
const PER_MONTH_OLD = 6_230
const RATING = 4.9
const REVIEWS = 1_005

function course(
  path: string,
  shortName: string,
  subjectSlug: string,
  teacher: string,
  teacherNote: string,
  name: string
): YearCourse {
  return {
    path: `umschool.net/${path}`,
    name,
    shortName,
    teacher,
    teacherNote,
    subjectSlug,
    price: PRICE,
    priceOld: PRICE_OLD,
    perMonth: PER_MONTH,
    perMonthOld: PER_MONTH_OLD,
    rating: RATING,
    reviews: REVIEWS,
  }
}

export const mathCourse = course(
  'ege/math-11-class-artur-sharafiev-10973/',
  'Профильная математика, 11 класс',
  'matematika',
  'Артур Шарафиев',
  'Самый узнаваемый преподаватель школы; в отзывах его разборы второй части хвалят чаще всего',
  'Годовой курс ЕГЭ по профильной математике с Артуром Шарафиевым, 11 класс'
)

export const russianCourse = course(
  'ege/russian-11-class-aleksandr-dolgih-10980/',
  'Русский язык, 11 класс',
  'russkiy',
  'Александр Долгих',
  'Ведёт русский с упором на сочинение и разбор критериев ФИПИ',
  'Годовой курс ЕГЭ по русскому языку с Александром Долгих, 11 класс'
)

export const socialCourse = course(
  'ege/social-science-11-class-nastya-malova-10983/',
  'Обществознание, 11 класс',
  'obshchestvoznanie',
  'Анастасия Малова',
  'Объясняет через примеры из жизни и актуальные новости — в отзывах это главный плюс курса',
  'Годовой курс ЕГЭ по обществознанию с Анастасией Маловой, 11 класс'
)

export const informaticsCourse = course(
  'ege/computer-science-11-class-viktoriya-lanskaya-10975/',
  'Информатика, 11 класс',
  'informatika',
  'Виктория Ланская',
  'Информатика — самый быстрорастущий предмет ЕГЭ, и курс построен вокруг задач на программирование',
  'Годовой курс ЕГЭ по информатике с Викторией Ланской, 11 класс'
)

export const englishCourse = course(
  'ege/english-11-class-sherin-kelli-10984/',
  'Английский язык, 11 класс',
  'angliyskiy',
  'Шерин Келли',
  'Ведёт все пять разделов экзамена, включая устную часть — её на курсах обычно недодают',
  'Годовой курс ЕГЭ по английскому языку с Шерин Келли, 11 класс'
)

export const biologyCourse = course(
  'ege/biology-11-class-zhanna-kazanskaya-10981/',
  'Биология, 11 класс',
  'biologiya',
  'Жанна Казанская',
  'Отдельно разбирает генетику и оформление задания №28 — то, на чём теряют баллы чаще всего',
  'Годовой курс ЕГЭ по биологии с Жанной Казанской, 11 класс'
)

export const chemistryCourse = course(
  'ege/chemistry-11-class-bogdan-chagin-10985/',
  'Химия, 11 класс',
  'himiya',
  'Богдан Чагин',
  'В отзывах его мастер-группу называют главной причиной результатов за 90',
  'Годовой курс ЕГЭ по химии с Богданом Чагиным, 11 класс'
)

export const physicsCourse = course(
  'ege/physics-11-class-maks-tesla-10982/',
  'Физика, 11 класс',
  'fizika',
  'Макс Тесла',
  'Строит курс вокруг задач второй части, а не вокруг заучивания формул',
  'Годовой курс ЕГЭ по физике с Максом Теслой, 11 класс'
)

export const historyCourse = course(
  'ege/history-11-class-alya-vinogradova-10979/',
  'История, 11 класс',
  'istoriya',
  'Аля Виноградова',
  'Даты и карты через опорные схемы; раздатки к занятиям в отзывах хвалят даже те, кто ругает школу',
  'Годовой курс ЕГЭ по истории с Алей Виноградовой, 11 класс'
)

export const yearCourses: YearCourse[] = [
  mathCourse,
  russianCourse,
  socialCourse,
  informaticsCourse,
  englishCourse,
  biologyCourse,
  chemistryCourse,
  physicsCourse,
  historyCourse,
]

/** The year course for a subject, when the school lists one in our data. */
export function courseForSubject(subjectSlug: string): YearCourse | undefined {
  return yearCourses.find((c) => c.subjectSlug === subjectSlug)
}
