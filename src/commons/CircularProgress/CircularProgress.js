import React from "react";
import styles from "./CircularProgress.module.scss";

export const CircularProgress = ({value, size}) => {
  const thickness = 3.6
  const SIZE = 44
  const circleStyle = {};
  const rootStyle = {}

  const circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
  circleStyle.strokeDasharray = circumference.toFixed(3);
  circleStyle.strokeDashoffset = `${(((100 - value) / 100) * circumference).toFixed(3)}px`;
  rootStyle.transform = 'rotate(-90deg)';


  return (
    <span className={styles.container} 
          role="progressbar"
          style={{width: size || 40, height: size || 40, ...rootStyle}} 
          >
      <svg viewBox="22 22 44 44">
        <circle className={styles.circle} 
                cx={SIZE} 
                cy={SIZE}
                r={(SIZE - thickness) / 2} 
                fill="none" 
                stroke-width={thickness}
                style={circleStyle}>
          </circle>
      </svg>
    </span>
  )
}