import React, { useState, useMemo } from "react";
import { useTranslation } from "app/i18n/client";
import { clsx } from "utils";
import { RecipeSection } from "components/recipe/RecipeSection";
import styles from "./Page.module.scss";
import { Loader } from "commons/Loader";
import { Button } from "commons/Button";
import { RecipeCategoryDialog } from "components/recipe/RecipeCategoryDialog";
import { RecipeCategoryList } from "components/recipe/RecipeCategoryList/RecipeCategoryList";
import { RecipeCategoryItem } from "components/recipe/RecipeCategoryItem/RecipeCategoryItem";
import { RecipeDescriptionDialog } from "components/recipe/RecipeDescriptionDialog";
import { RecipeSearch } from "components/recipe/RecipeSearch";
import { BsFillSearchHeartFill } from "react-icons/bs";

export const Page = ({
  recipeList,
  loading,
  onLoadMore,
  canLoadMore,
  dietSelected,
  mealTimeSelected,
  mealTimeCategoryList,
  dietCategoryList,
  search,
  searchType,
  onAddFilter,
  onAddFilters,
  onRemoveFilter,
}) => {
  const [filterOpen, setFilterOpen] = useState("");
  const [descriptionOpen, setDescriptionOpen] = useState("");
  const { t } = useTranslation("course");

  const { mealTimeCategory, dietCategory } = useMemo(() => {
    const mealTimeCategory =
      mealTimeCategoryList.filter(
        (v) =>
          (mealTimeSelected && mealTimeSelected === v.slug) ||
          mealTimeSelected === v.ecommerce_product_category_id
      )[0] || {};
    const dietCategory =
      dietCategoryList.filter(
        (v) =>
          (dietSelected && dietSelected === v.slug) ||
          dietSelected === v.ecommerce_product_category_id
      )[0] || {};
    return { dietCategory, mealTimeCategory };
  }, [dietSelected, dietCategoryList, mealTimeSelected, mealTimeCategoryList]);

  const searchTypeButton = (
    <span onClick={() => onAddFilters(searchType === "diet" ? [{key: "search_type"}, {key: "meal_time_type"}, {key: "diet_type"}] : [{key: "search_type", value: "diet"}, {key: "search"}])} 
          className={styles["search-type"]}>
      or search by <span className={styles["search-type-value"]}>{searchType === "diet" ? "Ingredients" : "Diet Type"}</span>
    </span>
  )

  return (
    <div className={clsx("container", styles["container"])}>
      
      <div className={styles["body"]}>

          {
            searchType === "diet" ?
              (
                (!mealTimeSelected || !dietSelected) ?
                <div className={clsx(styles["filter-expanded-box"])}>
                  <RecipeCategoryList
                    className={styles["filter-expanded"]}
                    categoryList={mealTimeCategoryList}
                    horizontal
                    label={t("selectMealType")}
                    selected={mealTimeSelected}
                    onSelect={(slug) => onAddFilter("meal_time_type", slug)}
                  />

                  <RecipeCategoryList
                    className={styles["filter-expanded"]}
                    categoryList={dietCategoryList}
                    label={t("selectDietType")}
                    selected={dietSelected}
                    onSelect={(slug) => onAddFilter("diet_type", slug)}
                  />

                  {searchTypeButton}
                </div>
                :
                <div className={styles["filter-box"]}>
                  <div className={styles["filters"]}>
                    <RecipeCategoryItem
                      category={dietCategory}
                      description={t("changeDietType")}
                      minimal
                      className={styles["filter"]}
                      onSelect={() => setFilterOpen("diet_type")}
                    />
                    <RecipeCategoryItem
                      category={mealTimeCategory}
                      description={t("changeMealType")}
                      minimal
                      className={styles["filter"]}
                      onSelect={() => setFilterOpen("meal_time_type")}
                    />
                  </div>
                  {searchTypeButton}
                </div>
              )
              :
              <div className={styles["search-box"]} style={(!loading && recipeList.length === 0 && !search) ? {marginTop: "10vh"} : {}}>
                {
                  !loading && recipeList.length === 0 && !search ?
                    <BsFillSearchHeartFill className={styles["ingredient-icon"]} size="70px"/>
                    :
                    null
                }
                <RecipeSearch search={search} onSearch={(search) => onAddFilter("search", search)}/>

                {searchTypeButton}
              </div>
          }

          
          {loading ? (
            <Loader margin={100} />
          ) : (
            <RecipeSection
              size={20}
              columns={4}
              onSelect={(slug) => setDescriptionOpen(slug)}
              productList={recipeList}
              onLoadMore={onLoadMore}
              canLoadMore={canLoadMore}
            />
          )}
        </div>

      <RecipeCategoryDialog
        open={filterOpen}
        onClose={() => setFilterOpen("")}
        className={styles["filter-expanded"]}
        categoryList={filterOpen === "diet_type" ? dietCategoryList : mealTimeCategoryList}
        label={filterOpen === "diet_type" ? t("selectDietType") : t("selectMealType")}
        selected={filterOpen === "diet_type" ? dietSelected : mealTimeSelected}
        onSelect={(slug) => {setFilterOpen("");onAddFilter(filterOpen, slug);}}
      />

      <RecipeDescriptionDialog
            open={!!descriptionOpen}
            itemIdValue={descriptionOpen}
            onClose={() => setDescriptionOpen("")}
      />
    </div>
  );
};
