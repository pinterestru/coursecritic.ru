import React from "react";
import {Tabs as TabsBase} from '@mui/base/Tabs';
import { TabsList } from '@mui/base/TabsList';
import { clsx } from "utils";
import styles from "./Tabs.module.scss";


export const Tabs = (props) => {
    const { className, children } = props;
    return (
        <TabsBase {...props} className={styles["tabs-container"]}>
            <TabsList className={clsx(className, styles["tabs"])}>
                {children}
            </TabsList>
        </TabsBase>
    )
};
