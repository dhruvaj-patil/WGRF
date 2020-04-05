import React, { Component } from "react"

import { Parallax } from "react-parallax"
import LandingBackground from "./LandingBackground"
import LandingBackgroundButton from "./LandingBackgroundButton";
import style from "../../../css/landing.module.scss"


export class LandingSection extends Component {
 

  render() {

    const {title, subtitle, buttonData, landingBackgroundHeight,textStyle} = this.props;
    console.log(" ilandingBackgroundHeight in section =====", landingBackgroundHeight)
    return (
      <>
        <Parallax strength={500} style={{height: landingBackgroundHeight}}>
          <>
            <div className={style.landingContainer}
            >
              <div>
                <h1 style={textStyle} className={style.landingTitle}>{title}</h1>
              </div>

              <div>
                <h4 style={{ color: "white" }}>{subtitle}</h4>
              </div>
              <div className={style.buttonContainer}>
                {buttonData &&
                buttonData.map((data, index) => {
                  return (
                    <LandingBackgroundButton
                      overText={data.overText}
                      underText={data.underText}
                      key={index}
                    ></LandingBackgroundButton>
                  )
                })}
              </div>
            </div>
            <LandingBackground
            landingBackgroundHeight={landingBackgroundHeight}
 
            ></LandingBackground>
          </>
        </Parallax>
      </>
    )
  }
}

//     <>
//       <div>
//         <h1
//           style={{
//             fontSize: 200,
//             color: "red",
//           }}
//         >
//           WGRF
//         </h1>
//       </div>
//       <div>
//         <h4 style={{ color: "white" }}>
//           Western Ghat Running Foundation
//         </h4>
//       </div>
//       <div>
//           <Link to="/courses">courses</Link>
//       </div>
//     </>
