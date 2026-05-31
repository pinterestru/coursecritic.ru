import { setCookie, getCookie, removeCookie, queryStringify } from "utils";

const onLogout = () => {
  removeCookie("token")
  removeCookie("token_refresh")
  window.location.href = "/login";
};

const request = async (endpoint, method, data, options) => {
  options = options || {}
  const { headers, apiPath } = options;
  const url = apiPath ? `${apiPath}/${endpoint}` : endpoint;


  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(headers || {})
    }
  }
  if (data) {
    config.body = JSON.stringify(data)
  }

  const response = await fetch(url, config)
  if (response.status !== 200 && response.status !== 201) {
    console.log(`${new Date().toISOString()} | Status: ${response.status} | Path: ${request.path}`);
  }
  if (response.ok) {
    const result = await response.json()
    result.status = response.status
    return result
  } else {
    const message = await response.text()
    if (url.includes("token_refresh")) {
      return onLogout();
    }
    if (response.status === 401) {
      const refresh = getCookie("token_refresh");
      if (refresh) {
        removeCookie("token");
        const refreshResponse = await request("token_refresh", "POST", { refresh }, options)
        if (refreshResponse && refreshResponse.access) {
          setCookie("token", refreshResponse.access);
          return await result(endpoint, method, data, options);
        } else {
          return onLogout();
        }
      } else {
        return onLogout();
      }
    }
    return { status: response.status, message };
  }
}


export async function dataSource(endpoint, options) {
  const { method, data, params, url, tokenKey, headers, noHeaders } =
    options || {};
  const token = getCookie(tokenKey || "token");

  if (params) {
    endpoint = endpoint + (endpoint.includes("?") ? "&" : "?") + queryStringify(params, {skipEmptyString: true})
  }

  const requestHeaders = {...(headers || {})};
  if (token && token !== "undefined") {
    requestHeaders["Authorization"] = " Bearer " + token;
  }
  
  const requestMethod = method || (data ? "POST" : "GET");

  return await request(endpoint, requestMethod, data, {headers: noHeaders ? {} : requestHeaders, apiPath: url})
}
