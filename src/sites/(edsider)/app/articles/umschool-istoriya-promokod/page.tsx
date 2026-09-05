import type { Metadata } from 'next'
import Link from 'next/link'

import type { FactItem, FaqItem } from '../../../data/guides/types'
import { articleMetadata } from '../../../data/guides/metadata'
import { autoDiscount, codeFor, codesForSubject } from '../../../data/umschool/codes'
import { getUmschoolArticle, otherUmschoolArticles } from '../../../data/umschool/articles'
import { historyCourse, socialCourse } from '../../../data/umschool/courses'
import { daria } from '../../../data/umschool/authors'
import { umschoolSchools } from '../../../data/umschool/school'
import { COUPONS_PATH, kitPrice, rub } from '../../../data/umschool/types'
import Aff from '../../../components/articles/Aff'
import ArticleFaq from '../../../components/articles/ArticleFaq'
import ArticleSection from '../../../components/articles/ArticleSection'
import ArticleShell from '../../../components/articles/ArticleShell'
import AuthorCard from '../../../components/articles/AuthorCard'
import AutoDiscountCards from '../../../components/articles/AutoDiscountCards'
import CtaBanner from '../../../components/articles/CtaBanner'
import ExamFacts from '../../../components/articles/ExamFacts'
import FreeCourseTable from '../../../components/articles/FreeCourseTable'
import KitTable from '../../../components/articles/KitTable'
import PromoHero from '../../../components/articles/PromoHero'

const meta = getUmschoolArticle('umschool-istoriya-promokod')!

export const metadata: Metadata = articleMetadata(meta)

const course = historyCourse
const codes = codesForSubject('istoriya')
const heroCode = codeFor('istoriya', 11)!
const grade10 = codeFor('istoriya', 10)!
const kitDiscounts = [autoDiscount('kit4'), autoDiscount('kit2')]
const earlyDiscounts = [autoDiscount('years23'), autoDiscount('free-lesson')]

const two = kitPrice(course.price, 2)
const four = kitPrice(course.price, 4)

const lead =
  'История — предмет, который невозможно выучить за девять месяцев, и это не фигура речи: объём дат и событий физически не помещается в один учебный год, если начинать с нуля. Я сдавала историю вместе с обществознанием и поступила на юридический. Здесь разбираю пять промокодов Умскула, которые открывают бесплатные мини-курсы с седьмого класса, цену годового курса и один отзыв на две звезды, который стоит прочитать внимательнее любого хвалебного.'

const facts: FactItem[] = [
  { label: 'Годовой курс', value: rub(course.price) },
  { label: 'С обществознанием', value: `${rub(two.perSubject)} / шт` },
  { label: 'Мини-курс по коду', value: '0 ₽' },
  { label: 'Кодов по истории', value: `${codes.length} — с 7 по 11 класс` },
]

const faq: FaqItem[] = [
  {
    q: 'Какой промокод Умскул на историю?',
    a: `Пять кодов, с седьмого по одиннадцатый класс. Для ЕГЭ в 11 классе — ${heroCode.code}, для 10 класса — ${grade10.code}, для ОГЭ в девятом — HIST9_SITEPROMO1_CC. Каждый открывает бесплатный мини-курс и активируется в личном кабинете, по значку билета, а не в корзине. Скидку на платный курс коды не дают: её считает корзина от количества предметов.`,
  },
  {
    q: 'Что внутри бесплатного мини-курса по истории?',
    a: `Для 11 класса — ${heroCode.inside}. Работа с картами здесь ключевая: картографические задания стабильно входят в число самых проваливаемых, и разбирают их реже всего. Для 10 класса курс устроен иначе — это ${grade10.inside}. Внутри теория, практика и пробник.`,
  },
  {
    q: 'Сколько стоит курс по истории в Умскул?',
    a: `${rub(course.price)} за год, на витрине зачёркнуто ${rub(course.priceOld)}, в рассрочку ${rub(course.perMonth)} в месяц. Цена одинаковая у всех годовых курсов школы. В паре с обществознанием — ${rub(two.total)} за оба, то есть ${rub(two.perSubject)} за предмет.`,
  },
  {
    q: 'Кто ведёт курс по истории?',
    a: 'Аля Виноградова. Показательно, что её хвалят даже в отрицательных отзывах: человек ставит школе две звезды за навязчивость отдела продаж и в том же тексте пишет, что преподаватель объясняет понятно, а раздаточные материалы подробные. Для истории раздатки — не мелочь: опорные схемы и таблицы дат экономят месяцы конспектирования.',
  },
  {
    q: 'Когда начинать готовиться к ЕГЭ по истории?',
    a: 'В десятом, если хотите верхний диапазон. Объём предмета таков, что одиннадцатый класс уходит на повторение и отработку формата, а не на первое знакомство с материалом. Школа поощряет ранний старт скидкой до 30% за оплату подготовки сразу на два года, но начать можно бесплатно — код за десятый класс открывает мини-курс, который специально задуман как фундамент под программу одиннадцатого.',
  },
  {
    q: 'Правда ли, что менеджеры Умскула настойчиво звонят?',
    a: 'На это жалуются регулярно, и жалуются даже те, кто доволен обучением. Механика простая: как только вы регистрируетесь на платформе — в том числе ради бесплатного мини-курса — ваш номер попадает в работу. Это не повод отказываться от бесплатного курса, но повод завести аккаунт на тот номер, где несколько настойчивых звонков вас не выведут из себя.',
  },
]

