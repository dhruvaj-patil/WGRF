import React, { Component } from "react"
import InfoDiagonalSection from "../../index_page_sections/Courses_section/InfoDiagonalSection"
import SRTUltra from "./SRTUltra"

import style from "../../../css/courses.module.scss"

const BG_IMG = require("../../../images/SRT_BG.jpg")
const SRT_LOGO = require("../../../images/srt_logo.png")

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

export class SRTUltraSection extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <div className={style.heading} id="SRT">
        {/* <h2 className={"m-0"}>SRT ULTRA EVENT</h2> */}

        <SRTUltra bgImage={BG_IMG} />

        {/* {this._renderActiveSRTDiv()} */}

        <InfoDiagonalSection
          givePoints={WHAT_WE_GIVE_POINTS}
          getPoints={WHAT_YOU_GET_POINTS}
          inverse={false}
        />
      </div>
    )
  }
}

export default SRTUltraSection
