import React, { useEffect } from "react";
import { Breadcrumbs } from "commons/Breadcrumbs";
import { RichTextContent } from "commons/RichTextContent";
import { ProductRedirectWidget } from "components/product/ProductRedirectWidget";
import { ProductFormWidget } from "components/product/ProductFormWidget";
import { ReviewListPart } from "components/ReviewListPart";
import { useStore } from "context/state";
import { useRouter } from 'next/router'
import { useTranslation } from "app/i18n/client";
import { MdForum } from "react-icons/md";
import styles from "./Page.module.scss";

export const Page = (props) => {
  const {
    article,
    articleBodyList,
    productUsed,
    loading,
    noBreadcrumbs,
    reviews,
  } = props;
  const { isMobile } = useStore();
  const router = useRouter();
  const { t } = useTranslation("common");
  useEffect(() => {
    if (
      articleBodyList.length &&
      articleBodyList.filter((v) => v.type === "article").length
    ) {
      const aNodes = document.getElementsByTagName("a");
      for (let i = 0; i < aNodes.length; i++) {
        const node = aNodes[i];
        const href =
          (node.getAttribute("href-old") || node.getAttribute("href") || "")
            .trim()
            .split("#")[1] || "";
        if (!href) {
          continue;
        }
        if (node.href && node.href.includes("#")) {
          node.setAttribute("href-old", node.href);
        }
        node.href = "javascript:void(0)";

        if (href === "dialog" || href.endsWith("_dialog")) {
          const type =
            href === "dialog"
              ? "product_description"
              : href.replace("_dialog", "").replace("#", "").trim();
          const productSlug = (productUsed || {}).slug || "";
          node.onclick = (e) => {
            e.preventDefault();
            router.push({
              pathname: router.pathname,
              query: {
                ...router.query,
                product_action_dialog:
                  type + (productSlug ? "__" + productSlug : ""),
              },
            }, undefined, { shallow: true });
          };
        } else if (href === "product_link" && productUsed) {
          node.href =
            "/product/" +
            productUsed.slug;
        } else {
          node.onclick = (e) => {
            e.preventDefault();
            const actionMap = {
              form: "true",
              product_redirect: true,
              product_form: true,
            };
            const hrefFormatted = href.replace("#", "").trim();
            const id = actionMap[hrefFormatted] ? hrefFormatted : "form";
            const actionFormNode = document.getElementById(id);
            if (actionFormNode && window) {
              //let position = actionFormNode.getBoundingClientRect();
              //window.scrollTo(position.left, position.top + window.scrollY - 20);
              actionFormNode.scrollIntoView({ behavior: "smooth" });
            }
          };
        }
      }
    }
  }, [articleBodyList.length, (productUsed || {}).ecommerce_product_id]);

  return (
    <div className={styles["article-page"]}>
      {!noBreadcrumbs ? (
        <div className="container">
          <Breadcrumbs breadcrumbs={[{ value: article.name }]} t={t}/>
        </div>
      ) : null}

      <div className={"container " + styles.container}>
        <article
          itemScope=""
          itemType="https://schema.org/Article"
          className={styles.article}
          style={{ maxWidth: 750 }}
        >
          {article.article_styles ? (
            <style
              dangerouslySetInnerHTML={{
                __html: `${article.article_styles || ""}`,
              }}
            />
          ) : null}
          {articleBodyList.map((item, i) => {
            const type = item.type;
            if (type === "article") {
              return (
                <RichTextContent
                  key={i}
                  value={item.content}
                  itemProp="articleBody"
                />
              );
            }
            if (type === "product_redirect") {
              const product = item.product;
              if (!product) return;
              return (
                <div key={i} id="form" className={styles["widget"]}>
                  <span id="product_redirect"></span>
                  <ProductRedirectWidget
                    title={item.title || product.product_redirect_title}
                    description={
                      item.description || product.product_redirect_description
                    }
                    link={item.link}
                    mode={isMobile ? "horizontal" : undefined}
                    withPrice={
                      true ||
                      item.with_price ||
                      product.product_redirect_with_price === "true"
                    }
                    withCountdown={
                      item.with_countdown ||
                      product.product_redirect_with_countdown === "true"
                    }
                    product={product}
                  />
                </div>
              );
            }
            if (type === "product_form") {
              const product = item.product;
              if (!product) return;
              return (
                <div key={i} id="form" className={styles["widget"]}>
                  <span id="product_form"></span>
                  <ProductFormWidget
                    title={item.title || product.product_form_title}
                    description={
                      item.description || product.product_form_description
                    }
                    withImage
                    withPrice={
                      true ||
                      item.with_price ||
                      product.product_form_with_price === "true"
                    }
                    withCountdown={
                      item.with_countdown ||
                      product.product_form_with_countdown === "true"
                    }
                    mode={isMobile ? undefined : "horizontal"}
                    product={product}
                  />
                </div>
              );
            }
            return <div key={i}>WIDGET UNDERFINED</div>;
          })}
        </article>

        {reviews.length ? (
          <div className={styles["comment-box"]} style={{ maxWidth: 750 }}>
            <h2 className={styles["title"]}>
              {t("comments")}
              <MdForum size="24px" className={styles["comment-icon"]} />
            </h2>
            <ReviewListPart
              reviewCount={reviews.length}
              reviewList={reviews}
              theme="bubble"
              withAction
              nullIfEmpty
              author={article.article_author}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};
