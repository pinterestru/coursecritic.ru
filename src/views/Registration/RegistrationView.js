import React from "react";
import { SeoWrapper } from "commons/SeoWrapper";
import { FunnelService } from "service/FunnelService";
import { useRouter } from "next/router";
import { queryStringify } from "utils";
import { Page } from "./Page";

export const RegistrationView = ({
  meta,
  menu,
  slug,
  page,
  product,
  courseId,
  workspaceId,
  seo,
}) => {
  const router = useRouter();

  const onRegistration = async (email) => {
    const productId = product.slug || product.ecommerce_product_id
    const response = await FunnelService.courseOnboarding(email, productId, workspaceId, product.domain || window.location.origin)
    if (!response.message) {
      const action = response.action
      if (action === "redirect" && response.url) {
        router.push(response.url)
      }
      return {}
    } else {
      return {message: "error"}
    }
  }

  return (
    <SeoWrapper seo={seo}>
      <Page
        title={
          product.registration_title || page.title || meta.registration_title
        }
        description={
          product.registration_description ||
          page.description ||
          meta.registration_description
        }
        actionText={
          product.registration_action_text ||
          page.action_text ||
          meta.registration_action_text
        }
        image={
          product.registration_image ||
          page.image ||
          meta.registration_image ||
          product.image ||
          product.images
        }
        supportEmail={meta.email || meta.store_email}
        onRegistration={onRegistration}
      />
    </SeoWrapper>
  );
};
