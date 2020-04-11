import React, { useState } from "react"

import { Background } from "react-parallax"

import style from "../../../css/landing.module.scss"

import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import LandingBackgroundButton from "./LandingBackgroundButton"

const LandingBackground = (contentHeight = "100vh", image) => {
  // duotone: {
  //   highlight: "#838383",
  //   shadow: "#192550",
  //   opacity: 30
  // }

console.log("height ==> ", contentHeight.landingBackgroundHeight)
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "parallax/WGRF.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Background
   
     >
      <div  style={{height: contentHeight.landingBackgroundHeight}}>
        <Img
          style={{
            width: "100vw",
            height:"100vh" ,
            zIndex: -1,
          }}
          fluid={data.placeholderImage.childImageSharp.fluid}
          alt="Welcome to WGRF Website"
        ></Img>
      </div>
    </Background>
  )
}

// <LandingBackgroundButton
// overText="Epic Trails"
// underText="Register"
// ></LandingBackgroundButton>

// <LandingBackgroundButton
// overText="SRT Ultra"
// underText="Register"
// ></LandingBackgroundButton>

export default LandingBackground
