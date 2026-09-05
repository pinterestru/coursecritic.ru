/**
 * Сериализация JSON-LD для вставки через `dangerouslySetInnerHTML`.
 *
 * Одного `JSON.stringify` внутри `<script>` мало: литеральный `</script>` (да и
 * любой `<`) в данных закрыл бы тег раньше времени и сломал блок — или хуже.
 * Экранирование `<` как `<` оставляет JSON валидным и делает невозможным
 * закрытие тега изнутри строки.
 */
export function ldJson(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}
