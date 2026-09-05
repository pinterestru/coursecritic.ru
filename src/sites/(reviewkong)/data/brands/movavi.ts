/**
 * Brand page data for Movavi (route: /brands/movavi).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.movavi.com/screen-recorder/ — what the free trial includes
 *     and excludes, quoted directly: "a 7-day trial period, a watermark on
 *     output videos, and an inability to add a description or tags to a video
 *     before sharing it on YouTube"; user base and country-count claims
 *   - https://www.capterra.com/p/208975/Movavi-Screen-Recorder/ — rating and
 *     review volume for Movavi Screen Recorder specifically (a small sample)
 *   - https://apps.apple.com/us/app/movavi-video-reels-editor/id1226251139 —
 *     iOS App Store rating and review count for the Movavi mobile app
 *   - Movavi's own Freshdesk knowledge base articles on Effects Store
 *     subscriptions and the watermark-on-expiry behaviour, and BBB-listed
 *     complaints about auto-renewal — used for the cons section
 *   - Company founding (2004, Natalia Khudyakova and Sergey Pavlishin) and
 *     current Cyprus/Missouri headquarters corroborated across independent
 *     company-profile sources, not read on a Movavi "about" page directly
 *
 * ⚠️ The vendor's own pricing pages returned prices in Czech koruna rather
 * than dollars in our fetch (geolocation), so the USD figures below are
 * corroborated across independent trackers rather than read live in dollars.
 * Re-verify before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const movavi: BrandPage = {
  slug: 'movavi',
  schemaType: 'SoftwareApplication',
  providerId: 'movavi',
  metaTitle: 'Movavi review 2026 — watermarked free, paid lifetime option',
  metaDescription:
    'An independent Movavi review: what the free trial lets you export, the lifetime-licence option rivals rarely offer, and the billing complaints worth reading.',
  intro:
    'Movavi sells consumer video editing, screen recording and conversion software, built by a company founded in 2004 and now based between Cyprus and Missouri. The trial is free to run, but every export carries a watermark until you pay — a 7-day trial window on the screen recorder, with no way around it. What sets Movavi apart from subscription-first rivals is that some products still offer a one-time lifetime licence.',
  about: [
    'Movavi was founded in 2004 by Natalia Khudyakova and Sergey Pavlishin, releasing its first video product the following year. The company has grown into a catalogue spanning screen recording, video editing, video conversion and PDF tools, sold from operations split between Limassol, Cyprus and St. Louis, Missouri. It is a consumer software house rather than a professional one: the products aim at people who want to record a tutorial or edit a holiday video, not at broadcast studios.',
    'The screen recorder is representative of the whole line. It captures the full screen or a custom region with system and microphone audio, layers in webcam footage and basic annotation tools, and can schedule unattended recordings. Movavi states plainly on its own product page that the trial runs for 7 days and stamps a watermark on every exported video, and separately blocks adding a description or tags before sharing straight to YouTube — restrictions aimed squarely at getting a free user to convert.',
    'Where Movavi differs from most of the category is its licensing shape: alongside monthly and annual subscriptions, several products, including the screen recorder, are also sold as a one-time "lifetime" personal licence. That is a genuine point of difference against subscription-only tools, though Movavi also runs an optional Effects Store add-on that itself subscribes on a monthly or annual cycle and reverts to watermarked exports if it lapses — worth checking you have actually cancelled if you stop wanting it.',
  ],
  facts: [
    { label: 'Founded', value: '2004' },
    { label: 'Free trial', value: '7 days, watermarked exports' },
    { label: 'Licensing', value: 'Subscription or lifetime' },
    { label: 'Headquarters', value: 'Cyprus and Missouri, US' },
  ],
  plans: {
    title: 'How the pricing works',
    note: 'Movavi sells the same product several ways — monthly, annual and one-time "lifetime" — and the checkout price varies by region. Compare the lifetime price against roughly two years of the subscription before deciding; it is usually the better deal if you will use the tool beyond a single project.',
    items: [
      {
        name: 'Free trial',
        price: '$0 for 7 days',
        detail:
          'Full functionality, but every exported video carries a watermark and YouTube uploads cannot include a description or tags until you buy a licence. Useful for testing the workflow, not for finished output.',
      },
      {
        name: 'Personal lifetime licence',
        price: 'a single one-time payment',
        detail:
          'A one-time purchase for one product (for example the screen recorder alone). No recurring charge, but also no guarantee of major future version upgrades beyond what the licence covers.',
        pick: true,
      },
      {
        name: 'Annual or monthly subscription',
        price: 'billed monthly or yearly',
        renews: 'auto-renews unless cancelled',
        detail:
          'Access to the current version for as long as you subscribe, plus bundle discounts across Movavi’s other tools. Auto-renewal and cancellation friction are a recurring theme in third-party complaints, so check the renewal date after buying.',
      },
      {
        name: 'Effects Store add-on',
        price: 'separate monthly or annual subscription',
        detail:
          'Optional extra effect packs inside the video editor, sold on its own subscription. If it lapses, effects revert to a watermarked trial state rather than simply disappearing — read this as a second subscription, not a one-time unlock.',
      },
    ],
  },
  pros: [
    {
      title: 'A genuine one-time purchase still exists',
      body: 'The personal lifetime licence is a real alternative to subscribing, unusual in a category that has largely moved to recurring billing. If you only need the tool occasionally, buying once can work out cheaper than a year of subscription pricing.',
    },
    {
      title: 'A broad, beginner-friendly toolset in one place',
      body: 'Screen recording, video editing and format conversion are sold as a coordinated product line rather than separate apps with separate accounts, which suits someone assembling a simple video without learning several different tools.',
    },
    {
      title: 'High App Store rating at real volume',
      body: 'The mobile app carries a strong rating from a five-figure review count, suggesting the core editing experience lands well with a large number of everyday users.',
    },
    {
      title: 'Unattended and scheduled recording',
      body: 'The screen recorder can start and stop on a schedule without someone at the keyboard, a feature not every consumer-grade competitor offers at this price point.',
    },
  ],
  cons: [
    {
      title: 'Nothing exports cleanly until you pay',
      body: 'The trial watermarks every video and blocks YouTube metadata on export. That is a normal freemium restriction, but it means you cannot evaluate a finished result before buying — only the workflow.',
    },
    {
      title: 'Auto-renewal complaints are a recurring pattern',
      body: 'Independent complaint boards describe customers being charged for the Effects Store add-on or a subscription renewal without a clear heads-up, and describe difficulty getting a refund afterwards. Check your account’s renewal settings soon after buying, not just before a renewal date.',
    },
    {
      title: 'The Effects Store is a second, easy-to-miss subscription',
      body: 'Extra effect packs run on their own renewal cycle separate from the core licence, and lapse back to a watermarked trial state if it is not renewed. Anyone who wants those effects long-term is effectively signing up for two subscriptions, not one.',
    },
  ],
  reputation: [
    {
      source: 'App Store (iOS)',
      value: 4.7,
      note: 'five-figure review volume on the mobile app',
    },
    {
      source: 'Capterra',
      value: 4.4,
      note: 'small review sample (dozens, not hundreds) for the desktop screen recorder specifically',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 3.7,
      note: 'our composite: a genuinely useful beginner toolset and a rare lifetime-licence option, marked down for the watermarked trial and a second subscription hiding inside the Effects Store',
    },
  ],
  bestFor: [
    'Beginners who want screen recording and basic video editing without a steep learning curve',
    'Anyone who would rather pay once than commit to an annual subscription',
    'Tutorial and how-to creators who need scheduled, unattended screen capture',
    'Casual users converting or trimming video who do not need professional-grade tools',
  ],
  notFor: [
    'Anyone judging the final product from the free trial — every export is watermarked until purchase',
    'Buyers who dislike layered subscriptions, since the optional Effects Store renews separately from the core licence',
    'Professional editors who need broadcast-grade colour, audio or format tools beyond a consumer product',
  ],
  faq: [
    {
      q: 'Can I export a video without a watermark for free?',
      a: 'No. Movavi states on its own product pages that the trial period exports carry a watermark, alongside a 7-day time limit and a block on adding YouTube descriptions or tags before purchase. A paid licence, subscription or lifetime, is required for clean exports.',
    },
    {
      q: 'Is the lifetime licence actually one payment, forever?',
      a: 'It is a genuine one-time purchase for the product it covers, with no recurring charge for continued use of that version. It does not automatically include every future major version, so check what upgrade path is offered before assuming it covers releases years out.',
    },
    {
      q: 'What is the Effects Store, and do I need it?',
      a: 'It is an optional library of extra effects and transitions inside the video editor, sold as its own separate monthly or annual subscription rather than bundled into the core licence. If you let it lapse, those effects fall back to a watermarked trial state rather than being removed outright — decide up front whether you actually need it.',
    },
    {
      q: 'Are the billing complaints about Movavi serious?',
      a: 'They follow a consistent pattern in independent complaint listings: customers report being charged for a renewal, sometimes on the Effects Store add-on specifically, without a clear reminder, and describe friction getting a refund afterwards. That is a reason to check your account’s renewal settings promptly after buying, not a reason to assume the company is not a legitimate publisher — it is a long-standing one.',
    },
    {
      q: 'Does Movavi work on both Windows and Mac?',
      a: 'Yes, its core desktop products are sold for both platforms, alongside separate mobile apps for iOS. Feature sets, trial limitations and pricing can differ slightly by platform, so check the specific product page for the exact operating system you intend to use before buying a licence.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'movavi.com',
}
