import React, { useState, useEffect } from "react";
import Script from "next/script";

export const LoadPlayer = ({ value }) => {
  const [playerLoaded, setPlayerLoaded] = useState(null);

  const loadPlayer = () => {
    const nodes = document.getElementsByTagName("oembed");
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      const url = node.getAttribute("url");
      if (node.classList.contains("loaded")) {
        continue;
      }
      if (!url) {
        continue;
      }
      if (url.includes("vimeo")) {
        const match = /vimeo.*\/(\d+)/i.exec(url);
        if (!match) {
          continue;
        }
        const vimeoID = match[1];
        const videoNode = document.createElement("div");
        videoNode.classList.add("plyr-video");
        videoNode.setAttribute("data-plyr-provider", "vimeo");
        videoNode.setAttribute("data-plyr-embed-id", vimeoID.toString());
        node.parentNode.appendChild(videoNode);
        try {
          new Plyr(videoNode);
        } catch(e) {

        }
        node.classList.add("loaded");
      }
    }
  };

  useEffect(() => {
    if (window.plyr_loaded) {
      setPlayerLoaded(true)
      loadPlayer()
    } else if (value) {
      if (value.includes("oembed")) {
        setPlayerLoaded(false);
      }
    }
  }, [value])


  return (
    <>
      {playerLoaded === false ? (
        <Script
          src="/static/plyr.js"
          onLoad={async () => {
            const response = await fetch("/static/plyr.css")
            const styles = await response.text()
            const styleNode = document.createElement("style");
            styleNode.textContent = styles;
            document.head.append(styleNode)

            window.plyr_loaded = true;
            loadPlayer()
            console.log("Script has loaded");
          }}
        />
      ) : null}
    </>
  );
};

