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

const SETComponent = ({
  title,
  bgImage,
  overlayImage,
  data,
  post_notes,
  map_link,
  callNext,
  callPrev
}) => {
  
  const [arrow, setarrow] = useState(ARROW_RED)
  
  return(
  <div
    className={`${container.locationContainer}`}
  >
    <div className={container.containerLeft}>
      <div style={{ flex: 1 }}>
        <h2 style={{ textAlign: "center" }}>{title}</h2>
      </div>
      <div style={{ flex: 9, justifyContent: "center", alignItems: "center" }}>
        <div className={`${container.dataContainer} ${container.effectFadeIn} ${style.paddingContainer}`}>
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
          {post_notes && <p style={{ textAlign: "center" }}>{post_notes}</p>}

          <p style={{ textAlign: "center",}}>
            <a  style={{ color: "red", fontWeight: 900 }} href={map_link} download>
              Get Map
            </a>
          </p>

          <div style={{ display:"flex", justifyContent: "center"}}>
              <LandingBackgroundButton
                overText="Register"
                underText="All the Best"     
                link="https://events.indiarunning.com/Event/Details/SINHAGADEPICTRAIL/3771"
              ></LandingBackgroundButton>
            </div>


                          {/* NEXT AND PREVIOUS ARROWS */}

                          <div
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
          </div>
        </div>

    

      </div>
    </div>
    
    <div className={container.containerRight}>
      <ParallaxComponent height="100vh" bgImg={bgImage}>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "white",
            flex: 1,
            opacity: 0.7,
          }}
        >
          <img
            src={overlayImage}
            className={style.overlayImage}
          ></img>
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
