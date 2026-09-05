/**
 * Registry of every brand page.
 *
 * `app/brands/[slug]/page.tsx` renders all of these from one template, so a new
 * brand page is a new file here plus a line in `brandPages` — no route work.
 * The provider referenced by `providerId` must exist in ../providers.ts; the
 * check below fails the build rather than rendering a page with no brand on it.
 */
import { providers } from '../providers'

import type { BrandPage } from './types'
import { abhibus } from './abhibus'
import { acer } from './acer'
import { adidas } from './adidas'
import { adorama } from './adorama'
import { airalo } from './airalo'
import { airindia } from './airindia'
import { ajio } from './ajio'
import { alamo } from './alamo'
import { alibaba } from './alibaba'
import { aliexpress } from './aliexpress'
import { ancestry } from './ancestry'
import { apple } from './apple'
import { asus } from './asus'
import { autodoc } from './autodoc'
import { avast } from './avast'
import { avg } from './avg'
import { bathandbodyworks } from './bathandbodyworks'
import { bewakoof } from './bewakoof'
import { bitdefender } from './bitdefender'
import { blinkist } from './blinkist'
import { bloomingdales } from './bloomingdales'
import { bluehost } from './bluehost'
import { bunches } from './bunches'
import { ccleaner } from './ccleaner'
import { cheapoair } from './cheapoair'
import { chegg } from './chegg'
import { cleartrip } from './cleartrip'
import { cloudways } from './cloudways'
import { corsair } from './corsair'
import { coursera } from './coursera'
import { cricut } from './cricut'
import { croma } from './croma'
import { dailyobjects } from './dailyobjects'
import { deleteme } from './deleteme'
import { desigual } from './desigual'
import { dhgate } from './dhgate'
import { diskdrill } from './diskdrill'
import { dreamhost } from './dreamhost'
import { dyson } from './dyson'
import { easeus } from './easeus'
import { easyoptouts } from './easyoptouts'
import { emirates } from './emirates'
import { enterprise } from './enterprise'
import { envato } from './envato'
import { etihad } from './etihad'
import { expressvpn } from './expressvpn'
import { farfetch } from './farfetch'
import { feverup } from './feverup'
import { firstcry } from './firstcry'
import { fiverr } from './fiverr'
import { flightnetwork } from './flightnetwork'
import { flipkart } from './flipkart'
import { funko } from './funko'
import { g2a } from './g2a'
import { gamivo } from './gamivo'
import { genki } from './genki'
import { getresponse } from './getresponse'
import { gog } from './gog'
import { gomining } from './gomining'
import { gotogate } from './gotogate'
import { hacoo } from './hacoo'
import { hellomolly } from './hellomolly'
import { hm } from './hm'
import { holafly } from './holafly'
import { hostinger } from './hostinger'
import { igp } from './igp'
import { iherb } from './iherb'
import { incogni } from './incogni'
import { insurednomads } from './insurednomads'
import { italki } from './italki'
import { joesnewbalance } from './joesnewbalance'
import { jtv } from './jtv'
import { kickscrew } from './kickscrew'
import { kinguin } from './kinguin'
import { kiwi } from './kiwi'
import { kkday } from './kkday'
import { klook } from './klook'
import { komputronik } from './komputronik'
import { lenovo } from './lenovo'
import { lenox } from './lenox'
import { lenskart } from './lenskart'
import { levelshoes } from './levelshoes'
import { lookfantastic } from './lookfantastic'
import { makemytrip } from './makemytrip'
import { malaysiaairlines } from './malaysiaairlines'
import { mediaexpert } from './mediaexpert'
import { movavi } from './movavi'
import { movida } from './movida'
import { mullvad } from './mullvad'
import { myheritage } from './myheritage'
import { myntra } from './myntra'
import { mytrip } from './mytrip'
import { newbalance } from './newbalance'
import { nomad } from './nomad'
import { nordvpn } from './nordvpn'
import { norton } from './norton'
import { nykaa } from './nykaa'
import { omio } from './omio'
import { oneplus } from './oneplus'
import { onetravel } from './onetravel'
import { optery } from './optery'
import { ostrovok } from './ostrovok'
import { ozontravel } from './ozontravel'
import { parallels } from './parallels'
import { platinumlist } from './platinumlist'
import { playstation } from './playstation'
import { proton } from './proton'
import { protonvpn } from './protonvpn'
import { puma } from './puma'
import { purevpn } from './purevpn'
import { qatarairways } from './qatarairways'
import { recuva } from './recuva'
import { rendezvous } from './rendezvous'
import { safetywing } from './safetywing'
import { saily } from './saily'
import { scentbird } from './scentbird'
import { sephora } from './sephora'
import { shein } from './shein'
import { siteground } from './siteground'
import { skillbox } from './skillbox'
import { skillshare } from './skillshare'
import { stellar } from './stellar'
import { stubhub } from './stubhub'
import { superstep } from './superstep'
import { surfshark } from './surfshark'
import { swarovski } from './swarovski'
import { ticketscloud } from './ticketscloud'
import { timberland } from './timberland'
import { titan } from './titan'
import { tradingview } from './tradingview'
import { tripcom } from './tripcom'
import { turkishairlines } from './turkishairlines'
import { ubereats } from './ubereats'
import { udemy } from './udemy'
import { umschool } from './umschool'
import { vegas } from './vegas'
import { viagogo } from './viagogo'
import { viator } from './viator'
import { victoriassecret } from './victoriassecret'
import { wakacje } from './wakacje'
import { walmart } from './walmart'
import { westernunion } from './westernunion'
import { wilson } from './wilson'
import { wondershare } from './wondershare'
import { worldnomads } from './worldnomads'
import { xkom } from './xkom'
import { yandextravel } from './yandextravel'
import { zavvi } from './zavvi'

