

export default async (req, res) => {
  if (req.method !== "GET") {
    return res.status(405)
  }
  const url = req.query.url
  const response = await fetch(url)
  const result = await response.text()

  return res.status(200).json({content: result});
};
