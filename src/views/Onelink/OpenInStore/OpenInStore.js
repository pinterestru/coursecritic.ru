import React from "react";
import styles from './OpenInStore.module.scss'


export function OpenInStore({link}) {

    return (
        <div className={styles.container}>
            <div className={styles.video_container}>
                <video  playsInline
                        frameBorder="0"
                        autoPlay
                        loop
                        muted
                        className={styles.video}
                        poster="/static/dynamic_link/pre.jpeg">
                    <source src="/static/dynamic_link/google.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className={styles.logo_container}>
                <a className={styles.logo} href={link}>
                    <img className={styles.logo} src="/static/dynamic_link/ice.svg"/>
                </a>
            </div>
            <div className={styles.content}>
                <a className={styles.link} href={link}>
                    <img src="/static/dynamic_link/gpbutton.png" alt="logo" className={styles.icon}/>
                </a>
            </div>
        </div>
    )
}
