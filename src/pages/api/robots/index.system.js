import { websiteDomain } from "../../../constants"


export default async (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    const txt = `User-agent: *
Disallow: /c/
Disallow: /click/

User-agent: Yandex
Disallow: /c/
Disallow: /click/
Clean-param: promocode_id
Clean-param: q
Clean-param: url
Clean-param: w
Clean-param: wid
Clean-param: with_meta
Clean-param: accid
Clean-param: slug
Clean-param: member_id
Clean-param: email-promocode-form-success

User-agent: Googlebot
Disallow: /c/
Disallow: /click/

Sitemap: ${websiteDomain}/sitemap.xml
`
  
    res.end(txt)
  }