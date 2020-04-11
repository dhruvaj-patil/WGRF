import React from 'react'

import style from "../../../css/landing.module.scss"
import {navigate} from "gatsby";


export default function LandingBackgroundButton({overText, underText, link}) {

   

    return (
        <div>
            <button onClick={() => {window.open(link, '_blank')}}  className={`${style.button} ${style.buttonTamaya} ${style.buttonBorderThick}` } data-text={overText}><span>{underText}</span></button>
        </div>
    )
}

// redirectCallback

// onClick={redirectCallback()}