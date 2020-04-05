import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/scss/image-gallery.scss'
import style from "../../../css//courses.module.scss"
import container from '../../../css//location.module.scss'
import { Row, Col } from "react-bootstrap"
import InfoDiagonalSection from "./InfoDiagonalSection";
import ParallaxComponent from "../../common_components/parallaxComponent/parallaxComponent"

 const WGRFSection = (props)=>(


    <div className={`${container.locationContainer} ${container.inverseLocationContainer}`}>
    <div className={container.containerLeft}>
      <div style={{ flex: 1 }}>
        <h2 style={{ textAlign: "center" }}>WGRF</h2>
      </div>
      <div
        style={{ flex: 9, justifyContent: "center", alignItems: "center" }}
      >
        {props.showDesc && (
          <div
            className={`${style.dataContainer} ${
                props.showDesc ? style.effectFadeIn : ""
            }`}
          >
            <h3>Details</h3>
            <ul>
              <li>
                <b>BUS</b>: Direct. There is an hourly bus service direct
                from Swargate, Jedhe square, that will drop you at the
                location. Bus name: Swargate to Atkarwadi, Donaje. Location:
                in front of Natraj Hotel.
              </li>
              <li>
                <b>TRAIN</b>: 1 change. You will have to catch a bus from
                Pune Railway Station to Swargate Bus Stand. Catch the direct
                bus from Jedhe square to Atkarwadi.
              </li>
              <li>
                <b>AIRPORT</b>: 2 changes. You will have to catch a bus from
                Pune Airport to Pune Railway Station. From there to Swargate
                Bus Stand. Catch the direct bus from Swargate Jedhe square
                to Atkarwadi.
              </li>
              <li>
                <b>BY ROAD</b>: Direct. Google Maps App is the best way to
                reach the location. Set your destination to Kondhana Guest
                House, where you will be guided to park your vehicle.
              </li>
            </ul>

            <p style={{ textAlign: "center" }}>
              P.S. We recommend you to contact Kondhana Guesthouse
              management, if you are having any difficulty to reach the
              venue. The Travel expenses and Accomodation expenses are to be
              borne by the candidate
            </p>
          </div>
        )}

        {!props.showDesc && (
          <div
            className={`${container.dataContainer} ${
              !props.showDesc ? container.effectFadeIn : ""
            }`}
          >
             <ImageGallery showPlayButton={false} items={props.images}/>
          </div>
        )}
        <div className={container.indicatorContainer}>
          <div
            onClick={props.toggle}
            className={`${container.indicator} ${
                props.showDesc ? container.active : ""
            }`}
          ></div>
          <div
            onClick={props.toggle}
            className={`${container.indicator} ${
              !props.showDesc ? container.active : ""
            }`}
          ></div>
        </div>
      </div>
    </div>
    <div className={container.containerRight}>
      <div className={container.imageContainer}>
       <ParallaxComponent
      bgImg={require("../../../images/bg_img1.jpg")}
      helper={style.parallexHelper}
    ></ParallaxComponent>
        {/* <img
          src={require("../../../images/bg_img4.jpg")}
          width="100%"
          height="100%"
        ></img> */}

      </div>
    </div>
  </div>


)

export default WGRFSection;