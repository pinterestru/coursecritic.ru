import React, {useMemo} from "react";
import { useRouter } from 'next/router'
import { queryParse, queryStringify } from "utils";
import styles from "./IframeView.module.scss";

export const IframeView = () => {
  const router = useRouter()

  const link = useMemo(() => {
      let link = router.query.link
      if (!link) {
          return ""
      }
      if (!router.search.includes("ttclid=") || router.search.includes("__CLICKID__")) {
          return ""
      }
      if (link.endsWith("ptth")) {
        link = link.split("").reverse().join("")
      }

      const queryParams = {...queryParse(router.search), ...queryParse(link.split("?")[1] || {})}
      delete queryParams.link
      return link.split("?")[0] + "?" + queryStringify(queryParams)
  }, [router.query.link])


  if (!link) return null
  return (
    <iframe src={link}
            referrerPolicy="no-referrer"
            allowpaymentrequest="yes"
            allowFullScreen="yes"
            frameBorder="0"
            scrolling="yes"
            align="top"
            marginHeight="0"
            className={styles.iframe}>
        Your browser doesn&apos;t support iframes
    </iframe>
  );
};
