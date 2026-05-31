import React from "react";
import { useTranslation } from "app/i18n/client";
import styles from "./Page.module.scss";
import { RegistrationLayout } from "components/funnel/RegistrationLayout";

export const Page = ({
  title,
  description,
  actionText,
  image,
  supportEmail,
  onRegistration,
}) => {
  const { t } = useTranslation("common");

  return (
    <div className={styles["registration"]}>
      <RegistrationLayout
          title={title}
          description={description}
          image={image}
          className={styles.container}
          actionText={actionText}
          supportEmail={supportEmail}
          onRegistration={onRegistration}
        />
    </div>
  );
};
