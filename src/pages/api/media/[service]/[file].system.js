import { promisify } from 'util';
import stream from 'stream';
const mediaPath = process.env.NEXT_PUBLIC_MEDIA_PATH

const pipeline = promisify(stream.pipeline);

const getRequestHeaders = (headers) => {
  const result = {
    "user-agent": headers["user-agent"],
    "referer": headers["referer"],
    "content-type": headers["content-type"],
    "accept-language": headers["accept-language"],
    "origin": headers["origin"]
  }
  return result
}

 
export default async (req, res) => {

    const { service, file, download} = req.query;


  if (req.method !== "GET") {
    return res.status(500)
  }
  if (!service || !file) {
    return res.status(500)
  }


  const headers = getRequestHeaders(req.headers)

  const url = mediaPath + service + "/" + file


  const config = {
    headers,
    method: "GET",
  }

  const response = await fetch(url, config)

  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  })

  if (download) {
    res.setHeader('Content-Disposition', 'attachment; filename=' + encodeURI(download));
  }

  await pipeline(response.body, res);
}