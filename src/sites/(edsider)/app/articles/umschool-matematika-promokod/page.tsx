import type { Metadata } from 'next'
import Link from 'next/link'

import type { FactItem, FaqItem } from '../../../data/guides/types'
import { articleMetadata } from '../../../data/guides/metadata'
import { autoDiscount, codeFor, codesForSubject } from '../../../data/umschool/codes'
import { getUmschoolArticle, otherUmschoolArticles } from '../../../data/umschool/articles'
import { mathCourse, physicsCourse } from '../../../data/umschool/courses'
import { sergey } from '../../../data/umschool/authors'
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

const meta = getUmschoolArticle('umschool-matematika-promokod')!

export const metadata: Metadata = articleMetadata(meta)

const course = mathCourse
const codes = codesForSubject('matematika')
const heroCode = codeFor('matematika', 11)!
const oge = codeFor('matematika', 9)!
const kitDiscounts = [autoDiscount('kit4'), autoDiscount('kit2')]
const earlyDiscounts = [autoDiscount('years23'), autoDiscount('free-lesson')]

const two = kitPrice(course.price, 2)
const three = kitPrice(course.price, 3)
const four = kitPrice(course.price, 4)

const lead =
  'Я двадцать лет считаю сметы, поэтому к выбору курсов подошёл как к закупке: сначала таблица, потом деньги. Сын сдавал профиль и физику, и первое, что я обнаружил, — у Умскула математика стоит ровно столько же, сколько английский или история. Школа продаёт не предмет, а место в потоке, и вся арифметика скидок растёт из этого. Второе открытие было приятнее: промокод по математике открывает полноценный мини-курс бесплатно, и посмотреть Шарафиева можно до того, как платить.'

const facts: FactItem[] = [
  { label: 'Годовой курс', value: rub(course.price) },
  { label: 'С физикой в паре', value: `${rub(two.perSubject)} / шт` },
  { label: 'Мини-курс по коду', value: '0 ₽' },
  { label: 'Оценка курса', value: `${course.rating} · ${course.reviews.toLocaleString('ru-RU')}` },
]

const faq: FaqItem[] = [
  {
    q: 'Какой промокод Умскул на математику?',
    a: `Пять кодов, по одному на класс с седьмого по одиннадцатый. Для ЕГЭ по профильной математике в 11 классе — ${heroCode.code}, для 10 класса — MATH10_SITEPROMO1_CC, для ОГЭ в девятом — ${oge.code}. Все они открывают бесплатный мини-курс своего уровня и вводятся в кабинете — там, где значок билета, — а корзины не касаются. Скидку на платный курс они не дают: её считает корзина автоматически, от количества предметов.`,
  },
  {
    q: 'Что внутри бесплатного курса по математике?',
    a: `Для 11 класса — ${heroCode.inside}: то есть блок, с которого начинается вторая часть и на котором сыплется больше всего людей. Для ОГЭ в девятом классе программа шире — ${oge.inside}. Внутри теория, практика и пробник, а не запись вебинара. Код одноразовый, но по разным классам коды разные, и активировать можно несколько.`,
  },
  {
    q: 'Сколько стоит курс по математике в Умскул?',
    a: `${rub(course.price)} за год, зачёркнутая цена на витрине — ${rub(course.priceOld)}, в рассрочку ${rub(course.perMonth)} в месяц. Столько же стоит любой другой годовой курс школы. В паре с физикой выходит ${rub(two.total)} за оба, то есть ${rub(two.perSubject)} за предмет; в комплекте из четырёх — ${rub(four.perSubject)} за предмет.`,
  },
  {
    q: 'Есть ли курс по базовой математике?',
    a: 'В линейке кодов и в списке годовых курсов у школы стоит профильная математика — она нужна на технические и экономические направления. Базовую сдают те, кому математика на поступлении не нужна, и готовиться к ней год за сорок пять тысяч экономически бессмысленно: там другой порог и другой объём. Если ребёнку нужна база, разумнее взять бесплатный мини-курс, посмотреть на пробник и дальше решать по результату.',
  },
  {
    q: 'Кто ведёт курс по математике?',
    a: `Артур Шарафиев — самый узнаваемый преподаватель школы, и в отзывах его разборы второй части хвалят чаще всего, включая те отзывы, где школу в целом ругают. Это важный сигнал: у Умскула преподаватели неравномерны, и претензии обычно адресные — «по математике топ, по второму предмету слабее». Поэтому смотреть надо не на школу целиком, а на конкретный курс, и мини-курс по промокоду для этого и нужен.`,
  },
  {
    q: 'Когда начинать готовиться к профилю?',
    a: `Практический ответ — в десятом, а не в одиннадцатом: вторая часть профиля не набивается за девять месяцев с нуля. Школа это поощряет скидкой до 30% при оплате подготовки сразу на два года, а начать можно бесплатно — код MATH10_SITEPROMO1_CC открывает мини-курс для десятого класса. Сначала посмотрите формат, потом считайте деньги.`,
  },
]

