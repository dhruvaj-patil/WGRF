import React, { Component } from "react"

import style from "../../../css/courses.module.scss"
import InfoDiagonalSection from "../../index_page_sections/Courses_section/InfoDiagonalSection"
import SETComponent from "./SETComponent"

const BG_IMG = require("../../../images/bg_img4.jpg")
const SET_LOGO = require("../../../images/SET_LOGO.png")

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
    // map_img: require("../../../images/11km.png"),
    map_link: require("../../../images/11km.png"),
  },
  {
    title: "22 K.M.",
    data: {
      start_end_time: "6:10 am - 12:10 pm",
      max_time: "6 Hours",
      ascent_descent: " 1280~ metres - 1270~ metres",
      high_low_point: "1296 metres - 739 metres",
      total_distance: "22 Km",
      aid_stations: "3",
    },
    post_notes: "UTMB Points: 1",
    map_link: require("../../../images/22km_SET.png"),
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
    },
    post_notes: "UTMB Points: 2",
    map_link: require("../../../images/32km_SET.png"),
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
    },
    post_notes: "UTMB Points: 2",
    map_link: require("../../../images/42km_SET.png"),
  },
]

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
  "Drop Bag facility available for runners of all the 3 racing categories at hotel Kondhana Guesthouse.",
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

export class SETSection extends Component {
  constructor(props) {
    super()
    this.state = {
      activeSETNo: 0,
    }
  }

  render() {
    const { activeSETNo } = this.state
    return (
      <div className={style.heading} id="SET">
        <SETComponent bgImage={BG_IMG} />

        <InfoDiagonalSection
          givePoints={WHAT_WE_GIVE_POINTS}
          getPoints={WHAT_YOU_GET_POINTS}
          inverse={true}
        />
      </div>
    )
  }
}

export default SETSection
