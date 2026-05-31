



export const generateSitemap = (res, links, domain) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/xml')
    res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')

    let urls = "";
    links.forEach(link => {
        if (!link) {
            return
        }
        if (typeof link === "string") {
            link = {url: link}
        }
        const lastMod = link.lastMod || link.lastModified || link.date
        const changeFreq = link.frequency || link.freq || link.changeFreq
        urls += `
<url>
    <loc>${link.url.startsWith(domain) ? link.url : (domain + link.url)}</loc>
    ${lastMod ? `<lastmod>${lastMod.toISOString()}</lastmod>` : ""}
    ${changeFreq ? `<changefreq>${changeFreq}</changefreq>` : ""}
</url>
        `
    })
    
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
${urls}
</urlset>`

    res.end(xml)
}