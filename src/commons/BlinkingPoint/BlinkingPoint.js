import React from "react";
import styles from "./BlinkingPoint.module.scss";


export function BlinkingPoint(props) {

    return (
        <svg className={styles["pulse"]} x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20">
            <circle className={styles["pulse-disk"]} cx="10" cy="10" />
            <circle className={styles["pulse-circle"]} cx="10" cy="10" strokeWidth="2" />
            <circle className={styles["pulse-circle-2"]} cx="10" cy="10"  strokeWidth="2" />
        </svg>
    );
}
