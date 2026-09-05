import type { Metadata } from 'next'
import Link from 'next/link'

import type { FactItem, FaqItem } from '../../../data/guides/types'
import { articleMetadata } from '../../../data/guides/metadata'
import { autoDiscount, codeFor, codesForSubject } from '../../../data/umschool/codes'
import { getUmschoolArticle, otherUmschoolArticles } from '../../../data/umschool/articles'
import { informaticsCourse, mathCourse } from '../../../data/umschool/courses'
import { anton } from '../../../data/umschool/authors'
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

const meta = getUmschoolArticle('umschool-informatika-promokod')!

export const metadata: Metadata = articleMetadata(meta)

const course = informaticsCourse
const codes = codesForSubject('informatika')
const heroCode = codeFor('informatika', 11)!
const grade10 = codeFor('informatika', 10)!
const kitDiscounts = [autoDiscount('kit4'), autoDiscount('kit2')]
const earlyDiscounts = [autoDiscount('years23'), autoDiscount('free-lesson')]

const two = kitPrice(course.price, 2)
const four = kitPrice(course.price, 4)

const lead =
  'Я двенадцать лет пишу код, поэтому когда сын выбрал информатику, первым делом полез смотреть не цену, а задачи. Посмотрел — и пошёл смотреть цену. Информатика на ЕГЭ сейчас растёт быстрее всех предметов, курсов под неё расплодилось много, и почти все описаны одинаково. Умскул отличается одной полезной деталью: у него есть промокод, который открывает мини-курс по программированию бесплатно, — и это единственный способ увидеть, чему там реально учат, до оплаты сорока пяти тысяч.'

const facts: FactItem[] = [
  { label: 'Годовой курс', value: rub(course.price) },
  { label: 'С профилем в паре', value: `${rub(two.perSubject)} / шт` },
  { label: 'Мини-курс по коду', value: '0 ₽' },
  { label: 'Кодов по предмету', value: `${codes.length} — 9, 10 и 11 класс` },
]

const faq: FaqItem[] = [
  {
    q: 'Какой промокод Умскул на информатику?',
    a: `Три: ${heroCode.code} для ЕГЭ в 11 классе, ${grade10.code} для 10 класса и INF9_SITEPROMO1_CC для ОГЭ в девятом. Каждый открывает бесплатный мини-курс и вводится в кабинете под значком билета, а не в поле промокода при оплате. На цену платного курса они не влияют — скидку считает корзина от количества предметов, промокод для неё не нужен.`,
  },
  {
    q: 'Что внутри бесплатного мини-курса по информатике?',
    a: `Самый содержательный здесь код за 10 класс: ${grade10.inside}. Для одиннадцатого школа обещает разбор базовых заданий экзамена — формулировка обтекаемая, что там окажется, узнаете при активации. Мой совет: если вы в одиннадцатом и с программированием пока туго, берите оба — коды по разным классам не конфликтуют.`,
  },
  {
    q: 'Сколько стоит курс по информатике в Умскул?',
    a: `${rub(course.price)} за год, зачёркнутая цена ${rub(course.priceOld)}, в рассрочку ${rub(course.perMonth)} в месяц. Цена такая же, как у любого другого годового курса школы — она не зависит от предмета. В паре с профильной математикой это ${rub(two.total)} за оба, то есть ${rub(two.perSubject)} за предмет.`,
  },
  {
    q: 'Нужна ли профильная математика вместе с информатикой?',
    a: 'На большинство ИТ-направлений — да, её требуют как второй профильный предмет, так что вопрос обычно решается за вас приёмной комиссией. Но есть и содержательная причина: часть заданий экзамена по информатике — это по сути комбинаторика и системы счисления, то есть математика в другой обёртке. Готовиться параллельно проще, и в Умскул это ещё и дешевле: два предмета дают скидку −15% автоматически.',
  },
  {
    q: 'Учат ли на курсе реально программировать?',
    a: 'Экзамен по информатике сдаётся за компьютером, и часть заданий закрывается написанием короткой программы вместо ручного разбора — поэтому курс, где не пишут код, для ЕГЭ бесполезен. Судить о конкретной программе стоит по бесплатному мини-курсу за 10 класс: он прямо заявлен как основы программирования, и по нему видно, действительно ли там пишут код или пересказывают теорию. Это ровно та проверка, ради которой стоит потратить вечер.',
  },
  {
    q: 'Когда начинать готовиться к информатике?',
    a: 'В десятом. Информатика — предмет, где решает не объём выученного, а наработанная скорость решения за компьютером, и она набирается практикой в течение долгого времени. Школа поощряет ранний старт скидкой до 30% за оплату сразу на два года, но начать ничего не стоит: код за десятый класс открывает мини-курс по основам программирования бесплатно.',
  },
]

