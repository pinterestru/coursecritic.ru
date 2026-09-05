import type { Metadata } from 'next'

import type { FactItem, FaqItem } from '../../../data/guides/types'
import { articleMetadata } from '../../../data/guides/metadata'
import { autoDiscount, codeFor, moneyCode } from '../../../data/umschool/codes'
import { getUmschoolArticle, otherUmschoolArticles } from '../../../data/umschool/articles'
import { mathCourse } from '../../../data/umschool/courses'
import { pavel } from '../../../data/umschool/authors'
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
import KitTable from '../../../components/articles/KitTable'
import PromoHero from '../../../components/articles/PromoHero'

const meta = getUmschoolArticle('umschool-promokod-fm2025')!

export const metadata: Metadata = articleMetadata(meta)

const heroCode = codeFor('matematika', 11)!
const kitDiscounts = [autoDiscount('kit4'), autoDiscount('kit2'), autoDiscount('single')]

const UNIT = mathCourse.price
const CODE_SAVING = Math.round((UNIT * moneyCode.percent) / 100)
const four = kitPrice(UNIT, 4)
const one = kitPrice(UNIT, 1)
const KIT_SAVING = one.perSubject - four.perSubject

const lead =
  'Раз в месяц я перепроверяю таблицу скидок онлайн-школ, и запрос «промокод Умскул на скидку» — один из самых частых, на которые честный ответ звучит неприятно. У школы есть ровно один код, который даёт деньги, а не бесплатный курс, — FM2025 на −12%. Ниже разбираю, что это за код, жив ли он и почему я советую потратить на него тридцать секунд, а не тридцать минут поиска.'

const facts: FactItem[] = [
  { label: 'Код даёт', value: moneyCode.label },
  { label: 'Если бы применился', value: rub(CODE_SAVING) },
  { label: 'Комплект даёт', value: `−${rub(KIT_SAVING)} / предмет` },
  { label: 'Во сколько раз больше', value: `в ${Math.round(KIT_SAVING / CODE_SAVING)} раза` },
]

const faq: FaqItem[] = [
  {
    q: 'Работает ли промокод FM2025 в 2026 году?',
    a: 'Мы этого не подтверждали, и честнее сказать прямо: код настоящий и набрал больше тысячи применений, но купонные площадки уже помечают его истёкшим. Проверка занимает тридцать секунд — соберите корзину, нажмите «У меня есть промокод», вставьте код и посмотрите, изменилась ли сумма. Если не примется, вы ничего не потеряли: автоматическая скидка за комплект применяется независимо от кода и в любом случае больше.',
  },
  {
    q: 'Куда вводить промокод FM2025?',
    a: 'Именно в корзину — этим он и отличается от остальных кодов школы. Наберите курсы в разделе «Магазин», перейдите в корзину, нажмите «У меня есть промокод» и вставьте код в поле. Предметные коды вида MATH11_SITEPROMO1_CC туда вставлять бесполезно: они вводятся по иконке с билетиком в личном кабинете и открывают бесплатный мини-курс, а не снижают цену.',
  },
  {
    q: 'На что действует FM2025?',
    a: 'На месячный курс или пакет занятий, без привязки к предмету и классу — это единственный универсальный код школы. Годовой курс в его описании не значится, что важно: основная выручка школы идёт как раз с годовых курсов, и скидка на них устроена через корзину, а не через коды.',
  },
  {
    q: 'Складывается ли FM2025 с автоматической скидкой?',
    a: 'Школа этого не подтверждает, и мы исходим из того, что нет: на один заказ действует один промокод, а автоматические скидки за комплект применяются сами и, скорее всего, заменяют собой процент кода, а не суммируются с ним. Проверить можно только в корзине — посмотрите, какая сумма получается с кодом и без него.',
  },
  {
    q: 'Почему у Умскула так мало промокодов на скидку?',
    a: `Потому что школа перенесла всю скидочную механику в корзину. Цена пересчитывается от количества предметов и лет оплаты автоматически, и код в этой схеме просто не нужен: −50% за четыре предмета — это ${rub(KIT_SAVING)} на каждом, тогда как самый щедрый денежный код в истории школы давал ${rub(CODE_SAVING)}. Коды при этом никуда не делись, но их роль другая — они открывают бесплатные мини-курсы, то есть работают как приманка, а не как скидка.`,
  },
  {
    q: 'Как отличить рабочий промокод от мусорного?',
    a: 'По тому, что он делает с суммой, а не по тому, что написано на карточке. Купонные площадки живут с кликов, поэтому им выгодно держать в списках коды, срок которых истёк, — карточка «−15%» собирает переходы независимо от того, работает код или нет. Единственная надёжная проверка — вставить код в корзину и посмотреть на итог. Всё остальное, включая скриншоты и даты в описаниях, ничего не гарантирует.',
  },
]

