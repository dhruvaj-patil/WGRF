import React, { Component } from "react"

import { Parallax } from "react-parallax"
import LandingBackground from "./LandingBackground"

export class LadingSection extends Component {

  buttonData = [
    {
      overText: "Epic Trails",
      underText: "View"
    },
    {
      overText: "SRT Ultra",
      underText: "View"
    },

  ]

  render() {
    return (
      <>
        <Parallax
        strength={300}
        >
         <LandingBackground title="WGRF" subtitle="Western Ghat Running Foundation" buttonData={this.buttonData} ></LandingBackground>
     
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
