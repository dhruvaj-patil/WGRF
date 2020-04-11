import React, { Component } from "react"

import style from "../../../css/courses.module.scss"
import InfoDiagonalSection from "../../index_page_sections/Courses_section/InfoDiagonalSection"
import SETComponent from "./SETComponent"

const SET_DATA = [
  {
    title: "11 K.M.",
    data: {
      start_end_time: "6:15 am - 9:15 am",
      max_time: "3 Hours",
      ascent_descent: " 790~ metres - 780~ metres",
      high_low_point: "1296 metres - 739 metres",
      total_distance: "11 Km",
      aid_stations: "1",
    },
  },
  {
    title: "25 K.M.",
    data: {
      start_end_time: "6:10 am - 12:10 pm",
      max_time: "6 Hours",
      ascent_descent: " 1280~ metres - 1270~ metres",
      high_low_point: "1296 metres - 739 metres",
      total_distance: "22 Km",
      aid_stations: "3",

      post_notes: "UTMB Points: 1",
    },
  },
  {
    title: "32 K.M.",
    data: {
      start_end_time: "6:05 am -2:05 pm",
      max_time: "8 Hours",
      ascent_descent: " 1560~ metres - 1560~ metres",
      high_low_point: "1296 metres - 975 metres",
      total_distance: "32 Km",
      aid_stations: "4",

      post_notes: "UTMB Points: 2",
    },
  },
  {
    title: "42 K.M.",
    data: {
      start_end_time: "6:00 am - 5:00 pm",
      max_time: "11 Hours",
      ascent_descent: " 2380~ metres - 2380~ metres",
      high_low_point: "1296 metres - 674 metres",
      total_distance: "42 Km",
      aid_stations: "4",
      post_notes: "UTMB Points: 2",
    },
  },
]

export class SETSection extends Component {
  constructor(props) {
    super()
    this.state = {
      activeSETNo: 0,
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ activeSETNo: (this.state.activeSETNo+1)%4 }, console.log(this.state))
    }, 8000)
  }

  _renderActiveSETDiv = () => {
    const { activeSETNo } = this.state
    switch (activeSETNo) {
      case 0:
        return (
          <SETComponent
            bgImage={require("../../../images/bg_img4.jpg")}
            title={SET_DATA[0].title}
            data={SET_DATA[0].data}
            map_link={SET_DATA[0].map_link}
            overlayImage={require("../../../images/map_1.png")}
          />
        )

      case 1:
        return (
          <SETComponent
            bgImage={require("../../../images/bg_img4.jpg")}
            title={SET_DATA[1].title}
            data={SET_DATA[1].data}
            map_link={SET_DATA[1].map_link}
            overlayImage={require("../../../images/map_1.png")}
          />
        )

      case 2:
        return (
          <SETComponent
            bgImage={require("../../../images/bg_img4.jpg")}
            title={SET_DATA[2].title}
            data={SET_DATA[2].data}
            map_link={SET_DATA[2].map_link}
            post_notes={SET_DATA[2].post_notes}
            overlayImage={require("../../../images/map_1.png")}
          />
        )
      case 3:
        return (
          <SETComponent
            bgImage={require("../../../images/bg_img4.jpg")}
            title={SET_DATA[3].title}
            data={SET_DATA[3].data}
            map_link={SET_DATA[3].map_link}
            post_notes={SET_DATA[3].post_notes}
            overlayImage={require("../../../images/map_1.png")}
          />
        )

      default:
        break
    }
  }

  render() {

    const { activeSETNo } = this.state
    return (
      <div className={style.heading} id="SET">
        <h2 className={"m-0"}>Sinhagad Epic Trail </h2>
        <div className={style.detailsContainer}>
          <h3>Marathon Details</h3>
          <p>
            The beautiful route of the Sinhagad Epic Trail race is a point to
            point route, without any loops. Runners will experience new
            surroundings and a variety of technical as well as normal terrain in
            the course of the race. The race will be conducted within the limits
            of Sinhagad Ghera.
          </p>
          <p>
            All the 3 categories is that all of the races will be held in month
            of June, and that there will rain, and wind during the race timings.
            So be prepared to get wet, muddy, and dirty in the forest trails.
          </p>

        </div>

        <div>
        <h4 style={{textAlign: "center"}}>Below are the four Categories of Marathons that you can race in:</h4>
        <div
          className={`${style.buttonTabsContainer} ${style.buttonTabsInverse}`}
        >
          <div
            onClick={() => this.setState({ activeSETNo: 0 })}
            className={`${style.buttonTabs} ${
              activeSETNo === 0 ? style.active : ""
            }`}
          >
            <h3>11 km</h3>
          </div>

          <div
            onClick={() => this.setState({ activeSETNo: 1 })}
            className={`${style.buttonTabs} ${
              activeSETNo === 1 ? style.active : ""
            }`}
          >
            <h3>25 km</h3>
          </div>

          <div
            onClick={() => this.setState({ activeSETNo: 2 })}
            className={`${style.buttonTabs} ${
              activeSETNo === 2 ? style.active : ""
            }`}
          >
            <h3>32 km</h3>
          </div>
          <div
            onClick={() => this.setState({ activeSETNo: 3 })}
            className={`${style.buttonTabs} ${
              activeSETNo === 3 ? style.active : ""
            }`}
          >
            <h3>42 km</h3>
          </div>
        </div>
        </div>
        {this._renderActiveSETDiv()}
        {/* <SETComponent></SETComponent> */}
        <InfoDiagonalSection inverse={true} />
      </div>
    )
  }
}

export default SETSection
