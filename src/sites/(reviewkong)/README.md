# ReviewKong (`SITE_CONFIG=reviewkong`)

Worldwide, multi-vertical affiliate publication: brand reviews across thirteen
verticals, plus ranked buying guides in the four we started with. Everything
published so far is in English, but the site does not advertise itself as an
English-only publication — `SITE.market` names the audience, not the language.
Adding a second language is a real i18n job, not a copy change: `config.ts`
(`locale`), the `<html lang>` in `app/layout.tsx` and the `og:locale` on each
page all still declare English, correctly, for the content that exists today.
Production domain: **reviewkong.com**.

Verticals: VPNs · security & data · travel essentials · web hosting · flights,
hotels & experiences · marketplaces & retail · fashion · beauty · consumer tech ·
home, hobby & gifting · courses · games & keys · online services.

```bash
cp .env.local.reviewkong.example .env.local.reviewkong
SITE_CONFIG=reviewkong pnpm dev
```

Deploy: `nginx.conf.reviewkong` at the repo root, upstream port **3009**
(3005 coursecritic, 3006 edsider, 3007 kodomania, 3008 brandcritic). The GitHub
Actions workflow reads `SITE_CONFIG` and `PORT` from repo variables — set them to
`reviewkong` and `3009`.

Brand name and domain both live in `data/site.ts` (`SITE.name`, `SITE.domain`);
canonical URLs, e-mail addresses, legal pages and the sitemap all derive from
them. The brand artwork (star-eyed gorilla) lives in `public/` as `mark.svg`
(bare mark, used by the header and footer), `favicon.svg` and `logo.svg`. The only other places the domain is written down are
`nginx.conf.reviewkong` and the deploy variables.

## ⚠️ Before this goes live

1. **DNS and TLS.** Point reviewkong.com and www at the host, then issue the
   Let's Encrypt certificate — `nginx.conf.reviewkong` expects
   `/etc/letsencrypt/live/reviewkong.com/` to exist and will not start without
   it.
2. **The mailboxes must exist.** `hello@`, `partners@` and `privacy@`
   reviewkong.com appear on the contact, privacy and disclosure pages. The
   privacy one is a stated route for data requests, so it needs to be real and
   monitored.
3. **Every figure needs verifying.** Prices, server counts, coverage claims,
   refund windows, audit history and third-party ratings in `data/*/providers.ts`
   and `data/brands/*.ts` were written as working values, not confirmed against
   the vendors. Check each one against the vendor's own page — and re-check
   before every campaign, because promotional pricing in these categories moves
   monthly. A review pass flagged these as the highest-risk ones:
   - NordVPN `reach` (`data/vpn/providers.ts`) — "7,000+ servers across 110+
     countries" is likely **understated**; current published figures run higher.
   - ExpressVPN `reach` — "servers in 105 countries" likewise understated.
   - SafetyWing `priceNote` — "$56 per 4 weeks" is plausible for Nomad Insurance
     but SafetyWing sells a second, far pricier product; name the product or a
     reader comparing against safetywing.com will think we are wrong.
   - World Nomads `trust` — "backed by established underwriters" predates a 2026
     ownership change; re-check.
   - DreamHost's guarantee is **30 days** (card and PayPal; VPS, dedicated, email
     and DreamCompute excluded) per its own ToS of 22 June 2026. It was 97 days
     historically and much third-party coverage still says so — do not "restore"
     the old figure from a review site. Shared plans are now Launch/Growth/Scale
     with METERED storage, not the retired Starter/Unlimited tiers.

   **⚠️ UNVERIFIED 2026-DATED CLAIMS — the highest-risk group.** A content pass
   confirmed these are internally consistent but could NOT verify them against a
   live source. They are load-bearing across several pages, so if one is wrong the
   framing around it is wrong too:
   - **AV-TEST April 2026** (Norton 6/6/6, Bitdefender Total Security 27.0 6/6/6,
     AVG 18/18) and **AV-TEST June 2026** (Avast Free 6/6, Top Product).
   - **AV-Comparatives Real-World Feb–May 2026** — 99.3% for Norton, Avast AND AVG,
     99.5% Bitdefender. ⚠️ Coupled claim: the identical Gen Digital figures are
     presented as evidence of the shared detection engine. If re-verification shows
     they differ, the shared-engine framing on four pages must be revisited too.
   - **AirlineRatings "world's safest airline 2026"** — load-bearing in five places
     on the Etihad page and registry.
   - **Bitdefender list prices** ($109.99 / $129.99) appear in four places and sit
     behind a rolling store discount, so the struck-through figure drifts.
   - **Hostinger's three renewal figures** (~$8 entry / ~$11 Premium / ~$15 Business)
     are region-specific — check them in the locale you buy traffic in.
   - **Avast/AVG Trustpilot counts** (~45,400 / ~45,900) are implausibly close; one
     page may have inherited the other's figure.
   - **PureVPN's "no other VPN here has agreed to unannounced inspection"** — a strong
     exclusivity claim asserted against four competitors, none of it checked.
   - **Etihad's "genuinely free" stopover** — the programme has conditions; a flat
     "free" claim in a pro heading invites a complaint.
   - **Norton crypto-miner sentence** — attributed to Krebs, but Norton publicly
     disputed that characterisation. Worth a legal read.

   The PureVPN 2017 FBI claim previously had no citable source; it now cites both
   the original report and PureVPN's own response. Keep both — the page alleges a
   company misled customers and must stay defensible.

   **Editorial voice:** the guides deliberately do NOT claim hands-on testing.
   They rank on what can be verified from published material — audit reports,
   ownership, pricing tables, policy wordings — and the author bios say exactly
   that. An earlier draft asserted month-long device testing that had not
   happened; if you ever do run real tests, upgrading the language is welcome,
   but do not reinstate a testing claim ahead of the testing.

