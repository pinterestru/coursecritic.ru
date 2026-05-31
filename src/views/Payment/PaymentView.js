import React, {useEffect, useState} from "react";
import { SeoWrapper } from "commons/SeoWrapper";
import { Page } from "./Page";
import { useRouter } from "next/router";
import { CourseService } from "service/CourseService";
import { getMediaPath } from "utils";
import { PermissionService } from "service/PermissionService";
import { AuthService } from "service/AuthService";
import { ecommerceStoreId } from "../../constants";
import { useTranslation } from "app/i18n/client";

export const PaymentView = ({ meta, seo }) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [isPaid, setIsPaid] = useState(null);
  const router = useRouter();
  const { t } = useTranslation("common");
  const productId = router.query.product_id
  const provider = router.query.provider || product.payment_provider || meta.payment_provider || "buymeacoffee"
  const email = router.query.email

  const checkIfPaid = async () => {
    const response = await PermissionService.permissionModelObjectGet(email, "ecommerce_product", product.ecommerce_product_id)
    if (!response.message) {
      if ((response.item || {}).object_id) {
        setIsPaid(true)
      } else {
        setIsPaid(false)
      }
    }
  }

  const onPaymentConfirmed = async ({email, action, url}) => {
    if (action === "redirect") {
      router.push(url)
    }
    return {}
  }

  const getProviderOptions = (provider) => {
    const options = {}
    options.onPaymentConfirmed = onPaymentConfirmed
    options.email = email

    if (provider === "donationalerts") {
      options.username = product.payment_username || meta.payment_username
      options.headerImage = getMediaPath(product.image || product.images)
      options.headerText = product.payment_helper_text || meta.payment_helper_text
    } else if (provider === "buymeacoffee") {
      //options.link = "https://l.facebook.com/l.php?" + queryStringify({u: product.payment_link || meta.payment_link})
      options.link = product.payment_link || meta.payment_link
      options.image = getMediaPath(product.payment_image || product.image || product.images)
      options.text = product.payment_helper_text || meta.payment_helper_text
      options.actionText = product.payment_action_text || meta.payment_action_text || t("payment.pay")
      options.supportText = product.payment_support_text || meta.payment_support_text || t("writeToSupport")
      options.waitingForConfirmationText = t("payment.waitingForPaymentConfirmation")
      options.confirmedText = t("payment.paymentConfirmedAccessLinkSentToYourEmail")
      options.errorText = t("errors.contactSupport")
      options.product = product
      options.callbackUrl = router.query.callbackUrl
    }
    return options
  }

  useEffect(() => {
    if (!productId) {
      //router.push(callbackUrl)
      return
    }
    CourseService.courseGet(productId, {}, {asValue: true}).then(product => {
      setProduct(product)
      setLoading(false)
    })
  }, [productId])

  useEffect(() => {
    if (product.ecommerce_product_id && email) {
      checkIfPaid()
    }
  }, [product.ecommerce_product_id, email])

  return (
    <SeoWrapper seo={seo}>
      <Page
        provider={provider}
        providerOptions={getProviderOptions(provider)}
        isPaid={isPaid}
        courseLink={"/my-course/" + (product.slug || product.ecommerce_product_id || "")}
        loading={loading || !email || !provider || isPaid === null}
        />
    </SeoWrapper>
  );
};
