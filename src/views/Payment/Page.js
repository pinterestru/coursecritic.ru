import React from "react";
import { useTranslation } from "app/i18n/client";
import { Loader } from "commons/Loader";
import { PaymentGateway } from "components/payment/PaymentGateway";
import { MdWhatshot } from "react-icons/md";
import { Button } from "commons/Button";
import styles from "./Page.module.scss";
import Link from "next/link";

export const Page = ({provider, providerOptions, loading, isPaid, courseLink}) => {
  const { t } = useTranslation('common')


  return (
    <div className={styles["payment-page"]}>
      <div className="container">
        {
          loading ?
            <Loader margin={100}/>
            :
            (
              isPaid ?
                <div className={styles["status-container"]}>
                  <div className={styles.status} style={{marginTop: 10}}>
                    <MdWhatshot className={styles["status-icon"]} size="35px" />
                    <h2 className={"title"}>{t("payment.alreadyPaid")}</h2>
                    <div className={styles["button-box"]}>
                      <Link href={courseLink}>
                        <Button size="large">
                          {t("goToProduct")}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                :
                <PaymentGateway provider={provider} providerOptions={providerOptions}/>
            )
        }
      </div>
    </div>
  );
};
