/**
 * Home page copy.
 *
 * The product data on the home page comes from ./providers.ts — this file holds
 * only the editorial furniture around it: the hero, the ranking policy and the
 * FAQ. Keeping it here means the page component stays layout, not prose.
 */
import { SITE } from './site'

export const hero = {
  eyebrow: `${SITE.market} · independent buying guides`,
  titleLead: 'Pick once,',
  titleAccent: 'then get on with it.',
  body: `${SITE.name} reviews the brands people buy from online — travel and booking, marketplaces and retail, fashion, consumer tech, VPNs and security, courses, games, everyday services — and says which one to use. We read the fee schedules, the returns policies and the renewal terms, then publish the parts that change the decision.`,
  pills: [
    'Priced at the total, not the headline',
    'Every review dated and revisited',
    'The drawbacks are on the page',
  ],
}

/**
 * The "how we rank" block. Deliberately specific — vague ethics copy is noise,
 * and a claim a reader cannot check is worth less than no claim at all. Every
 * line here describes something visible on the pages themselves.
 */
export const policy = [
  {
    num: '01',
    title: 'We price at renewal',
    body: 'Almost every category here is sold on a first-term discount that quietly multiplies later. We rank on what you pay in year two, and we print both numbers.',
  },
  {
    num: '02',
    title: 'Placement is not for sale',
    body: 'Rankings follow the criteria printed on each page. A brand cannot buy a position and we do not sell one. Where a company scores badly on the published evidence, it scores badly here.',
  },
  {
    num: '03',
    title: 'The drawbacks are in writing',
    body: 'Every brand page carries a "not for" list and a "what does not work" section. If a product is wrong for you, the fastest way for us to be useful is to say so on its own page.',
  },
]

export const faq = [
  {
    q: 'Where do the scores come from?',
    a: 'Each brand carries our own editorial score out of five, and next to it the public aggregate scores we were able to read for ourselves — Trustpilot, the app stores, industry bodies — with the source named every time. Where a score could not be verified we leave it out rather than print a number we cannot stand behind, which is why some pages show fewer sources than others.',
  },
  {
    q: 'Do you test the products yourselves?',
    a: 'No, and we do not claim to. These reviews are built from published material: fee schedules, returns and cancellation policies, terms of service, warranty documents and public review aggregates. That is a real limitation and we would rather state it than imply a testing programme that does not exist.',
  },
  {
    q: 'How current are the prices?',
    a: 'Every page carries the date it was last reviewed. Prices, delivery thresholds and promotional terms in these categories change constantly, and regional storefronts differ from one another, so treat our figures as a guide and the company\u2019s own checkout as the authority.',
  },
  {
    q: 'Do brands get a say in what you publish?',
    a: 'No. Placement is editorial and set by the criteria published on each page, and no company sees a review before it goes up. If a page is factually wrong we will correct it and say that we did — that is what the contact address is for.',
  },
  {
    q: 'How do you decide what to cover?',
    a: 'We cover categories where the products are genuinely hard to compare and the marketing is loudest — where an hour of reading saves real money or a real headache. If a category is simple, you do not need us for it.',
  },
]
