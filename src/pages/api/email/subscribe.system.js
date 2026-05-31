import { EmailService } from "service/EmailService";
import { MetaService } from "service/MetaService";
import { LandingService } from "service/LandingService";
import { ecommerceStoreId, defaultLocale} from "../../../constants";
const apiPath = process.env.NEXT_PUBLIC_API_PATH



export default async (req, res) => {
  if (req.method !== "GET" && req.method !== "POST") {
    return res.status(405)
  }
  const query = req.query;
  const body = req.body || {};

  //return res.status(200).json({ok: true});


  const data = {
    email: body.email || query.email,
    phone: body.phone || query.phone,
    name: body.name || query.name,
    surname: body.surname || query.surname,
    fields: body.fields,
    source_placement: body.source_placement || query.source_placement,
    ecommerce_store_id: ecommerceStoreId,
    ecommerce_product_id: body.ecommerce_product_id || query.ecommerce_product_id,
    ecommerce_product_slug: body.ecommerce_product_slug || query.ecommerce_product_slug,
    url: body.url || query.url, // Important
    utm_source: body.utm_source || query.utm_source, // Important
    utm_medium: body.utm_medium || query.utm_medium, // Important
    utm_content: body.utm_content || query.utm_content, // Important
    referrer: body.referrer || query.referrer, // Important
    languages: body.languages || query.languages || req.headers['accept-language'],
    interests: body.interests || query.interests,
    with_confirmation: body.with_confirmation || query.with_confirmation,
    confirmation_template_slug: body.confirmation_template_slug || query.confirmation_template_slug,
    ip: req.headers["cf-connecting-ip"] || (req.headers['x-forwarded-for'] || "").split(",")[0].trim() || req.connection.remoteAddress || req.ip,
    ua: req.headers['user-agent'],
    mtfi: body.mtfi || query.mtfi || req.cookies['_mtfi'] || ""
  }

  const meta = await MetaService.metaGet({locale: defaultLocale, ecommerceStoreId}, {apiPath, asValue: true})

  const listId = meta.marketing_email_list_id || meta.email_list_id || meta.list_id
  if (listId) {
    data["list_id"] = listId
  }
  const listSlug = meta.marketing_email_list_slug || meta.email_list_slug || meta.list_slug
  if (listSlug) {
    data["list_slug"] = listSlug
  }

  const landingId = body.landing_id || query.landing_id
  if (landingId) {
    const landing = await LandingService.landingGet(landingId, { ecommerceStoreId }, { apiPath, asValue: true })
    if (landing && landing.ecommerce_product_id) {
      const productId = landing.product_id
      const emailTemplateSlug = landing.marketing_email_template_slug || landing.email_template_slug
      if (productId) {
        data["ecommerce_product_id"] = productId
      }
      if (emailTemplateSlug) {
        data["with_confirmation"] = true
        data["confirmation_template_slug"] = emailTemplateSlug
      }
    }
  }


  const response = await EmailService.emailSubscribe(data,  { apiPath })
  if (response.message) {
    return res.status(200).json({message: response.message});
  }
  return res.status(200).json({ok: true});
};
