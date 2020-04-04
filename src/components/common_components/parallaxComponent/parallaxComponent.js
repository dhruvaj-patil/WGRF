import React from 'react'
import style from "../../../css/parallax.module.scss"

function ParallaxComponent({bgImg}) {
    return (
        <div className={style.parallax} style={{backgroundImage:`url(${bgImg})`}} />
    )
}

export default ParallaxComponent
