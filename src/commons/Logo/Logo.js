import React from "react";
import Link from "next/link";
import Image from "next/image";
import { clsx, getMediaPath, getImageSize } from "utils";
import styles from "./Logo.module.scss";

export const Logo = ({
  isSmall,
  logo,
  noLink,
  isVertical,
  text,
  width,
  height,
  t,
}) => {
  const logoHeight = height || (isSmall ? 38 : 42);
  const logoSize = getImageSize(logo);
  let logoWidth = logoHeight;
  if (logoSize.width && logoSize.height) {
    logoWidth = Math.round((logoSize.width / logoSize.height) * logoHeight);
  }

  return (
    <div
      itemProp="publisher"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <Link
        href={noLink ? "#" : "/"}
        prefetch={false}
        itemProp="url"
        aria-label={t ? t("aria.linkToHomePage") : undefined}
        className={clsx(styles["logo-box"], isVertical && styles.vertical)}
      >
        {logo && (
          <div className={styles.image}>
            <Image
              alt={(text || "") + " Logo"}
              src={getMediaPath(logo)}
              width={logoWidth}
              height={logoHeight}
              sizes="15vw"
              itemProp="logo"
              style={{
                maxWidth: "100%",
                height: logoHeight,
              }}
            />
          </div>
        )}
        {text ? (
          <span
            itemProp="name"
            className={styles.text}
            style={{ marginLeft: logo ? "10px" : undefined }}
          >
            {text}
          </span>
        ) : null}
      </Link>
    </div>
  );
};
