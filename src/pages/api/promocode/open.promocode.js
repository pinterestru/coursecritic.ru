import { ProductContentService } from "service/ProductContentService";
import { StoreService } from "service/StoreService";
const apiPath = process.env.NEXT_PUBLIC_API_PATH


function generatePromocode(min = 6, max = 12) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const codeLength = Math.floor(Math.random() * (max - min + 1)) + min; // Generates a number between min and max
  let code = '';

  for (let i = 0; i < codeLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters[randomIndex];
  }

  return code;
}


export default async (req, res) => {
  if (req.method !== "GET") {
    return res.status(405)
  }
  let { promocode_id, now } = req.query;

  try {
    const clickTime = req.cookies["_last_log"] || "1"
    if ((parseInt(now) - parseInt(clickTime)) > 50000) {
      return res.status(200).json({message: "404"})
    }
  } catch (e) {
    return res.status(200).json({message: "404"})
  }
  

  const isBot = false
  if (isBot) {
    const item = {
      title: "Промокод на скидку",
      description: "",
      code: "-",
      link: "",
      link_query_params: "",
      store_name: "",
      store_image: "",
      slug: "",
      images: ""
    }
    
    return res.status(200).json({item: item});

  } else {
    const promocode = await ProductContentService.productContentGet(promocode_id, {}, { asValue: true, apiPath })

    if (!promocode || !promocode.ecommerce_product_content_id) {
      return res.status(200).json({message: "404"})
    }

    const store = await StoreService.storeGet({slug: promocode.ecommerce_product_id}, { asProduct: true, asValue: true, apiPath })

    
    const item = {
      title: promocode.title,
      description: promocode.description,
      code: promocode.content,
      link: promocode.link,
      link_query_params: promocode.link_query_params,
      store_name: store.name,
      store_image: store.images,
      slug: store.slug,
      images: promocode.images
    }
    
    return res.status(200).json({item: item});
  }
};