export default function Page() {
  return (
    <ArticleShell
      meta={meta}
      lead={lead}
      author={pavel}
      kicker="Проверка кода · Умскул 2026"
      related={otherUmschoolArticles(meta.slug)}
      relatedTitle="Другие разборы цен Умскула"
    >
      <PromoHero
        promo={heroCode}
        deepLink={COUPONS_PATH}
        autos={kitDiscounts}
        asOf={meta.updated}
      />

      <ArticleSection prose>
        <p>
          Сначала о том, что вы, скорее всего, уже заметили, но не поняли.{' '}
          <strong>
            Почти все промокоды Умскула не дают скидку — они открывают бесплатный мини-курс
          </strong>
          . Тридцать девять кодов вида MATH11_SITEPROMO1_CC вводятся не в корзину, а по иконке с
          билетиком в личном кабинете, и цену годового курса они не двигают ни на рубль.
        </p>
        <p>
          Код FM2025 — единственное исключение. Он вводится в корзину и даёт {moneyCode.label} на
          месячный курс или пакет занятий, любой предмет, любой класс.
        </p>
      </ArticleSection>

      <ArticleSection id="code" title="Что известно про FM2025">
        <div
          className="rounded-2xl border-2 border-dashed p-5 sm:p-6"
          style={{
            borderColor: 'rgb(var(--color-primary))',
            background: 'rgb(var(--color-primary) / 0.05)',
          }}
        >
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
            <code
              className="rounded-lg border px-4 py-2 font-mono text-lg font-bold tracking-wider select-all"
              style={{
                borderColor: 'rgb(var(--color-rule))',
                background: 'rgb(var(--color-surface))',
                color: 'rgb(var(--color-fg))',
              }}
            >
              {moneyCode.code}
            </code>
            <span
              className="font-editorial text-3xl font-bold"
              style={{ color: 'rgb(var(--color-primary))' }}
            >
              {moneyCode.label}
            </span>
          </div>

          <p className="mt-4 text-[15px] leading-relaxed" style={{ color: 'rgb(var(--color-fg))' }}>
            {moneyCode.note}
          </p>

          <ul className="mt-4 flex flex-wrap gap-2 text-xs">
            {['Вводится в корзину', 'Любой предмет и класс', 'Статус: не подтверждён'].map((t) => (
              <li
                key={t}
                className="rounded-full border px-3 py-1"
                style={{ borderColor: 'rgb(var(--color-rule))', color: 'rgb(var(--color-muted))' }}
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="article-prose mt-6">
          <p>
            Почему я не пишу «работает» или «не работает». Проверить код можно только{' '}
            <Aff to={COUPONS_PATH}>на живом заказе</Aff>, а состояние у него плавающее: тысяча с
            лишним применений говорит, что код был настоящим, а пометки об истечении на агрегаторах
            — что срок, вероятно, вышел.{' '}
            <strong>
              Утверждать что-то одно, не проверив в корзине сегодня, было бы враньём в обе стороны
            </strong>
            .
          </p>
        </div>
      </ArticleSection>

      <AuthorCard author={pavel} />

      <ArticleSection id="scale" title="Двенадцать процентов против пятидесяти">
        <ExamFacts facts={facts} />
        <div className="article-prose mt-6">
          <p>
            Вот масштаб, ради которого стоило открыть эту статью.{' '}
            <strong>
              {moneyCode.label} на годовом курсе — это {rub(CODE_SAVING)}. Комплект из четырёх
              предметов снижает цену каждого на {rub(KIT_SAVING)}
            </strong>
            , то есть примерно в {Math.round(KIT_SAVING / CODE_SAVING)} раза сильнее. И для этого не
            нужен никакой код.
          </p>
          <p>
            Причём FM2025 в описании привязан к месячному курсу и пакету занятий, а не к{' '}
            <Aff to={mathCourse.path}>годовому</Aff>, — то есть в самом дорогом сценарии он, скорее
            всего, вообще не применится.{' '}
            <strong>
              Искать код ради двенадцати процентов, когда рядом лежит пятьдесят, — плохой размен
              времени
            </strong>
            , и это единственный вывод, который я бы отсюда унёс.
          </p>
        </div>
      </ArticleSection>

      <ArticleSection id="kit" title="Где на самом деле лежат деньги">
        <KitTable
          unitPrice={UNIT}
          deepLink={mathCourse.path}
          caption={`Расчёт от цены годового курса ${rub(UNIT)} — одинаковой по всем предметам. Скидка применяется в корзине сама, поле промокода при этом остаётся пустым.`}
        />
      </ArticleSection>

      <ArticleSection id="auto" title="Скидки, которым не нужен код">
        <AutoDiscountCards discounts={kitDiscounts} deepLink={COUPONS_PATH} />
      </ArticleSection>

      <CtaBanner
        schoolId="umschool"
        schools={umschoolSchools}
        deepLink={COUPONS_PATH}
        title="Проверьте код в корзине — это тридцать секунд"
        body="Соберите набор курсов в разделе «Магазин», нажмите «У меня есть промокод» и вставьте FM2025. Не примется — ничего страшного: скидка за комплект уже учтена в сумме и без него."
        cta="Открыть акции Умскула →"
      />

      <ArticleSection id="check" title="Как проверять любой код за тридцать секунд" prose>
        <p>
          Метод простой и работает на любой школе.{' '}
          <strong>Соберите корзину и запишите сумму</strong>. Вставьте код. Посмотрите на сумму
          снова. Если она не изменилась — код мёртвый, и никакие описания на купонных площадках
          этого не отменяют.
        </p>
        <p>
          Второй шаг важнее первого, и его почти никто не делает.{' '}
          <strong>Уберите код и проверьте, что сумма вернулась к прежней</strong>. Иногда цена
          меняется не из-за кода, а из-за того, что вы в процессе добавили или убрали курс, — и
          человек уходит с сайта в уверенности, что код сработал.
        </p>
        <p>
          И третье, специфичное для Умскула:{' '}
          <strong>
            если вы вводите код вида MATH11_SITEPROMO1_CC в корзину, он не примется никогда
          </strong>{' '}
          — не потому, что истёк, а потому, что это код на бесплатный курс, и его место в личном
          кабинете, по иконке с билетиком. <Aff to={COUPONS_PATH}>Все коды школы</Aff> лежат на
          одной странице, но механика у них разная, и это единственное, что нужно про них знать.
        </p>
      </ArticleSection>

      <ArticleSection id="others" title="Что вы найдёте на купонных сайтах" prose>
        <p>
          По запросу «промокод Умскул» выдаётся десяток карточек с процентами: −5%, −10%, −15%.
          Проверять их по одной — работа на вечер, и заканчивается она одинаково.{' '}
          <strong>
            Купонные площадки живут с переходов, поэтому им невыгодно убирать истёкший код из списка
          </strong>
          : карточка «−15%» собирает клики независимо от того, работает она или нет.
        </p>
        <p>
          Умскул в этом смысле удобная школа для проверки: у него всего один денежный код за всю
          историю, и если на площадке их выложено десять, девять из них выдуманы или давно мертвы.{' '}
          <strong>
            Единственное, что стоит забрать из этого поиска бесплатно, — предметные коды на
            мини-курсы
          </strong>
          . Они настоящие, действуют до конца года и не стоят ничего.
        </p>
      </ArticleSection>

      <ArticleSection id="faq">
        <ArticleFaq items={faq} />
      </ArticleSection>
    </ArticleShell>
  )
}
