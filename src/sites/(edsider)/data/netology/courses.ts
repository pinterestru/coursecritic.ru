/**
 * Tariff data for the three Нетология courses the promo landers are built on.
 *
 * Every figure here was read off the course page itself on 28 August 2026 —
 * including the sale that was running that week. Prices on netology.ru move
 * with each promo cycle, so the articles always print the capture date next to
 * the numbers and tell the reader to check the current one.
 */
import type { CourseFacts } from './types'

export const pythonCourse: CourseFacts = {
  path: 'programs/python-basic',
  name: 'Python-разработчик с нуля',
  duration: '6,5 месяца',
  starts: '3 сентября — 24 марта',
  sale: '−45% до 28 августа',
  document: 'Диплом о профессиональной переподготовке',
  tariffs: [
    {
      name: 'Базовая',
      positioning: 'Быстрый старт карьеры: ключевые инструменты и технологии',
      price: 194_515,
      promoPercent: 45,
      monthly: 2_971,
      monthlyTerm: 36,
      lumpSum: 90_900,
      lumpSumNote: 'включая скидку 15%',
      duration: '6,5 месяца',
      perks: [
        '5 проектов и дипломная работа',
        'Диплом о профессиональной переподготовке',
        '4 бонусные темы: английский для разработчиков, алгоритмы, карьера и фриланс, Linux',
        'Бонусы: Django и GigaChat',
      ],
    },
    {
      name: 'Расширенная',
      positioning: 'Навыки для профессии с нуля и преимущества при трудоустройстве',
      price: 241_190,
      promoPercent: 45,
      monthly: 3_684,
      monthlyTerm: 36,
      lumpSum: 112_800,
      lumpSumNote: 'включая скидку 15%',
      duration: '12 месяцев',
      perks: [
        '22 проекта и дипломная работа',
        '9 бонусных тем, включая облачные сервисы и структуры данных',
        'Тестовое собеседование и разбор тестовых заданий',
        'Бонусные средства от Рег.ру, «1+1 профессия в подарок»',
      ],
      recommended: true,
    },
    {
      name: 'Расширенная + нейросети',
      positioning: 'Всё из расширенной программы плюс работа с ИИ',
      price: 298_848,
      promoPercent: 45,
      monthly: 4_565,
      monthlyTerm: 36,
      lumpSum: 139_700,
      lumpSumNote: 'включая скидку 15%',
      duration: '12 месяцев',
      perks: [
        'Дополнительный курс «Нейросети для разработчика»',
        '+28,4 часа теории и 40,5 часа практики',
        'Отдельное удостоверение о повышении квалификации',
        'Курс про поиск работы с помощью генеративного ИИ',
      ],
    },
  ],
}

export const projectCourse: CourseFacts = {
  path: 'programs/project',
  name: 'Менеджер проектов',
  duration: 'от 6 до 9 месяцев — зависит от тарифа',
  starts: '7 сентября — 31 марта',
  sale: '−45% и −50% до 28 августа',
  document: 'Удостоверение или диплом — зависит от тарифа',
  tariffs: [
    {
      name: 'Стандартный',
      positioning: 'Основные навыки для погружения в профессию и первое портфолио',
      price: 198_780,
      promoPercent: 45,
      monthly: 3_036,
      monthlyTerm: 36,
      lumpSum: 98_400,
      lumpSumNote: 'включая скидку 10%',
      duration: '6 месяцев',
      perks: [
        '6 проектов в портфолио, 7 модулей',
        '13 изученных инструментов',
        'Помощь с поиском работы',
        'Удостоверение о повышении квалификации',
      ],
    },
    {
      name: 'Продвинутый',
      positioning: 'Основные и продвинутые навыки плюс специализация и ИИ',
      price: 292_170,
      promoPercent: 50,
      monthly: 4_057,
      monthlyTerm: 36,
      lumpSum: 131_500,
      lumpSumNote: 'включая скидку 10%',
      duration: '9 месяцев',
      perks: [
        '9 проектов в портфолио, 11 модулей',
        '24 инструмента и специализация на выбор: IT, маркетинг, образование или event',
        'Тренажёр проектного менеджера',
        'Диплом о профессиональной переподготовке',
      ],
      recommended: true,
    },
    {
      name: 'Индивидуальный',
      positioning: 'Та же программа, но в своём темпе и с личным ментором',
      price: 292_170,
      promoPercent: 50,
      monthly: 4_057,
      monthlyTerm: 36,
      lumpSum: 131_500,
      lumpSumNote: 'включая скидку 10%',
      duration: 'в своём темпе',
      perks: [
        '7 проектов в портфолио, 11 модулей и специализация',
        'Индивидуальные домашние задания с проверкой экспертов',
        '3 встречи с ментором — назначаете в любое время',
        'Диплом о профессиональной переподготовке',
      ],
    },
  ],
}

