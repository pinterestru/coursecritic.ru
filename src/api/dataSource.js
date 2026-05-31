import { queryStringify, queryParse } from "utils";



export async function dataSource(endpoint, options) {
  const { method, data, params, headers, noHeaders, useClient, clientMeta={}, apiPath, metadata, revalidate, attempts } =
    options || {};
  const requestParams = params || {}
  const requestHeaders = noHeaders ? {} : (headers || {})
  const requestMethod = method || (data ? "POST" : "GET");
  const isServer = typeof window === "undefined";
  const maxAttempts = useClient ? 0 : (attempts || 2)

  let url = ""
  if (isServer || useClient) {
    const requestEndpoint = endpoint + (endpoint.includes("?") ? "&" : "?") + queryStringify(params, {skipEmptyString: true})
    url = `${apiPath || ""}/${requestEndpoint}` 
  } else {
    const endpointSplit = endpoint.split("?")
    url = "/api/data_source?p=" + JSON.stringify({...queryParse(endpointSplit[1] || ""), ...requestParams, endpoint: endpointSplit[0], api_path_type: apiPath}).split("").reverse().join("")
  }

  if (!requestHeaders["Content-Type"]) {
    requestHeaders["Content-Type"] = "application/json"
  }


  // MetaData
  if (clientMeta.ip) {
    requestHeaders["X-Forwarded-For"] = clientMeta.ip
    requestHeaders["X-Real-IP"] = clientMeta.ip
  }
  if (clientMeta.userAgent) {
    requestHeaders["User-Agent"] = clientMeta.userAgent
    requestHeaders["X-User-Agent"] = clientMeta.userAgent
  }
  if (!clientMeta.url && !isServer) {
    clientMeta.url = window.location.href
  }
  if (clientMeta.url) {
    requestHeaders["X-URL"] = clientMeta.url
    requestHeaders["X-Url"] = clientMeta.url
  }
  if ((!clientMeta.domain || !clientMeta.host) && !isServer) {
    const domain = window.location.hostname.replace("www.", "")
    clientMeta.domain = domain
    clientMeta.host = domain
  }

  if ((!clientMeta.domain || !clientMeta.host) && clientMeta.url) {
    const url = new URL(clientMeta.url);
    const domain = url.hostname.replace(/^www\./, '');
    clientMeta.domain = domain
    clientMeta.host = domain
  }
  if (clientMeta.host || clientMeta.domain) {
    requestHeaders["X-Host"] = clientMeta.host || clientMeta.domain
  }

  const config = {
    method: requestMethod,
    headers: requestHeaders
  }
  if (data && requestHeaders["Content-Type"] === "application/json") {
    config.body = JSON.stringify(data)
  } else if (data) {
    config.body = data
  }

  config.next = { revalidate: revalidate || (60 * 60)}

  async function makeRequest(attempt, noCache) {
    let statusCode = 200
    try {
      const opts = {...config}
      if (noCache) {
        opts.next = {revalidate: 0}
      }
      //opts.cache = "force-cache"
      const response = await fetch(url, opts);
      statusCode = response.status
      const result = await response.json()

      if (!response.ok) {
        if (response.status === 401) {
          // Auth disabled
        }
        throw new Error(result.message || "unknown_error");
      }
      
      if (result.message) {
        throw new Error(result.message);
      } 
      result.status = response.status
      return result
    } catch (error) {
      console.log(`${new Date().toISOString()} | Attempt: ${attempt} | Status: ${statusCode} | URL: ${url} | Client: ${useClient}`);
      if (maxAttempts && attempt && attempt < maxAttempts) { 
        await new Promise(resolve => setTimeout(resolve, 500));
        return makeRequest(attempt + 1, true)
      }
      return { status: statusCode, message: error.message }
    }
  }
  return makeRequest(1);
}
