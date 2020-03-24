import React from 'react'

import style from "../../../css/landing.module.scss"


export default function LandingBackgroundButton({overText, underText, }) {

   

    return (
        <div>
            <button  className={`${style.button} ${style.buttonTamaya} ${style.buttonBorderThick}` } data-text={overText}><span>{underText}</span></button>
        </div>
    )
}

// redirectCallback

// onClick={redirectCallback()}