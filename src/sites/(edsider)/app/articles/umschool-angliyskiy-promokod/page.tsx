import type { Metadata } from 'next'
import Link from 'next/link'

import type { FactItem, FaqItem } from '../../../data/guides/types'
import { articleMetadata } from '../../../data/guides/metadata'
import { autoDiscount, codeFor, codesForSubject } from '../../../data/umschool/codes'
import { getUmschoolArticle, otherUmschoolArticles } from '../../../data/umschool/articles'
import { englishCourse, russianCourse } from '../../../data/umschool/courses'
import { elena } from '../../../data/umschool/authors'
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

const meta = getUmschoolArticle('umschool-angliyskiy-promokod')!

export const metadata: Metadata = articleMetadata(meta)

const course = englishCourse
const codes = codesForSubject('angliyskiy')
const heroCode = codeFor('angliyskiy', 11)!
const oge = codeFor('angliyskiy', 9)!
const kitDiscounts = [autoDiscount('kit4'), autoDiscount('kit2')]
const extras = [autoDiscount('final-essay'), autoDiscount('free-lesson')]

const two = kitPrice(course.price, 2)
const four = kitPrice(course.price, 4)

const lead =
  'Десять лет я преподавала английский в школе, потом ушла в переводы. Когда дочери понадобилась подготовка к ЕГЭ, я знала, что искать, и это не «носитель языка» и не «интенсив за три месяца». Искала я устную часть — раздел, который на курсах проходят последним, по остаточному принципу, и на котором теряют баллы люди, свободно говорящие по-английски. Бесплатный мини-курс Умскула оказался редким исключением: в нём есть все пять разделов экзамена, включая говорение, и стоит он ноль рублей.'

const facts: FactItem[] = [
  { label: 'Годовой курс', value: rub(course.price) },
  { label: 'С русским в паре', value: `${rub(two.perSubject)} / шт` },
  { label: 'Мини-курс по коду', value: '0 ₽' },
  { label: 'Разделов в мини-курсе', value: '5 + пробник' },
]

const faq: FaqItem[] = [
  {
    q: 'Какой промокод Умскул на английский язык?',
    a: `Два: ${heroCode.code} для ЕГЭ в 11 классе и ${oge.code} для ОГЭ в девятом. Десятого класса в линейке по английскому нет — это один из немногих предметов, где школа не завела код на предвыпускной год. Оба кода открывают бесплатный мини-курс и активируются в личном кабинете через билетик, а не в корзине.`,
  },
  {
    q: 'Что внутри бесплатного мини-курса по английскому?',
    a: `Для 11 класса — ${heroCode.inside}. Это редкость: обычно бесплатные материалы ограничиваются грамматикой и лексикой, а аудирование и говорение оставляют платной части. Здесь есть все пять разделов и полный пробник. Для ОГЭ в девятом классе — ${oge.inside}.`,
  },
  {
    q: 'Сколько стоит курс по английскому в Умскул?',
    a: `${rub(course.price)} за год, зачёркнутая цена ${rub(course.priceOld)}, в рассрочку ${rub(course.perMonth)} в месяц. Цена не зависит от предмета — столько же стоит математика или история. В паре с русским это ${rub(two.total)} за оба, то есть ${rub(two.perSubject)} за предмет.`,
  },
  {
    q: 'Как готовиться к устной части?',
    a: 'Устная часть сдаётся отдельно и проверяется по формальным критериям: уложиться во время, ответить на все пункты задания, выдержать структуру. Свободное владение языком здесь помогает меньше, чем кажется, — регулярно теряют баллы дети, которые говорят бегло, но не следят за структурой ответа и таймингом. Готовиться надо с записью себя на диктофон и с разбором по критериям, а не разговорной практикой вообще.',
  },
  {
    q: 'Кто ведёт курс по английскому?',
    a: 'Шерин Келли. По описанию курс охватывает все пять разделов экзамена, включая устную часть, — на это стоит смотреть в первую очередь, потому что курсы, где говорение отдано на самостоятельную проработку, для ЕГЭ подходят плохо. Оценить манеру подачи проще всего по бесплатному мини-курсу: он идёт на той же платформе.',
  },
  {
    q: 'Имеет ли смысл курс, если у ребёнка хороший английский?',
    a: 'Смысл смещается: не учить язык, а учить формат. Ребёнок с уровнем B2 спокойно теряет баллы на письме, потому что не выдержал структуру, и на говорении, потому что не уложился во время. Это натаскиваемо и стоит недорого по сравнению с уровнем языка. Если язык действительно сильный, я бы сначала прошла бесплатный мини-курс с пробником и посмотрела на результат — возможно, годовой курс не нужен вовсе.',
  },
]

