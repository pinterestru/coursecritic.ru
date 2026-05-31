
export const localizationBaseScript = `
function __setCookie(name, value, days) {
  document.cookie = name + "=" + (value || "") + (days ? "; expires=" + new Date(Date.now() + days*864e5).toUTCString() : "") + "; path=/";
}
function __getCookie(name) {
  return document.cookie.split('; ').reduce((r, c) => c.indexOf(name + "=") === 0 ? c.split('=')[1] : r, null);
}
async function __updateLocalizationSettings(localizationType, options) {
    options = options || {};
    const {type, value, mtfi, localizationMeta, timeout, unique, withFlow, withView} = options;

    const key = (localizationType || "") + "__" + (type || "") + "__" + (value || "");

    if (unique && __getCookie(key)) {
      return {}
    }

    var resolvedMeta = localizationMeta;
    if (resolvedMeta && typeof resolvedMeta.then === 'function') {
      resolvedMeta = await resolvedMeta;
    }

    const params = {
      localization_type: localizationType,
      type: type || "",
      value: encodeURIComponent(value || ""),
      mtfi: mtfi || "",
      localization_page: encodeURIComponent(window.location.href),
    }
    if (withFlow) {
      params.with_flow = true
    }
    if (withView) {
      params.with_view = true
    }
    const queryParams = Object.keys(params)
      .filter(key => params[key] !== "")
      .map(key => (key + "=" + params[key]))
      .join("&");
    var path = "/api/localization?" + queryParams;
    try {
        var requestOptions = {}
        if (resolvedMeta) {
            requestOptions.method = "POST"
            requestOptions.headers = {'Content-Type': 'application/json'}
            requestOptions.body = JSON.stringify({localization_meta: resolvedMeta})
        }
      const response = await fetch(path, requestOptions)
      const result = await response.json()
      if (unique) {
        __setCookie(key, 'localized', 1);
      }
      return result
    } catch(e) {
      console.error(e)
      return {message: e.message}
    }
}
window.UpdateLocalizationSettings = __updateLocalizationSettings;
`

export const localizationOnLoadScript = `
if (window.__localizationProcessed) {} else {
window.__localizationProcessed = true;
window.UpdateLocalizationSettings("localization_init", {localizationMeta: window.LocalizationDataGet ? window.LocalizationDataGet() : "", withView: true, withFlow: true}).then(v => {
  if (v.localized !== false) {
    if (window.InitExternal) {
      window.InitExternal()
    } else {
      window.OnInitExternal = true
    }
  }
})}
`

