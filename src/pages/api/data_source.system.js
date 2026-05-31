import { queryParse, queryStringify } from "utils"
const apiPath = process.env.NEXT_PUBLIC_API_PATH
const scriptPath = process.env.NEXT_PUBLIC_SCRIPT_PATH || apiPath

const encrypt = (value) => {
  if (!value) return value
  return value.split("").reverse().join("")
}

const getEndpoint = (url) => {
  const paramsAll = queryParse(url.split("?")[1] || "")

  const params = JSON.parse(encrypt(paramsAll.p))
  const endpoint = params.endpoint
  delete params["endpoint"];

  //API PATH
  const path = params.api_path_type === "script" ? scriptPath : apiPath
  delete params["api_path_type"]

  if (!endpoint) return "" 
  const result = endpoint + "?" + queryStringify(params, {skipEmptyString: true})
  if (result.startsWith("/")) {
    return path + "/" + text.substring(1)
  }
  return path + "/" + result
}

const getRequestHeaders = (headers, ip) => {
  const result = {
    "user-agent": headers["user-agent"],
    "referer": headers["referer"],
    "content-type": headers["content-type"],
    //"connection": headers["connection"],
    "accept": headers["accept"],
    "accept-language": headers["accept-language"],
    "accept-encoding": headers["accept-encoding"],
    "origin": headers["origin"],
    //"x-forwarded-for": ip || headers["x-forwarded-for"],
    "x-real-ip": headers["x-real-ip"] || ip,
    "x-ip": ip || headers["x-real-ip"],
    "x-user-agent": headers["user-agent"],
    "x-url": headers["x-url"],
    "x-host": headers["x-host"],
    "x-domain": headers["x-domain"]
  }
  Object.keys(headers).forEach(header => {
    if (header.startsWith("sec")) {
      result[header] = headers[header]
    }
  })

  return result
}

const getResponseHeaders = (headers) => {
  const result = {...headers}
  delete result["access-control-allow-origin"]
  delete result["access-control-allow-methods"]
  delete result["access-control-allow-headers"]
  delete result["access-control-expose-headers"]
  delete result["access-control-max-age"]
  delete result["access-control-allow-credentials"]
  return result
}


const request = async (url, config) => {
  const response = await fetch(url, config);

  return response
}
 
export default async (req, res) => {

  if (req.method === "OPTIONS") {
    return res.status(200)
  }
  const ip = req.headers["cf-connecting-ip"] || (req.headers['x-forwarded-for'] || "").split(",")[0].trim() || req.connection.remoteAddress || req.ip
  const headers = getRequestHeaders(req.headers, ip)

  // Auth disabled - no session check

  const url = getEndpoint(req.url)
  const data = req.body


  const config = {
    headers,
    method: req.method,
  }
  if (req.method !== "GET" && req.method !== "HEAD" && data) {
    config.body = JSON.stringify(data)
  }


  const response = await request(url, config)
  const result = await response.text()

  //console.log(req.method, "|", response.status || response.statusCode, "|", url, response.message || "")

  const responseHeaders = getResponseHeaders(response.headers)
  Object.keys(responseHeaders).forEach((key) => {
    res.setHeader(key, responseHeaders[key])
  })

  return res.status(response.status || response.statusCode).send(result)
}