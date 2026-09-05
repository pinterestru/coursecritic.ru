import type { Metadata } from 'next'
import Link from 'next/link'

import type { FactItem, FaqItem } from '../../../data/guides/types'
import { articleMetadata } from '../../../data/guides/metadata'
import { autoDiscount, codeFor, codesForSubject } from '../../../data/umschool/codes'
import { getUmschoolArticle, otherUmschoolArticles } from '../../../data/umschool/articles'
import { biologyCourse, chemistryCourse, russianCourse } from '../../../data/umschool/courses'
import { olga } from '../../../data/umschool/authors'
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

const meta = getUmschoolArticle('umschool-biologiya-promokod')!

export const metadata: Metadata = articleMetadata(meta)

const course = biologyCourse
const codes = codesForSubject('biologiya')
const heroCode = codeFor('biologiya', 11)!
const grade10 = codeFor('biologiya', 10)!
const kitDiscounts = [autoDiscount('kit4'), autoDiscount('kit2')]
const extras = [autoDiscount('final-essay'), autoDiscount('tax')]

const three = kitPrice(course.price, 3)
const four = kitPrice(course.price, 4)

const lead =
  'Дочь поступала в медицинский, а это значит биология и химия — предметы, где неправильно оформленная задача стоит балла, а балл стоит бюджетного места. Считала я и деньги, и пользу. С деньгами вышла история, которую я до сих пор пересказываю знакомым: набор для медвуза — это ровно три предмета, а четыре в Умскул стоят дешевле трёх. С пользой всё оказалось проще: бесплатный мини-курс по промокоду отдаёт как раз генетику — тему, на которой сыплется больше всего людей.'

const facts: FactItem[] = [
  { label: 'Годовой курс', value: rub(course.price) },
  { label: 'Три предмета', value: rub(three.total) },
  { label: 'Четыре предмета', value: rub(four.total) },
  { label: 'Мини-курс по коду', value: '0 ₽' },
]

const faq: FaqItem[] = [
  {
    q: 'Какой промокод Умскул на биологию?',
    a: `Три: ${heroCode.code} для ЕГЭ в 11 классе, ${grade10.code} для 10 класса и BIO9_SITEPROMO1_CC для ОГЭ в девятом. Каждый открывает бесплатный мини-курс своего уровня и вводится не при оплате, а в кабинете — там для него отдельное окно под билетиком. На цену платного курса коды не влияют: скидку считает корзина от количества предметов.`,
  },
  {
    q: 'Что внутри бесплатного мини-курса по биологии?',
    a: `Для 11 класса — ${heroCode.inside}. Выбор темы для бесплатного курса тут показательный: генетика даёт задание №28, одно из самых дорогих во второй части, и теряют на нём чаще всего не из-за незнания, а из-за оформления. Для 10 класса программа другая — ${grade10.inside}.`,
  },
  {
    q: 'Сколько стоит курс по биологии в Умскул?',
    a: `${rub(course.price)} за год, зачёркнутая цена ${rub(course.priceOld)}, в рассрочку ${rub(course.perMonth)} в месяц. Цена одинаковая у всех годовых курсов школы. Для медицинского набора — русский, биология, химия — три курса обойдутся в ${rub(three.total)}, а четыре в ${rub(four.total)}, то есть дешевле.`,
  },
  {
    q: 'Почему четыре предмета дешевле трёх?',
    a: `Потому что скидка за комплект скачкообразная: два-три предмета дают −15%, а четыре — сразу −50%. Три курса выходят в ${rub(three.total)}, четыре — в ${rub(four.total)}. Разница ${rub(three.total - four.total)} в пользу большего набора. Для медиков это особенно актуально: базовый набор ровно трёхпредметный, и четвёртым логично добавить то, что и так пригодится, — например, второй профильный или запасной предмет.`,
  },
  {
    q: 'Кто ведёт курс по биологии?',
    a: 'Жанна Казанская. В отзывах отдельно отмечают разбор генетики и оформления задания №28 — то есть ровно того, на чём теряют баллы чаще всего. Для биологии это правильный акцент: содержательно предмет знают многие, а баллы уходят на формальных требованиях к записи решения.',
  },
  {
    q: 'Достаточно ли курса для поступления в медицинский?',
    a: 'Курс даёт систему и разбор формата, но проходные баллы в медицинские вузы высокие, и на верхнем крае решает объём самостоятельной работы. Массовый курс уверенно доводит до крепких 75–85 и заметно хуже работает выше: там нужна адресная работа с вашими конкретными ошибками. Мой практический совет — брать курс как каркас и добавлять к нему регулярное решение задач с проверкой, а не рассчитывать, что формат сделает всё сам.',
  },
]

