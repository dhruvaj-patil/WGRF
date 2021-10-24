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

  componentDidMount() {
    setInterval(() => {
      this.setState({ activeSETNo: (this.state.activeSETNo + 1) % 4 })
    }, 8000)
  }

  _callNext = () => {
    console.log("CALLLLLED")
    this.setState({ activeSETNo: (this.state.activeSETNo + 1) % 4 })
  }

  _callPrev = () => {
    let activeDiv = (this.state.activeSETNo - 1) % 4
    console.log("CALLLLLED", this.state)
    if (activeDiv < 0) {
      activeDiv = SET_DATA.length - 1
    }

    this.setState({ activeSETNo: activeDiv })
  }

  _renderActiveSETDiv = () => {
    const { activeSETNo } = this.state
    switch (activeSETNo) {
      case 0:
        console.log("Map Link SETSection ===>", SET_DATA[0].map_link)
        return (
          <SETComponent
            bgImage={BG_IMG}
            title={SET_DATA[0].title}
            data={SET_DATA[0].data}
            map_link={SET_DATA[0].map_link}
            overlayImage={SET_DATA[0].map_img}
            callNext={this._callNext}
            callPrev={this._callPrev}
          />
        )

      case 1:
        return (
          <SETComponent
            bgImage={BG_IMG}
            title={SET_DATA[1].title}
            data={SET_DATA[1].data}
            map_link={SET_DATA[1].map_link}
            overlayImage={SET_DATA[1].map_img}
            callNext={this._callNext}
            callPrev={this._callPrev}
          />
        )

      case 2:
        return (
          <SETComponent
            bgImage={BG_IMG}
            title={SET_DATA[2].title}
            data={SET_DATA[2].data}
            map_link={SET_DATA[2].map_link}
            post_notes={SET_DATA[2].post_notes}
            overlayImage={SET_DATA[2].map_img}
            callNext={this._callNext}
            callPrev={this._callPrev}
          />
        )
      case 3:
        return (
          <SETComponent
            bgImage={BG_IMG}
            title={SET_DATA[3].title}
            data={SET_DATA[3].data}
            map_link={SET_DATA[3].map_link}
            post_notes={SET_DATA[3].post_notes}
            overlayImage={SET_DATA[3].map_img}
            callNext={this._callNext}
            callPrev={this._callPrev}
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
        <div className={style.detailsContainer}>
          <img src={SET_LOGO} height="150px"></img>
          <h2 className={"m-0"}>Sinhagad Epic Trail </h2>
          <p>
            Sinhagad Epic Trail is a technical sky race for those with the heart
            of a lion taking place during the arrival of monsoon in the Sahyadri
            ranges. Of all the mountain forts in Maharashtra, Sinhagad,
            originally known as Kondhana, has been the most sought after fort
            for the rulers of the Sahyadri ranges. Since the past 2000 years,
            Sinhagad is witness to enough bloodshed between different kings
            owing to its heavily garrisoned fortifications, strategic importance
            and proximity to Pune. “The one who controls Sinhagad, controls
            Pune” was the mantra of the past.
            <br></br>
            The Koli tribe who are the oldest known settlers of the fort still
            live around the fort’s 3 major valleys namely Atkarwadi, Kalyan Gaon
            and Amruteshwar Met.
            <br></br>
            The famous battle of 1670 where Maratha warrior Tanaji Malusare
            fought for his life for recapturing the fort into Chhatrapati
            Shivaji’s kingdom is the most told story in every household of
            Maharashtra. Chhatrapati Shivaji Maharaj expressed the loss of his
            trusted general and friend by eulogising the words “Gad ala, pan
            Sinha gela” which translates to “we have won the fort, but lost the
            lion”. He renamed the fort from its old name Kondhana to Sinhagad
            (Lion’s Fort) in memory of this braveheart.
            <br></br>
            Today Sinhagad is a place for multiple outdoor sports activities;
            right from hikers, mountaineers, runners, rock climbers, adventure
            enthusiasts, campers, and the usual tourists visiting everyday.
            Owing to its near proximity to the people of Kolhapur, Satara,
            Mumbai, and Pune, Sinhagad is the most visited fort in Maharashtra.
          </p>
        </div>
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

        <div style={{marginTop: "50px"}}>
          <h4 style={{ textAlign: "center" }}>
            Below are the four Categories of Marathons that you can race in:
          </h4>
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
              <h3>22 km</h3>
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
