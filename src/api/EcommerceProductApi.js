import { dataSource } from "./dataSource";

export class EcommerceProductApi {
  static async ecommerceProductList(filters, options) {
    filters = filters || {};
    options = options || {};
    const { path, apiPath, revalidate } = options;
    const {
      category,
      categoryList,
      categoryAndList,
      status="published",
      slug,
      slugs,
      tag,
      type,
      search,
      size,
      page,
      pageSize,
      limit,
      random,
      versionId,
      fields,
      withRich,
      excludeIdList,
      excludeFields,
      includeFields,
      withVersionDict,
      ecommerceStoreId,
      ecommerceStoreIdList,
      ecommerceProductIdList,
      ingredients
    } = filters;

    const query = {
      from: page ? ((page - 1 || 0) * (pageSize || 20)) : undefined,
      size: size || limit || pageSize || 10000,
      sort: [
        {
          "search_data.number_dynamic.value": {
            missing: "_last",
            mode: "avg",
            order: "desc",
            nested: {
              path: "search_data.number_dynamic",
              filter: {
                term: {
                  "search_data.number_dynamic.name":
                    "position_boost|" + (versionId || "default"),
                },
              },
            },
          },
        },
      ],
      _source: {
        includes: fields || ["search_result_data"],
      },
      query: {
        bool: {
          filter: [],
          must_not: [{ term: { "hidden.id_list": "default" } }],
        },
      },
    };
    if (slug) {
      query.query.bool.filter.push({
        bool: {
          should: [
            { term: { "search_data.slug": slug } },
            { term: { "search_data.ecommerce_product_id": slug } },
          ],
        },
      });
    }
    if (slugs) {
      query.query.bool.filter.push({
        bool: {
          should: [
            { terms: { "search_data.slug": slugs } },
            { terms: { "search_data.ecommerce_product_id": slugs } },
          ],
        },
      });
    }
    if (status) {
      query.query.bool.filter.push({
        bool: {
          should: [
            { term: { "search_data.status": "" } },
            { term: { "search_data.status": status } },
          ],
        },
      });
    }
    if (ecommerceProductIdList) {
      query.query.bool.filter.push({ terms: { "search_data.ecommerce_product_id": ecommerceProductIdList } });
    }
    if (excludeIdList) {
      query.query.bool.must_not.push({ terms: { "search_data.ecommerce_product_id": excludeIdList } })
    }
    if (!withRich && !includeFields) {
      query._source.excludes = ["*.article_body", "*.description_rich", "*.source_article_body", "*.source_description_rich"];
    }
    if (excludeFields) {
      query._source.excludes = (query._source.excludes || []).concat(excludeFields)
    }
    if (includeFields || fields) {
      query._source.includes = includeFields || fields
    } else if (!withRich) {
      query._source.excludes = (query._source.excludes || []).concat(["*.article_status_flow", "*.google_serp", "*.google_paa", "*.yandex_serp", "*.serp_content", "*.article_outline", "*.description_rich", "*.source_article_body", "*.source_description_rich"])
      if (!slug) {
        query._source.excludes.push("*.article_body")
      }
    }
    if (tag) {
      query.query.bool.filter.push({ term: { "search_data.tags": tag } });
    }
    if (ingredients && ingredients.length) {
      ingredients.forEach(ingredient => {
        if (!ingredient) return
        if (Array.isArray(ingredient)) {
          query.query.bool.filter.push({ terms: { "search_data.ingredients": ingredient } });
        } else {
          query.query.bool.filter.push({ term: { "search_data.ingredients": ingredient } });
        }
      })
    }
    if (versionId && false) {
      query.query.bool.filter.push({
        term: { "search_data.versions": versionId },
      });
    }

    if (category) {
      query.query.bool.filter.push({ term: { "category.id_list": category } });
    }
    if (categoryList) {
      query.query.bool.filter.push({
        terms: { "category.id_list": categoryList },
      });
    }
    if (categoryAndList) {
      categoryAndList.forEach(category => {
        query.query.bool.filter.push({ term: { "category.id_list": category } });
      })
    }
    if (ecommerceStoreIdList && ecommerceStoreIdList.length) {
      query.query.bool.filter.push({
        terms: { "search_data.ecommerce_store_id": ecommerceStoreIdList },
      });
    } else if (ecommerceStoreId) {
      query.query.bool.filter.push({
        term: { "search_data.ecommerce_store_id": ecommerceStoreId },
      });
    }
    if (type) {
      query.query.bool.filter.push({
        term: { "search_data.product_type": type },
      });
    }

    if (random) {
      //query.query["function_score"] = {
      //  "random_score": {
      //    "seed": 11
      //  }
      //}
    }

    if (search) {
      const searchQuery = {
          "query_string": {
              "query": ("*" + search.toLowerCase().replace("%", "") + "*"),
              "default_field": "search_data.full_text"
          }
      };
      query.query.bool.filter.push(searchQuery);
  }

    const resp = await dataSource(
      `${path || "ecommerce_product_view_list"}?is_search=true&postprocess=${
        versionId || "default"
      }${
        withVersionDict ? "&with_version_dict=true" : ""
      }&query=${JSON.stringify(query)}`,
      { apiPath, revalidate }
    );
    if (!resp.message && resp.item_list) {
      const itemList = (resp.item_list || []).map((item) => {
        const result = item.version || {};
        if (item.category_id_dict) {
          result.category_id_dict = item.category_id_dict;
        }
        if (item.attribute_set_id) {
          result.attribute_set_id = item.attribute_set_id;
        }
        if (item.ecommerce_product_id) {
          result.ecommerce_product_id = item.ecommerce_product_id;
        }
        if (item.id) {
          result.id = item.id;
        }
        if (item.ecommerce_store_id) {
          result.ecommerce_store_id = item.ecommerce_store_id;
        }
        if (item.product_type) {
          result.product_type = item.product_type;
        }
        if (item.tags) {
          result.tags = item.tags;
        }
        if (item.versions) {
          result.versions = item.versions;
        }
        if (withVersionDict) {
          result.version_dict = item.version_dict || {};
        }
        if (!withRich) {
          delete result["article_body"];
          delete result["description_rich"];
          if (withVersionDict) {
            Object.keys(result.version_dict).forEach((key) => {
              const v = result.version_dict[key];
              delete v["article_body"];
              delete v["description_rich"];
              result.version_dict[key] = v;
            });
          }
        }
        return result;
      });
      const itemTotal = resp.size || 0
      const pageTotal = Math.ceil((resp.size || 0) / (pageSize || 20))
      return { itemList: itemList, message: resp.message, status: resp.status, page, pageTotal, itemTotal };
    }
    return { itemList: [], message: resp.message, status: resp.status, page, pageTotal: 0, itemTotal: 0 };
  }

  static async ecommerceProductGet(slug, filters, options) {
    const { itemList, message, status } = await this.ecommerceProductList(
      {
        slug,
        ...filters,
      },
      options
    );
    return { item: itemList[0] || {}, message, status };
  }


  static async ecommerceProductSuggestionList(filters, options) {
    filters = filters || {};
    options = options || {};
    const { path, apiPath, revalidate } = options;
    const {
      search,
      attribute,
      size
    } = filters;

    const field = "search_data." + attribute
    const query = {
      "_source": field,
      "suggest": {
        "suggestions": {
          "prefix": search,       
          "completion": {         
              "field": field,
              "skip_duplicates": true,
              "size": size || 10,
              //"fuzzy": {
              //  "fuzziness": 1
              //}
          }
        }
      }
    };


    const resp = await dataSource(
      `${path || "ecommerce_product_view_list"}?is_search=true&query=${JSON.stringify(query)}&`,
      { apiPath, revalidate }
    );
    
    const result = (((resp["suggest"] || {}).suggestions[0] || {}).options || []).map(v => {
      const split = v.text.split("|")
      if (split.length > 1) {
        return split[1]
      }
      return v
    })
    return {itemList: result}
  }
}

