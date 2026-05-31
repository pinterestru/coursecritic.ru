import React from "react";
import { useTranslation } from "app/i18n/client";
import { Banner } from "components/Banner";
import { CourseSection } from "components/course/CourseSection";
import { MarqueeGallery } from "commons/MarqueeGallery";
import Link from "next/link";
import styles from "./Page.module.scss";

export const Page = ({
  bannerPreview,
  bannerTitle,
  bannerDescription,
  bannerLink,
  bannerImage,
  gallery,
  withGallery,
  categoryList,
  productDict
}) => {
  const { t } = useTranslation("common");

  return (
    <div className={styles["home-page"]}>
      {bannerImage && bannerTitle ? (
        <div className={styles["banner-container"]}>
          <div className={styles["banner"] + " container"}>
            <Banner
              bannerPreview={bannerPreview}
              bannerTitle={bannerTitle}
              bannerDescription={bannerDescription}
              bannerLink={bannerLink}
              bannerImage={bannerImage}
              withProduct={false}
            />
          </div>
        </div>
      ) : null}

      {withGallery ? (
        <div className={styles["gallery"]}>
          <MarqueeGallery
            images={(gallery || "").split(",").filter((v) => !!v)}
            withBorder
            gradient={false}
          />
        </div>
      ) : null}

      <div className="container">
        {categoryList.map((category, i) => {
          const categoryId = category.ecommerce_product_category_id;
          const products = productDict[categoryId];
          if (!products) return null;
          return (
            <div className={styles["product-section"]} key={i}>
              <Link
                  href={
                    "/category/" +
                    (category.slug || category.ecommerce_product_category_id)
                  }
                  className=""
                  prefetch={false}
                >
                  <h2 className={"hero-title"}>{category.name}</h2>
              </Link>
              <div>
                <CourseSection
                  columns={3}
                  size={20}
                  itemId="ecommerce_product_id"
                  labelClassName=""
                  noLabel
                  type="course"
                  productList={products}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