export default function Page() {
  return (
    <ArticleShell
      meta={meta}
      lead={lead}
      author={anton}
      kicker="Личный опыт · Умскул 2026"
      related={otherUmschoolArticles(meta.slug)}
      relatedTitle="Другие разборы Умскула"
    >
      <PromoHero promo={heroCode} deepLink={course.path} autos={kitDiscounts} asOf={meta.updated} />

      <ArticleSection prose>
        <p>
          Сначала техническая правда про промокоды этой школы, потому что она экономит время.{' '}
          <strong>Код по информатике не даёт скидку.</strong> Он открывает отдельный бесплатный
          мини-курс и вводится в личном кабинете — по иконке с билетиком, не в корзину. Скидка на
          платный курс считается корзиной автоматически, от количества предметов, и код ей не нужен.
        </p>
        <p>
          Две независимые механики, обе доступны одновременно. Для информатики бесплатный курс
          важнее, чем для любого другого предмета, и ниже объясняю почему.
        </p>
        <p>
          Разбор всех кодов школы и скидок, для которых код не нужен, —{' '}
          <Link href="/articles/umschool-promokody">в отдельной статье</Link>.
        </p>
      </ArticleSection>

      <ArticleSection id="numbers" title="Информатика в Умскул: цифры">
        <ExamFacts facts={facts} />
      </ArticleSection>

      <ArticleSection id="codes" title="Три кода: ОГЭ, 10 и 11 класс">
        <FreeCourseTable
          deepLink={COUPONS_PATH}
          codes={codes}
          caption="Коды одноразовые и привязываются к аккаунту, но по разным классам не конфликтуют — можно взять и десятый, и одиннадцатый."
        />
        <div className="article-prose mt-6">
          <p>
            Здесь я советую нетипичное:{' '}
            <strong>берите код за десятый класс, даже если вы в одиннадцатом</strong>. Причина в
            формулировках. За одиннадцатый школа обещает «базовые задания экзамена» — что за ними,
            узнаете при активации. А за десятый заявлены <strong>основы программирования</strong>, и
            это именно то, по чему можно судить о курсе.
          </p>
          <p>
            Логика простая.{' '}
            <strong>
              ЕГЭ по информатике сдаётся за компьютером, и половина заданий закрывается написанием
              короткой программы вместо ручного разбора
            </strong>
            . Курс, где не пишут код, для этого экзамена бесполезен, каким бы полным ни был
            теоретический блок. Мини-курс по основам программирования показывает это за один вечер.
          </p>
        </div>
      </ArticleSection>

      <AuthorCard author={anton} />

      <ArticleSection id="what-matters" title="На что я смотрел как разработчик" prose>
        <p>
          Разберу критерий, который в описаниях курсов не встречается, а решает больше всего.{' '}
          <strong>Информатика на ЕГЭ — это не предмет знаний, а предмет скорости</strong>. Заданий
          много, время ограничено, и разница между 70 и 94 баллами — это чаще всего разница в том,
          за сколько минут человек решает типовую задачу, а не в том, знает ли он алгоритм.
        </p>
        <p>
          Отсюда единственный вопрос к любому курсу:{' '}
          <strong>сколько задач ребёнок решит сам и кто разберёт его ошибки</strong>. Не сколько
          вебинаров, не сколько часов теории. У <Aff to={course.path}>годового курса</Aff> с
          Викторией Ланской есть тренажёр, который подсвечивает слабые темы, и куратор в чате — на
          массовом потоке это разумный компромисс, но за вас задачи никто решать не будет.
        </p>
        <p>
          Второй момент, специфичный для больших школ.{' '}
          <strong>
            У одного предмета в Умскул может быть несколько преподавателей и несколько форматов
          </strong>
          , и отзывы, которые вы читаете, часто относятся не к тому курсу, который вы собираетесь
          купить. Прежде чем ориентироваться на чужие 94 балла, посмотрите, о каком именно
          преподавателе и формате идёт речь.
        </p>
      </ArticleSection>

      <ArticleSection id="pair" title="Информатика и профиль: цена в паре">
        <KitTable
          unitPrice={course.price}
          deepLink={course.path}
          highlight={2}
          caption={`Расчёт от цены годового курса ${rub(course.price)}. На ИТ-направления профильная математика требуется почти везде, так что это фактически обязательная пара.`}
        />
        <div className="article-prose mt-6">
          <p>
            Информатика плюс <Aff to={mathCourse.path}>профильная математика</Aff> —{' '}
            {rub(two.total)} за оба, или {rub(two.perSubject)} за предмет вместо {rub(course.price)}
            . Скидка применяется в корзине сама.
          </p>
          <p>
            И арифметическая странность, которую стоит проверить на своём наборе:{' '}
            <strong>
              четыре предмета стоят дешевле трёх — {rub(four.total)} против{' '}
              {rub(kitPrice(course.price, 3).total)}
            </strong>
            , потому что на четвёртом скидка прыгает с 15% до 50%. Для ИТ-набора «русский +
            математика + информатика» это ровно тот случай: три предмета, и четвёртый выходит
            дешевле, чем не брать его.
          </p>
        </div>
      </ArticleSection>

      <CtaBanner
        schoolId="umschool"
        schools={umschoolSchools}
        deepLink={course.path}
        title="Годовой курс ЕГЭ по информатике с Викторией Ланской"
        body="Бесплатный мини-курс по основам программирования открывается промокодом в личном кабинете. Скидка на годовой курс считается в корзине сама — от количества предметов в наборе."
        cta="Посмотреть цену курса →"
      />

      <ArticleSection id="early" title="Если до экзамена ещё два года">
        <AutoDiscountCards discounts={earlyDiscounts} deepLink={course.path} />
      </ArticleSection>

      <ArticleSection id="verdict" title="Что бы я сделал на вашем месте" prose>
        <p>
          <strong>Взять бесплатный код за десятый класс и посмотреть, пишут ли там код.</strong> Это
          единственный содержательный тест для курса по информатике, и он ничего не стоит.
        </p>
        <p>
          <strong>Считать не вебинары, а задачи.</strong> Балл на этом экзамене — производная от
          количества самостоятельно решённых задач и качества разбора ошибок. Всё остальное в
          описаниях курсов — оформление.
        </p>
        <p>
          <strong>Сразу закладывать пару с профилем.</strong> Её всё равно потребует приёмная
          комиссия, а в корзине она даёт скидку. И если предметов набирается три — посчитайте
          четыре, они дешевле.
        </p>
      </ArticleSection>

      <ArticleSection id="faq">
        <ArticleFaq items={faq} />
      </ArticleSection>
    </ArticleShell>
  )
}