export const brandPages: BrandPage[] = [
  // VPN & privacy
  nordvpn,
  protonvpn,
  purevpn,
  surfshark,
  expressvpn,
  mullvad,
  // Security & data
  bitdefender,
  norton,
  avast,
  avg,
  incogni,
  easeus,
  diskdrill,
  stellar,
  recuva,
  deleteme,
  optery,
  easyoptouts,
  // Travel
  airalo,
  etihad,
  safetywing,
  genki,
  worldnomads,
  holafly,
  saily,
  nomad,
  insurednomads,
  emirates,
  qatarairways,
  turkishairlines,
  airindia,
  malaysiaairlines,
  // Hosting
  hostinger,
  siteground,
  cloudways,
  dreamhost,
  bluehost,
  // Flights, hotels & experiences
  tripcom,
  makemytrip,
  cleartrip,
  abhibus,
  cheapoair,
  onetravel,
  gotogate,
  kiwi,
  klook,
  kkday,
  viator,
  feverup,
  vegas,
  wakacje,
  yandextravel,
  ozontravel,
  ostrovok,
  enterprise,
  alamo,
  movida,
  ticketscloud,
  omio,
  mytrip,
  flightnetwork,
  platinumlist,
  viagogo,
  stubhub,
  // Marketplaces & retail
  flipkart,
  walmart,
  alibaba,
  aliexpress,
  dhgate,
  hacoo,
  bloomingdales,
  autodoc,
  firstcry,
  // Fashion & footwear
  shein,
  myntra,
  ajio,
  farfetch,
  timberland,
  desigual,
  puma,
  adidas,
  newbalance,
  joesnewbalance,
  kickscrew,
  hellomolly,
  bewakoof,
  levelshoes,
  superstep,
  rendezvous,
  swarovski,
  lenskart,
  titan,
  victoriassecret,
  hm,
  jtv,
  // Beauty & wellness
  nykaa,
  lookfantastic,
  scentbird,
  iherb,
  sephora,
  bathandbodyworks,
  // Consumer tech
  oneplus,
  lenovo,
  acer,
  apple,
  croma,
  mediaexpert,
  xkom,
  komputronik,
  adorama,
  asus,
  dyson,
  corsair,
  // Home, hobby & gifting
  funko,
  lenox,
  cricut,
  wilson,
  igp,
  bunches,
  zavvi,
  dailyobjects,
  // Courses & learning
  udemy,
  skillshare,
  skillbox,
  umschool,
  chegg,
  coursera,
  italki,
  blinkist,
  // Games & digital keys
  playstation,
  kinguin,
  g2a,
  gamivo,
  gog,
  // Online services
  fiverr,
  envato,
  tradingview,
  wondershare,
  myheritage,
  ancestry,
  westernunion,
  ubereats,
  getresponse,
  parallels,
  movavi,
  ccleaner,
  proton,
  gomining,
]

for (const page of brandPages) {
  if (!providers[page.providerId]) {
    throw new Error(
      `Brand page "${page.slug}" references unknown provider "${page.providerId}". ` +
        `Add it to data/providers.ts or fix the id.`
    )
  }
}

export function getBrandPage(slug: string): BrandPage | undefined {
  return brandPages.find((b) => b.slug === slug)
}

export function brandSlugs(): string[] {
  return brandPages.map((b) => b.slug)
}
