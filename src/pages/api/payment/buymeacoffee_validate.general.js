import { PermissionService } from "service/PermissionService";
import { AuthService } from "service/AuthService";
import { CourseService } from "service/CourseService";
import { ecommerceStoreId } from "../../../constants";
import { queryStringify } from "utils";
const token = process.env.NEXT_PUBLIC_BUYMEACOFFEE_TOKEN
const apiPath = process.env.NEXT_PUBLIC_API_PATH



export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405)
  }
  const isTest = (req.headers.host || "").startsWith("localhost")

  const body = req.body;
  
  const email = (body.email || "").split(" ").join("").toLowerCase()
  if (!email) {
    return res.status(200).json({message: "no_email"});
  }
  const product = body.product || {}
  const productId = product.ecommerce_product_id
  if (!productId) {
    return res.status(200).json({message: "no_product_id"});
  }

  const origin = body.origin
  if (!origin) {
    return res.status(200).json({message: "no_origin"});
  }

  const url = "https://developers.buymeacoffee.com/api/v1/extras"
  const headers = {
    Authorization: `Bearer ${token}`,
    'User-Agent': 'python-requests/2.28.1',
  }
  const response = await fetch(url, {
    method: "GET",
    headers,
  });
  if ((response.status_code || response.status) !== 200) {
    return res.status(200).json({message: "error"});
  }
  const data = await response.json()
  const items = data.data || [];

  let isApproved = isTest ? true : false
  let rewardId = ""
  let error = ""

  items.forEach((item, i) => {
    const extra = item.extra || {};

    const purchaseQuestion = (item.purchase_question || "").toLowerCase()
    const payerEmail = (item.payer_email || "").toLowerCase()
    const payerName = (item.payer_name || "").toLowerCase()
    const rewardQuestion = (extra.reward_question || "").toLowerCase()
    if (purchaseQuestion.includes(email) || purchaseQuestion.includes(payerEmail) || purchaseQuestion.includes(payerName) || purchaseQuestion.includes(rewardQuestion)) {
      isApproved = true
      if (extra.reward_id) {
        rewardId = extra.reward_id.toString()
      }
    }
  })

  if (isApproved && rewardId && product.payment_link && product.payment_link.includes("buymeacoffee") && !product.payment_link.includes(rewardId)) {
    //isApproved = false
  }

  if (isApproved) {
    const permissionResponse = await PermissionService.permissionModelObjectCreate(email, "ecommerce_product", productId, "payment", {payment: "buymeacoffee", product}, {apiPath})
    if (permissionResponse.message) {
      //res.status(200).json({message: "permission_error"});
    } 
    if (origin && product.registration_with_email_confirmation === "true" && !permissionResponse.message) {
      const callbackUrl = body.callbackUrl || ("/my-course/" + (product.slug || product.ecommerce_product_id))
      const emailTemplate = course.registration_email_template || "confirm_email"
      const response = await AuthService.generateOtp(email, {origin, email, ecommerceStoreId, withEmail: true, callbackUrl, emailTemplate, meta: {...product, domain: origin}, apiPath})
      if (response.message) {
        error = "otp_error"
      }
    }
  }

  if (isApproved) {
    const course = await CourseService.courseGet(productId, {}, {asValue: true, apiPath})
    if (!course.ecommerce_product_id) {
      error = 
      "error_no_course"
    }
    if (course.registration_success_url) {
      const customerId = await AuthService.userIdGet(email, {asValue: true, apiPath});
      const params = {
        product_id: productId,
        customer_id: customerId
      }
      let redirectUrl = course.registration_success_url || "/"
      redirectUrl = redirectUrl + (redirectUrl.includes("?") ? "&" : "?") + queryStringify(params)
    
      return res.status(200).json({approved: isApproved, message: error, action: "redirect", url: redirectUrl});
    }
  }


  

  return res.status(200).json({approved: isApproved, message: error});
};
