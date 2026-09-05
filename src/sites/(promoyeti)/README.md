# PromoYeti (`SITE_CONFIG=promoyeti`)

English-language discount-code and coupon site for a worldwide audience. **243
stores across fifteen categories**, each with its own page answering one query
shape: **“&lt;brand&gt; promo code”**. Built for the promo-code affiliate model —
buy the brand query, land the visitor on the store page, send them to the
merchant through the tracked `/click` redirect.

Store inventory came from the Admitad offer research in
`content-factory/brand_context/ideas/non_russian_offers/kp_agg/`: round 1 (77
stores, checked 2026-08-25) and rounds 2–3 (166 stores, checked 2026-08-26).

```bash
cp .env.local.promoyeti.example .env.local.promoyeti
SITE_CONFIG=promoyeti pnpm dev
```

---

## 1. Identity

**Domain: promoyeti.com. Brand: PromoYeti.** Both live in `data/site.ts`, and
everything that mentions either — canonical URLs, mailboxes, the footer, the
sitemap, the JSON-LD publisher, every legal page — derives from those two
values. The only other places the domain is written down are
`nginx.conf.promoyeti` (server_name, redirect targets, Let's Encrypt paths) and
`.env.local.promoyeti` at the repo root.

The mark is a yeti in a scarf, in `public/`: `mark.svg` (used by the header and
footer), `favicon.svg` (inverted onto an emerald tile so it reads at 16px) and
`logo.svg` (the horizontal lock-up). The fur tufts are generated triangles
around a head circle rather than fifteen hand-drawn paths, so the silhouette
can be re-tuned by changing the spike length and count. The scarf exists to
give the accent orange somewhere to live, since orange means "there is a code
here" everywhere else on the site. `logo.svg` sets the wordmark as live
`<text>` in a system sans — outline it if the brand ever gets a bespoke face.

Still outstanding before launch: DNS, TLS and the mailboxes. See §7.

---

## 2. The editorial rule this site is built around

**We do not publish a code we have not seen.**

Not a slogan — a build constraint. `data/stores/index.ts` throws at import time
if an offer is `kind: 'code'` with no `code` string, so a “reveal code” button
with nothing behind it cannot ship, including by accident. It also rejects
duplicate slugs, duplicate offer ids, unknown categories, stores with no offers,
and more than one `best` offer per store.

The seeded inventory is therefore **all `kind: 'deal'`** — outlet sections,
multibuy bundles, membership pricing, app-only fares, bank offers at checkout,
term discounts. Those are real, they convert, and in several of these markets
they are genuinely the better saving than any code would be.

Its sibling rule covers the value rail: `offer.value` is a percentage only
where a merchant published one, and otherwise names the kind of saving. The
registry rejects an empty or over-long label. Do not "improve" these into
round numbers.

**To add real codes** (from the Admitad feed, a merchant e-mail, or the
merchant's own promotions page), set `kind: 'code'` and supply `code`. The
offer card then renders the reveal/copy flow instead of a plain link. Do not
bulk-import codes without a verification step: an unverified code costs a paid
click and, repeated, gets the landing page rejected by Google Ads.

Three things this rule buys, beyond honesty:

- The store pages survive an ad-platform landing-page review, which coupon
  sites routinely fail on “misleading content”.
- The “no code listed here right now, and that is on purpose” block on a
  code-less store page is a differentiator rather than an empty page.
- `/about` can make a claim the reader can check, which is the only kind worth
  making.

---

## 3. Design

The layout follows the shape the working coupon sites have converged on
(RetailMeNot, CouponFollow, VoucherCodes were the references), because it
survives being scanned rather than read. Two pieces carry it:

**The offer ticket** (`components/OfferCard.tsx`)

```
[ value rail ] ┊ [ brand · title · meta · details ] [ CTA ]
```

The value rail is why the layout works — one big thing per row for the eye to
land on. Ours shows a percentage only where the merchant published one; the rest
of the time it names the KIND of saving ("Outlet", "Member", "Bank offer"). The
competition fills that column with invented numbers, and that is the most
consequential lie in the category, because for most visitors it is the only
thing they read. The dashed perforation and its punched notches are real CSS,
anchored to the divider element so they follow it at any card height.

**The store page** (`components/store/StoreView.tsx`) — two columns: offers in
the main column, a sticky sidebar beside them carrying the market line, the
offer summary, the checkout facts and the how-to-use steps. That puts the two
things a visitor arrived for (the offers, and whether this page applies to
them at all) on one screen.

**The home page** is not a funnel entrance — almost nobody arrives there, since
the traffic lands directly on a store page from a brand query. Its job is to
make the site read as a real publication to a human, an ad reviewer and a
crawler. Hence: search, then a grid of brand tiles each showing that shop's
headline offer, then one real offer per brand, then categories. No countdown
timers, no "412 people used this today", no star ratings.

**Brand previews** (`components/BrandMark.tsx`) are wordmarks, not logos. We
hold no merchant logo files and will not hotlink them from the merchants' own
servers — that is a trademark conversation, a hotlinking one and a privacy one,
for artwork we would then have to keep in sync. Setting the brand's name in its
own colour looks closer to the real thing than initials, keeps a grid visually
consistent in a way real logos never are, and claims nothing. If you later
licence a logo set, `BrandMark` is the single place to swap.

Palette and type live in `theme.css`: bone ground, ink, deep emerald primary,
signal orange reserved for one meaning only — **there is a code here**. Chosen
partly against the category, which is uniformly purple, navy and red.

## 4. Structure

```
data/
  site.ts             brand identity — name, domain, mailboxes
  types.ts            Store / Offer / SavingTip / StoreFact / FaqItem + link helpers
  categories.ts       the 15-category taxonomy and its editorial copy
  stores/
    index.ts          registry + build-time integrity checks + query helpers
    <category>.ts     the stores themselves, one file per category
components/
  OfferCard.tsx       the coupon ticket — CLIENT (reveal + copy)
  BrandMark.tsx       wordmark / monogram brand preview
  BrandTile.tsx       home-page brand card with its headline offer
  StoreSearch.tsx     home-page store finder — CLIENT (filters the whole index)
  store/StoreView.tsx one template for all 243 store pages
app/
  page.tsx            home
  stores/             A–Z index + /stores/[slug]
  categories/         index + /categories/[slug]
  about contacts disclosure terms privacy cookies
```

Adding a store: one object in the right `data/stores/<category>.ts`. No route
work, no component work. Adding a category: an entry in `categories.ts`, a new
file under `data/stores/`, and a line in `data/stores/index.ts`.

`config.ts` derives `offerHosts` — the `/click` redirect allowlist — from the
store data, so a store cannot be added with its outbound link blocked, and
removing one cannot leave a stale host permitted.

## 5. Deploy

`nginx.conf.promoyeti` at the repo root, upstream port **3010**
(3005 coursecritic, 3006 edsider, 3007 kodomania, 3008 brandcritic,
3009 reviewkong). The GitHub Actions workflow reads `SITE_CONFIG` and `PORT`
from repo variables — set them to `promoyeti` and `3010`.

---

## 6. Offers deliberately NOT built

Twelve brands from rounds 2–3 were left out rather than silently dropped. If you
want any of them, say so — they are excluded on judgement, not on difficulty.

**Loot-box gambling (4)** — GGDrop, Clash.gg, ForceDrop, CSFail. CS2 case-opening
sites. Google Ads requires gambling certification for these, so the landing page
could not be advertised — which is the entire business model here — and the
product is loot-box gambling with a young audience.

**Russian-market brands with no English storefront (8)** — Островок
(ostrovok.ru), Золотое Яблоко (goldapple.ru), Отелло (otello.ru), Слетать.ру
(sletat.ru), Skyeng, Contented, Puzzle English, AdminVPS (.ru). This site is
English-language and worldwide; these serve Russian-speaking CIS audiences with
Russian-language storefronts. Their measured volumes were also in the 6–904
range. A separate Russian-language property is the right home for them.

**Included with an explicit warning rather than a sales pitch**, because the
honest page is more useful to the reader than no page:

- **ClevGuard** — phone monitoring software. The page states that installing it
  on another adult's phone without consent is a criminal offence in most
  jurisdictions, and points anyone who thinks it is on their own phone at the
  detection route.
- **Skycoach** and **Difmark** — game boosting and account sales. Both pages say
  plainly that account sharing breaches publisher terms and that the usual
  penalty is a permanent ban the seller cannot compensate.
- **LELO** — intimate wellness, written matter-of-factly. Note that paid search
  for this category is restricted on most ad platforms.

Do not soften any of those three framings to improve conversion. They are the
reason the pages are defensible.

## ⚠️ 7. Before this goes live

1. **DNS and TLS.** Point `promoyeti.com` and `www.promoyeti.com` at the host,
   then issue the Let's Encrypt certificate — `nginx.conf.promoyeti` expects
   `/etc/letsencrypt/live/promoyeti.com/` to exist and will not start without
   it. Use `nginx.conf.certbot` at the repo root to get the first certificate:
   it serves port 80 and the ACME challenge only, which breaks the deadlock of
   needing a certificate before nginx will start. Full steps are in its header.
2. **The mailboxes must exist.** `hello@`, `partners@` and `privacy@` appear on
   the contact, privacy, cookie and disclosure pages. The privacy one is a
   stated route for GDPR requests, so it needs to be real and monitored.
3. **Re-verify every offer.** Everything in `data/stores/*.ts` — thresholds,
   return windows, percentages, membership terms, fee structures — was written
   from the merchants' public pages as a working value and is dated
   `2026-08-25`. Retail terms move by season and by country. Re-check before a
   campaign runs against a page, and re-date the page when you do. The
   highest-risk groups:
   - **Single-country storefronts.** Roughly a third of these are one-market
     sites (`oneplus.in`, `in.puma.com`, `adidas.co.in`, `myntra.com`,
     `ajio.com`, `nykaa.com`, `titan.co.in`, `lenskart.com`, `firstcry.com`,
     `dyson.in`, `abhibus.com`, `makemytrip.com`, `dailyobjects.com`,
     `bathandbodyworks.ae`, `victoriassecret.ae`, `mediaexpert.pl`,
     `autodoc.pl`, `store.acer.com`, `enterprise.ca`, `movida.com.br`,
     `joesnewbalanceoutlet.com`, `newbalance.com`, `walmart.com`,
     `cricut.com`, `lenox.com`, `scentbird.com`, `chegg.com`, `vegas.com`).
     The `markets` field is the load-bearing fact on those pages — if it is
     wrong, the page is wrong for everyone who lands on it. **Match the geo
     targeting of every campaign to the `markets` line.**
   - **Subscription renewal claims** (`software`, `learning`, `services`). The
     first-term-versus-renewal gap is described in shape rather than in
     figures on purpose. If you add figures, add both.
   - **Membership and loyalty programme names and terms** — several have been
     renamed or restructured by their operators in the last two years.
   - **Etihad's stopover offer** — described with hedging because "free" is
     doing work in most descriptions of it. Do not flatten that to "free".
   - **GoMining** — a speculative financial product. The page says so plainly
     and declines to imply a return. Keep it that way; softening it is both a
     consumer-protection problem and an ad-policy one.
4. **Two check dates are in use, deliberately.** Round-1 content is dated
   `2026-08-25` and rounds 2–3 `2026-08-26`. Files carrying both define
   `CHECKED` and `CHECKED_R2` rather than re-dating the originals — nobody
   re-read the first batch's pricing pages on the later date, and claiming
   otherwise is exactly the kind of small lie this site is built to avoid.
5. **A few domains need confirming against the network feed.** Headway's offer
   resolves to a Play Store listing; the store page uses `makeheadway.com`
   instead, which is the brand's real site but may not carry the tracking. Check
   it and any other offer whose feed domain is a marketplace or app-store URL
   before running traffic.
6. **Decide the code-loading pipeline.** The site is honest but thin on codes
   by construction. Before a serious campaign, wire the network feed into
   `kind: 'code'` offers with a verification step. Until then the store pages
   sell the deals, which is the fallback the design was built for.
7. **Nothing claims a review, a test or a rating.** There are no star ratings,
   no invented testimonials, no "verified 2 hours ago" counters and no "used
   412 times today". Do not add them — they are the exact features that make
   this category untrustworthy, and every one of them would be a fabrication.
