import type { Metadata } from 'next'

import LegalPage from '../../components/LegalPage'
import { SITE, inboxes } from '../../data/site'

export const metadata: Metadata = {
  title: 'Контакты',
  description: `Как связаться с редакцией ${SITE.name}, сообщить об ошибке или предложить сотрудничество.`,
  alternates: { canonical: '/contacts' },
}

export default function Page() {
  return (
    <LegalPage title="Контакты" updatedAt="18 августа 2026" kicker="контакты">
      <p>
        Мы читаем всё, что приходит, и отвечаем на большую часть. Сообщения об ошибках имеют
        приоритет над остальным: если цена или факт на сайте неверны, сказать нам об этом — услуга,
        и мы относимся к ней именно так.
      </p>

      <h2>Куда писать</h2>
      <ul>
        <li>
          <strong>Редакция, исправления, общие вопросы:</strong>{' '}
          <a href={`mailto:${inboxes.editorial}`}>{inboxes.editorial}</a>
        </li>
        <li>
          <strong>Сотрудничество и пресса:</strong>{' '}
          <a href={`mailto:${inboxes.partnerships}`}>{inboxes.partnerships}</a>
        </li>
        <li>
          <strong>Персональные данные (152-ФЗ):</strong>{' '}
          <a href={`mailto:${inboxes.privacy}`}>{inboxes.privacy}</a>
        </li>
      </ul>

      <h2>Если вы представляете бренд, о котором мы пишем</h2>
      <p>
        Присылайте исправления, актуальные цены и продуктовые брифы — мы посмотрим всё. Чего мы не
        сделаем: не продадим позицию в рейтинге, не уберём недостаток из-за того, что он невыгодно
        выглядит, и не опубликуем ваш текст как редакционный. Партнёрские отношения этого не меняют.
      </p>

      <h2>Сроки ответа</h2>
      <p>
        Редакционная почта — 2–5 рабочих дней. Обращения о персональных данных обрабатываем в срок,
        установленный 152-ФЗ. Предложения о сотрудничестве — по мере разбора очереди.
      </p>
    </LegalPage>
  )
}
