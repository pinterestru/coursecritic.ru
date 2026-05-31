import { EmailService } from "service/EmailService";
const apiPath = process.env.NEXT_PUBLIC_API_PATH


export default async (req, res) => {
  if (req.method !== "GET" && req.method !== "POST") {
    return res.status(405)
  }
  const query = req.query;
  const body = req.body || {};

  const memberId = body.member_id || query.member_id
  if (!memberId) {
    return res.status(200).json({message: "member_id__null"})
  }
  const data = {
    member_id: memberId,
    ip: req.headers["cf-connecting-ip"] || (req.headers['x-forwarded-for'] || "").split(",")[0].trim() || req.connection.remoteAddress || req.ip,
    ua: req.headers['user-agent']
  }


  const response = await EmailService.emailConfirm(data, { apiPath })
  if (response.message) {
    return res.status(200).json({message: response.message});
  }
  return res.status(200).json({ok: true});
};
