import React from 'react'
import style from "../../../css/parallax.module.scss"

function ParallaxComponent({bgImg,helper}) {
    return (
        <div className={`${style.parallax} ${helper}`} style={{backgroundImage:`url(${bgImg})`}} />
    )
}

export default ParallaxComponent
