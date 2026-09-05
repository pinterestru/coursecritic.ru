/**
 * Brand page data for Lenox (route: /brands/lenox).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.lenox.com/pages/about-us — founding year, White House history
 *   - https://www.lenox.com/pages/return-policy — 120-day return window,
 *     personalisation exclusion, free return shipping on damaged/wrong items
 *   - https://www.prnewswire.com/ releases on the Cambridge Silversmiths,
 *     Hampton Forge and Oneida Consumer acquisitions, and Centre Lane Partners'
 *     October 2020 acquisition of Lenox — ownership and portfolio brands
 *   - https://www.prnewswire.com/news-releases/lenox-corporation-announces-closure-of-kinston-nc-factory-301043260.html
 *     and North State Journal coverage — the 2020 US factory closure and move
 *     of production overseas
 *   - https://www.trustpilot.com/review/lenox.com — rating and volume
 *
 * ⚠️ Prices, fees and policy terms are working values captured on 2026-08-24
 * and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const lenox: BrandPage = {
  slug: 'lenox',
  providerId: 'lenox',
  metaTitle: 'Lenox review 2026 — heritage, ownership, returns',
  metaDescription:
    'An independent Lenox review: the presidential heritage the marketing leans on, who owns the company now, and the 2020 factory closure most pages leave out.',
  intro:
    'Lenox sells dinnerware, flatware, drinkware and giftware under a name that has been on American tables since 1889. What the branding does not lead with is that the company has been through a private-equity buyout and a factory closure since 2020, and current production is no longer made in the US. The tableware pedigree is real; so is the change behind it.',
  about: [
    'Walter Scott Lenox founded the company in Trenton, New Jersey, in 1889, and it went on to become the first American china maker used at the White House table in 1918, later supplying chinaware to six US presidents. By the late 1960s it was the largest producer of porcelain dinnerware in the country, holding more than half the domestic fine china market by 1969 — a heritage the brand still trades on today.',
    'Lenox Corporation is now privately held by Centre Lane Partners, a private equity firm that acquired the company in October 2020, taking it out of its previous ownership entirely. Since then the company has bought Cambridge Silversmiths, Hampton Forge and Oneida Consumer in a run of separate deals, so a Lenox checkout today can span china, flatware and silverware from four owned brands rather than a single factory line, all sold through the one lenox.com storefront.',
    'The change buyers should know about is manufacturing. Lenox closed its Kinston, North Carolina plant — the only fine bone china factory left in the US, built in 1989 — in April 2020, and production has since moved overseas. The company also permanently closed its outlet and warehouse stores that same year, so there is no discount channel or in-person retail network left; everything now goes through lenox.com or third-party retailers such as department stores and gift shops.',
  ],
  facts: [
    { label: 'Founded', value: '1889' },
    { label: 'Owner', value: 'Centre Lane Partners (2020)' },
    { label: 'Manufacturing', value: 'Moved overseas in 2020' },
    { label: 'Returns window', value: '120 days, unused items' },
  ],
  plans: {
    title: 'What buying from Lenox actually costs',
    note: 'There is no membership tier — the costs to watch are the personalisation surcharge, which return window it falls under, and how the Breakage Replacement Program actually pays out.',
    items: [
      {
        name: 'Standard shipping',
        price: 'Included; ships within 5–7 business days',
        detail:
          'Then 3–5 more days by USPS First Class once it leaves the warehouse. The default at checkout.',
        pick: true,
      },
      {
        name: 'Priority Mail upgrade',
        price: 'A checkout surcharge over standard shipping',
        detail:
          'Cuts the post-dispatch leg from 3–5 days to 2–3, after the same 5–7 day wait to ship.',
      },
      {
        name: 'Personalised or monogrammed pieces',
        price: 'Item price plus a personalisation fee',
        detail:
          'Final sale — excluded from the 120-day return window, so an ordering mistake cannot be undone.',
      },
      {
        name: 'Breakage Replacement Program',
        price: 'Free replacement piece, not a refund',
        detail:
          'Since a 2020 policy change, verified breakage on eligible patterns gets a free replacement instead of the previous 50% discount.',
      },
    ],
  },
  pros: [
    {
      title: 'A presidential pedigree competitors cannot claim',
      body: 'The first American china used at the White House table, in 1918, and chinaware supplied to six US presidents since — a specific, checkable credential, not a marketing line.',
    },
    {
      title: 'One checkout, four owned tableware brands',
      body: 'Recent acquisitions of Oneida, Hampton Forge and Cambridge Silversmiths mean a single order can cover china, flatware and silverware instead of shopping three separate retailers.',
    },
    {
      title: 'A genuinely buyer-favourable breakage policy',
      body: 'The 2020 switch from a 50% discount to a free replacement on verified breakage is a real improvement, not a cosmetic one, on eligible patterns.',
    },
    {
      title: 'A long return window on stock pieces',
      body: '120 days on unused, non-personalised items is well beyond the 30-day norm most tableware retailers offer, and Lenox pays return shipping when the fault is theirs.',
    },
  ],
  cons: [
    {
      title: 'Manufacturing left the US in 2020',
      body: 'Lenox closed the Kinston, NC plant — its last American fine-china factory — and production has since moved overseas. Anyone buying for the "American-made" heritage story should know the current pieces are not.',
    },
    {
      title: 'The Trustpilot reputation is very poor',
      body: 'Lenox sits at 1.3 out of 5 from 84 reviews, 90% of them one-star, driven largely by customer-service response times and order-communication complaints in the reviews we read.',
    },
    {
      title: 'No physical stores left to browse or buy seconds',
      body: 'All outlet and warehouse locations closed permanently in 2020, so there is no discount channel and no way to inspect fragile giftware in person before buying.',
    },
  ],
  reputation: [
    { source: 'Trustpilot', value: 1.3, note: '84 reviews, 90% one-star' },
    {
      source: `${SITE.name} editorial score`,
      value: 3.8,
      note: 'weighs the genuine heritage and return policy against the manufacturing shift and service reputation',
    },
  ],
  bestFor: [
    'Buyers building on an existing Lenox pattern who need matching pieces',
    'Wedding and gift registries wanting a recognised heritage tableware name',
    'Shoppers who want Oneida flatware or silver alongside Lenox china in one order',
    'Anyone who values a long, forgiving return window on undecorated stock items',
  ],
  notFor: [
    'Buyers specifically paying for a "Made in USA" claim — production is now overseas',
    'Shoppers who want to browse in person — there is no outlet or store network left',
    'Anyone who might need to cancel a personalised or monogrammed order after placing it',
  ],
  faq: [
    {
      q: 'Is Lenox china still made in the USA?',
      a: 'No. Lenox closed its Kinston, North Carolina factory — its last US fine bone china plant, built in 1989 — in April 2020, and manufacturing has since moved overseas under its new private-equity ownership. The Lenox name and its White House heritage predate that move by more than a century, but current stock does not carry a "Made in USA" mark.',
    },
    {
      q: 'Who owns Lenox now?',
      a: 'Centre Lane Partners, a private equity firm, acquired Lenox Corporation in October 2020. Since then the company has also bought Cambridge Silversmiths, Hampton Forge and Oneida Consumer, so Lenox today sits inside a small group of owned tableware and flatware brands rather than standing alone as an independent china maker.',
    },
    {
      q: 'What is the return policy?',
      a: 'Unused, non-personalised items can be returned within 120 days of purchase, well beyond what most tableware retailers offer. Personalised or monogrammed pieces and anything marked final sale are excluded from that window entirely. Lenox also covers return shipping costs whenever an item arrives broken, defective or simply wrong.',
    },
    {
      q: 'What happens if a piece breaks after I have used it?',
      a: 'Lenox runs a Breakage Replacement Program that, since a 2020 policy change, sends a free replacement piece on verified breakage of eligible patterns rather than the 50% discount it used to offer under the old terms. Coverage depends on the specific pattern still being in production, so check eligibility before assuming a replacement is guaranteed.',
    },
    {
      q: 'Does Lenox ship internationally?',
      a: 'We could not verify international shipping on lenox.com at the time of writing — the shipping information published there describes US domestic service via USPS First Class or Priority Mail only. If you are ordering from outside the US, check availability and any extra charges at checkout before assuming delivery is possible.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'lenox.com',
}
