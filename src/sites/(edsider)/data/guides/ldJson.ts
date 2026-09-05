/**
 * Serialise a JSON-LD object for injection via `dangerouslySetInnerHTML`.
 *
 * `JSON.stringify` alone is not safe inside a `<script>` element: a literal
 * `</script>` (or any `<`) in the data would terminate the tag early and break
 * the block — or worse. Escaping `<` as `<` keeps the JSON valid while
 * making it impossible to close the tag from inside a string.
 */
export function ldJson(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}
