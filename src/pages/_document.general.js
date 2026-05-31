import React from "react";
import { Html, Main, NextScript, Head } from "next/document";
import Script from "next/script";
import {
  yaMetrika,
  withGTM,
  gAnalytics,
} from "../constants";

export default function Document() {
  return (
    <Html>
      <Head>
        {withGTM ? (
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-5STDBCV');
                  `}
          </Script>
        ) : null}

        {gAnalytics ? (
          <Script
            src={"https://www.googletagmanager.com/gtag/js?id=" + gAnalytics}
            strategy="afterInteractive"
          />
        ) : null}
        {gAnalytics ? (
          <Script id="google-analytics" strategy="afterInteractive">
            {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){window.dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', '${gAnalytics}');
                      `}
          </Script>
        ) : null}

        {yaMetrika ? (
          <Script id="yandex-metrica" strategy="afterInteractive">
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

      </Head>
      <body style={{ display: "block" }}>
        {withGTM && false ? (
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-5STDBCV"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
        ) : null}

        <Main />
        <NextScript />


        {/*<Script
            src={"https://salebot.pro/js/salebot.js"}
            charset='utf-8'
            strategy="afterInteractive"
        />*/}
        {/*<Script id="salebot-pro" strategy="afterInteractive">
          {
            `
            setTimeout(() => SaleBotPro.init({
              onlineChatId: '1162'
            }), 1000);
          `}
        </Script>*/}
      </body>
    </Html>
  );
}
