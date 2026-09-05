import type { Metadata } from 'next'

import LegalPage from '../../components/LegalPage'

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Как связаться с командой Kodomania.',
}

export default function Page() {
  return (
    <LegalPage title="Контакты" updatedAt="9 июля 2026">
      <p>
        Мы читаем всё, что приходит, и отвечаем — даже если не готовы взяться за предложение. Ниже —
        куда писать по разным вопросам.
      </p>

      <h2>Почта</h2>
      <ul>
        <li>
          Общие вопросы и идеи — <a href="mailto:hi@kodomania.ru">hi@kodomania.ru</a>
        </li>
        <li>
          Сотрудничество и предложения — <a href="mailto:ad@kodomania.ru">ad@kodomania.ru</a>
        </li>
        <li>
          Персональные данные (152-ФЗ) —{' '}
          <a href="mailto:privacy@kodomania.ru">privacy@kodomania.ru</a>
        </li>
      </ul>

      <h2>Сколько ждать ответа</h2>
      <p>
        Обычно отвечаем за 2–5 рабочих дней. Обращения о персональных данных обрабатываем до 10
        рабочих дней, как требует 152-ФЗ.
      </p>
    </LegalPage>
  )
}
