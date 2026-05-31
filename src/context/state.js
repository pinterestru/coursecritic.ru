import { createContext, useContext, useReducer } from "react";
import { useRouter } from 'next/router'

import {
  ecommerceStoreId,
  ecommerceProductStoreId,
  ecommerceBlackStoreId,
  iframeLink,
  localeList,
  defaultLocale,
  versionType,
  defaultCountryCode,
  countryCodeList
} from "../constants";
//import { notification } from "commons/Notification";

export const StoreContext = createContext();
const StoreDispatchContext = createContext();

const defState = {
  style: {
    isSideMenuOpen: false,
    isMobile: undefined,
    height: 0,
    width: 0,
    isScroll100: false,
  },
  device: {},
  store_settings: {},
  customer: {},
  login: {
    token: "",
  },
  menu: {

  },
  //notification,
  meta: {
    ecommerceStoreId,
    ecommerceProductStoreId,
    ecommerceBlackStoreId,
    isTarget: ecommerceBlackStoreId ? false : true,
    iframeLink,
    localeList,
    defaultLocale,
    defaultCountryCode,
    countryCodeList,
    versionType,
    mtfi: "",//getCookie("_mtfi"),
    hasMtfi: false, //!!getCookie("_mtfi"),
    productSlug: "", //getCookie("_product_slug"),
    ip: "",
    countryCode: undefined,
    product: undefined
  },
};

const reducers = {
};

const mainReducer = (state_, action) => {
  const state = { ...state_ };
  let payload = action.payload;
  let content = action.content || action.type;

  payload = reducers[content]
    ? reducers[content](state[content], payload, action.action, {
        state: { ...state },
      }) || payload
    : payload;

  if ("delete" in payload) {
    state[content] = payload.delete;
  } else {
    const localState = state[content] || {};
    const newLocalState = { ...localState, ...payload };
    state[content] = newLocalState;
  }

  return state;
};

export function StoreWrapper({ children }) {
  const [state, dispatch_] = useReducer(mainReducer, defState);
  const router = useRouter();

  const dispatch = async (content, payload, action) => {
    if (!payload) {
      router.push(content, undefined, { scroll: false });
      return;
    }
    return dispatch_({ type: content, payload, action });
  };

  const value = { ...state, ...state.style, ...state.meta, dispatch };

  return (
    <StoreContext.Provider value={value}>
      <StoreDispatchContext.Provider value={dispatch}>
        {children}
      </StoreDispatchContext.Provider>
    </StoreContext.Provider>
  );
}

export function useStore() {
  return useContext(StoreContext) || {};
}

export function useDispatch() {
  return useContext(StoreDispatchContext);
}
