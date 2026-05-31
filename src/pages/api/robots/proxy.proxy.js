
export default async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    const txt = `User-agent: *
Disallow: /
`;
  
    res.end(txt);
};