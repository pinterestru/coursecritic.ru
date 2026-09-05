/**
 * Brand page data for GetResponse (route: /brands/getresponse).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.getresponse.com/pricing — plan names (Starter, Marketer,
 *     Creator, Enterprise), headline prices at the 1,000-contact tier, the
 *     contact-list steps the price scales through (1k–100k), and the feature
 *     gate on automation workflows and AI email generation
 *   - https://www.getresponse.com/ — homepage claims on country reach and
 *     integration count
 *   - https://www.getresponse.com/help/what-is-the-getresponse-refund-policy.html
 *     — the no-refund policy, quoted directly
 *   - https://www.capterra.com/p/153948/GetResponse/reviews/ — rating and
 *     review volume
 *   - Wikipedia and SaaStock coverage of Simon Grabowski's 1998 founding of
 *     the company in Gdańsk, Poland — used for the founding fact only, not for
 *     any number in the pricing or reputation sections
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. GetResponse's own
 * pricing page did not state a founding year, customer count or revenue
 * figure, so those are sourced separately and are softer than the pricing
 * numbers — treat "350,000+ businesses" as approximate, not a figure to quote
 * verbatim in ad copy. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const getresponse: BrandPage = {
  slug: 'getresponse',
  schemaType: 'SoftwareApplication',
  providerId: 'getresponse',
  metaTitle: 'GetResponse review 2026 — pricing by list size, not features',
  metaDescription:
    'An independent GetResponse review: what the Polish email platform charges for, why the price climbs with list size, and where the cheap plan traps buyers.',
  intro:
    'GetResponse is a Polish-built email marketing and automation platform, in business since 1998 and still headquartered in Gdańsk. The catalogue is broad — automation, landing pages, an AI email generator, a course creator on the higher tiers — but the number that actually decides what you pay is not a feature list. It is the size of your contact list, which every plan is priced against separately.',
  about: [
    'GetResponse was started in 1998 by Simon Grabowski, then a teenager working from his family home in Gdańsk, and the company has stayed headquartered in Poland while selling into a stated 160-plus countries. That history matters less for day-to-day use than for support hours and billing entity, but it is worth knowing this is a European SaaS company competing with US-based rivals like Mailchimp and ActiveCampaign, not a reseller of someone else’s platform.',
    'The product itself is a conventional email and marketing automation suite: list management, automation workflows, landing pages, webinars on some tiers, and an AI email generator layered on top. What separates GetResponse from a simple newsletter tool is the automation builder, which is genuinely capable once you are on a plan that unlocks it fully — the entry-level Starter plan does not. Higher tiers add a website builder and a course creator, so the platform can grow with a business past pure email into a small storefront for digital products, without a separate subscription.',
    'Every plan, including the free one, is sold against a contact-count tier rather than a flat fee: the same feature set costs more at 10,000 contacts than at 1,000, and again more at 25,000. This is standard for the category, but it means the headline price on the pricing page is only ever the starting point for a small list, and anyone comparing platforms needs to compare at their own list size, not the advertised "from" figure.',
  ],
  facts: [
    { label: 'Founded', value: '1998, Gdańsk, Poland' },
    { label: 'Free plan', value: 'Up to 500 contacts' },
    { label: 'Pricing basis', value: 'Scales with list size' },
    { label: 'Refunds', value: 'None, on any plan' },
  ],
  plans: {
    title: 'How the pricing works',
    note: 'Every price on this page is quoted at the smallest contact-list tier. The same plan costs more as your list grows through GetResponse’s published steps (1k, 2.5k, 5k, 10k, 25k, 50k, 100k), so treat the figures below as a floor, not the price you will actually pay.',
    items: [
      {
        name: 'Free',
        price: '$0',
        detail:
          'Up to 500 contacts, a capped number of monthly emails, basic automation and a website builder with a custom domain. No credit card required, and it does not expire, unlike most competitors’ free trials.',
      },
      {
        name: 'Starter',
        price: 'from around $19/mo at 1,000 contacts',
        detail:
          'The advertised entry price, and the one most likely to disappoint: it ships with a single automation workflow and three AI email generations, which is not enough for anyone doing real automation.',
      },
      {
        name: 'Marketer',
        price: 'from around $59/mo at 1,000 contacts',
        detail:
          'GetResponse’s own "most popular" tier, and the one where automation stops being token: unlimited workflows, unlimited AI email generation and contact tagging.',
        pick: true,
      },
      {
        name: 'Enterprise',
        price: 'custom, sales-negotiated',
        detail:
          'Adds SMS marketing and dedicated support on top of everything in Creator. No published price; expect a sales call before you see a number.',
      },
    ],
  },
  pros: [
    {
      title: 'A free plan that does not expire',
      body: 'Up to 500 contacts and 2,500 emails a month, with no credit card and no countdown. Most competitors gate the equivalent behind a 14-day trial, so this is a genuine way to test the platform on a small list before paying anything.',
    },
    {
      title: 'Automation that is actually capable, above Starter',
      body: 'Once you are on Marketer or above, the workflow builder handles branching logic, tagging and scoring properly. The complaint pattern in reviews is almost always about Starter’s single-workflow limit, not the engine itself.',
    },
    {
      title: 'Strong third-party review scores at real volume',
      body: 'Verified users rate it well on independent review platforms, consistently citing ease of use and the automation and segmentation tools as the reasons, which is a useful sanity check against the vendor’s own marketing claims.',
    },
    {
      title: 'A wide feature set without leaving the platform',
      body: 'Landing pages, an AI email generator, contact tagging and, on the top tiers, a website and course builder. For a small team, that can replace two or three separate tools.',
    },
  ],
  cons: [
    {
      title: 'The price is about your list, not your needs',
      body: 'The plan you pick barely matters next to how many contacts you store. A small business with a large but low-value list pays the same premium as one with a small, highly engaged list — the pricing model does not distinguish.',
    },
    {
      title: 'No refunds, stated plainly and enforced without exceptions',
      body: 'GetResponse’s own help page states it does not issue refunds, even for a charge taken the moment you cancel. Billing complaints, including disputed or unexpected renewal charges, are the most common negative theme in third-party reviews.',
    },
    {
      title: 'Starter is a bait price for automation buyers',
      body: 'The cheapest paid plan includes one automation workflow. Anyone who needs actual marketing automation, which is most of the point of buying GetResponse over a plain newsletter tool, has to budget for Marketer instead.',
    },
  ],
  reputation: [
    {
      source: 'Capterra',
      value: 4.2,
      note: 'verified user reviews, 500+ review sample',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 3.9,
      note: 'our composite: capable automation and a real free tier, weighed against a no-refund policy and a pricing model that punishes list size over usage',
    },
  ],
  bestFor: [
    'Small businesses that want to start on a genuinely free plan and grow into paid automation',
    'European teams who want a vendor billed and supported inside the EU',
    'Marketers who will actually use branching automation, on Marketer or above',
    'Anyone comparing platforms who is willing to price them at their own list size, not the homepage figure',
  ],
  notFor: [
    'Anyone signing up for Starter expecting full automation — it ships with one workflow',
    'Buyers who might need a refund; GetResponse states plainly that it does not issue them',
    'Fast-growing lists on a tight budget, since every list-size step raises the bill regardless of plan',
  ],
  faq: [
    {
      q: 'Is GetResponse actually free, or is that a trial?',
      a: 'The free plan is real and does not expire: up to 500 contacts and 2,500 emails a month with no credit card required. Separately, new sign-ups also get a 14-day trial of premium features, which reverts to the free tier’s limits once it ends rather than requiring you to pay or lose your account.',
    },
    {
      q: 'Why does the price change if I add contacts?',
      a: 'Every plan is sold in contact-list steps — 1k, 2.5k, 5k, 10k, 25k, 50k, 100k and beyond. The feature set on a given plan stays the same at every step; only the price moves. Budget for the list size you expect to reach, not the one you are starting with.',
    },
    {
      q: 'Can I get a refund if I cancel right after being charged?',
      a: 'No. GetResponse’s stated policy is that it does not issue refunds, even if you cancel immediately after a renewal charge, and this applies uniformly with no case-by-case exceptions. You can stop future billing at any time, but any amount already charged is not returned, so cancel before a renewal date rather than after it.',
    },
    {
      q: 'Does the cheapest paid plan include automation?',
      a: 'Only in a limited form. Starter includes a single automation workflow, which is enough to see how the builder works but not enough to run real automation across multiple customer journeys. Unlimited workflows and AI email generation only unlock on Marketer, which is also where GetResponse’s own "most popular" label sits.',
    },
    {
      q: 'Is GetResponse a good fit for a company outside Europe?',
      a: 'Yes, functionally — it states it serves 160-plus countries and the product itself does not require a European audience. The main reason a non-European buyer would prefer it is price and feature fit rather than geography; support hours and billing currency are worth checking against your own market before committing.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'getresponse.com',
}
