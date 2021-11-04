import React, { useState } from "react"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/scss/image-gallery.scss"
import style from "../../../css/courses.module.scss"
import container from "../../../css/location.module.scss"
import racesStyle from "../../../css/races.module.scss"
import ParallaxComponent from "../../common_components/parallaxComponent/parallaxComponent"
import { Overlay } from "react-bootstrap"
import LandingBackgroundButton from "../../common_components/landing_section/LandingBackgroundButton"

const DATA = {
  overText: "Race Now",
  underText: "Get Set Go",
  link: "https://www.townscript.com/e/srt-ultra-2021-341013",
}
export default function RaceComponent({
  title,
  bgImage,
  overlayImage,
  data,
  post_notes,
  map_link,
  inverted = false,
  linkId,
}) {
  return (
    <div className={`${racesStyle.container} ${!inverted ? racesStyle.colRev : ""}`} id={linkId}>
      {inverted ? (
        <div className={racesStyle.containerRight}>
          <ParallaxComponent
            height="100%"
            minHeight="250px"
            bgImg={bgImage}
          ></ParallaxComponent>
        </div>
      ) : null}

      <div className={racesStyle.containerLeft}>
        <div style={{ flex: 1 }}>
          <h2 style={{ textAlign: "center" }}>{title}</h2>
        </div>
        <div
          style={{ flex: 9, justifyContent: "center", alignItems: "center" }}
        >
          <div
            className={`${container.dataContainer} ${container.effectFadeIn} ${style.paddingContainer}`}
          >
            <div className={`${racesStyle.raceDetailsContainer}`}>
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

              <p style={{ textAlign: "center" }}>
                <a
                  //   style={{ }}
                  href={map_link}
                  download
                >
                  Get GPX Map
                </a>
              </p>

              {/* <LandingBackgroundButton
                overText={data.overText}
                underText={data.underText}
                link={data.link}
              ></LandingBackgroundButton> */}
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <LandingBackgroundButton
                overText={DATA.overText}
                underText={DATA.underText}
                link={DATA.link}
              ></LandingBackgroundButton>
            </div>

            {/* NEXT AND PREVIOUS ARROWS */}

            {/* <div
              onMouseOver={() => setarrow(ARROW)}
              onMouseLeave={() => setarrow(ARROW_RED)}
              className={style.arrowContainerRightLeftContent}
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
            </div> */}
          </div>
        </div>
      </div>
      {!inverted ? (
        <div className={racesStyle.containerRight}>
          <ParallaxComponent
            height="100%"
            minHeight="250px"
            bgImg={bgImage}
          ></ParallaxComponent>
        </div>
      ) : null}
    </div>
  )
}
