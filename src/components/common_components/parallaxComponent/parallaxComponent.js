import React from "react"
import style from "../../../css/parallax.module.scss"

function ParallaxComponent({ bgImg, height, minHeight, children }) {
  return (
    <div
      className={`${style.parallax}`}
      style={{
        backgroundImage: `url(${bgImg})`,
        minHeight: minHeight,
        height: height,
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      {children}
    </div>
  )
}

export default ParallaxComponent
