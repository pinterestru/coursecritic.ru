// Independent review scores keyed by provider. Shared across all articles —
// the same school keeps the same score everywhere. Discovered manually from
// the review aggregators noted in `source` (iRecommend by default).
export interface ReviewScore {
  rating: number
  count: number
  url: string
  /** Review site the score is from. Defaults to iRecommend. */
  source?: string
}

export const REVIEWS: Record<string, ReviewScore> = {
  'Яндекс Практикум': {
    rating: 4.3,
    count: 1628,
    url: 'https://otzovik.com/reviews/yandeks_praktikum-servis_onlayn-obrazovaniya/',
    source: 'Otzovik',
  },
  Нетология: {
    rating: 4.2,
    count: 281,
    url: 'https://irecommend.ru/content/sait-netologiya',
  },
  SkillFactory: {
    rating: 4.1,
    count: 185,
    url: 'https://irecommend.ru/content/sait-skillfactoryru',
  },
  Skypro: {
    rating: 4.4,
    count: 78,
    url: 'https://irecommend.ru/content/sait-skypro-onlain-universitet',
  },
  Skillbox: {
    rating: 4.4,
    count: 829,
    url: 'https://irecommend.ru/content/sait-skillbox-onlain-shkola',
  },
  GeekBrains: {
    rating: 3.9,
    count: 548,
    url: 'https://irecommend.ru/content/sait-geekbrains',
  },
  // No iRecommend page — uses РБК Курсы (rated 9.0/10, shown here on the 5-point scale).
  'Eduson Academy': {
    rating: 4.5,
    count: 33,
    url: 'https://www.rbc.ru/courses/school-reviews/eduson-academy',
    source: 'РБК Курсы',
  },
}
