import React, { useState, useEffect } from "react";
import { AccountLayout } from "layouts/AccountLayout";
import { RecipeService } from "service/RecipeService";
import { SeoWrapper } from "commons/SeoWrapper";
import { Page } from "./Page";
import { useRouter } from "next/router";
import { ProductCategoryService } from "service/ProductCategoryService";

export const RecipesView = ({ meta, seo, ecommerceRecipeStoreId }) => {
  const [loading, setLoading] = useState(true);
  const [recipeList, setRecipeList] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(32);
  const [itemTotal, setItemTotal] = useState(0);
  const [pageTotal, setPageTotal] = useState(1);
  const [dietCategoryList, setDietCategoryList] = useState([]);
  const [mealTimeCategoryList, setMealTimeCategoryList] = useState([]);
  const [filters, setFilters] = useState({});
  const router = useRouter();
  const canLoadMore = page < pageTotal;
  const searchType = filters.search_type || "ingredients"

  const request = async (filters) => {
    filters = filters || {};
    if (!filters.search && (!filters.diet_type || !filters.meal_time_type) ) {
      setRecipeList([])
      setPageTotal(1)
      setPage(1)
      return {};
    }

    const requestFilters = {
      locale: router.locale,
      ecommerceStoreId: ecommerceRecipeStoreId,
      page: filters.page || page,
      pageSize,
    }
    if (searchType === "diet") {
      requestFilters["categoryAndList"] = [filters.diet_type, filters.meal_time_type]
    } else {
      requestFilters["ingredients"] = ((filters.search || "").split(";").map(v => ((v || "").split("|")[1] || "").split(",")))
    }
    const { itemList, itemTotal, pageTotal } = await RecipeService.recipeList(requestFilters, {});
    return { itemList, itemTotal, pageTotal };
  };

  const requestCategory = async () => {
    const categoryList = await ProductCategoryService.productCategoryList({ecommerceStoreId: ecommerceRecipeStoreId}, {asValue: true})
    
    let mealTimeParentId = ""
    let dietParentId = ""
    categoryList.forEach(category => {
      if (category.slug === "meal-time-type") {
        mealTimeParentId = category.ecommerce_product_category_id
      }
      if (category.slug === "diet-type") {
        dietParentId = category.ecommerce_product_category_id
      }
    })

    const dietList = []
    const mealTimeList = []
    categoryList.forEach(category => {
      if (category.parent_id === mealTimeParentId) {
        mealTimeList.push(category)
      }
      if (category.parent_id === dietParentId) {
        dietList.push(category)
      }
    })

    setDietCategoryList(dietList)
    setMealTimeCategoryList(mealTimeList)
  }

  const onRemoveFilter = (name) => {
    setLoading(true)
    const newFilters = {...filters}
    delete newFilters[name]
    setFilters(newFilters)
    const newQuery = {...router.query, ...newFilters} 
    delete newQuery[name]
    router.push({pathname: router.pathname, query: newQuery}, null, {shallow: true})
    return newFilters
  } 

  const onAddFilter = (name, value) => {
    if (!value) {
      onRemoveFilter(name)
      return
    }
    setLoading(true)
    const newFilters = {...filters}
    newFilters[name] = value
    setFilters(newFilters)
    const newQuery = {...router.query, ...newFilters}
    newQuery[name] = value
    router.push({pathname: router.pathname, query: newQuery}, null, {shallow: true})
    return newFilters
  }

  const onAddFilters = (filterList) => {
    setLoading(true)
    const newFilters = {...filters};
    const newQuery = {...router.query, ...newFilters}
    filterList.forEach(filter => {
      if (filter.value) {
        newFilters[filter.key] = filter.value
        newQuery[filter.key] = filter.value
      } else {
        delete newFilters[filter.key]
        delete newQuery[filter.key]
      }
    })
    setFilters(newFilters)
    router.push({pathname: router.pathname, query: newQuery}, null, {shallow: true})
    return newFilters
  }

  const onLoadMore = async () => {
    setPage(page + 1);
    const { itemList, itemTotal, pageTotal } = await request({...filters,
      page: page + 1,
    });
    setRecipeList(recipeList.concat(itemList));
    setItemTotal(itemTotal);
    setPageTotal(pageTotal);
  };

  useEffect(() => {
    if (router.isReady) {

      request(filters).then((response) => {
        const { itemList, itemTotal, pageTotal } = response;
        if (itemList) {
          setRecipeList(itemList);
          setItemTotal(itemTotal);
          setPageTotal(pageTotal);
        }
        setLoading(false);
        if (itemList && itemList.length) {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }); 
    }
  }, [router.isReady, filters]);


  useEffect(() => {
    if (router.isReady) {
      setFilters(router.query)
      requestCategory()
    }
  }, [router.isReady]);


  return (
    <SeoWrapper seo={seo}>
      <AccountLayout meta={meta}>
        <Page
          loading={loading}
          searchType={searchType}
          recipeList={recipeList}
          canLoadMore={canLoadMore}
          onLoadMore={onLoadMore}
          onAddFilter={onAddFilter}
          onAddFilters={onAddFilters}
          onRemoveFilter={onRemoveFilter}
          dietCategoryList={dietCategoryList}
          mealTimeCategoryList={mealTimeCategoryList}
          search={filters.search}
          dietSelected={filters.diet_type}
          mealTimeSelected={filters.meal_time_type}
        />
      </AccountLayout>
    </SeoWrapper>
  );
};
