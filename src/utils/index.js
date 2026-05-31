import { websiteDomain } from "../constants";

export function setCookie(cName, cValue, expDays) {
  expDays = expDays || 30;
  let date = new Date();
  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

export function removeCookie(cName) {
  const path = "/";
  const domain = undefined;
  document.cookie =
    cName +
    "=" +
    (path ? ";path=" + path : "") +
    (domain ? ";domain=" + domain : "") +
    ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
}

export function getCookie(name) {
  if (typeof window === "undefined") {
    return;
  }
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

export function queryParse(url) {
  if (!url || url.length < 3) {
    return {}
  }
  const queryString = url.includes("?") ? (url.split("?")[1] || "") : url;
  const paramArr = queryString.split("&");
  const params = {};
  paramArr.map((param) => {
    const [key, val] = param.split("=");
    if (key && val !== "undefined") {
      params[key] = decodeURIComponent(val);
    }
  });
  return params;
}

export function queryParseNew(url) {
  if (!url || url.length < 3) {
    return {}
  }
  let queryString = url
  const firstIndex = queryString.indexOf("?");
  if (queryString.startsWith("http") && firstIndex !== -1) {
    queryString = queryString.substring(firstIndex + 1);
  }
  if (queryString.startsWith("?")) {
    queryString = queryString.substring(1);
  }
  if (queryString.startsWith("http://") || queryString.startsWith("https://")) {
    return {}
  }

  const paramArr = queryString.split("&");
  const params = {};
  paramArr.map((param) => {
    const [key, val] = param.split("=");
    if (key && val !== "undefined") {
      params[key] = decodeURIComponent(val);
    }
  });
  return params;
}

export function queryStringify(obj, options) {
  options = options || {};
  if (options.skipEmptyString) {
    Object.keys(obj || {}).forEach(key => {
      const value = obj[key]
      if (value === "" || value === undefined) {
        delete obj[key]
      }
    })
  }
  let params = new URLSearchParams(obj || {});
  return params.toString()
}

export function queryMerge(url, queryParams, reverse=false) {
  if (!queryParams) {
    return url
  }
  const queryParamsUrl = queryParse(url || "")
  const result = (url || "").split("?")[0] + "?" + (reverse ? queryStringify({...queryParams, ...queryParamsUrl}) : queryStringify({...queryParamsUrl, ...queryParams}))
  return result
}

export function changeQueryParams(router, addDict, removeList) {
  const params = queryParse(location.search);
  if (addDict) {
    Object.keys(addDict).forEach((key) => {
      if (key) {
        params[key] = addDict[key].toString();
      }
    });
  }
  if (removeList) {
    removeList.forEach((key) => {
      if (key) {
        delete params[key];
      }
    });
  }
  const path = location.pathname === "/" ? "" : location.pathname
  router.replace(
    path + "?" + queryStringify(params),
    undefined,
    { shallow: true }
  );
}

export function isServer() {
  return typeof window === "undefined";
}


export const getMediaPath = (contentPath, options) => {
  const {mediaPath, fallback, absolute} = options || {};
  let path = (contentPath || "").split(",")[0]
  if (!path) {
    return fallback || ""
  }
  if (path.startsWith("http")) {
    return path
  }
  if (contentPath.startsWith("/api/media/")) {
    return absolute ? websiteDomain + contentPath : contentPath
  }
  if (!mediaPath) {
    const mediaUrl = "/api/media/" + contentPath
    return absolute ? websiteDomain + mediaUrl : mediaUrl
  }
  return mediaPath + path
}

export const getImageSize = (path, options={}) => {
  const {maxWidth, maxHeight} = options || {}
  path = path || ""
  let width = 0
  let height = 0
  let isHorizontal = undefined
  let isVertical = undefined

  if (path.includes("__size")) {
    const size = path.split("__size")[1].split("y")[0]
    const sizeSplit = size.split("x")
    if (sizeSplit.length === 2) {
      width = parseInt(sizeSplit[0])
      height = parseInt(sizeSplit[1])
      isHorizontal = width > height
      isVertical = width <= height
    }
  }
  if (maxHeight && height > maxHeight) {
    const ratio = maxHeight / height;
    height = maxHeight;
    width = Math.round(width * ratio);
  }
  if (maxWidth && width > maxWidth) {
    const ratio = maxWidth / width;
    width = maxWidth;
    height = Math.round(height * ratio);
  }
  return {width, height, isHorizontal, isVertical}
}


function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

export function clsx() {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x
			}
		}
	}
	return str;
}


export function getExtension(path) {
  return path.split(".").pop()
}

export function addHttps(url) {
    if (!url) return url
    if (url.startsWith("http")) return url
    return "https://" + url
}