export const analystCourse: CourseFacts = {
  path: 'programs/data-analyst',
  name: 'Аналитик данных',
  duration: '7 месяцев на базовом тарифе, 12 — на расширенном',
  starts: '2 сентября — 17 апреля',
  sale: '−40% и −50% до 28 августа',
  document: 'Диплом о профессиональной переподготовке',
  tariffs: [
    {
      name: 'Базовая',
      positioning: 'Навыки, чтобы получить профессию с нуля и начать карьеру',
      price: 187_123,
      promoPercent: 40,
      monthly: 3_118,
      monthlyTerm: 36,
      lumpSum: 101_000,
      lumpSumNote: 'включая скидку 10%',
      duration: '7 месяцев',
      perks: [
        '3 проекта в портфолио и дипломная работа',
        '10 изученных инструментов',
        'Программа трудоустройства и диплом о профпереподготовке',
        '4 бонусные темы и вебинары по AW BI и DataLens',
      ],
    },
    {
      name: 'Расширенная',
      positioning: 'Включает дополнительные навыки для быстрого карьерного роста',
      price: 287_168,
      promoPercent: 50,
      monthly: 3_988,
      monthlyTerm: 36,
      lumpSum: 129_200,
      lumpSumNote: 'включая скидку 10%',
      duration: '12 месяцев',
      perks: [
        '7 проектов и дипломная работа с поддержкой ментора',
        '13 инструментов, включая A/Б-тестирование, Big Data и Power BI',
        '3 сертификата о владении SQL, Power BI и Tableau',
        'Программа трудоустройства и диплом о профпереподготовке',
      ],
      recommended: true,
    },
    {
      name: 'Расширенная + нейросети',
      positioning: 'Включает курс по продвинутой аналитике с применением ИИ',
      price: 347_490,
      promoPercent: 50,
      monthly: 4_826,
      monthlyTerm: 36,
      lumpSum: 156_400,
      lumpSumNote: 'включая скидку 10%',
      duration: '12 месяцев',
      perks: [
        'Всё из расширенной программы',
        '7 изученных нейросетей: ChatGPT, DeepSeek, Gemini, YandexGPT, GigaChat, Claude, Qwen2.5',
        '+37,5 часа теории, 37 часов практики и ещё один проект в портфолио',
        'Удостоверение о повышении квалификации за курс «Нейросети для анализа данных»',
      ],
    },
  ],
}

/**
 * Unlike the other three, this programme is sold as a single offer rather than
 * a tier ladder — there is nothing to choose but the payment method, which is
 * exactly what makes it the clearest illustration of how the discounts stack.
 */
