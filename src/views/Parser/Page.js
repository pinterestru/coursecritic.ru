import { TextField } from "commons/TextField";
import React, { useState } from "react";
import { clsx } from "utils";
import { Button } from "commons/Button";
import styles from "./Page.module.scss";

export const Page = ({ ecommerceStoreIdDefault, onParse }) => {
  const [data, setData] = useState({
    ecommerce_store_id: ecommerceStoreIdDefault || "",
    website: "",
    slug: ""
  });
  const [errors, setErrors] = useState({});

  const onChange = (field, value) => {
    const newData = {...data}
    newData[field] = value
    setData(newData)
  }

  const onValidate = (data) => {
    const errors = {}
    if (!data.slug) {
      errors.slug = "Cannot be empty"
    }
    if (!data.website) {
      errors.website = "Cannot be empty"
    }
    if (!data.ecommerce_store_id) {
      errors.ecommerce_store_id = "Cannot be empty"
    }
    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  return (
    <div className={styles["parser-page"]}>
      <div className={clsx("container", styles["form"], "card")}>
        <h1 className="hero-title">Parser</h1>
        

        <div className={styles["fields"]}>

        <TextField
            error={errors.website}
            label="Target Website URL"
            size="large"
            className={styles["field"]}
            onChange={(e) => onChange("website", e.target.value)}
            value={data.website || ""}
          />

          <div className={styles["divider"]}></div>

          <TextField
            error={errors.ecommerce_store_id}
            label="Store ID"
            className={styles["field"]}
            onChange={(e) => onChange("ecommerce_store_id", e.target.value)}
            value={data.ecommerce_store_id || ""}
          />

          <TextField
            error={errors.slug}
            label="Landing Slug"
            className={styles["field"]}
            onChange={(e) => onChange("slug", e.target.value)}
            value={data.slug || ""}
          />
        </div>

        <div className={styles["actions"]}>
          <Button size="large" className={styles.button} onClick={async () => {
            if (onValidate(data)) {
              const error = await onParse(data)
              if (error) {
                setErrors({...errors, "action": error})
              }
            }
          }}>
            Parse
          </Button>
        </div>
        {
          errors.action ?
            <p className={styles.error}>{errors.action}</p>
            :
            null
        }
      </div>
    </div>
  );
};
