import React from "react";
import { Snackbar } from '@mui/base/Snackbar';
import styles from "./Notification.module.scss";




export function Notification(props) {
    const {show, message, type, withClose, native, autoHideDuration, dispatch} = props;

    const onClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch("notification", {show: false, message: "", type: "info", native: false});
    }



    return (
        <Snackbar className={styles["notification-bar"]}
                         anchorOrigin={{
                            vertical: "top",
                            horizontal: "right"
                         }}
                         open={show}
                         autoHideDuration={autoHideDuration || 3000}
                         onClose={onClose}>
            {message}
        </Snackbar>
    )
}


export const notification = {
    message: "",
    show: false,
    type: "info",
    native: false
};
