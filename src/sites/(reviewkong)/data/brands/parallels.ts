/**
 * Brand page data for Parallels (Parallels Desktop for Mac)
 * (route: /brands/parallels).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.parallels.com/products/desktop/buy/ — edition line-up
 *     (Standard, Pro, Business, Enterprise), which editions are subscription
 *     -only, and the one-time-purchase support/upgrade trade-off
 *   - https://kb.parallels.com/en/122929 — the official explanation of what a
 *     one-time purchase lacks versus a subscription (no free upgrades, 30-day
 *     phone/chat support vs ongoing, 3-month vs full Toolbox access)
 *   - https://www.parallels.com/blogs/parallels-desktop-20-years/ — product
 *     launch date (15 June 2006) and version history milestones
 *   - https://www.parallels.com/newsroom/news/press-releases/20260226-corel-announcement/
 *     — the February 2026 announcement that Corel is splitting in two, with
 *     KKR retaining Parallels, and the "over one million customers" figure
 *   - https://www.capterra.com/p/170006/Parallels-Desktop-for-Mac/reviews/ —
 *     rating and review volume
 *
 * ⚠️ Prices are working values: no page we opened displayed a USD headline
 * price directly (Parallels' own buy page did not render a price in our
 * fetch), so the $99.99/yr Standard and $119.99/yr Pro figures are corroborated
 * across independent pricing trackers rather than read live on parallels.com.
 * Re-verify both before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const parallels: BrandPage = {
  slug: 'parallels',
  schemaType: 'SoftwareApplication',
  providerId: 'parallels',
  metaTitle: 'Parallels Desktop review 2026 — subscription, not one-time',
  metaDescription:
    'An independent Parallels Desktop review: how it runs Windows on Apple Silicon, what a one-time purchase gives up, and why most editions are subscription-only.',
  intro:
    'Parallels Desktop has run Windows inside macOS since 2006, and it remains the reference product for the job — Microsoft itself authorises it to run Windows 11 on Apple Silicon. What has changed is how you pay for it. Only the entry Standard edition still offers a one-time purchase, and it gives up free upgrades and ongoing support to get there; Pro, Business and Enterprise are subscription-only.',
  about: [
    'Parallels Desktop for Mac launched on 15 June 2006, the first virtualisation product to run Windows and macOS side by side without rebooting. Twenty years on it is owned by Corel, which in turn is owned by the private equity firm KKR — and as of a February 2026 announcement, Corel is splitting into two independent companies, with KKR keeping Parallels while Vector Capital takes Corel’s creativity brands like CorelDRAW. None of that changes what the software does, but it is a live ownership transition worth knowing about if you are buying a multi-year licence.',
    'The core product is unglamorous and reliable: install Windows (or Linux) in a virtual machine, and Coherence mode lets individual Windows apps float alongside macOS ones as if they were native. Parallels says it is authorised by Microsoft to run Windows 11 on Arm on Apple Silicon Macs, which matters because unauthorised workarounds for Windows-on-Apple-Silicon are a real source of instability elsewhere in the category. Standard caps a virtual machine at 8GB of vRAM and 4 vCPUs; Pro raises that to 128GB and 32 vCPUs for developers running heavier workloads.',
    'The commercial model is the part to read carefully. Pro, Business and Enterprise are sold as annual subscriptions only. Standard is the sole edition still sold as a one-time purchase, and Parallels’ own knowledge base spells out what that gives up: no free upgrades to future versions, support cut to 30 days of phone and chat plus two years of email, and only a three-month trial of the bundled Toolbox utilities, against unlimited support and continuous upgrades on a subscription.',
  ],
  facts: [
    { label: 'Product launched', value: '2006' },
    { label: 'Owner', value: 'Corel, backed by KKR' },
    { label: 'One-time purchase', value: 'Standard edition only' },
    { label: 'Customers', value: '1M+ worldwide' },
  ],
  plans: {
    title: 'What it costs to buy',
    note: 'Standard is the only edition with a genuine one-time-purchase option, and Parallels’ own documentation confirms that option loses free upgrades and most support versus the subscription. Everything above Standard is subscription-only.',
    items: [
      {
        name: 'Standard (subscription)',
        price: 'around $99.99/yr',
        detail:
          'Up to 8GB vRAM and 4 vCPUs per VM. Unlimited support and free upgrades to future macOS and Windows versions for as long as you subscribe.',
        pick: true,
      },
      {
        name: 'Standard (one-time purchase)',
        price: 'a single higher upfront payment',
        renews: 'no renewal — but also no future-version guarantee',
        detail:
          'Same specs as the subscription. Gives up free upgrades and drops to 30 days of phone/chat support and two years of email support. The right call only if you plan to stay on this exact macOS/Windows pairing indefinitely.',
      },
      {
        name: 'Pro',
        price: 'around $119.99/yr',
        detail:
          'Subscription only. Raises the VM ceiling to 128GB vRAM and 32 vCPUs, aimed at developers and anyone running resource-heavy Windows or Linux workloads.',
      },
      {
        name: 'Business / Enterprise',
        price: 'sales-quoted',
        detail:
          'Adds centralised license management, volume licensing and, on Enterprise, policy enforcement and golden-image deployment for IT-managed fleets. No published self-serve price.',
      },
    ],
  },
  pros: [
    {
      title: 'The only Windows-on-Mac tool Microsoft actually authorises',
      body: 'Parallels is specifically authorised to run Windows 11 on Arm on Apple Silicon. That matters because several alternatives in this category rely on unofficial routes to the same result, with the stability risk that implies.',
    },
    {
      title: 'Coherence mode genuinely works as advertised',
      body: 'Individual Windows applications run as floating windows on the Mac desktop rather than inside a separate virtual screen. For anyone who needs one or two Windows-only apps rather than a full Windows desktop, this is the feature that sells the product.',
    },
    {
      title: 'Twenty years of continuous development on the same core job',
      body: 'From the original 2006 launch through Apple Silicon support and Windows 11 ARM authorisation, Parallels has kept pace with every major Mac and Windows platform transition rather than lagging a generation behind.',
    },
    {
      title: 'Pro headroom for real development work',
      body: '128GB of vRAM and 32 vCPUs per virtual machine on the Pro edition is enough to run genuinely heavy Windows or Linux workloads, not just a lightweight utility VM.',
    },
  ],
  cons: [
    {
      title: 'Most editions are subscription-only, and that is the top complaint',
      body: 'Pro, Business and Enterprise cannot be bought outright at all. Standard still can, but only by giving up free upgrades and most support — the two-tier structure itself is the thing users push back on hardest in reviews.',
    },
    {
      title: 'Auto-renewal and cancellation friction show up repeatedly in reviews',
      body: 'Complaints about being charged for a renewal without a clear reminder, and difficulty getting a refund afterwards, are a recurring theme on independent review sites. Set your own calendar reminder before a renewal date rather than relying on Parallels to prompt you.',
    },
    {
      title: 'Ownership is mid-transition as of 2026',
      body: 'Corel’s February 2026 announcement that it is splitting in two, with KKR retaining Parallels, does not change the product today. A corporate separation is still the kind of event that can precede pricing or support changes down the line.',
    },
  ],
  reputation: [
    {
      source: 'Capterra',
      value: 4.4,
      note: 'verified user reviews',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 4.0,
      note: 'our composite: the most reliable way to run Windows on a Mac, marked down for the subscription-only push and renewal-billing complaints',
    },
  ],
  bestFor: [
    'Mac users who need one or two specific Windows applications, not a full second machine',
    'Developers and designers who need a genuinely powerful VM, where Pro’s resource ceiling matters',
    'IT teams standardising a fleet of Macs on a managed, licensed way to run Windows',
    'Anyone who wants an officially Microsoft-authorised route to Windows 11 on Apple Silicon',
  ],
  notFor: [
    'Buyers who specifically want to own their software licence outright — only Standard offers that, with real trade-offs attached',
    'Anyone who forgets renewal dates easily, given the volume of billing-related complaints in reviews',
    'Occasional users better served by a free alternative like Apple’s own Boot Camp on Intel Macs (not available on Apple Silicon) or a lighter free virtualiser',
  ],
  faq: [
    {
      q: 'Can I still buy Parallels Desktop outright instead of subscribing?',
      a: 'Only on the Standard edition. Parallels’ own documentation confirms the one-time purchase gives up free upgrades to future versions and drops you to 30 days of phone and chat support plus two years of email support, versus unlimited support and continuous upgrades on a subscription. Pro, Business and Enterprise have no one-time option at all.',
    },
    {
      q: 'Does it really run Windows 11 on an Apple Silicon Mac?',
      a: 'Yes, and it is one of the few tools authorised by Microsoft to do so, running the Arm build of Windows 11 on Apple Silicon Macs. This is a meaningful distinction from tools relying on unofficial workarounds for the same job, which carry more stability risk and less predictable support if Microsoft changes something.',
    },
    {
      q: 'What is the difference between Standard and Pro in practice?',
      a: 'Mostly VM resource limits: Standard caps a virtual machine at 8GB of vRAM and 4 vCPUs, Pro raises that to 128GB and 32 vCPUs. Unless you are running development tools, compiling code or handling large datasets inside the Windows VM, Standard’s ceiling is enough for most everyday Windows-app use.',
    },
    {
      q: 'Will my Parallels subscription auto-renew?',
      a: 'Yes, by default, and renewal-billing complaints are a recurring theme in third-party reviews — cancellations and refund requests after an unexpected renewal charge. Set your own reminder ahead of the renewal date rather than assuming you will get a warning.',
    },
    {
      q: 'Is Parallels’ ownership changing?',
      a: 'Corel announced in February 2026 that it is splitting into two independent companies: KKR retains Parallels, while Vector Capital takes Corel’s creativity software brands. At announcement, the transaction was slated to close by May 2026 subject to regulatory approval; check current Parallels newsroom coverage for confirmation of closing. It has not changed the product, but it is worth tracking if you are committing to a long subscription.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'parallels.com',
}
