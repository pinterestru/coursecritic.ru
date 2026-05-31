import React, { useEffect, useState } from "react";
import { useStore } from "context/state";
import { useRouter } from 'next/router'
import { setCookie, changeQueryParams } from "utils";
import { IpService } from "service/IpService";
import { TrackService } from "service/TrackService";
import { withGTM } from "constants";

export const Wrapper = ({ children }) => {
  const [isReady, setIsReady] = useState(false);
  const {
    isTarget,
    mtfi,
    countryCodeList,
    defaultCountryCode,
    isMobile,
    dispatch,
  } = useStore();
  const router = useRouter();
  const isTargetRef = React.useRef(isTarget);


  const onResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const isMobile = width < 800;
    dispatch("style", { width, height, isMobile });
  };

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    IpService.IpDetailsGet().then((ipMeta) => {
      if (ipMeta.ip && ipMeta.countryCode) {
        const countryCode = ipMeta.countryCode.toLowerCase();
        dispatch("meta", {
          ip: ipMeta.ip,
          countryCode:
            countryCodeList && countryCodeList.length
              ? countryCodeList.includes(countryCode)
                ? countryCode
                : defaultCountryCode || countryCode
              : countryCode,
        });
      } else {
        console.warn("NO IP AND COUNTRY CODE");
      }
    });
  }, []);

  // set MTFI to state
  useEffect(() => {
    if (mtfi) return;
    const mtfi_ = TrackService.mtfiGet();
    if (mtfi_) {
      dispatch("meta", { mtfi: mtfi_, hasMtfi: true }).then((v) =>
        setIsReady(true)
      );
    } else {
      setIsReady(true);
    }
  }, [router.query]);

  const processScriptaction = (event) => {
    const data = event.detail || {};
    if (
      data.mtfi &&
      location &&
      (!location.search.includes("mtfi=") ||
        !location.search.includes(data.mtfi))
    ) {
      changeQueryParams(router, { mtfi: data.mtfi });
    }

    if (!isTargetRef.current && data.is_target) {
      isTargetRef.current = true;
      dispatch("meta", {
        isTarget: true,
      }).then((v) => {
        setCookie("_is_target", "true", 1);
        TrackService.eventExecute(data, router);
      });
    } else {
      TrackService.eventExecute(data, router);
    }
  };

  useEffect(() => {
    document.addEventListener("scriptaction", processScriptaction, {
      once: true,
    });
    return () =>
      removeEventListener("scriptaction", processScriptaction, { once: true });
  }, []);

  // Track Activity
  useEffect(() => {
    if (!isReady || !mtfi || !withGTM) return;
    TrackService.trackActivity30({ mtfi, apiPath: "script", useOnce: true });
    TrackService.trackActivity90({ mtfi, apiPath: "script", useOnce: true });
  }, [isReady, mtfi]);

  if (isMobile === undefined) {
    return null;
  }

  return (
    <>
      <div>{children}</div>
    </>
  );
};
