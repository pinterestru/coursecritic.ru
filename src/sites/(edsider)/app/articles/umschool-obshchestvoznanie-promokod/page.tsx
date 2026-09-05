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

const meta = getUmschoolArticle('umschool-obshchestvoznanie-promokod')!

export const metadata: Metadata = articleMetadata(meta)

const course = socialCourse
const codes = codesForSubject('obshchestvoznanie')
const heroCode = codeFor('obshchestvoznanie', 11)!
const oge = codeFor('obshchestvoznanie', 9)!
const kitDiscounts = [autoDiscount('kit4'), autoDiscount('kit2')]
const extras = [autoDiscount('final-essay'), autoDiscount('free-lesson')]

const two = kitPrice(course.price, 2)
const four = kitPrice(course.price, 4)

const lead =
  'Обществознание сдаёт больше половины выпускников, и почти все начинают одинаково: учат определения. Я тоже так начинала и потеряла на этом первые месяцы. Настоящая проблема предмета не в объёме теории, а во второй части, где баллы даются за структуру ответа, а не за знание. Поняла я это на бесплатном мини-курсе, который открывается промокодом, — и он же оказался самым насыщенным из всех, что школа отдаёт даром: шесть тем и полноценный пробный вариант.'

const facts: FactItem[] = [
  { label: 'Годовой курс', value: rub(course.price) },
  { label: 'С историей в паре', value: `${rub(two.perSubject)} / шт` },
  { label: 'Мини-курс по коду', value: '0 ₽' },
  { label: 'Тем в мини-курсе', value: '6 + пробник' },
]

