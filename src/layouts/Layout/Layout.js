import React from "react";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { ProductActionDialog } from "components/product/ProductActionDialog";
import { useStore } from "context/state";
import { Notification } from "commons/Notification";
import { CookieConsent } from "components/CookieConsent";

export const Layout = ({ meta, menu, children }) => {
  const {notification, dispatch, product, height} = useStore();

  return (
    <>
      <Header menu={menu} withCategories={meta.header_with_categories === "true"} storeName={meta.store_name} storeLogo={meta.store_logo} />
      <div style={{minHeight: (height || 0) - 60}}>
          {children}
      </div>
      <Footer
        menu={menu}
        storeName={meta.store_name}
        storeLogo={meta.store_logo}
        storeEmail={meta.store_email}
        storePhone={meta.store_phone}
        storeLegal={meta.store_legal}
        linkFacebook={meta.link_facebook}
        linkInstagram={meta.link_instagram}
        footerTitle={meta.footer_title}
        footerDescription={meta.footer_description}
        footerGallery={meta.footer_gallery}
        withLogo={meta.footer_with_logo === "true"}
        withProduct={meta.footer_with_product === "true"}
        withGallery={meta.footer_with_gallery === "true"}
        withBanner={meta.footer_with_banner === "true"}
        withCategories={meta.footer_with_categories === "true"}
        product={meta.product}
        bannerPreview={meta.banner_preview}
        bannerTitle={meta.banner_title}
        bannerDescription={meta.banner_description}
        bannerLink={meta.banner_link}
        bannerImage={meta.banner_image}
        withPageLinks={meta.footer_with_page_links === "true"}
      />
     {/*<SideMenu isOpen={(sideMenu || {}).isSideMenuOpen}
               menu={menu}
               withCategories={meta.header_with_categories === "true"}
               withPageLinks={meta.header_with_page_links === "true"}
               product={meta.product}
               storeName={meta.store_name}
               storeLogo={meta.store_logo}
     />*/}

        <Notification {...notification} dispatch={dispatch} withClose/>
        <ProductActionDialog product={product}/>
        <CookieConsent/>

    </>
  );
};
