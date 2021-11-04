import React, { useState } from "react"
import style from "../../../css/courses.module.scss"
import ParallaxComponent from "../../common_components/parallaxComponent/parallaxComponent"
import LandingBackgroundButton from "../../common_components/landing_section/LandingBackgroundButton"
// import InfoDiagonalSection from "./InfoDiagonalSection"
const SRT_LOGO = require("../../../images/srt_logo.png")

const SRTUltra = ({
  bgImage,
  overlayImage,
}) => {
  return (
    <div className={style.srtContainer}>
      <div className={`${style.srtContainerLeft}`}>
        {/* <div className={container.imageContainer}>
        <img
          src={require("../../../images/bg_img4.jpg")}
          width="100%"
          height="100%"
        ></img>
      </div> */}
        <ParallaxComponent bgImg={bgImage}>
          <div className={style.srtParallaxContainer}>
            <img src={overlayImage} className={style.overlayImage}></img>
          </div>
        </ParallaxComponent>
      </div>

      {/* TODO: 
      1. Remove from below div and add that into Marathons Details Page.  
      2. Change Below Div and Write Marathon Content in it. 
      */}

      <div className={style.srtContainerRight}>
        <div className={style.heading}>
          <div className={style.detailsContainer}>
            <img src={SRT_LOGO} height="150px"></img>

            <h2 className={"m-0"}>SRT ULTRA MARATHON</h2>

            {/* TODO: 
                1. Remove from below div and add that into SRTUltra.js component Details Page.
                2. Change Active Div Content into Marathon's Page Cards.
            */}
            <p>
              SRT stands for Sinhagad Rajgad Torna!
              <br></br>
              Introducing an Ultra Marathon on the ancient route which connects
              the Sinhagad-Rajgad-Torna forts, more popularly known today as
              “SRT”. This legendary route is the magnum opus of trail and
              mountain running marathon routes of Pune's Sahyadri ranges. The
              SRT route has been used in the past as a catalyst in commuting,
              trading, and farming apart from being the battleground for many
              kings who ruled these mountains.
            </p>

            <p>
              The SRT is a now a heritage walk, with the magnificent Sinhagad,
              Rajgad and Torna forts that stand tall in between this route,
              telling the stories of the rich and glorious past of Pune.
              <br></br>
              In this day and age, a new stage is set - a battle to conquer
              these monumental Sinhagad-Rajgad-Torna forts in the form of an
              endurance filled Pune's first mountain running marathon!
            </p>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <LandingBackgroundButton
            overText="Course Details"
            underText="Course Details"
            link="/marathons#SRT"
          ></LandingBackgroundButton>
        </div>
      </div>
    </div>
  )
}
export default SRTUltra
