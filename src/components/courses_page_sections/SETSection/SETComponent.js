import React, { useState } from "react"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/scss/image-gallery.scss"
import style from "../../../css//courses.module.scss"
import container from "../../../css/location.module.scss"
import ParallaxComponent from "../../common_components/parallaxComponent/parallaxComponent"
import { Overlay } from "react-bootstrap"
import LandingBackgroundButton from "../../common_components/landing_section/LandingBackgroundButton"

const ARROW = require("../../../images/next.svg")
const ARROW_RED = require("../../../images/next-red.svg")

const SET_LOGO = require("../../../images/SET_LOGO.png")

const SETComponent = ({
  title,
  bgImage,
  overlayImage,
  data,
  post_notes,
  map_link,
  callNext,
  callPrev,
}) => {
  const [arrow, setarrow] = useState(ARROW_RED)
  console.log("Map Link SETCOmponent ===>", map_link)
  return (
    <div className={`${container.locationContainer}`}>
      <div className={container.containerLeft}>
        <div className={style.heading}>
          <div className={style.detailsContainer}>
            <img src={SET_LOGO} height="150px"></img>

            <h2 className={"m-0"}>Sinhagad Epic Trail </h2>
            {/*
                1. Remove from below div and add that into SETComponent.js component Details Page.
                2. Change Active Div Content into Marathon's Page Cards.
          */}
            <p>
              Sinhagad Epic Trail is a technical sky race for those with the
              heart of a lion taking place during the arrival of monsoon in the
              Sahyadri ranges. Of all the mountain forts in Maharashtra,
              Sinhagad, originally known as Kondhana, has been the most sought
              after fort for the rulers of the Sahyadri ranges. Since the past
              2000 years, Sinhagad is witness to enough bloodshed between
              different kings owing to its heavily garrisoned fortifications,
              strategic importance and proximity to Pune. “The one who controls
              Sinhagad, controls Pune” was the mantra of the past.
              <br></br>
              The Koli tribe who are the oldest known settlers of the fort still
              live around the fort’s 3 major valleys namely Atkarwadi, Kalyan
              Gaon and Amruteshwar Met.
              <br></br>
              The famous battle of 1670 where Maratha warrior Tanaji Malusare
              fought for his life for recapturing the fort into Chhatrapati
              Shivaji’s kingdom is the most told story in every household of
              Maharashtra. Chhatrapati Shivaji Maharaj expressed the loss of his
              trusted general and friend by eulogising the words “Gad ala, pan
              Sinha gela” which translates to “we have won the fort, but lost
              the lion”. He renamed the fort from its old name Kondhana to
              Sinhagad (Lion’s Fort) in memory of this braveheart.
              <br></br>
              Today Sinhagad is a place for multiple outdoor sports activities;
              right from hikers, mountaineers, runners, rock climbers, adventure
              enthusiasts, campers, and the usual tourists visiting everyday.
              Owing to its near proximity to the people of Kolhapur, Satara,
              Mumbai, and Pune, Sinhagad is the most visited fort in
              Maharashtra.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <LandingBackgroundButton
            overText="Course Details"
            underText="Course Details"
            link="/marathons#SET"
          ></LandingBackgroundButton>
        </div>
      </div>

      <div className={container.containerRight}>
        <ParallaxComponent height="100vh" bgImg={bgImage}>
          <div className={style.srtParallaxContainer}>
            <img src={overlayImage} className={style.overlayImage}></img>
          </div>
        </ParallaxComponent>
        {/* <ParallaxComponent
        bgImg={require("../../../images/bg_img4.jpg")}
      ></ParallaxComponent> */}

        {/* <Image src={require("../../../images/gatsby-astronaut.png")}></Image> */}
      </div>
    </div>
  )
}
export default SETComponent