export const designCourse: CourseFacts = {
  path: 'programs/product-design',
  name: 'UX/UI-дизайнер. Расширенный + ИИ',
  duration: '13 месяцев',
  starts: '4 сентября 2026 — 19 октября 2027',
  sale: '−50% до 28 августа',
  document: 'Диплом о профессиональной переподготовке',
  tariffs: [
    {
      name: 'Расширенный + ИИ',
      positioning: 'Единственный тариф: общая программа на 9 месяцев плюс специализация на 4',
      price: 366_000,
      promoPercent: 50,
      monthly: 5_083,
      monthlyTerm: 36,
      lumpSum: 164_700,
      lumpSumNote: 'включая скидку 10%',
      duration: '13 месяцев',
      perks: [
        'До 15 проектов в портфолио по задачам МТС, ВкусВилла и ОККО',
        'Онлайн-стажировка в диджитал-агентстве AGIMA',
        'Специализация на выбор: цифровой или продуктовый дизайн',
        'Диплом о профпереподготовке и 3 курса в подарок',
      ],
      recommended: true,
    },
  ],
}

/**
 * The three programmes that carry a named promo code, captured 28 August 2026.
 *
 * All three are single-offer: no tier ladder, and — unlike the catalogue
 * professions — no extra discount for paying at once. The page prints
 * «Стоимость курса», and it equals the instalment total exactly.
 */
export const aiDevCourse: CourseFacts = {
  path: 'programs/aid',
  name: 'ИИ-разработчик: от API до агентов с МТУСИ',
  duration: '6 месяцев',
  starts: 'старт 26 октября',
  sale: '−55% до 28 августа',
  document: 'Два диплома — от Нетологии и МТУСИ',
  tariffs: [
    {
      name: 'ИИ-разработчик: от API до агентов',
      positioning:
        'Инженерная сторона ИИ: работа через API, поиск по документам, агентные сценарии',
      price: 320_000,
      promoPercent: 55,
      monthly: 4_000,
      monthlyTerm: 36,
      duration: '6 месяцев',
      perks: [
        '5 проектов в портфолио',
        'Интеллектуальный поиск по корпоративным документам и ассистент на их основе',
        'Два диплома — Нетологии и МТУСИ',
        '3 курса в подарок',
      ],
      recommended: true,
    },
  ],
}

export const devSecOpsCourse: CourseFacts = {
  path: 'programs/devsecops',
  name: 'DevSecOps: практика безопасной разработки с ВШЭ',
  duration: '6 месяцев',
  starts: 'старт 7 октября',
  sale: '−52% до 28 августа',
  document: 'Два официальных документа — от Нетологии и ВШЭ',
  tariffs: [
    {
      name: 'DevSecOps: практика безопасной разработки',
      positioning: 'Встраивание безопасности в процесс разработки, а не проверка постфактум',
      price: 450_000,
      promoPercent: 52,
      monthly: 6_000,
      monthlyTerm: 36,
      duration: '6 месяцев',
      perks: [
        'Задачи уровня DevSecOps-специалиста с первых модулей',
        'Специализация после основной программы',
        'Два официальных документа — Нетологии и ВШЭ',
        'Самая дорогая программа из тех, что мы считали',
      ],
      recommended: true,
    },
  ],
}

export const aiManagerCourse: CourseFacts = {
  path: 'programs/rukovoditel-proektov-v-oblasti-iskusstvennogo-intellekta-dpo-mfti',
  name: 'Руководитель проектов в области искусственного интеллекта с МФТИ',
  duration: 'от 3,5 месяца',
  starts: 'даты потоков — на странице программы',
  sale: '−55% до 28 августа',
  document: 'Два удостоверения о повышении квалификации — от МФТИ и Нетологии',
  tariffs: [
    {
      name: 'Руководитель проектов в области ИИ',
      positioning: 'Управление проектами машинного обучения: классические и agile-методики',
      price: 277_500,
      promoPercent: 55,
      monthly: 3_468,
      monthlyTerm: 36,
      duration: 'от 3,5 месяца',
      perks: [
        'Две программы повышения квалификации — от МФТИ и от Нетологии',
        'Разбор того, почему 87% проектов data science не доходят до продакшена',
        'Зачисление при наличии диплома о высшем или среднем профессиональном образовании',
        '3 курса в подарок',
      ],
      recommended: true,
    },
  ],
}