export default function Page() {
  return (
    <ArticleShell
      meta={meta}
      lead={lead}
      author={sergey}
      kicker="Личный опыт · Умскул 2026"
      related={otherUmschoolArticles(meta.slug)}
      relatedTitle="Другие разборы Умскула"
    >
      <PromoHero promo={heroCode} deepLink={course.path} autos={kitDiscounts} asOf={meta.updated} />

      <ArticleSection prose>
        <p>
          Сначала главное, что путает всех.{' '}
          <strong>Промокод по математике не снижает цену курса ни на рубль.</strong> Он открывает
          отдельный бесплатный мини-курс — с теорией, практикой и пробником — и вводится не в
          корзину, а по иконке с билетиком в личном кабинете. Скидка на платный годовой курс у
          Умскула считается сама, в корзине, от количества предметов.
        </p>
        <p>
          Звучит как придирка, но именно на этом теряют деньги: человек час ищет код, вставляет его
          в корзину, получает отказ и уходит платить полную цену — вместо того чтобы добавить второй
          предмет и получить −15% без всякого кода.
        </p>
        <p>
          Полный расклад по скидкам школы, включая те, что применяются сами, я собрал{' '}
          <Link href="/articles/umschool-promokody">в отдельном разборе</Link>.
        </p>
      </ArticleSection>

      <ArticleSection id="numbers" title="Математика в Умскул: цифры">
        <ExamFacts facts={facts} />
      </ArticleSection>

      <ArticleSection id="codes" title="Пять кодов: от седьмого класса до второй части">
        <FreeCourseTable
          deepLink={COUPONS_PATH}
          codes={codes}
          caption="Берите код своего класса — программы в них разные, а повторно активировать один и тот же код нельзя."
        />
        <div className="article-prose mt-6">
          <p>
            Я бы обратил внимание на распределение тем, оно показательное.{' '}
            <strong>
              В одиннадцатом классе бесплатно отдают тригонометрию, в девятом — степени, корни,
              уравнения и треугольники с пробником
            </strong>
            . Это не случайные блоки: тригонометрия — вход во вторую часть профиля, а перечисленное
            для ОГЭ покрывает добрую половину первой части.
          </p>
          <p>
            С седьмым и восьмым классом ожидания стоит опустить.{' '}
            <strong>Там формат другой — три коротких урока про школьные контрольные</strong>, без
            пробника и без экзаменационной логики. Полезно, но это не подготовка к ОГЭ, а
            профилактика тройки в четверти.
          </p>
        </div>
      </ArticleSection>

      <AuthorCard author={sergey} />

      <ArticleSection id="course" title="Годовой курс и почему смотрят на преподавателя" prose>
        <p>
          <Aff to={course.path}>Годовой курс ЕГЭ по профильной математике</Aff> ведёт{' '}
          <strong>{course.teacher}</strong> — {course.teacherNote.toLowerCase()}. Оценка курса на
          сайте школы — {course.rating} при {course.reviews.toLocaleString('ru-RU')} оценках; это
          площадка самой школы, поэтому я смотрел на неё как на ориентир, а не как на измерение.
        </p>
        <p>
          Что меня в отзывах зацепило по-настоящему — их адресность.{' '}
          <strong>
            Люди хвалят и ругают не школу, а конкретных преподавателей: «по математике с Шарафиевым
            топ, подача структурная, разборы детальные; по второму предмету — слабее»
          </strong>
          . Это типичная картина для больших потоковых школ, и вывод из неё практический: покупать
          надо курс, а не бренд. Мини-курс по промокоду позволяет проверить конкретно того человека,
          у которого ребёнок будет учиться.
        </p>
        <p>
          Второй фактор — поток. Курс массовый, и{' '}
          <strong>индивидуального внимания там меньше, чем у репетитора</strong>: есть куратор в
          чате, есть кнопка «Непонятно» прямо на уроке, но разбирать персонально вашу ошибку в вашей
          задаче никто не обязан. Для ребёнка, который умеет задавать вопросы, это работает. Для
          того, кто молча тонет, — нет, и здесь я бы не экономил на репетиторе.
        </p>
      </ArticleSection>

      <ArticleSection id="pair" title="Математика и физика: почему их берут вместе">
        <KitTable
          unitPrice={course.price}
          deepLink={course.path}
          highlight={2}
          caption={`Расчёт от цены годового курса ${rub(course.price)}. Профиль плюс физика — самая частая пара на технических направлениях, и это уже комплект со скидкой −15%.`}
        />
        <div className="article-prose mt-6">
          <p>
            Мы брали два предмета: профиль и{' '}
            <Aff to={physicsCourse.path}>физику с Максом Теслой</Aff>. Вместе — {rub(two.total)}, то
            есть {rub(two.perSubject)} за предмет вместо {rub(course.price)}.
          </p>
          <p>
            И вот арифметика, которую я тогда не заметил, а зря.{' '}
            <strong>
              Четыре предмета в этой школе стоят дешевле трёх: {rub(four.total)} против{' '}
              {rub(three.total)}
            </strong>
            , потому что на четвёртом скидка прыгает с 15% до 50%. Если ваш набор — три предмета,
            добавьте четвёртый: заплатите меньше. Ровно тот случай, когда интуиция подводит, а
            таблица нет.
          </p>
        </div>
      </ArticleSection>

      <CtaBanner
        schoolId="umschool"
        schools={umschoolSchools}
        deepLink={course.path}
        title="Годовой курс ЕГЭ по профильной математике с Артуром Шарафиевым"
        body="Промокод открывает бесплатный мини-курс и вводится в личном кабинете. Скидка на годовой курс к нему отношения не имеет — она считается в корзине от количества предметов."
        cta="Посмотреть цену курса →"
      />

      <ArticleSection id="early" title="Если до экзамена ещё два года">
        <AutoDiscountCards discounts={earlyDiscounts} deepLink={course.path} />
        <div className="article-prose mt-6">
          <p>
            Профиль — предмет, который не набирается за девять месяцев, и школа это знает: за оплату
            подготовки сразу на два года она даёт до 30%, вдвое больше комплектной скидки.{' '}
            <strong>
              Для десятиклассника с определившимся набором это самая выгодная механика школы
            </strong>
            . Для девятиклассника — рискованная: набор предметов на ЕГЭ у половины детей меняется, а
            возврат части заказа пересчитывает скидку на остаток.
          </p>
        </div>
      </ArticleSection>

      <ArticleSection id="verdict" title="Порядок, в котором я бы это делал" prose>
        <p>
          <strong>Первое — бесплатный мини-курс.</strong> Ноль рублей, один вечер, и вы видите
          конкретного преподавателя, а не описание на лендинге. Для профиля это особенно осмысленно:
          математика — предмет, где манера объяснять решает больше, чем программа.
        </p>
        <p>
          <strong>Второе — количество предметов, а не цена.</strong> Считайте набор до того, как
          откроете корзину: от него зависит весь чек, и три предмета брать невыгодно ни при каком
          раскладе.
        </p>
        <p>
          <strong>Третье — честный вопрос про формат.</strong> Поток или репетитор — это не про
          деньги, а про то, умеет ли ребёнок задавать вопросы. Сорок пять тысяч за курс, который он
          будет молча смотреть в фоне, дороже репетитора вдвое.{' '}
          <Aff to={course.path}>Программа курса</Aff> и{' '}
          <Aff to="umschool.net/reviews/">отзывы учеников</Aff> помогут, но ответ на этот вопрос
          знаете только вы.
        </p>
      </ArticleSection>

      <ArticleSection id="faq">
        <ArticleFaq items={faq} />
      </ArticleSection>
    </ArticleShell>
  )
}