export const localizationMetaScript = `
async function __getSha256Hash(str) {
  if (!str || typeof crypto.subtle === 'undefined') {
    return '';
  }
  try {
    var encoder = new TextEncoder();
    var data = encoder.encode(str);
    var hashBuffer = await crypto.subtle.digest('SHA-256', data);
    var hashArray = Array.from(new Uint8Array(hashBuffer));
    var hashHex = hashArray.map(function(b) { return b.toString(16).padStart(2, '0'); }).join('');
    return hashHex;
  } catch (e) {
    return '';
  }
}

function __localizationBase() {
  return {
    js_url: window.location.href,
    js_referrer: document.referrer || ''
  };
}

function __localizationUser() {
  var userId = localStorage.getItem('uid') || '';
  if (!userId) {
    userId = 'u_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
    try {
      localStorage.setItem('uid', userId);
    } catch(e) {}
  }
  return {
    marketing_device_id: userId
  };
}

function __localizationLang() {
  var nav = window.navigator || navigator;
  var lang = nav.language || nav.userLanguage || nav.browserLanguage || nav.systemLanguage;
  var langs = [];
  if (Array.isArray(nav.languages)) {
    langs = nav.languages;
  } else if (typeof nav.languages === 'string') {
    langs = nav.languages.split(',');
  }
  return {
    js_language: lang || '',
    js_languages: langs.join(',') || ''
  };
}

function __localizationFormat() {
  var intl = {};
  try {
    intl = Intl.DateTimeFormat().resolvedOptions() || {};
  } catch(e) {}
  return {
    js_format_locale: intl.locale || '',
    js_format_calendar: intl.calendar || '',
    js_format_day: intl.hourCycle || '',
    js_format_month: intl.month || '',
    js_format_year: intl.year || '',
    js_format_numbering_system: intl.numberingSystem || '',
    js_system_time_zone: intl.timeZone || '',
    js_system_time_zone_offset: -60 * new Date().getTimezoneOffset()
  };
}

function __localizationScreen() {
  var s = window.screen || {};
  return {
    js_screen_width: s.width || 0,
    js_screen_height: s.height || 0,
    js_screen_color_depth: s.colorDepth || 0,
    js_screen_pixel_depth: s.pixelDepth || 0,
    js_screen_available_width: s.availWidth || 0,
    js_screen_available_height: s.availHeight || 0,
    js_screen_device_pixel_ratio: window.devicePixelRatio || 1,
    js_screen_inner_width: window.innerWidth || 0,
    js_screen_inner_height: window.innerHeight || 0
  };
}

function __localizationDevice() {
  var nav = window.navigator || {};
  return {
    js_platform: nav.platform || '',
    js_hardware_concurrency: nav.hardwareConcurrency || 0,
    js_device_memory: nav.deviceMemory || 0,
    js_touch_max_points: nav.maxTouchPoints || 0,
    js_vendor: nav.vendor || '',
    js_vendor_sub: nav.vendorSub || '',
    js_product: nav.product || '',
    js_product_sub: nav.productSub || '',
    js_app_code_name: nav.appCodeName || '',
    js_app_name: nav.appName || '',
    js_app_version: nav.appVersion || '',
    js_ua: nav.userAgent || ''
  };
}

function __localizationBrowser() {
  var nav = window.navigator || {};
  return {
    js_is_cookie_enabled: nav.cookieEnabled,
    js_online: nav.onLine,
    js_dnt: nav.doNotTrack || window.doNotTrack || nav.msDoNotTrack || '0',
    js_plugins_count: nav.plugins ? nav.plugins.length : 0
  };
}

async function __localizationCanvas() {
  var data = {};
  try {
    var canvas = document.createElement('canvas');
    canvas.width = 280;
    canvas.height = 60;
    var ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.textBaseline = 'alphabetic';
      ctx.fillStyle = '#f60';
      ctx.fillRect(125, 1, 62, 20);

      ctx.fillStyle = '#069';
      ctx.font = '11pt no-real-font-123';
      ctx.fillText('Cwm fjordbank glyphs vext quiz', 2, 15);

      ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
      ctx.font = '18pt Arial';
      ctx.fillText('Cwm fjordbank glyphs vext quiz', 4, 45);

      ctx.globalCompositeOperation = 'multiply';
      ctx.fillStyle = 'rgb(255,0,255)';
      ctx.beginPath();
      ctx.arc(50, 50, 50, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = 'rgb(0,255,255)';
      ctx.beginPath();
      ctx.arc(100, 50, 50, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = 'rgb(255,255,0)';
      ctx.beginPath();
      ctx.arc(75, 100, 50, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();

      var dataUrl = canvas.toDataURL();
      data.js_canvas = await __getSha256Hash(dataUrl);
    }
  } catch(e) {
  }
  return data;
}

function __localizationWebGL() {
  var data = {};
  var created = [];

  var tryGetContext = function(c, name, attrs) {
    try { return c && c.getContext ? (c.getContext(name, attrs) || null) : null; }
    catch(e) { return null; }
  };

  try {
    var inWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
    var canvas = (inWorker && typeof OffscreenCanvas !== 'undefined')
      ? new OffscreenCanvas(1, 1)
      : document.createElement('canvas');

    var attrs = { antialias: false, depth: false, stencil: false, alpha: false, preserveDrawingBuffer: false };
    var attempts = ['webgl2', 'webgl', 'experimental-webgl'];

    var got = [];
    var gl2 = null, gl1 = null;

    for (var i = 0; i < attempts.length; i++) {
      var name = attempts[i];
      var ctx = tryGetContext(canvas, name, attrs);
      if (ctx) {
        got.push(name);
        created.push(ctx);
        if (name === 'webgl2') gl2 = ctx;
        else if (!gl1) gl1 = ctx;
      }
    }

    var gl = gl2 || gl1;

    data.js_webgl_has_support   = (gl1 || gl2) ? 'true' : 'false';
    data.js_webgl_2_has_support = gl2 ? 'true' : 'false';
    data.js_webgl_context_names = got.join(',');

    if (!gl) {
      data.js_webgl_vendor = 'not_supported';
      data.js_webgl_renderer = 'not_supported';
      data.js_webgl_unmasked_vendor = 'not_supported';
      data.js_webgl_unmasked_renderer = 'not_supported';
      data.js_webgl_version = 'not_supported';
      data.token_11 = '';
      data.token_12 = '0';
      data.token_13 = '';
      return data;
    }

    if (typeof gl.isContextLost === 'function' && gl.isContextLost()) {
      data.js_webgl_vendor = 'context_lost';
      data.js_webgl_renderer = 'context_lost';
      data.js_webgl_unmasked_vendor = '';
      data.js_webgl_unmasked_renderer = '';
      data.js_webgl_version = 'context_lost';
      data.token_11 = '';
      data.token_12 = '0';
      data.token_13 = '';
      return data;
    }

    var S = function(v) { return (typeof v === 'string' ? v.trim() : (v == null ? '' : '' + v)); };

    data.js_webgl_vendor   = S(gl.getParameter(gl.VENDOR));
    data.js_webgl_renderer = S(gl.getParameter(gl.RENDERER));
    data.js_webgl_version  = S(gl.getParameter(gl.VERSION));
    data.token_11          = S(gl.getParameter(gl.SHADING_LANGUAGE_VERSION));

    var debugInfo = gl.getExtension && gl.getExtension('WEBGL_debug_renderer_info');
    if (debugInfo) {
      data.js_webgl_unmasked_vendor   = S(gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL));
      data.js_webgl_unmasked_renderer = S(gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL));
    } else {
      data.js_webgl_unmasked_vendor = '';
      data.js_webgl_unmasked_renderer = '';
    }
    var exts = [];
    try { exts = (gl.getSupportedExtensions && gl.getSupportedExtensions()) || []; } catch(e) {}
    exts = exts.map(S).filter(Boolean).sort();
    data.token_12 = String(exts.length);
    data.token_13 = exts.join(',');

    return data;
  } catch (e) {
    return {
      js_webgl_has_support: '',
      js_webgl_2_has_support: '',
      js_webgl_context_names: '',
      js_webgl_vendor: 'error',
      js_webgl_renderer: 'error',
      js_webgl_unmasked_vendor: '',
      js_webgl_unmasked_renderer: '',
      js_webgl_version: 'error',
      token_11: '',
      token_12: '0',
      token_13: ''
    };
  } finally {
    try {
      for (var j = 0; j < created.length; j++) {
        var ctx_ = created[j];
        var lose = ctx_ && typeof ctx_.getExtension === 'function' && ctx_.getExtension('WEBGL_lose_context');
        if (lose && typeof lose.loseContext === 'function') lose.loseContext();
      }
    } catch(e) {}
  }
}

async function __localizationMediaDevices() {
  var data = {
    js_has_device_enumeration: false,
    js_has_microphone: false,
    js_has_webcam: false,
    js_has_speakers: false,
    js_media_devices_json: '[]'
  };
  var nav = window.navigator || {};
  if (nav.mediaDevices && typeof nav.mediaDevices.enumerateDevices === 'function') {
    data.js_has_device_enumeration = true;
    try {
      var devices = await nav.mediaDevices.enumerateDevices();
      var deviceSummary = [];
      devices.forEach(function(device) {
        if (device.kind === 'audioinput') data.js_has_microphone = true;
        if (device.kind === 'videoinput') data.js_has_webcam = true;
        if (device.kind === 'audiooutput') data.js_has_speakers = true;
        deviceSummary.push({ kind: device.kind, deviceId: device.deviceId ? 'exists' : 'none' });
      });
      data.js_media_devices_json = JSON.stringify(deviceSummary);
    } catch (e) { }
  }
  return data;
}

function __localizationAudio() {
  var data = {};
  try {
    var AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      var audioCtx = new AudioContext();
      data.js_audio_sample_rate = audioCtx.sampleRate || 0;
      data.js_audio_state = audioCtx.state || '';
      audioCtx.close();
    }
  } catch(e) {}
  return data;
}

async function __localizationClientHints() {
  var data = {
    token_14: '',
    token_15: '',
    ua_os_version: ''
  };
  var nav = window.navigator || {};
  if (nav.userAgentData && typeof nav.userAgentData.getHighEntropyValues === 'function') {
    try {
      var hints = await nav.userAgentData.getHighEntropyValues([
        "architecture",
        "model",
        "platformVersion"
      ]);
      data.token_14 = hints.architecture || '';
      data.token_15 = hints.model || '';
      data.ua_os_version = hints.platformVersion || '';
    } catch (e) {}
  }
  return data;
}

function __localizationSpeechVoices() {
  return new Promise(function(resolve) {
    var data = { js_speech_synthesis_voices: '' };
    try {
      if ('speechSynthesis' in window && typeof window.speechSynthesis.getVoices === 'function') {
        var processAndResolve = function() {
          var voices = window.speechSynthesis.getVoices() || [];
          if (voices.length > 0) {
            var voiceNames = voices.map(function(v) { return v.name; });
            voiceNames.sort();
            data.js_speech_synthesis_voices = voiceNames.join(',');
            resolve(data);
          }
        };
        var initialVoices = window.speechSynthesis.getVoices() || [];
        if (initialVoices.length > 0) {
          processAndResolve();
        } else {
          window.speechSynthesis.onvoiceschanged = processAndResolve;
        }
        setTimeout(function() { resolve(data); }, 250);
      } else {
        resolve(data);
      }
    } catch (e) {
      resolve(data);
    }
  });
}

async function __localizationPermissions() {
  var data = {
    js_permissions_json: ''
  };
  var nav = window.navigator || {};
  if (nav.permissions && typeof nav.permissions.query === 'function') {
    try {
      var permissionsToCheck = [
        'geolocation',
        'notifications',
        'camera',
        'microphone',
        'clipboard-read',
        'clipboard-write'
      ];
      var permissionStates = await Promise.all(
        permissionsToCheck.map(function(name) { return nav.permissions.query({ name: name }); })
      );
      var permissionsObject = {};
      permissionStates.forEach(function(status, index) {
        permissionsObject[permissionsToCheck[index]] = status.state;
      });
      data.js_permissions_json = JSON.stringify(permissionsObject);
    } catch (e) {}
  }
  return data;
}

async function __getLocalizationDataAsync() {
  var results = await Promise.all([
    Promise.resolve(__localizationBase()),
    Promise.resolve(__localizationUser()),
    Promise.resolve(__localizationLang()),
    Promise.resolve(__localizationFormat()),
    Promise.resolve(__localizationScreen()),
    Promise.resolve(__localizationDevice()),
    Promise.resolve(__localizationBrowser()),
    __localizationCanvas(),
    __localizationMediaDevices(),
    Promise.resolve(__localizationWebGL()),
    Promise.resolve(__localizationAudio()),
    __localizationClientHints(),
    __localizationSpeechVoices(),
    __localizationPermissions()
  ]);
  return Object.assign({}, ...results);
}
window.LocalizationDataGet = __getLocalizationDataAsync;
`