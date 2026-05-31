import React from "react";
import Head from 'next/head';


export const SeoWrapper = ({ seo, children }) => {
    const { title, description, image, type, url, custom, links, favicon } = seo;
    return (
      <>
          <Head>
            <title>{title}</title>
            <meta property="description" content={description} key="description" />
            <meta property="og:url" content={url} key="ogurl" />
            <meta property="og:title" content={title} key="ogtitle" />
            <meta property="og:description" content={description} key="ogdescription" />
            <meta property="og:type" content={type} key="ogtype" />
            <meta property="og:image" content={image} key="ogimage" />
            {
              favicon ?
                <link rel="shortcut icon" href={favicon}/>
                :
                null
            }
            
            {
              (custom || []).map((item, i) => {
                  if (!item) return null
                  return <meta {...item} key={i}/>
              })
            }

            

            {
              (links || []).map((item, i) => {
                  if (!item) return null
                  return <link {...item} key={i}/>
              })
            }
          </Head>
          {children}
        </>
    );
}

