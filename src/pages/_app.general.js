import React from "react";
import { Wrapper } from "wrapper";
import Head from "next/head";
import { StoreWrapper as Provider } from "context/state";
import { appWithTranslation } from "next-i18next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "styles/scss/reset.scss";
import "styles/theme.css";
import "styles/scss/global.scss";
import "styles/scss/main.scss";
import "styles/scss/editor.scss";

const roboto = Roboto({
  variable: "--roboto-font",
  weight: ["400", "700"],
  display: "swap",
  preload: true,
  style: ['normal'],
  subsets: ["latin", "cyrillic"],
  fallback: ["sans-serif"],
  adjustFontFallback: true,
});


function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
            :root {
              --font-family: ${roboto.style.fontFamily};
            }
            body {
              font-family: ${roboto.style.fontFamily};
            }
          `}
      </style>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <div className={roboto.className}>
        <ThemeProvider defaultTheme = 'light'>
            <Provider>
              <Wrapper>
                <Component {...pageProps} />
              </Wrapper>
            </Provider>
          </ThemeProvider>
      </div>
    </>
  );
}

export default appWithTranslation(App);