4. **The commerce pages were written from sources, but not all sources opened.**
   Each `data/brands/*.ts` header lists the URLs its figures came from, and the
   pages were written under a hard rule: no number that was not read on a source.
   Three systematic limits are worth knowing before a campaign:
   - **Trustpilot blocks automated fetches.** Some scores were read from the live
     page, others from Trustpilot's own indexed page titles, and where neither was
     possible the rating was **omitted**. Ten brands therefore carry no third-party
     rating at all (asus, corsair, dyson, joesnewbalance, ozontravel, sephora,
     superstep, victoriassecret, yandextravel, plus recuva from the earlier build).
     Do not let anyone backfill those with a guess.
   - **Prices are described by shape, not figure,** wherever a vendor page was
     geo-redirected or blocked — which was common. Where a figure is printed it is
     hedged and dated. Re-verify in the locale you buy traffic in.
   - **Regional storefronts are named as such.** Several offers are single-market
     sites (`.pl`, `.ru`, `.ae`, `.in`, `.br`, `.ca`). Each page says which market
     it serves in the intro, because that is the fact most likely to make the page
     wrong for the reader who lands on it.

   Scores on a **five-point** scale are what `<Rating>` renders. A source using a
   different scale (Reclame Aqui's ten, AV-TEST's six) must either be rescaled in
   `reputation` with the original in the note, or carry the scale in the source
   name for the registry's plain-text rendering. Both patterns are in use.

   One offer-list mismatch to settle when the tracker is configured: the Proton
   offer is listed under **proton.me**, while our Proton VPN page links to
   `protonvpn.com/pricing` (proton.me/vpn 301s to protonvpn.com anyway). The
   review covers the brand either way; only the click tag needs deciding. The
   only offer on the list with no page at all is the cloud-mining one — see
   "The commerce verticals" below for why.

5. **Affiliate offers are not wired up yet.** Outbound links route through the
   shared `/click/<domain>/<path>` redirect (`src/sites/_shared/app/click`),
   which asks the tracker where to send the visitor. Tested locally,
   `/click/nordvpn.com/pricing` already 302s to a tracker URL rather than
   falling back to the advertiser — so an **unconfigured offer can land the
   visitor somewhere unintended**. Set up each advertiser in the tracker and
   click every CTA once before spending on traffic.
6. **`tracked: false` is deliberate.** Mullvad, EasyOptOuts, Insured Nomads and
   Turkish Airlines are non-partners: their links are plain `nofollow` and earn
   nothing. Keeping them in the rankings is what makes the rest of the list
   credible — don't "fix" them. `/disclosure` now **names them, generated from
   the same registry**, so flipping one to `tracked: true` silently rewrites a
   published claim. That is the point; just be aware of it.
7. **The legal pages make operational promises — keep them true.** They were
   rewritten to describe what the code actually does rather than boilerplate, so
   three of them are now checkable against reality:
   - `/cookies` states that the **only** cookie this site sets is the
     `_mtfi__<merchant>` attribution cookie from `/click`, first-party, **24
     hours**, and that no analytics or advertising script runs on the site. All
     of that is true today (there is no analytics tag anywhere in the codebase).
     **Adding any analytics, tag manager or A/B tool means editing that page and
     `/privacy` in the same commit** — and probably adding the consent banner
     both pages currently explain the absence of.
   - `/privacy` publishes concrete retention periods: **server logs 30 days**,
     **click records up to 13 months**. Confirm the hosting and tracker actually
     expire on that schedule, or change the numbers to the ones they honour.
   - `/privacy`, `/terms` and `/contacts` all say the operator's registered name
     and postal address are **available on request**. That has to be answerable
     from `hello@` and `privacy@` before launch — a controller who cannot be
     identified is a GDPR problem on its own, and the governing-law clause in
     `/terms` is written as "wherever the operator is established" precisely
     because no entity is named yet. Name it when there is one.

## Layout

