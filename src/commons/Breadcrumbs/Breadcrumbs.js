import React from "react";
import Link from "next/link";
import { clsx } from "utils";
import { MdArrowRight } from "react-icons/md";
import styles from "./Breadcrumbs.module.scss";

export const Breadcrumbs = ({
  breadcrumbs,
  t,
  className,
  small,
  noHome,
  maxChar,
}) => {
  if (!noHome) {
    breadcrumbs.unshift({value: t("home"), link: "/", ariaLabel: t("aria.linkToHomePage")})
  }
  return (
    <nav aria-label="breadcrumb" className={className}>
      <ol
        itemScope
        itemProp="breadcrumb"
        itemType="https://schema.org/BreadcrumbList"
        className={clsx(
          styles.breadcrumbs,
          small ? styles.small : ""
        )}
      >
        {breadcrumbs.map((breadcrumb, index) => {
          if (!breadcrumb) return null;
          const isActive = index === breadcrumbs.length - 1;

          let name = breadcrumb.value;
          if (maxChar && name.length > maxChar) {
            name = name.slice(0, maxChar) + "...";
          }
          return (
            <li
              key={`breadcrumb-${index}`}
              className={isActive ? styles["breadcrumbs__active"] : ""}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {
                index > 0 ?
                  <MdArrowRight size="18px" />
                  :
                  null
              }
              

              {breadcrumb.link && breadcrumbs.length !== index + 1 ? (
                <Link
                  itemProp="item"
                  itemScope
                  itemType="https://schema.org/WebPage"
                  href={breadcrumb.link}
                  aria-label={breadcrumb.ariaLabel || t("aria.linkTo", { name: breadcrumb.value })}
                  prefetch={false}
                >
                  <span itemProp="name">{name}</span>
                </Link>
              ) : (
                <span itemProp="name">{name}</span>
              )}
              <meta itemProp="position" content={(index + 1).toString()}/>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
