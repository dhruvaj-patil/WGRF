import React, { useState } from "react"
import style from "../../../css/courses.module.scss"
import ParallaxComponent from "../../common_components/parallaxComponent/parallaxComponent"
import LandingBackgroundButton from "../../common_components/landing_section/LandingBackgroundButton"
// import InfoDiagonalSection from "./InfoDiagonalSection"

const ARROW = require("../../../images/next.svg")
const ARROW_RED = require("../../../images/next-red.svg")

const SRTUltra = ({
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

  console.log("Map Link ===>" + map_link)
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

      <div className={style.srtContainerRight}>
        <div style={{ flex: 1 }}>
          <h2 style={{ textAlign: "center" }}>{title}</h2>
        </div>
        <div style={{ flex: 1, flexDirection: "row" }}>
          <div
            style={{ flex: 9, justifyContent: "center", alignItems: "center" }}
          >
            <div
              className={`${style.dataContainer} ${style.effectFadeIn} ${style.paddingContainer}`}
            >
              <h3>Details</h3>
              <ul>
                <li>
                  <b>Starts & End at</b>: {data.start_end_time}
                </li>
                <li>
                  <b>Maximum Time</b>: {data.max_time}
                </li>
                <li>
                  <b>Ascent & Descent</b>: {data.ascent_descent}
                </li>
                <li>
                  <b>Highest & Lowest Point</b>: {data.high_low_point}
                </li>
                <li>
                  <b>Total distance</b>: {data.total_distance}
                </li>
                <li>
                  <b>Aid Station</b>: {data.aid_stations}
                </li>
              </ul>
              {post_notes && (
                <p style={{ textAlign: "center" }}>{post_notes}</p>
              )}
              {title === "53 K.M." ? (
                <p>
                  <b>UTMB Points </b>: 5 | Mountain Level: 5 | Finisher Points: 320
                  <br></br>
                  <b>ITRA Points</b>: 3 | Mountain Level: 5 | Finisher Points: 320
                </p>
              ) : null}
              {title === "25 K.M." ? (
                <p><b>ITRA Point</b>: 1 | Mountain Level: 5 | Finisher Points: 280</p>
              ) : null}
              <p style={{ textAlign: "center" }}>
                <a
                  style={{ color: "#ff7917", fontWeight: 900 }}
                  href={map_link}
                  download
                >
                  Get GPX Map
                </a>
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <LandingBackgroundButton
                  overText="Register"
                  underText="All the Best"
                  link="https://www.townscript.com/e/srt-ultra-2021-341013"
                ></LandingBackgroundButton>
              </div>
            </div>
          </div>

          {/* NEXT AND PREVIOUS ARROWS */}

          <div
            onMouseOver={() => setarrow(ARROW)}
            onMouseLeave={() => setarrow(ARROW_RED)}
            className={style.arrowContainerRight}
            onClick={callNext}
          >
            <img src={arrow} width={50} height={50}></img>
          </div>

          <div
            onMouseOver={() => setarrow(ARROW)}
            onMouseLeave={() => setarrow(ARROW_RED)}
            className={style.arrowContainerLeft}
            onClick={callPrev}
          >
            <img src={arrow} width={50} height={50}></img>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SRTUltra
