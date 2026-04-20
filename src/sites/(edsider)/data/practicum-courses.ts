/**
 * Catalog of Yandex Practicum courses used across the site.
 * - `practicumPath` is the canonical path on practicum.yandex.ru.
 * - Courses listed on the home page use the DIRECT URL (no affiliate).
 * - Courses listed on /yandex-practicum use the AFFILIATE URL via <AffiliateLink deepLink={practicumPath}>.
 */
export interface PracticumCourse {
  slug: string
  title: string
  practicumPath: string
  category: 'Программирование' | 'Аналитика' | 'Дизайн' | 'Менеджмент' | 'Маркетинг' | 'Английский'
  level: 'С нуля' | 'Middle' | 'Mixed'
  duration: string
  price: number // total monthly-equivalent starting price, RUB
  priceNote?: string
  summary: string
  tags: string[]
}

export const courses: PracticumCourse[] = [
  {
    slug: 'backend-developer',
    title: 'Бэкенд-разработчик',
    practicumPath: '/backend-developer/',
    category: 'Программирование',
    level: 'С нуля',
    duration: '10 месяцев',
    price: 6990,
    priceNote: 'от ₽ в месяц при рассрочке',
    summary: 'Python, Django, REST API, PostgreSQL, Celery, Docker. Большой дипломный проект.',
    tags: ['Python', 'Django', 'SQL', 'Docker'],
  },
  {
    slug: 'frontend-developer',
    title: 'Фронтенд-разработчик',
    practicumPath: '/frontend-developer/',
    category: 'Программирование',
    level: 'С нуля',
    duration: '10 месяцев',
    price: 6990,
    priceNote: 'от ₽ в месяц при рассрочке',
    summary: 'HTML, CSS, JavaScript, TypeScript, React. Практика на реальных макетах.',
    tags: ['JavaScript', 'TypeScript', 'React'],
  },
  {
    slug: 'fullstack-developer',
    title: 'Фулстек-разработчик',
    practicumPath: '/fullstack-developer/',
    category: 'Программирование',
    level: 'С нуля',
    duration: '14 месяцев',
    price: 7490,
    priceNote: 'от ₽ в месяц при рассрочке',
    summary: 'Node.js, Express, React. Бэк и фронт в одной программе, общий дипломный проект.',
    tags: ['Node.js', 'React', 'MongoDB'],
  },
  {
    slug: 'android-developer',
    title: 'Android-разработчик',
    practicumPath: '/android-developer/',
    category: 'Программирование',
    level: 'С нуля',
    duration: '12 месяцев',
    price: 6790,
    priceNote: 'от ₽ в месяц при рассрочке',
    summary: 'Kotlin, Android SDK, архитектура мобильных приложений, публикация в RuStore.',
    tags: ['Kotlin', 'Android'],
  },
  {
    slug: 'java-developer',
    title: 'Java-разработчик',
    practicumPath: '/java-developer/',
    category: 'Программирование',
    level: 'С нуля',
    duration: '11 месяцев',
    price: 6990,
    priceNote: 'от ₽ в месяц при рассрочке',
    summary: 'Java, Spring, Hibernate, микросервисы. Готовит к бэкенду в продуктовых командах.',
    tags: ['Java', 'Spring'],
  },
  {
    slug: 'qa-automation',
    title: 'Инженер по тестированию плюс',
    practicumPath: '/qa-automation-engineer-python/',
    category: 'Программирование',
    level: 'С нуля',
    duration: '9 месяцев',
    price: 5990,
    priceNote: 'от ₽ в месяц при рассрочке',
    summary:
      'Ручное и автоматизированное тестирование на Python. Выпускной проект — настоящий QA-репо.',
    tags: ['Python', 'Selenium', 'QA'],
  },
  {
    slug: 'middle-python',
    title: 'Middle Python-разработчик',
    practicumPath: '/middle-python/',
    category: 'Программирование',
    level: 'Middle',
    duration: '7 месяцев',
    price: 8990,
    priceNote: 'от ₽ в месяц при рассрочке',
    summary: 'Архитектура, highload, тестирование. Для практикующих джунов с 1+ годом опыта.',
    tags: ['Python', 'Архитектура'],
  },
  {
    slug: 'data-analyst',
    title: 'Аналитик данных',
    practicumPath: '/catalog/data-analysis/',
    category: 'Аналитика',
    level: 'С нуля',
    duration: '8 месяцев',
    price: 5990,
    priceNote: 'от ₽ в месяц при рассрочке',
    summary: 'SQL, Python, визуализация, продуктовая аналитика. Разборы реальных A/B-тестов.',
    tags: ['SQL', 'Python', 'A/B'],
  },
  {
    slug: 'designer',
    title: 'Дизайнер интерфейсов',
    practicumPath: '/catalog/design/',
    category: 'Дизайн',
    level: 'С нуля',
    duration: '9 месяцев',
    price: 5490,
    priceNote: 'от ₽ в месяц при рассрочке',
    summary: 'UX, UI, Figma. Портфолио из 5 реальных продуктов к выпуску.',
    tags: ['UX/UI', 'Figma'],
  },
  {
    slug: 'product-manager',
    title: 'Менеджер проектов',
    practicumPath: '/catalog/management/',
    category: 'Менеджмент',
    level: 'С нуля',
    duration: '6 месяцев',
    price: 5490,
    priceNote: 'от ₽ в месяц при рассрочке',
    summary: 'Agile, метрики, планирование, работа с командой. Стажировка в партнёрских компаниях.',
    tags: ['Agile', 'Scrum'],
  },
  {
    slug: 'internet-marketer',
    title: 'Интернет-маркетолог',
    practicumPath: '/catalog/marketing/',
    category: 'Маркетинг',
    level: 'С нуля',
    duration: '6 месяцев',
    price: 4990,
    priceNote: 'от ₽ в месяц при рассрочке',
    summary: 'Performance, SEO, контент, SMM. Живые брифы от продуктовых команд.',
    tags: ['Performance', 'SEO'],
  },
  {
    slug: 'english-for-it',
    title: 'Английский для IT',
    practicumPath: '/english/',
    category: 'Английский',
    level: 'Mixed',
    duration: '4 месяца',
    price: 3290,
    priceNote: 'от ₽ в месяц при рассрочке',
    summary: 'Технический английский: код-ревью, митинги, переписка. Уровни от A2 до B2+.',
    tags: ['English', 'IT'],
  },
]

export const categories = [
  'Программирование',
  'Аналитика',
  'Дизайн',
  'Менеджмент',
  'Маркетинг',
  'Английский',
] as const
