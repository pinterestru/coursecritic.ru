/**
 * Shared course catalog for edsider — the schools registry and the full list of
 * courses across every brand. Consumed by the home page (grouped by category)
 * and by brand pages (filtered to one school). Brand-specific page content
 * (reviews, facts, pros/cons) lives under ./brands/<school>.ts.
 *
 * - Practicum courses carry a `practicumPath` and get the affiliate tracker
 *   on /yandex-practicum and a direct practicum.yandex.ru link on /.
 * - Other courses carry an `externalUrl` (school site or course page); schools
 *   flagged `affiliate` route through /click for tracking, others link direct.
 */
export type CourseCategory =
  | 'Подготовка к ЕГЭ'
  | 'Программирование'
  | 'Аналитика данных'
  | 'Дизайн'
  | 'Менеджмент'
  | 'Маркетинг'
  | 'Английский'
  // School-brand product lines (used on brand pages like /brand/foxford,
  // not in the homepage `categoriesOrder`).
  | 'Школьная программа'
  | 'Репетиторы и группы'
  | 'Олимпиады'
  | 'Колледж'

export interface School {
  name: string
  short: string // 2–3 letter badge
  color: string // hex for school badge tint
  url: string
  /**
   * When true, every link to this school is monetised: instead of pointing at
   * the advertiser directly we route through the internal `/click/<domain>/<path>`
   * redirect, which records the click and forwards to the affiliate network.
   * When false/undefined the direct link is used as-is.
   */
  affiliate?: boolean
}

/**
 * Turn a direct advertiser URL into the internal affiliate-redirect path by
 * stripping the protocol and prefixing `/click/`:
 *   https://foxford.ru/ege → /click/foxford.ru/ege
 * The `/click` route (src/sites/_shared/app/click) tracks the click and
 * redirects on to the CPA network.
 */
export function toAffiliateHref(directUrl: string): string {
  return `/click/${directUrl.replace(/^https?:\/\//, '')}`
}

/** Resolve the href for a course's direct destination, applying `/click`
 *  tracking when the school is monetised through an affiliate network. */
export function resolveHref(directUrl: string, schoolId: keyof typeof schools): string {
  return schools[schoolId].affiliate ? toAffiliateHref(directUrl) : directUrl
}

export const schools: Record<string, School> = {
  practicum: {
    name: 'Яндекс Практикум',
    short: 'ЯП',
    color: '#F8D34F',
    url: 'https://practicum.yandex.ru/',
  },
  skillbox: { name: 'Skillbox', short: 'SB', color: '#7F9BFF', url: 'https://skillbox.ru/' },
  netology: { name: 'Нетология', short: 'НЕ', color: '#00C7B1', url: 'https://netology.ru/' },
  geekbrains: { name: 'GeekBrains', short: 'GB', color: '#FF6A3D', url: 'https://gb.ru/' },
  hexlet: { name: 'Хекслет', short: 'ХЕ', color: '#0A2540', url: 'https://ru.hexlet.io/' },
  skypro: { name: 'Skypro', short: 'SP', color: '#A0F12A', url: 'https://sky.pro/' },
  skillfactory: {
    name: 'Skillfactory',
    short: 'SF',
    color: '#FF4B47',
    url: 'https://skillfactory.ru/',
  },
  productstar: {
    name: 'ProductStar',
    short: 'PS',
    color: '#6E5CFC',
    url: 'https://productstar.ru/',
  },
  eduson: {
    name: 'Eduson Academy',
    short: 'ED',
    color: '#1E1B4B',
    url: 'https://eduson.academy/',
    affiliate: true,
  },
  brunoyam: { name: 'Бруноям', short: 'БР', color: '#FCAD4A', url: 'https://brunoyam.com/' },
  // ЕГЭ-школы
  foxford: {
    name: 'Фоксфорд',
    short: 'ФО',
    color: '#FF6B2C',
    url: 'https://foxford.ru/',
    affiliate: true,
  },
  umschool: {
    name: 'Умскул',
    short: 'УМ',
    color: '#FF8A3D',
    url: 'https://umschool.net/',
    affiliate: true,
  },
  sotka: {
    name: 'Сотка',
    short: 'СО',
    color: '#2F6BFF',
    url: 'https://sotkaonline.ru/',
    affiliate: true,
  },
  webium: {
    name: 'Вебиум',
    short: 'ВБ',
    color: '#F5E04D',
    url: 'https://webium.ru/',
    affiliate: true,
  },
  maximum: {
    name: 'MAXIMUM Education',
    short: 'MX',
    color: '#7B61FF',
    url: 'https://maximumtest.ru/',
    affiliate: true,
  },
}

