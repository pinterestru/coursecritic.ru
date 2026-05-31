import Script from "next/script";


export const ExternalScriptsAsFunc = ({ gAnalytics, gadsPixel, gtm, yaMetrika, withInit, withYandexAds }) => {
    const withInit_ = withInit === true ? "true" : "false"
    return (
        <Script strategy="afterInteractive">
            {`
            function initExternal() {
                  if (window.location.hostname === "localhost") {
                    console.log("PP skipped | localhost");
                    return
                  }
                  const gAnalytics = "${gAnalytics || ""}"
                  const gadsPixel = "${gadsPixel || ""}"
                  const gtm = "${gtm || ""}"
                  const yaMetrika = "${yaMetrika || ""}"
                  const withYandexAds = ${withYandexAds === true}
                  console.log("PP init");

                  if (withYandexAds) {
                    // Load Yandex Ads
                    window.yaContextCb=window.yaContextCb||[]
                    var yaAdsScript = document.createElement('script');
                    yaAdsScript.src = "https://yandex.ru/ads/system/context.js";
                    document.head.appendChild(yaAdsScript);
                  }
  
                  if (gtm) {
                    // Load Google Tag Manager
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer',gtm);
                    
                    var noscript = document.createElement('noscript');
                    var iframe = document.createElement('iframe');
                    iframe.src = "https://www.googletagmanager.com/ns.html?id=" + gtm;
                    iframe.height = "0";
                    iframe.width = "0";
                    iframe.style.display = "none";
                    iframe.style.visibility = "hidden";
                    noscript.appendChild(iframe);
                    document.body.appendChild(noscript);
                  }
  
                  if (gAnalytics) {
                    // Load Google Analytics
                    var gaScript = document.createElement('script');
                    gaScript.src = "https://www.googletagmanager.com/gtag/js?id=" + gAnalytics;
                    document.head.appendChild(gaScript);

                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', gAnalytics);
                    if (gadsPixel) {
                      // Load Google Ads
                      gtag('config', gadsPixel);
                    }
                  }
  
  
                  if (yaMetrika) {
                    // Load Yandex Metrika
                    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                          m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                    ym(yaMetrika, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true,
                    });
  
                    var noscript = document.createElement('noscript');
                    var div = document.createElement('div');
                    var img = document.createElement('img');
                    img.src = "https://mc.yandex.ru/watch/" + yaMetrika;
                    img.style.position = "absolute";
                    img.style.left = "-9999px";
                    img.alt = "";
                    div.appendChild(img);
                    noscript.appendChild(div);
                    document.body.appendChild(noscript);
                  }
              };
              window.InitExternal = initExternal;
              const withInit = "${withInit_}"
              if (withInit === "true") {
                initExternal();
              } else if (window.OnInitExternal) {
                initExternal();
                window.OnInitExternal = false
              }
          `}
        </Script>
    )
}


export const GTMAsFunc = ({ gtm, withInit }) => {
  const withInit_ = withInit === true ? "true" : "false"
  return (
      <Script strategy="afterInteractive">
          {`
          function initExternal() {
                if (window.location.hostname === "localhost") {
                  console.log("PP skipped | localhost");
                  return
                }
                const gtm = "${gtm || ""}"
                console.log("PP init");

                if (gtm) {
                  // Load Google Tag Manager
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer',gtm);
                  
                  var noscript = document.createElement('noscript');
                  var iframe = document.createElement('iframe');
                  iframe.src = "https://www.googletagmanager.com/ns.html?id=" + gtm;
                  iframe.height = "0";
                  iframe.width = "0";
                  iframe.style.display = "none";
                  iframe.style.visibility = "hidden";
                  noscript.appendChild(iframe);
                  document.body.appendChild(noscript);
                }
            };
            window.InitExternal = initExternal;
            const withInit = "${withInit_}"
            if (withInit === "true") {
              initExternal();
            } else if (window.OnInitExternal) {
              initExternal();
              window.OnInitExternal = false
            }
        `}
      </Script>
  )
}


export const ExternalScripts = ({ gAnalytics, gtm, yaMetrika }) => {
    return (
        <>
            {gAnalytics ? (
                <Script
                    src={"https://www.googletagmanager.com/gtag/js?id=" + gAnalytics}
                    strategy="lazyOnload"
                />
            ) : null}
            {gAnalytics ? (
                <Script id="google-analytics" strategy="lazyOnload">
                    {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){window.dataLayer.push(arguments);}
                            gtag('js', new Date());
    
                            gtag('config', '${gAnalytics}');
                          `}
                </Script>
            ) : null}
            {gtm ? (
                <Script id="google-gtm" strategy="lazyOnload">
                    {`
                            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','${gtm}');
                          `}
                </Script>
            ) : null}
            {gtm ? (
                <noscript>
                    <iframe
                        src={"https://www.googletagmanager.com/ns.html?id=" + gtm}
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    ></iframe>
                </noscript>
            ) : null}

            {yaMetrika ? (
                <Script id="yandex-metrica" strategy="lazyOnload">
                    {`
                            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                            m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    
                            ym(${yaMetrika}, "init", {
                                 clickmap:true,
                                 trackLinks:true,
                                 accurateTrackBounce:true,
                                 webvisor:true
                            });
                          `}
                </Script>
            ) : null}
            {yaMetrika ? (
                <noscript>
                    <div>
                        <img
                            src={"https://mc.yandex.ru/watch/" + yaMetrika}
                            style={{ position: "absolute", left: "-9999px" }}
                            alt=""
                        />
                    </div>
                </noscript>
            ) : null}
        </>
    )
}


export const YandexAdsScript = () => {
    return (
      <>
        <Script>
          {`
  window.yaContextCb=window.yaContextCb||[]
          `}
        </Script>
        <Script
          src="https://yandex.ru/ads/system/context.js"
          strategy="afterInteractive"
        />
      </>
    )
  }