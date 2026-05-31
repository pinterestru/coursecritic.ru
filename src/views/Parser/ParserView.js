import React from "react";
import { ParserService } from "service/ParserService";
import { Page } from "./Page";

export const ParserView = ({ecommerceStoreIdDefault}) => {

    const onParse = async (data) => {
        const response = await ParserService.websiteDownload(data.website, data.ecommerce_store_id, data.slug)
        if (!response.message) {
            return 
        }
        return response.message
    }
 
    return (
      <Page
            ecommerceStoreIdDefault={ecommerceStoreIdDefault}
            onParse={onParse}
          />
    );
};