export interface Course {
  slug: string
  title: string
  schoolId: keyof typeof schools
  category: CourseCategory
  practicumPath?: string
  externalUrl?: string
  level: 'С нуля' | 'Middle' | 'Mixed'
  duration: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  summary: string
  tags: string[]
}

export const courses: Course[] = [
  // ── Подготовка к ЕГЭ ──────────────────────────────────────────────
  {
    slug: 'ege-math-foxford',
    title: 'ЕГЭ по математике',
    schoolId: 'foxford',
    category: 'Подготовка к ЕГЭ',
    externalUrl: 'https://foxford.ru/ege',
    level: 'С нуля',
    duration: 'Учебный год',
    price: 2990,
    rating: 4.6,
    reviews: 540,
    summary:
      'Годовой курс с разбором всех заданий профиля и базы, личным наставником и пробниками в формате ЕГЭ.',
    tags: ['Математика', 'Профиль', 'Пробники'],
  },
  {
    slug: 'ege-russian-umschool',
    title: 'ЕГЭ по русскому языку',
    schoolId: 'umschool',
    category: 'Подготовка к ЕГЭ',
    externalUrl: 'https://umschool.net/',
    level: 'С нуля',
    duration: 'Учебный год',
    price: 1990,
    rating: 4.7,
    reviews: 486,
    summary:
      'Подготовка на 90+ с куратором, домашками с проверкой и теорией по всем заданиям и сочинению.',
    tags: ['Русский', 'Сочинение', 'Куратор'],
  },
  {
    slug: 'ege-sotka',
    title: 'Годовой курс ЕГЭ',
    schoolId: 'sotka',
    category: 'Подготовка к ЕГЭ',
    externalUrl: 'https://sotkaonline.ru/',
    level: 'С нуля',
    duration: 'Учебный год',
    price: 3990,
    rating: 4.6,
    reviews: 372,
    summary:
      'До 4 предметов на одном тарифе без доплат за каждый, 2–3 преподавателя на предмете и доступ до 11 класса.',
    tags: ['4 предмета', 'Один тариф', 'Кураторы'],
  },
  {
    slug: 'ege-social-webium',
    title: 'ЕГЭ по обществознанию',
    schoolId: 'webium',
    category: 'Подготовка к ЕГЭ',
    externalUrl: 'https://webium.ru/',
    level: 'С нуля',
    duration: 'Учебный год',
    price: 2490,
    rating: 4.5,
    reviews: 298,
    summary:
      'Разбор всех блоков теории, тренировка второй части и практика на открытом банке заданий.',
    tags: ['Обществознание', 'Теория', 'Практика'],
  },
  {
    slug: 'ege-maximum',
    title: 'ЕГЭ с гарантией результата',
    schoolId: 'maximum',
    category: 'Подготовка к ЕГЭ',
    externalUrl: 'https://maximumtest.ru/ege',
    level: 'С нуля',
    duration: 'Учебный год',
    price: 4900,
    rating: 4.4,
    reviews: 415,
    summary:
      'Программа, одобренная ФИПИ, с гарантией результата, личным планом и регулярными пробными экзаменами.',
    tags: ['Гарантия', 'ФИПИ', 'Пробники'],
  },

  // ── Программирование ──────────────────────────────────────────────
  {
    slug: 'backend-developer',
    title: 'Бэкенд-разработчик',
    schoolId: 'practicum',
    category: 'Программирование',
    practicumPath: '/backend-developer/',
    level: 'С нуля',
    duration: '10 месяцев',
    price: 6990,
    originalPrice: 9990,
    rating: 4.6,
    reviews: 412,
    summary: 'Python, Django, REST API, PostgreSQL, Celery, Docker. Большой дипломный проект.',
    tags: ['Python', 'Django', 'SQL'],
  },
  {
    slug: 'frontend-developer',
    title: 'Фронтенд-разработчик',
    schoolId: 'practicum',
    category: 'Программирование',
    practicumPath: '/frontend-developer/',
    level: 'С нуля',
    duration: '10 месяцев',
    price: 6990,
    originalPrice: 9990,
    rating: 4.5,
    reviews: 368,
    summary: 'HTML, CSS, JavaScript, TypeScript, React. Практика на реальных макетах.',
    tags: ['JS', 'React', 'TypeScript'],
  },
  {
    slug: 'fullstack-developer',
    title: 'Фулстек-разработчик',
    schoolId: 'practicum',
    category: 'Программирование',
    practicumPath: '/fullstack-developer/',
    level: 'С нуля',
    duration: '14 месяцев',
    price: 7490,
    rating: 4.6,
    reviews: 221,
    summary: 'Node.js, Express, React. Бэк и фронт в одной программе.',
    tags: ['Node.js', 'React'],
  },
  {
    slug: 'android-developer',
    title: 'Android-разработчик',
    schoolId: 'practicum',
    category: 'Программирование',
    practicumPath: '/android-developer/',
    level: 'С нуля',
    duration: '12 месяцев',
    price: 6790,
    rating: 4.7,
    reviews: 156,
    summary: 'Kotlin, Android SDK, архитектура, публикация в RuStore.',
    tags: ['Kotlin'],
  },
  {
    slug: 'java-developer',
    title: 'Java-разработчик',
    schoolId: 'practicum',
    category: 'Программирование',
    practicumPath: '/java-developer/',
    level: 'С нуля',
    duration: '11 месяцев',
    price: 6990,
    rating: 4.5,
    reviews: 203,
    summary: 'Java, Spring, Hibernate, микросервисы. Бэкенд в продуктовых командах.',
    tags: ['Java', 'Spring'],
  },
  {
    slug: 'middle-python',
    title: 'Middle Python-разработчик',
    schoolId: 'practicum',
    category: 'Программирование',
    practicumPath: '/middle-python/',
    level: 'Middle',
    duration: '7 месяцев',
    price: 8990,
    rating: 4.7,
    reviews: 89,
    summary: 'Архитектура, highload, тестирование. Для джунов с 1+ годом опыта.',
    tags: ['Python', 'Архитектура'],
  },
  {
    slug: 'qa-automation',
    title: 'Инженер по тестированию плюс',
    schoolId: 'practicum',
    category: 'Программирование',
    practicumPath: '/qa-automation-engineer-python/',
    level: 'С нуля',
    duration: '9 месяцев',
    price: 5990,
    rating: 4.6,
    reviews: 178,
    summary: 'Ручное и автоматизированное тестирование на Python.',
    tags: ['Python', 'QA'],
  },
  {
    slug: 'python-brunoyam',
    title: 'Python-разработчик',
    schoolId: 'brunoyam',
    category: 'Программирование',
    externalUrl: 'https://brunoyam.com/',
    level: 'С нуля',
    duration: '9 месяцев',
    price: 5400,
    rating: 4.5,
    reviews: 132,
    summary: 'Классический питон-курс: синтаксис, Django, REST, пет-проекты.',
    tags: ['Python'],
  },
  {
    slug: 'fullstack-hexlet',
    title: 'Фулстек JavaScript',
    schoolId: 'hexlet',
    category: 'Программирование',
    externalUrl: 'https://ru.hexlet.io/',
    level: 'С нуля',
    duration: '10 месяцев',
    price: 7900,
    rating: 4.8,
    reviews: 624,
    summary: 'Node.js + React с упором на fundamentals и грамотную архитектуру.',
    tags: ['JS', 'Node.js', 'React'],
  },
  {
    slug: 'backend-skypro',
    title: 'Java-разработчик',
    schoolId: 'skypro',
    category: 'Программирование',
    externalUrl: 'https://sky.pro/',
    level: 'С нуля',
    duration: '12 месяцев',
    price: 5900,
    rating: 4.4,
    reviews: 214,
    summary: 'Java, Spring Boot, тестирование. Гарантия трудоустройства.',
    tags: ['Java'],
  },
  {
    slug: 'devops-netology',
    title: 'DevOps-инженер',
    schoolId: 'netology',
    category: 'Программирование',
    externalUrl: 'https://netology.ru/',
    level: 'С нуля',
    duration: '15 месяцев',
    price: 7850,
    rating: 4.5,
    reviews: 198,
    summary: 'Linux, Docker, Kubernetes, CI/CD. С упором на реальные пайплайны.',
    tags: ['Linux', 'Docker', 'K8s'],
  },
  {
    slug: 'frontend-productstar',
    title: 'Frontend-разработчик',
    schoolId: 'productstar',
    category: 'Программирование',
    externalUrl: 'https://productstar.ru/',
    level: 'С нуля',
    duration: '10 месяцев',
    price: 6400,
    rating: 4.3,
    reviews: 177,
    summary: 'React, TypeScript, Next.js. С гарантией трудоустройства.',
    tags: ['React', 'Next.js'],
  },

  // ── Аналитика данных ──────────────────────────────────────────────
  {
    slug: 'data-analyst',
    title: 'Аналитик данных',
    schoolId: 'practicum',
    category: 'Аналитика данных',
    practicumPath: '/catalog/data-analysis/',
    level: 'С нуля',
    duration: '8 месяцев',
    price: 5990,
    rating: 4.7,
    reviews: 509,
    summary: 'SQL, Python, визуализация, продуктовая аналитика. Разборы A/B-тестов.',
    tags: ['SQL', 'Python', 'A/B'],
  },
  {
    slug: 'data-scientist-practicum',
    title: 'Специалист по Data Science',
    schoolId: 'practicum',
    category: 'Аналитика данных',
    practicumPath: '/catalog/programming/',
    level: 'Middle',
    duration: '10 месяцев',
    price: 8990,
    rating: 4.5,
    reviews: 142,
    summary: 'ML, pandas, scikit-learn, нейронки. Для тех, кто уже знает Python.',
    tags: ['ML', 'Python'],
  },
  {
    slug: 'bi-skillbox',
    title: 'BI-аналитик',
    schoolId: 'skillbox',
    category: 'Аналитика данных',
    externalUrl: 'https://skillbox.ru/',
    level: 'С нуля',
    duration: '9 месяцев',
    price: 4990,
    rating: 4.2,
    reviews: 98,
    summary: 'Power BI, Tableau, DAX. Отчётность и дашборды для бизнеса.',
    tags: ['BI', 'SQL'],
  },
  {
    slug: 'analyst-netology',
    title: 'Аналитик данных',
    schoolId: 'netology',
    category: 'Аналитика данных',
    externalUrl: 'https://netology.ru/',
    level: 'С нуля',
    duration: '12 месяцев',
    price: 5200,
    rating: 4.4,
    reviews: 316,
    summary: 'Python, SQL, статистика, визуализация. С трудоустройством.',
    tags: ['SQL', 'Python'],
  },
  {
    slug: 'data-eduson',
    title: 'Аналитик данных с трудоустройством',
    schoolId: 'eduson',
    category: 'Аналитика данных',
    externalUrl: 'https://eduson.academy/',
    level: 'С нуля',
    duration: '8 месяцев',
    price: 6800,
    rating: 4.3,
    reviews: 86,
    summary: 'Упор на soft skills, подготовку к собеседованиям и оффер.',
    tags: ['SQL', 'Python'],
  },
  {
    slug: 'product-analyst-skillfactory',
    title: 'Продуктовый аналитик',
    schoolId: 'skillfactory',
    category: 'Аналитика данных',
    externalUrl: 'https://skillfactory.ru/',
    level: 'С нуля',
    duration: '11 месяцев',
    price: 5400,
    rating: 4.5,
    reviews: 171,
    summary: 'A/B, когорты, юнит-экономика. Живые кейсы от продуктовых компаний.',
    tags: ['A/B', 'Метрики'],
  },

  // ── Дизайн ────────────────────────────────────────────────────────
  {
    slug: 'ux-ui-practicum',
    title: 'Дизайнер интерфейсов',
    schoolId: 'practicum',
    category: 'Дизайн',
    practicumPath: '/catalog/design/',
    level: 'С нуля',
    duration: '9 месяцев',
    price: 5490,
    rating: 4.6,
    reviews: 287,
    summary: 'UX, UI, Figma. Портфолио из 5 реальных продуктов к выпуску.',
    tags: ['UX/UI', 'Figma'],
  },
  {
    slug: 'product-design-skillbox',
    title: 'Продуктовый дизайнер',
    schoolId: 'skillbox',
    category: 'Дизайн',
    externalUrl: 'https://skillbox.ru/',
    level: 'С нуля',
    duration: '12 месяцев',
    price: 4390,
    rating: 4.4,
    reviews: 431,
    summary: 'От исследования до прототипа. Упор на работу в команде.',
    tags: ['UX', 'Figma'],
  },
  {
    slug: 'graphic-skillbox',
    title: 'Графический дизайнер',
    schoolId: 'skillbox',
    category: 'Дизайн',
    externalUrl: 'https://skillbox.ru/',
    level: 'С нуля',
    duration: '10 месяцев',
    price: 3990,
    rating: 4.3,
    reviews: 512,
    summary: 'Типографика, вёрстка, айдентика. Работа с Adobe.',
    tags: ['Графика'],
  },
  {
    slug: 'webdesign-productstar',
    title: 'Веб-дизайнер',
    schoolId: 'productstar',
    category: 'Дизайн',
    externalUrl: 'https://productstar.ru/',
    level: 'С нуля',
    duration: '7 месяцев',
    price: 4800,
    rating: 4.2,
    reviews: 144,
    summary: 'Figma, Tilda, основы UX. Портфолио из лендингов и интернет-магазинов.',
    tags: ['Figma', 'Tilda'],
  },
  {
    slug: 'motion-skillbox',
    title: 'Motion-дизайнер',
    schoolId: 'skillbox',
    category: 'Дизайн',
    externalUrl: 'https://skillbox.ru/',
    level: 'С нуля',
    duration: '9 месяцев',
    price: 4590,
    rating: 4.5,
    reviews: 198,
    summary: 'After Effects, Cinema 4D, анимация интерфейсов и брендинг.',
    tags: ['After Effects'],
  },
  {
    slug: '3d-skillfactory',
    title: '3D-дизайнер',
    schoolId: 'skillfactory',
    category: 'Дизайн',
    externalUrl: 'https://skillfactory.ru/',
    level: 'С нуля',
    duration: '10 месяцев',
    price: 5100,
    rating: 4.4,
    reviews: 76,
    summary: 'Blender, моделинг, текстурирование, визуализация.',
    tags: ['Blender', '3D'],
  },

  // ── Менеджмент ────────────────────────────────────────────────────
  {
    slug: 'pm-practicum',
    title: 'Менеджер проектов',
    schoolId: 'practicum',
    category: 'Менеджмент',
    practicumPath: '/catalog/management/',
    level: 'С нуля',
    duration: '6 месяцев',
    price: 5490,
    rating: 4.5,
    reviews: 234,
    summary: 'Agile, метрики, планирование, работа с командой.',
    tags: ['Agile', 'Scrum'],
  },
  {
    slug: 'po-netology',
    title: 'Продакт-менеджер',
    schoolId: 'netology',
    category: 'Менеджмент',
    externalUrl: 'https://netology.ru/',
    level: 'С нуля',
    duration: '10 месяцев',
    price: 5900,
    rating: 4.5,
    reviews: 312,
    summary: 'Продуктовые гипотезы, юнит-экономика, путь пользователя.',
    tags: ['Product', 'Метрики'],
  },
  {
    slug: 'scrum-skillbox',
    title: 'Scrum-мастер',
    schoolId: 'skillbox',
    category: 'Менеджмент',
    externalUrl: 'https://skillbox.ru/',
    level: 'Mixed',
    duration: '4 месяца',
    price: 3990,
    rating: 4.2,
    reviews: 88,
    summary: 'Scrum, Kanban, фасилитация, работа с метриками команды.',
    tags: ['Scrum'],
  },
  {
    slug: 'ba-eduson',
    title: 'Бизнес-аналитик',
    schoolId: 'eduson',
    category: 'Менеджмент',
    externalUrl: 'https://eduson.academy/',
    level: 'С нуля',
    duration: '8 месяцев',
    price: 5700,
    rating: 4.3,
    reviews: 112,
    summary: 'BPMN, SQL, требования, работа со стейкхолдерами.',
    tags: ['BA', 'BPMN'],
  },
  {
    slug: 'project-geekbrains',
    title: 'Руководитель проектов',
    schoolId: 'geekbrains',
    category: 'Менеджмент',
    externalUrl: 'https://gb.ru/',
    level: 'Mixed',
    duration: '11 месяцев',
    price: 4200,
    rating: 4.1,
    reviews: 167,
    summary: 'PMBoK, бюджетирование, управление рисками.',
    tags: ['PM'],
  },

  // ── Маркетинг ─────────────────────────────────────────────────────
  {
    slug: 'marketing-practicum',
    title: 'Интернет-маркетолог',
    schoolId: 'practicum',
    category: 'Маркетинг',
    practicumPath: '/catalog/marketing/',
    level: 'С нуля',
    duration: '6 месяцев',
    price: 4990,
    rating: 4.4,
    reviews: 198,
    summary: 'Performance, SEO, контент, SMM. Живые брифы от продуктов.',
    tags: ['Performance', 'SEO'],
  },
  {
    slug: 'smm-skillbox',
    title: 'SMM-специалист',
    schoolId: 'skillbox',
    category: 'Маркетинг',
    externalUrl: 'https://skillbox.ru/',
    level: 'С нуля',
    duration: '6 месяцев',
    price: 3490,
    rating: 4.3,
    reviews: 345,
    summary: 'ВКонтакте, Telegram, Дзен. Контент-план и таргет.',
    tags: ['SMM'],
  },
  {
    slug: 'seo-netology',
    title: 'SEO-специалист',
    schoolId: 'netology',
    category: 'Маркетинг',
    externalUrl: 'https://netology.ru/',
    level: 'С нуля',
    duration: '7 месяцев',
    price: 4200,
    rating: 4.2,
    reviews: 129,
    summary: 'Техническое и контентное SEO, семантика, аналитика.',
    tags: ['SEO'],
  },
  {
    slug: 'performance-productstar',
    title: 'Performance-маркетолог',
    schoolId: 'productstar',
    category: 'Маркетинг',
    externalUrl: 'https://productstar.ru/',
    level: 'Middle',
    duration: '5 месяцев',
    price: 5500,
    rating: 4.4,
    reviews: 76,
    summary: 'Контекст, таргет, веб-аналитика. Для маркетологов с опытом.',
    tags: ['Performance', 'Я.Директ'],
  },
  {
    slug: 'content-skillfactory',
    title: 'Контент-менеджер',
    schoolId: 'skillfactory',
    category: 'Маркетинг',
    externalUrl: 'https://skillfactory.ru/',
    level: 'С нуля',
    duration: '5 месяцев',
    price: 3890,
    rating: 4.2,
    reviews: 94,
    summary: 'Редактура, дистрибуция, работа с подрядчиками.',
    tags: ['Контент'],
  },

  // ── Английский ────────────────────────────────────────────────────
  {
    slug: 'english-for-it',
    title: 'Английский для IT',
    schoolId: 'practicum',
    category: 'Английский',
    practicumPath: '/english/',
    level: 'Mixed',
    duration: '4 месяца',
    price: 3290,
    rating: 4.5,
    reviews: 167,
    summary: 'Код-ревью, митинги, переписка. Уровни от A2 до B2+.',
    tags: ['English'],
  },
  {
    slug: 'english-skyeng',
    title: 'Английский с нуля до B2',
    schoolId: 'skypro',
    category: 'Английский',
    externalUrl: 'https://sky.pro/',
    level: 'С нуля',
    duration: '10 месяцев',
    price: 2990,
    rating: 4.4,
    reviews: 423,
    summary: 'Общий + разговорный. Преподаватель из Великобритании/США.',
    tags: ['English'],
  },
  {
    slug: 'english-productstar',
    title: 'Бизнес-английский',
    schoolId: 'productstar',
    category: 'Английский',
    externalUrl: 'https://productstar.ru/',
    level: 'Middle',
    duration: '5 месяцев',
    price: 3600,
    rating: 4.2,
    reviews: 58,
    summary: 'Переговоры, презентации, деловая переписка.',
    tags: ['Business English'],
  },
]

export const categoriesOrder: CourseCategory[] = [
  'Подготовка к ЕГЭ',
  'Программирование',
  'Аналитика данных',
  'Дизайн',
  'Менеджмент',
  'Маркетинг',
  'Английский',
]

export const categories = categoriesOrder