export default function Page() {
  return (
    <ArticleShell
      meta={meta}
      lead={lead}
      author={elena}
      kicker="Личный опыт · Умскул 2026"
      related={otherUmschoolArticles(meta.slug)}
      relatedTitle="Другие разборы Умскула"
    >
      <PromoHero promo={heroCode} deepLink={course.path} autos={kitDiscounts} asOf={meta.updated} />

      <ArticleSection prose>
        <p>
          Сразу проясню механику, потому что она у этой школы нетипичная.{' '}
          <strong>Промокод по английскому не даёт скидку — он открывает бесплатный курс.</strong>{' '}
          Вводится в личном кабинете, по иконке с билетиком, а не в корзину. Скидка на платный курс
          у Умскула считается сама, от количества предметов, и промокод для неё не нужен.
        </p>
        <p>
          Обе вещи независимы, поэтому получить можно и то и другое. Начну с бесплатного, потому что
          в случае английского оно неожиданно содержательное.
        </p>
        <p>
          Про остальные предметы и про скидки, которые школа применяет сама, —{' '}
          <Link href="/articles/umschool-promokody">в сводном разборе</Link>.
        </p>
      </ArticleSection>

      <ArticleSection id="numbers" title="Английский в Умскул: цифры">
        <ExamFacts facts={facts} />
      </ArticleSection>

      <ArticleSection id="codes" title="Два кода: ОГЭ и ЕГЭ">
        <FreeCourseTable
          deepLink={COUPONS_PATH}
          codes={codes}
          caption="Кода за 10 класс по английскому у школы нет — это один из немногих предметов, где линейка неполная."
        />
        <div className="article-prose mt-6">
          <p>
            На состав курса за одиннадцатый класс я обратила внимание сразу, и это профессиональная
            деформация.{' '}
            <strong>
              Аудирование, чтение, грамматика, лексика и устная речь — все пять разделов плюс
              пробник
            </strong>
            . В бесплатных материалах обычно дают грамматику и лексику: их удобно записать один раз
            и раздавать. Аудирование и говорение требуют работы и потому почти всегда остаются за
            платной стеной.
          </p>
          <p>
            Пробник в конце тоже не формальность.{' '}
            <strong>
              Он показывает не уровень языка, а то, где ребёнок теряет баллы на формате
            </strong>
            , — а это разные вещи, и вторая гораздо лучше поддаётся тренировке.
          </p>
        </div>
      </ArticleSection>

      <AuthorCard author={elena} />

      <ArticleSection id="speaking" title="Про устную часть, которую все откладывают" prose>
        <p>
          Скажу вещь, которая расходится с интуицией родителей.{' '}
          <strong>
            На устной части регулярно теряют баллы дети, которые бегло говорят по-английски
          </strong>
          . Не потому, что плохо знают язык, а потому, что раздел проверяется по формальным
          критериям: уложиться во время, ответить на все пункты задания, выдержать структуру.
        </p>
        <p>
          Дальше всё предсказуемо. Свободный ребёнок начинает импровизировать, увлекается, не
          закрывает третий пункт задания и теряет балл, которого не терял бы, отвечая по шаблону.{' '}
          <strong>Готовиться к говорению нужно с секундомером и записью себя на диктофон</strong>,
          разбирая ответ по критериям, — а не «разговорной практикой» вообще.
        </p>
        <p>
          Поэтому первое, что я советую проверить в любом курсе:{' '}
          <strong>есть ли в нём говорение как отдельный блок с проверкой</strong>. У{' '}
          <Aff to={course.path}>годового курса с Шерин Келли</Aff> все пять разделов заявлены, и это
          видно уже по бесплатному мини-курсу — он идёт на той же платформе и в той же логике.
        </p>
      </ArticleSection>

      <ArticleSection id="pair" title="Цена в комплекте">
        <KitTable
          unitPrice={course.price}
          deepLink={course.path}
          highlight={2}
          caption={`Расчёт от цены годового курса ${rub(course.price)}. Английский идёт минимум с обязательным русским — это уже комплект со скидкой −15%.`}
        />
        <div className="article-prose mt-6">
          <p>
            Английский не сдают в одиночку: рядом всегда обязательный{' '}
            <Aff to={russianCourse.path}>русский</Aff>, а на лингвистические и международные
            направления часто ещё обществознание или история. Это комплект, и{' '}
            <strong>цена предмета падает до {rub(two.perSubject)}</strong> без всякого кода.
          </p>
          <p>
            И деталь, которая переворачивает расчёт:{' '}
            <strong>
              четыре предмета стоят дешевле трёх — {rub(four.total)} против{' '}
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
        title="Годовой курс ЕГЭ по английскому с Шерин Келли"
        body="Бесплатный мини-курс со всеми пятью разделами экзамена и пробником открывается промокодом в личном кабинете. Скидка на годовой курс считается в корзине отдельно."
        cta="Посмотреть цену курса →"
      />

      <ArticleSection id="extras" title="Что прилагается к комплекту">
        <AutoDiscountCards discounts={extras} deepLink={course.path} />
        <div className="article-prose mt-6">
          <p>
            Первый пункт стоит проверить всем, кто сдаёт английский:{' '}
            <strong>
              русский плюс любой второй предмет — и подготовка к итоговому сочинению подключается
              бесплатно
            </strong>
            . Английский плюс русский под это условие подходит, а декабрьский допуск иначе пришлось
            бы покупать отдельно.
          </p>
        </div>
      </ArticleSection>

      <ArticleSection id="verdict" title="Что бы я посоветовала" prose>
        <p>
          <strong>Пройти бесплатный мини-курс с пробником до всякой оплаты.</strong> Он покажет не
          уровень языка, а места, где ребёнок теряет баллы на формате. Если пробник написан хорошо,
          возможно, годовой курс вам и не нужен — нужен репетитор на два раздела.
        </p>
        <p>
          <strong>Проверять наличие говорения как отдельного блока.</strong> Курс без него для ЕГЭ
          неполон, каким бы хорошим ни был по грамматике.
        </p>
        <p>
          <strong>Не путать уровень языка с баллом.</strong> Это натаскиваемые вещи разного порядка,
          и вторая тренируется быстрее и дешевле.
        </p>
      </ArticleSection>

      <ArticleSection id="faq">
        <ArticleFaq items={faq} />
      </ArticleSection>
    </ArticleShell>
  )
}
