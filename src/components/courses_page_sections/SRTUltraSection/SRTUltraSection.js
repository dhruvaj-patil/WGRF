import React, { Component } from "react"
import InfoDiagonalSection from "../../index_page_sections/Courses_section/InfoDiagonalSection"
import SRTUltra from "./SRTUltra"

import style from "../../../css/courses.module.scss"

const SRT_DATA = [
  {
    title: "11 K.M.",
    data: {
      start_end_time: "6:10 am - 9:10 am",
      max_time: "3 Hours",
      ascent_descent: " 700~ metres - 700~ metres",
      high_low_point: "1296 metres - 646 metres",
      total_distance: "11 Km",
      aid_stations: "1",
    },
  },
  {
    title: "25 K.M.",
    data: {
      start_end_time: "6:05 am - 12:05 am",
      max_time: "6 Hours",
      ascent_descent: " 1000~ metres - 1000~ metres",
      high_low_point: "1296 metres - 633 metres",
      total_distance: "25 Km",
      aid_stations: "2",
    },
  },
  {
    title: "53 K.M.",
    data: {
      start_end_time: "6:00 am - 6:00 pm",
      max_time: "12 Hours",
      ascent_descent: " 2320~ metres - 2240~ metres",
      high_low_point: "1400 metres - 640 metres",
      total_distance: "11 Km",
      aid_stations: "5",
    },
    post_notes:
      "Intermediate Cut Off Time: (8 hours) At Km 34 - Aid Station no. 4",
    map_link: "",
  },
]

export class SRTUltraSection extends Component {
  constructor(props) {
    super()
    this.state = {
      activeSRTNo: 0,
    }
  }

  _renderActiveSRTDiv = () => {
    const { activeSRTNo } = this.state
    switch (activeSRTNo) {
      case 0:
        return (
          <SRTUltra
            bgImage={require("../../../images/bg_img4.jpg")}
            title={SRT_DATA[0].title}
            data={SRT_DATA[0].data}
            map_link={SRT_DATA[0].map_link}
            overlayImage={require("../../../images/map_1.png")}
          />
        )

      case 1:
        return (
          <SRTUltra
            bgImage={require("../../../images/bg_img4.jpg")}
            title={SRT_DATA[1].title}
            data={SRT_DATA[1].data}
            map_link={SRT_DATA[1].map_link}
            overlayImage={require("../../../images/map_1.png")}
          />
        )

      case 2:
        return (
          <SRTUltra
            bgImage={require("../../../images/bg_img4.jpg")}
            title={SRT_DATA[2].title}
            data={SRT_DATA[2].data}
            map_link={SRT_DATA[2].map_link}
            post_notes={SRT_DATA[2].post_notes}
            overlayImage={require("../../../images/map_1.png")}
          />
        )

      default:
        break
    }
  }

  render() {
      const {activeSRTNo} = this.state
    return (
        <div className={style.heading}>
        {/* <h2 className={"m-0"}>SRT ULTRA EVENT</h2> */}

        <div className={style.heading}>
          <h2 className={"m-0"}>SRT ULTRA </h2>
          <div className={style.detailsContainer}>
            <h3>Marathon Details</h3>
            <p>
              The beautiful route of the Sinhagad Epic Trail race is a point
              to point route, without any loops. Runners will experience new
              surroundings and a variety of technical as well as normal
              terrain in the course of the race. The race will be conducted
              within the limits of Sinhagad Ghera.
            </p>
            <p>
              All the 3 categories is that all of the races will be held in
              month of June, and that there will rain, and wind during the
              race timings. So be prepared to get wet, muddy, and dirty in the
              forest trails.
            </p>
       
          </div>
          <div>
          <h4 style={{textAlign: "center"}}>Below are the three Categories of Marathons that you can race in:</h4>
          <div style={{}} className={style.buttonTabsContainer}>
          <div
            onClick={() => this.setState({ activeSRTNo: 0 })}
            className={`${style.buttonTabs} ${
              activeSRTNo === 0 ? style.active : ""
            }`}
          >
            <h3>11 km</h3>
          </div>

          <div
            onClick={() => this.setState({ activeSRTNo: 1 })}
            className={`${style.buttonTabs} ${
              activeSRTNo === 1 ? style.active : ""
            }`}
          >
            <h3>25 km</h3>
          </div>

          <div
            onClick={() => this.setState({ activeSRTNo: 2 })}
            className={`${style.buttonTabs} ${
              activeSRTNo === 2 ? style.active : ""
            }`}
          >
            <h3>53 km</h3>
          </div>
        </div>
        </div>
        </div>

        {this._renderActiveSRTDiv()}
        {/* <SRTUltra
          bgImage={require("../../../images/bg_img4.jpg")}
          title={RACES_DATA[2].title}
          data={RACES_DATA[2].data}
          map_link={RACES_DATA[2].map_link}
          post_notes={RACES_DATA[2].post_notes}
          overlayImage={require("../../../images/map_1.png")}
        /> */}
        <InfoDiagonalSection inverse={false} />
      </div>
    )
  }
}

export default SRTUltraSection
