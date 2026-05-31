import { websiteDomain } from "../constants";

/**
 * Per-site opaque hook for the automated landing-page health check.
 *
 * The checker needs a reliable way to find the promo "go to site" / order CTA.
 * A constant attribute (e.g. data-testid="promo") would be identical on every
 * site we operate, letting third parties trivially fingerprint and link our
 * sites to one operator. Instead the CTA carries a data-attribute whose NAME is
 * per-site: `data-w<token>`, where <token> is a short FNV-1a hash of the host.
 * Stable per site, opaque, and different on every domain.
 *
 * The Python checker mirrors this in
 * content-factory/brand_context/landing_tester/landing_tester/matching.py
 * (promo_token / promo_attr). It hashes the BARE host (no scheme/port, www
 * stripped, lowercased) — so we normalize the configured `websiteDomain`
 * (which includes the scheme) the same way before hashing. Keep the two in sync.
 */

/** Reduce a domain/URL to the bare host the checker hashes. */
function hostOf(domain) {
  let h = (domain || "").trim();
  h = h.replace(/^https?:\/\//i, ""); // drop scheme
  h = h.split("/")[0]; // drop path
  h = h.split(":")[0]; // drop port
  h = h.toLowerCase();
  if (h.startsWith("www.")) h = h.slice(4); // drop www.
  return h;
}

/** FNV-1a 32-bit hex of the host. */
export function promoToken(host) {
  const h = hostOf(host);
  let hash = 0x811c9dc5; // FNV-1a offset basis
  for (let i = 0; i < h.length; i++) {
    hash ^= h.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193) >>> 0; // * FNV prime, keep uint32
  }
  return hash.toString(16).padStart(8, "0");
}

/**
 * Per-site data-attribute NAME for the promo hook, e.g. "data-w1a2b3c4d".
 * The leading "w" guarantees a valid attribute name (the hex token may start
 * with a digit, which is not a legal name start).
 */
export function promoAttr(host) {
  return `data-w${promoToken(host)}`;
}

/**
 * Props object spreading the per-site promo hook attribute onto an element,
 * keyed off the build-time `websiteDomain` so it renders identically on server
 * and client (no hydration mismatch). Usage: `<Button {...promoHookProps()} />`.
 */
export function promoHookProps() {
  return { [promoAttr(websiteDomain)]: "1" };
}