const faq: FaqItem[] = [
  {
    q: 'Какой промокод Умскул на обществознание?',
    a: `Три: ${heroCode.code} для ЕГЭ в 11 классе, SOC10_SITEPROMO1_CC для 10 класса и ${oge.code} для ОГЭ в девятом. Каждый открывает бесплатный мини-курс своего уровня и вводится в кабинете, через билетик в правом верхнем углу, а не при оплате. На цену платного курса они не влияют — скидку считает корзина, от количества предметов, и промокод для неё не нужен.`,
  },
  {
    q: 'Что внутри бесплатного мини-курса по обществознанию?',
    a: `Для 11 класса — ${heroCode.inside}. Это самый насыщенный из бесплатных курсов школы: шесть тем из разных блоков плюс полный пробник. Для девятого класса программа другая — ${oge.inside}. Курс открывается целиком, а не одним вводным уроком, и ничего не стоит.`,
  },
  {
    q: 'Сколько стоит курс по обществознанию в Умскул?',
    a: `${rub(course.price)} за год, зачёркнутая цена ${rub(course.priceOld)}, в рассрочку ${rub(course.perMonth)} в месяц. Столько же стоит любой другой годовой курс школы. В паре с историей — ${rub(two.total)} за оба, то есть ${rub(two.perSubject)} за предмет.`,
  },
  {
    q: 'Кто ведёт курс по обществознанию?',
    a: 'Анастасия Малова. В отзывах её подход хвалят за одно и то же: объясняет через примеры из жизни и актуальные новости, поэтому теория запоминается не как список определений. Для обществознания это принципиально — предмет, который учат зубрёжкой, разваливается ровно на второй части, где нужно применять понятия к ситуации.',
  },
  {
    q: 'Помогает ли курс со второй частью?',
    a: 'Это и есть основная причина его брать. Вторая часть обществознания устроена алгоритмически: у каждого задания свой формат ответа, и баллы снимают за нарушение формы, а не за незнание. Курс даёт эти алгоритмы и проверку по критериям. Но писать развёрнутые ответы придётся регулярно и самой — разбор чужих работ дальше понимания не двигает.',
  },
  {
    q: 'Обществознание и история — обязательно вместе?',
    a: `Не обязательно, но на юридические и гуманитарные направления они идут в паре чаще всего, и это удобно совпадает со скидкой: два предмета — ${rub(two.perSubject)} за каждый вместо ${rub(course.price)}. Плюс темы пересекаются: правоотношения, форма государства и политика в обществознании опираются ровно на то, что вы учите по истории.`,
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
          Сначала про сам промокод, потому что здесь все ошибаются одинаково.{' '}
          <strong>Код по обществознанию не даёт скидку.</strong> Он открывает бесплатный мини-курс —
          и вводится не в корзину, а по иконке с билетиком в личном кабинете. Если вставить его при
          оплате годового курса, он не примется, и это нормально: он вообще не про цену.
        </p>
        <p>
          Скидка на платный курс у Умскула устроена отдельно и без всяких кодов: корзина сама
          считает процент от количества предметов.{' '}
          <strong>То есть бесплатный курс и скидку можно получить одновременно</strong> — это
          независимые механики.
        </p>
        <p>
          Все коды школы и все скидки, которые считаются без них, разобраны{' '}
          <Link href="/articles/umschool-promokody">в сводной статье</Link>.
        </p>
      </ArticleSection>

      <ArticleSection id="numbers" title="Обществознание в Умскул: цифры">
        <ExamFacts facts={facts} />
      </ArticleSection>

      <ArticleSection id="codes" title="Три кода: ОГЭ, 10 и 11 класс">
        <FreeCourseTable
          deepLink={COUPONS_PATH}
          codes={codes}
          caption="Программы в кодах разные, поэтому берите свой класс. Одноразовые, но не конфликтуют между собой — можно параллельно забрать код по истории."
        />
        <div className="article-prose mt-6">
          <p>
            Код за одиннадцатый класс здесь стоит отдельного упоминания.{' '}
            <strong>
              Это самый содержательный бесплатный курс из всех, что школа раздаёт: шесть тем —
              познание, издержки производства, налоги, форма государства, правоотношения и семейное
              право — плюс полноценный пробный вариант
            </strong>
            . Темы взяты из разных блоков намеренно: вы видите, как предмет устроен целиком, а не
            один его кусок.
          </p>
          <p>
            За девятый класс дают другое и, на мой взгляд, более ценное: разделы «Человек и
            общество» и «Духовная культура» вместе с <strong>алгоритмами решения заданий</strong>.
            Именно алгоритмы — то, чего не хватает почти всем, и хорошо, что их показывают уже в
            девятом.
          </p>
        </div>
      </ArticleSection>

      <AuthorCard author={daria} />

      <ArticleSection id="second-part" title="Главное, что я поняла про этот предмет" prose>
        <p>
          Обществознание кажется простым, потому что термины понятны на бытовом уровне, и это
          ловушка.{' '}
          <strong>
            Вторая часть проверяет не знание понятий, а умение уложить ответ в формат: столько-то
            позиций, с пояснением, с примером нужного типа
          </strong>
          . Балл снимают за форму, а не за содержание, и человек, знающий предмет отлично, спокойно
          теряет здесь десять баллов.
        </p>
        <p>
          Отсюда мой единственный совет по подготовке:{' '}
          <strong>учить не определения, а алгоритмы</strong>. У каждого номера второй части свой
          скелет ответа, их конечное число, и они заучиваются быстрее, чем кодификатор. Курс это
          даёт, но толк будет, только если вы пишете развёрнутые ответы каждую неделю и отдаёте на
          проверку. Разбор чужих работ понимания не создаёт — проверено на себе.
        </p>
        <p>
          Про <Aff to={course.path}>курс с Анастасией Маловой</Aff> скажу то же, что пишут в
          отзывах: подача через жизненные примеры и новости, и это работает — теория перестаёт быть
          списком. Оценка курса на сайте школы — {course.rating} при{' '}
          {course.reviews.toLocaleString('ru-RU')} оценках, но это площадка самой школы, так что
          воспринимайте её как ориентир.
        </p>
      </ArticleSection>

      <ArticleSection id="pair" title="Цена в комплекте">
        <KitTable
          unitPrice={course.price}
          deepLink={course.path}
          highlight={2}
          caption={`Расчёт от цены годового курса ${rub(course.price)}. Обществознание почти всегда идёт с русским и ещё одним профильным предметом — то есть комплектом.`}
        />
        <div className="article-prose mt-6">
          <p>
            Обществознание в одиночку не сдают: к нему идёт обязательный русский, а на юридические
            направления ещё и <Aff to={historyCourse.path}>история</Aff>. Это уже комплект, и{' '}
            <strong>
              цена предмета падает с {rub(course.price)} до {rub(two.perSubject)}
            </strong>{' '}
            автоматически, без всякого кода.
          </p>
          <p>
            И контринтуитивная деталь, которую стоит проверить на своём наборе:{' '}
            <strong>
              четыре предмета обходятся дешевле трёх — {rub(four.total)} против{' '}
              {rub(kitPrice(course.price, 3).total)}
            </strong>
            , потому что на четвёртом скидка прыгает с 15% до 50%.
          </p>
        </div>
      </ArticleSection>

      <CtaBanner
        schoolId="umschool"
        schools={umschoolSchools}
        deepLink={course.path}
        title="Годовой курс ЕГЭ по обществознанию с Анастасией Маловой"
        body="Бесплатный мини-курс с шестью темами и пробником открывается промокодом в личном кабинете. Скидка на годовой курс к нему отношения не имеет — она считается в корзине сама."
        cta="Посмотреть цену курса →"
      />

      <ArticleSection id="extras" title="Что прилагается, если брать в комплекте">
        <AutoDiscountCards discounts={extras} deepLink={course.path} />
        <div className="article-prose mt-6">
          <p>
            Если вторым предметом идёт русский, обратите внимание на первый пункт:{' '}
            <strong>
              годовой курс по русскому плюс любой второй предмет — и подготовка к итоговому
              сочинению подключается бесплатно
            </strong>
            . Для того, кто сдаёт обществознание, это почти всегда так и складывается.
          </p>
        </div>
      </ArticleSection>

      <ArticleSection id="verdict" title="Порядок, который я бы себе посоветовала" prose>
        <p>
          <strong>Забрать бесплатный мини-курс сегодня, а не после сравнения десяти школ.</strong>{' '}
          Шесть тем и пробник за ноль рублей — это единственный способ увидеть и предмет, и
          преподавателя без риска.
        </p>
        <p>
          <strong>Начать со второй части, а не с теории.</strong> Пробник в конце мини-курса покажет
          ровно то, чего вы не умеете, и это будет не «не знаю определение».
        </p>
        <p>
          <strong>Считать набор предметов до корзины.</strong> Обществознание редко бывает
          единственным, а от количества зависит вся цена. <Aff to={course.path}>Страница курса</Aff>{' '}
          покажет текущую, но набор решаете вы, и решение это стоит дороже любого промокода.
        </p>
      </ArticleSection>

      <ArticleSection id="faq">
        <ArticleFaq items={faq} />
      </ArticleSection>
    </ArticleShell>
  )
}
