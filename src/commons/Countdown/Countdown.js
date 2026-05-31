import React, {useState} from "react";
import { clsx } from "utils";
import styles from "./Countdown.module.scss";

function getSecondsToTomorrow() {
  let now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
  let totalSecondsInADay = 86400;

  return totalSecondsInADay - totalSecondsToday;
}

export const Countdown = ({count, size, className, onFinish}) => {
    const [time, setTime] = useState(count ? parseInt(count, 10) : getSecondsToTomorrow())

    useState(() => {
        const interval = setInterval(() => {
            setTime((old) => {
                const newCount = old - 1
                if (newCount <= 0) {
                    onFinish ? onFinish() : null
                    clearInterval(interval)
                    return 0
                } else {
                    return newCount
                }
            })
        }, 1000);
        return () => clearInterval(interval)
    }, [])

    let seconds = time % 60;
    let minutes = Math.floor(time / 60) % 60;
    let hours = Math.floor(time / 3600) % 24;
    let day = Math.floor(time / 86400);
    day = day < 10 ? `0${day}` : day;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    hours = hours < 10 ? `0${hours}` : hours;
    return (
        <div className={clsx(styles["container"], size ? styles[size] : "", className)}>
            <span className={styles["number"]}>
                {day}
            </span>
            <span className={styles["split"]}>:</span>
            <span className={styles["number"]}>
                {hours}
            </span>
            <span className={styles["split"]}>:</span>
            <span className={styles["number"]}>
                {minutes}
            </span>
            <span className={styles["split"]}>:</span>
            <span className={styles["number"]}>
                {seconds}
            </span>
        </div>
    );
}
