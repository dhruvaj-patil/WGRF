import React, { Component } from "react"
import InfoDiagonalSection from "../../index_page_sections/Courses_section/InfoDiagonalSection"
import SRTUltra from "./SRTUltra"

import style from "../../../css/courses.module.scss"



const WHAT_WE_GIVE_POINTS = [
  "Participants will get a T-Shirt",
  "Bib number with timing chip",
  "Display of results on website post-marathon",
  "Well stocked Aid-Stations",
  "Finisher medal",
  "Post race meal",
  "Hotel Kondhana Guesthouse with low cost camping facility, room stay and meal packag",
  "Aid stations will provide drinking water, electrolyte drink, sweet snacks, glucose biscuits, salted snacks, fruits and primary first aid.",
  "Please plan to run with at least half to 1 litre of water on you, and some food for self-support.",
  "Pay-n-Park facility available by Ghera Sinhagad Samiti. You will have to reach and park your vehicle on race day before 5 am in the designated parking space. Parking at owners risk!",
  "Drop Bag facility available for runners of all the 3 racing categories at hotel Kondhana Guesthouse."
]
const WHAT_YOU_GET_POINTS = [
  "Trail running shoes, socks, Running T-shirt & shorts/pants **",
  "Rain Jacket **",
  "Hydration pack/sack with half litre drinking water **",
  "Headband, Scarf or Bandana (Buff) **",
  "Gloves **",
  "Whistle **",
  "Headlamp for long distance runners **",
  "Sunglasses **",
  "Sunscreen lotion with UV protection **",
  "Mobile phone fully charged **",
  "Photo copy of a valid identity proof **",
  "Foldable trekking poles for long distance runners",
  "At least 1 litre of drinking water",
  "Fruit, energy bar, gels",
  "Electrolyte powder/tablet",
  "Emergency cash like Rs. 200.",
  "Portable USB Battery charger for watch/phone",
]


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


  componentDidMount() {
    setInterval(() => {
      this.setState({ activeSRTNo: (this.state.activeSRTNo + 1)%3 }, console.log(this.state))
    }, 8000)
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
        <div className={style.heading} id="SRT">
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
        <InfoDiagonalSection givePoints={WHAT_WE_GIVE_POINTS} getPoints={WHAT_YOU_GET_POINTS} inverse={false} />
      </div>
    )
  }
}

export default SRTUltraSection
