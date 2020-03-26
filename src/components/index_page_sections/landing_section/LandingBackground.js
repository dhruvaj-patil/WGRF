import React from "react"

import { Background } from "react-parallax"

import style from "../../../css/landing.module.scss"

import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import LandingBackgroundButton from "./LandingBackgroundButton"

const LandingBackground = () => {
  // duotone: {
  //   highlight: "#838383",
  //   shadow: "#192550",
  //   opacity: 30
  // }

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "bg_img1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, grayscale: true) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Background
      className={style.parallaxContentContainer}
      contentClassName={style.parallaxContentContainer}
    >
      <div>
        <Img
          style={{
            width: "100vw",
            height: "100vh",
            zIndex: -1,
          }}
          fluid={data.placeholderImage.childImageSharp.fluid}
          alt="fill murray"
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