```
config.ts            site registration (imports data/site.ts)
theme.css            palette + .article-prose typography
data/
  site.ts            ⚠️ domain + brand name — the one file to change
  verticals.ts       vertical registry: vpn / security / travel / hosting
  providers.ts       merges every vertical's provider registry into one id → Provider map
  articles.ts        merges every vertical's guide registry; related-article logic
  guides/            shared types, Metadata builder, JSON-LD helper
  <vertical>/        providers.ts (brands + author) and articles.ts (guide registry)
  brands/            one file per brand review + index.ts registry
  home.ts            home-page copy
components/
  articles/          the ranked-guide toolkit (shell, ranking table, cards, FAQ, CTA)
  brand/BrandView    the single template behind every /brands/<slug> page
app/
  page.tsx           home — verticals, brands, policy, FAQ
  brands/            index + [slug] dynamic route (data-driven)
  articles/<slug>/   one hand-written page per ranked guide
  about|contacts|disclosure|terms|privacy|cookies
  robots.ts, sitemap.ts, api/health
```

## Coverage rule

**Every brand carries a brand page, and every brand is reachable from the home
page.** The home page lists all thirteen verticals with a card per brand, plus an
A–Z index of every review; `/brands` repeats both. A brand nothing links to is a
dead end, and `brandSlug` is what makes anything link to it.

**Within the four guided verticals** (vpn, security, travel, hosting) the older
and stricter rule still applies: every brand must ALSO appear in at least one
ranked guide, because a brand in a guide with no page has nowhere to send an
interested reader, and a guide that omits a brand we review looks like an
omission. The nine commerce verticals added in the offer build-out are
**review-only** — brand pages, no rankings yet. When you write the first ranked
guide in one of them, that vertical inherits the stricter rule.

Two consequences worth knowing before you add anything:

- Adding a brand to a registry obliges you to write its page. `brandSlug` is what
  makes anything link to that page — and because `app/brands/[slug]/page.tsx`
  sets `dynamicParams = false`, a `brandSlug` pointing at a page that is not
  registered in `data/brands/index.ts` is a hard 404 on every card. Add the
  slug and the registration together.
- A category needs 3-5 brands before a ranking is credible. A single-brand
  "ranking" is not one. Three categories here (data removal, data recovery,
  airlines) were built out from one brand each precisely for this reason. The
  commerce verticals are already wide enough to rank; they simply have no guide
  written yet.

Check both directions with a script rather than by eye — brand-page FILES can
exist without registry providers, and a guide can exist without an `ArticleMeta`,
and neither necessarily fails the build if `prepare-site` last ran before the
files appeared.

## The commerce verticals (offer build-out)

Nine verticals — booking, marketplace, fashion, beauty, electronics, lifestyle,
learning, gaming, services — were added to cover the affiliate offers we want
opened, one review page per advertiser. The point is partner-facing as much as
reader-facing: an advertiser's affiliate manager opens reviewkong.com, looks for
their brand, and decides whether this is a publisher they want. So:

- Every one of those brands is on the **home page** (vertical section + A–Z
  index) and on **/brands**, and each card links to the review, not straight out.
- Each review is written from that brand's own policy, fee and help pages, and
  the file header names the URLs used. Where a figure could not be verified it
  was left out rather than guessed — several pages therefore carry a Trustpilot
  or App Store score and several deliberately do not.
- The reviews are critical where the record is critical (key marketplaces, the
  cheap flight agents, gifting delivery guarantees). That is the point of the
  format, and it is what makes the positive pages worth anything.
- `config.ts` derives `offerHosts` from the provider registries, so a brand's
  domain is allowlisted for `/click` the moment it is added. Nothing to maintain
  by hand — but note the redirect still needs the offer configured in the
  tracker before any CTA is safe to send paid traffic to.

Not covered, deliberately: the gambling and crypto-mining offers on the source
list (a bookmaker, a case-opening site, a cloud-mining token). Those categories
carry licensing, disclosure and jurisdiction obligations this site does not
currently meet, and hosting them alongside the rest would put the other
approvals at risk. Add them only with the legal and responsible-gambling
furniture that comes with them.

## Two content types, on purpose

**Brand reviews** (`/brands/<slug>`) are **data**. Every one answers the same
questions in the same order, so `data/brands/<slug>.ts` plus a line in
`data/brands/index.ts` is a complete new review — no route work.

**Ranked guides** (`/articles/<slug>`) are **hand-written pages**. The argument
in each one is different, so each has its own `page.tsx` composed from the
shared components. Adding one:

1. Add an `ArticleMeta` entry to `data/<vertical>/articles.ts`.
2. Create `app/articles/<slug>/page.tsx`, starting from an existing guide.
3. Add any new brands to that vertical's `providers.ts` first — `RankEntry`
   resolves providers by id.

Guides are **primarily direct-open landers for paid traffic**, but they are no
longer hidden from the browsable site. The home page carries a "Ranked guides"
strip linking four of them — the newest guide in each vertical — because a
review site showing no buying guides reads as thinner than it is, and the guides
were always indexable and always in the sitemap.

Two things did NOT change, and should not: the **`/articles` index is still
`noindex` and still unlinked** from everywhere, and the header and footer still
do not link guides. Link individual guides, never the index.

## Adding a vertical

`data/<new>/providers.ts` + `data/<new>/articles.ts`, then register in
`data/verticals.ts`, `data/providers.ts` and `data/articles.ts`. No component
changes: everything resolves providers by id.
