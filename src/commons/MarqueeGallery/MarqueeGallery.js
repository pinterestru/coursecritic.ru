import React from "react";
//import Marquee from "react-fast-marquee";
import styles from "./MarqueeGallery.module.scss";
import { getMediaPath } from "utils";

export const MarqueeGallery = (props) => {
    const {images, isCover, gradient, speed, withBorder, height} = props;

    if (!images || images.length === 0) {
        return null
    }
    return null
    {/*
    return (
        <Marquee gradient={gradient} pauseOnHover speed={speed || 30}>
            {
                images.map((image, i) => {

                    return (
                        <div key={i} className={styles["image-container"] + " " + (withBorder ? styles["border"] : "")}>
                            <img
                                 className={styles["image"]}
                                 src={getMediaPath(image)}/>
                        </div>
                    )
                })
            }
        </Marquee>
        )*/}
};
