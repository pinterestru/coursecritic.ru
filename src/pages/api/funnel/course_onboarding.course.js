import { PermissionService } from "service/PermissionService";
import { AuthService } from "service/AuthService";
import { CourseService } from "service/CourseService";
import { CustomerService } from "service/CustomerService";
import { queryStringify } from "utils";
import { ecommerceStoreId } from "../../../constants";
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
  const productId = body.ecommerce_product_id
  if (!productId) {
    return res.status(200).json({message: "no_product_id"});
  }
  const workspaceId = body.workspace_id
  const origin = body.origin
  
  const course = await CourseService.courseGet(productId, {}, {asValue: true, apiPath})
  if (!course.ecommerce_product_id) {
    return res.status(200).json({message: "no_course"});
  }
  const isPaid = parseFloat(course.price || "0") > 0



  const customerResponse = await CustomerService.customerCreate(email, "", {workspaceId: workspaceId, timezoneOffsetMinutes: body.timezone_offset_minutes || 0, apiPath})
  if (customerResponse.message === "exists" || !customerResponse.message) {
    const customerId = await AuthService.userIdGet(email, {asValue: true, apiPath});
    try {
    } catch(e) {

    }


    CustomerService.customerUpdate({timezone_offset_minutes: body.timezone_offset_minutes || 0}, {customerId, apiPath})

    if (isPaid) {
      const params = {
        product_id: productId,
        provider: "buymeacoffee",
        email: email
      }
      const paymentLink = "/payment?" + queryStringify(params)
      return res.status(200).json({action: "redirect", url: paymentLink});
    }



    const permissionResponse = await PermissionService.permissionModelObjectCreate(email, "ecommerce_product", course.ecommerce_product_id, "registration", {product: course}, {apiPath})
    if (permissionResponse.message) {
      //res.status(200).json({message: "permission_error"});
    } 
    if (origin && course.registration_with_email_confirmation === "true" && !permissionResponse.message) {
      const callbackUrl = "/my-course/" + (course.slug || course.ecommerce_product_id)
      const emailTemplate = course.registration_email_template || "confirm_email"
      const response = await AuthService.generateOtp(email, {origin, email, ecommerceStoreId, withEmail: true, callbackUrl, emailTemplate, meta: {...course, domain: origin}, apiPath})
      if (response.message) {
        return res.status(200).json({message: "otp_error"});
      }
    }


    const params = {
      product_id: productId,
      customer_id: customerId
    }
    let redirectUrl = course.registration_success_url || "/"
    redirectUrl = redirectUrl + (redirectUrl.includes("?") ? "&" : "?") + queryStringify(params)

    return res.status(200).json({action: "redirect", url: redirectUrl});
  }

  return res.status(200).json({message: "customer_error"});
};