export default function Page() {
  return (
    <ArticleShell
      meta={meta}
      lead={lead}
      author={olga}
      kicker="Личный опыт · Умскул 2026"
      related={otherUmschoolArticles(meta.slug)}
      relatedTitle="Другие разборы Умскула"
    >
      <PromoHero promo={heroCode} deepLink={course.path} autos={kitDiscounts} asOf={meta.updated} />

      <ArticleSection prose>
        <p>
          Сначала о том, что экономит вечер поисков.{' '}
          <strong>Промокод по биологии не снижает цену курса.</strong> Он открывает отдельный
          бесплатный мини-курс и вводится не в корзину, а по иконке с билетиком в личном кабинете.
          Скидка на платное у Умскула считается сама, от количества предметов в корзине, и код для
          неё не нужен.
        </p>
        <p>
          Обе вещи можно получить одновременно, и обе я разбираю ниже: сначала что вы получите
          бесплатно прямо сейчас, потом — как считается цена медицинского набора.
        </p>
        <p>
          Как устроены скидки школы целиком, я разбирала{' '}
          <Link href="/articles/umschool-promokody">в сводной статье про промокоды</Link>.
        </p>
      </ArticleSection>

      <ArticleSection id="numbers" title="Биология в Умскул: цифры">
        <ExamFacts facts={facts} />
        <div className="article-prose mt-6">
          <p>
            Вторая и третья цифры — это не опечатка.{' '}
            <strong>
              Четыре годовых курса стоят {rub(four.total)}, а три — {rub(three.total)}
            </strong>
            . Ниже объясняю, почему так и что с этим делать семье, которой нужен ровно
            трёхпредметный набор.
          </p>
        </div>
      </ArticleSection>

      <ArticleSection id="codes" title="Три кода: ОГЭ, 10 и 11 класс">
        <FreeCourseTable
          deepLink={COUPONS_PATH}
          codes={codes}
          caption="Программы в кодах разные, берите свой класс. Коды одноразовые, но не конфликтуют — химию можно забрать параллельно."
        />
        <div className="article-prose mt-6">
          <p>
            Тему для бесплатного курса школа выбрала не случайно.{' '}
            <strong>
              Генетика — это задание №28, одно из самых дорогих во второй части, и теряют на нём
              чаще всего не из-за незнания, а из-за оформления
            </strong>
            : решение верное, запись не по требованиям, балл снят. В мини-курсе разбирают именно
            терминологию и правильное оформление задач.
          </p>
          <p>
            За десятый класс дают другое, но не менее полезное: жизненный цикл клетки — интерфазу,
            митоз и мейоз — за три занятия. Это фундамент, без которого генетика в одиннадцатом не
            встанет.
          </p>
        </div>
      </ArticleSection>

      <AuthorCard author={olga} />

      <ArticleSection id="four-vs-three" title="Ловушка медицинского набора" prose>
        <p>
          Вот расчёт, из-за которого я переделывала таблицу трижды.{' '}
          <strong>
            Стандартный набор для медвуза — русский, биология, химия — это ровно три предмета
          </strong>
          . Три курса в Умскул стоят {rub(three.total)}, потому что на двух-трёх предметах скидка
          составляет −15%.
        </p>
        <p>
          А на четвёртом она прыгает до −50%, и{' '}
          <strong>
            четыре курса выходят в {rub(four.total)} — на {rub(three.total - four.total)} дешевле,
            чем три
          </strong>
          . Больше предметов за меньшие деньги.
        </p>
        <p>
          Что с этим делать практически.{' '}
          <strong>
            Добавьте четвёртым предметом то, что реально может пригодиться: запасной для другого
            направления или профильную математику
          </strong>
          . Даже если четвёртый курс останется недопройденным, вы всё равно заплатите меньше. Я
          добавила математику — дочь ей не воспользовалась, и это всё равно вышло дешевле, чем
          купить три предмета.
        </p>
      </ArticleSection>

      <ArticleSection id="kit" title="Цена набора">
        <KitTable
          unitPrice={course.price}
          deepLink={course.path}
          caption={`Расчёт от цены годового курса ${rub(course.price)}. Скидка применяется в корзине автоматически: поле промокода при этом остаётся пустым.`}
        />
        <div className="article-prose mt-6">
          <p>
            Медицинский набор целиком: <Aff to={russianCourse.path}>русский</Aff>,{' '}
            <Aff to={course.path}>биология</Aff> и{' '}
            <Aff to={chemistryCourse.path}>химия с Богданом Чагиным</Aff>. Плюс четвёртый предмет,
            который делает всё это дешевле.
          </p>
        </div>
      </ArticleSection>

      <CtaBanner
        schoolId="umschool"
        schools={umschoolSchools}
        deepLink={course.path}
        title="Годовой курс ЕГЭ по биологии с Жанной Казанской"
        body="Бесплатный мини-курс по генетике и заданию №28 открывается промокодом в личном кабинете. Скидка на годовой курс считается в корзине сама — от количества предметов в наборе."
        cta="Посмотреть цену курса →"
      />

      <ArticleSection id="extras" title="Что ещё снижает итог">
        <AutoDiscountCards discounts={extras} deepLink={course.path} />
        <div className="article-prose mt-6">
          <p>
            Про вычет для медицинского набора отдельно.{' '}
            <strong>
              Возврат за обучение ребёнка положен только при очной форме обучения — уточните это в
              договоре до оплаты — и ограничен 110 000 ₽ в год, то есть {rub(14_300)}
            </strong>
            . Комплект из четырёх предметов за {rub(four.total)} в лимит укладывается — вернётся{' '}
            {rub(Math.round((four.total * 13) / 100))}. А вот если вы платите за двоих детей, лимит
            считается на каждого отдельно, и это часто упускают.
          </p>
        </div>
      </ArticleSection>

      <ArticleSection id="verdict" title="Что бы я сделала на вашем месте" prose>
        <p>
          <strong>Забрать бесплатные коды по биологии и химии в один вечер.</strong> Оба ничего не
          стоят, оба показывают преподавателя, у которого ребёнок будет учиться год. Для
          медицинского набора это принципиально: здесь цена ошибки — не деньги, а год.
        </p>
        <p>
          <strong>Пересчитать набор на четыре предмета.</strong> Три предмета в этой школе покупать
          невыгодно ни при каком раскладе, а медицинский набор ровно трёхпредметный. Проверьте
          разницу в корзине сами — она {rub(three.total - four.total)}.
        </p>
        <p>
          <strong>Не рассчитывать, что курс закроет верхний диапазон.</strong> Массовый формат
          уверенно доводит до 75–85, а проходные в медвузы выше. Курс — это каркас; баллы наверху
          берутся объёмом самостоятельного решения с проверкой.
        </p>
      </ArticleSection>

      <ArticleSection id="faq">
        <ArticleFaq items={faq} />
      </ArticleSection>
    </ArticleShell>
  )
}
