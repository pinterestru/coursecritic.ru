

export default async (req, res) => {

    if (req.method !== "GET") {
        res.status(503).send('Service Temporarily Unavailable');
        return res.status(404).send('404');
    }

    const { url } = req.query;

    console.log("HTTP_ERROR URL", url)

    if (!url) {
        return res.status(400).send('Bad Request'); // 400 Bad Request
    }

    try {
        const fetchRes = await fetch(url);
        const htmlContent = await fetchRes.text();

        if (htmlContent.includes('503 UNAVAILABLE')) {
            res.status(503).send('Service Temporarily Unavailable');
        }
        res.status(503).send('Service Temporarily Unavailable');
        res.setHeader('Content-Type', 'text/html');
        res.send(htmlContent);
    } catch (error) {
        console.error('Error fetching original content:', error);
        return res.status(500).send('Internal Server Error');
    }
}