export default function Page() {
  return (
    <ArticleShell
      meta={meta}
      lead={lead}
      author={daria}
      kicker="Личный опыт · Умскул 2026"
      related={otherUmschoolArticles(meta.slug)}
      relatedTitle="Другие разборы Умскула"
    >
      <PromoHero promo={heroCode} deepLink={course.path} autos={kitDiscounts} asOf={meta.updated} />

      <ArticleSection prose>
        <p>
          Первое, что нужно знать про промокоды этой школы.{' '}
          <strong>Код по истории — не скидка, а бесплатный курс.</strong> Он открывает полноценный
          мини-курс с теорией, практикой и пробником, и вводится в личном кабинете по иконке с
          билетиком. В корзину его вставлять бессмысленно.
        </p>
        <p>
          Скидка на платный курс считается отдельно и сама: корзина смотрит, сколько предметов вы
          набрали, и подставляет процент. <strong>Код для этого не нужен вообще</strong> — это и
          есть главное, что стоит унести из любой статьи про промокоды Умскула.
        </p>
        <p>
          Общая картина по кодам и автоматическим скидкам —{' '}
          <Link href="/articles/umschool-promokody">в отдельном разборе</Link>.
        </p>
      </ArticleSection>

      <ArticleSection id="numbers" title="История в Умскул: цифры">
        <ExamFacts facts={facts} />
      </ArticleSection>

      <ArticleSection id="codes" title="Пять кодов: с 7 класса до ЕГЭ">
        <FreeCourseTable
          deepLink={COUPONS_PATH}
          codes={codes}
          caption="Код своего класса — программы разные. Коды одноразовые, но между собой не конфликтуют: историю и обществознание можно забрать параллельно."
        />
        <div className="article-prose mt-6">
          <p>
            В коде за одиннадцатый класс есть пункт, ради которого его стоит взять, даже если вы
            учитесь в другой школе. <strong>Работа с картами.</strong> Картографические задания —
            стабильно одни из самых проваливаемых на ЕГЭ, и разбирают их реже всего, потому что это
            неудобно объяснять в формате лекции. Здесь под них отведён отдельный блок бесплатно.
          </p>
          <p>
            Код за десятый класс устроен принципиально иначе: это не облегчённый вариант
            одиннадцатого, а{' '}
            <strong>фундамент, на который потом ложится программа выпускного года</strong>. Если
            ребёнок в десятом, брать нужно именно его — одиннадцатый будет непонятен без контекста.
          </p>
        </div>
      </ArticleSection>

      <AuthorCard author={daria} />

      <ArticleSection id="review" title="Отзыв на две звезды, который стоит прочитать" prose>
        <p>
          Среди отзывов на школу есть один, который я советую прочитать внимательнее любого
          хвалебного. Человек ставит <strong>две звезды</strong> — и в том же тексте пишет, что взял
          годовой курс по истории, Аля Виноградова объясняет понятно, вопросов к ней нет, раздатки
          подробные. <strong>Все претензии — к отделу продаж</strong>: до оплаты менеджеры звонили
          постоянно.
        </p>
        <p>
          Из этого следует ровно то, что нужно знать перед покупкой.{' '}
          <strong>
            Низкие оценки у Умскула чаще всего не про качество преподавания, а про навязчивость
            продаж
          </strong>
          . Обучение и общение с отделом продаж — разные продукты, и оценивать их надо порознь. Мой
          практический вывод: заводите аккаунт на номер, где несколько настойчивых звонков вас не
          выведут из себя, и не отказывайтесь из-за этого от бесплатного курса.
        </p>
        <p>
          Про раздатки, кстати, отдельно.{' '}
          <strong>
            Для истории это не мелочь: опорные схемы и таблицы дат экономят месяцы конспектирования
          </strong>
          , а качество этих материалов между школами различается сильнее, чем сами лекции. То, что
          их хвалит недовольный человек, — хороший сигнал.
        </p>
      </ArticleSection>

      <ArticleSection id="pair" title="История и обществознание: цена в паре">
        <KitTable
          unitPrice={course.price}
          deepLink={course.path}
          highlight={2}
          caption={`Расчёт от цены годового курса ${rub(course.price)}. На юридические и гуманитарные направления история и обществознание идут вместе — это уже комплект.`}
        />
        <div className="article-prose mt-6">
          <p>
            Я готовилась по обеим:{' '}
            <Aff to={socialCourse.path}>обществознание с Анастасией Маловой</Aff> и история. Вместе
            это {rub(two.total)}, то есть {rub(two.perSubject)} за предмет вместо{' '}
            {rub(course.price)} — скидка применяется в корзине сама.
          </p>
          <p>
            Темы у этих предметов пересекаются сильнее, чем кажется: правоотношения, форма
            государства и политика в обществознании опираются на исторический материал.{' '}
            <strong>
              Готовиться параллельно объективно легче, чем по одному, — и в этой школе ещё и дешевле
            </strong>
            .
          </p>
          <p>
            Контринтуитивная деталь напоследок:{' '}
            <strong>
              четыре предмета стоят дешевле трёх, {rub(four.total)} против{' '}
              {rub(kitPrice(course.price, 3).total)}
            </strong>
            , потому что на четвёртом включается −50%.
          </p>
        </div>
      </ArticleSection>

      <CtaBanner
        schoolId="umschool"
        schools={umschoolSchools}
        deepLink={course.path}
        title="Годовой курс ЕГЭ по истории с Алей Виноградовой"
        body="Промокод открывает бесплатный мини-курс с разбором карт и опорных дат — вводится в личном кабинете. Скидка на годовой курс считается в корзине отдельно, от количества предметов."
        cta="Посмотреть цену курса →"
      />

      <ArticleSection id="early" title="Если вы в десятом классе">
        <AutoDiscountCards discounts={earlyDiscounts} deepLink={course.path} />
        <div className="article-prose mt-6">
          <p>
            История — предмет, где ранний старт даёт больше, чем в любом другом.{' '}
            <strong>Объём не сжимается</strong>: если начать в одиннадцатом с нуля, весь год уйдёт
            на первое прохождение материала, а на отработку формата времени не останется. Школа
            поощряет ранний старт скидкой до 30% за оплату сразу на два года — но платить за два
            года вперёд стоит только при определившемся наборе предметов.
          </p>
        </div>
      </ArticleSection>

      <ArticleSection id="verdict" title="Что бы я посоветовала" prose>
        <p>
          <strong>Начать с бесплатного кода своего класса.</strong> В одиннадцатом там карты, в
          десятом — фундамент. И то и другое полезно само по себе, даже если школу вы в итоге не
          выберете.
        </p>
        <p>
          <strong>Читать отрицательные отзывы, а не положительные.</strong> У этой школы они
          информативнее: из них видно, что претензии почти всегда к продажам, а не к преподаванию.
        </p>
        <p>
          <strong>Брать историю в паре.</strong> С обществознанием она и учится легче, и стоит
          дешевле — {rub(two.perSubject)} за предмет против {rub(course.price)}.{' '}
          <Aff to={course.path}>Текущую цену</Aff> смотрите на странице курса: школа меняет её
          вместе с акциями.
        </p>
      </ArticleSection>

      <ArticleSection id="faq">
        <ArticleFaq items={faq} />
      </ArticleSection>
    </ArticleShell>
  )
}
