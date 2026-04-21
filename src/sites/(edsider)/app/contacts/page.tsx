import type { Metadata } from 'next'

import LegalPage from '../../components/LegalPage'

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Как связаться с редакцией EDсайдер.',
}

export default function Page() {
  return (
    <LegalPage title="Контакты" updatedAt="20 апреля 2026">
      <p>
        EDсайдер — независимый информационный проект. Мы читаем каждое письмо и отвечаем, даже если
        не готовы публиковать что-то.
      </p>

      <h2>Редакция</h2>
      <ul>
        <li>
          <strong>Общие вопросы:</strong> <a href="mailto:hello@edsider.ru">hello@edsider.ru</a>
        </li>
        <li>
          <strong>Предложить школу в обзор:</strong>{' '}
          <a href="mailto:editors@edsider.ru">editors@edsider.ru</a>
        </li>
        <li>
          <strong>Правовые вопросы, персональные данные:</strong>{' '}
          <a href="mailto:privacy@edsider.ru">privacy@edsider.ru</a>
        </li>
      </ul>

      <h2>Сроки ответа</h2>
      <p>
        Редакция отвечает в течение 2–5 рабочих дней. Запросы о персональных данных рассматриваем в
        течение 10 рабочих дней в соответствии с 152-ФЗ.
      </p>

      <h2>Реквизиты</h2>
      <p>
        <em>
          [Вставить наименование юридического лица, ИНН/ОГРН и юридический адрес после регистрации.]
        </em>
      </p>
    </LegalPage>
  )
}
