import { ParserService } from "service/ParserService";
const apiPath = process.env.NEXT_PUBLIC_API_PATH



export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405)
  }
  const body = req.body;
  const website = (body.email || "").toLowerCase()
  if (!website) {
    return res.status(500).json({message: "no__website"});
  }

  const ecommerceStoreId = (body.ecommerce_store_id || "")
  if (!ecommerceStoreId) {
    return res.status(500).json({message: "no__ecommerce_store_id"});
  }

  const slug = (body.slug || "").toLowerCase()
  if (!slug) {
    return res.status(500).json({message: "no__slug"});
  }


  return res.status(200).json({});
};
