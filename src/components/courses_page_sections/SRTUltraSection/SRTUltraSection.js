import React, { Component } from "react"
import InfoDiagonalSection from "../../index_page_sections/Courses_section/InfoDiagonalSection"
import SRTUltra from "./SRTUltra"

import style from "../../../css/courses.module.scss"

const BG_IMG = require("../../../images/SRT_BG.jpg")
const SRT_LOGO =  require("../../../images/srt_logo.png")

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
    // map_photo: require("../../../images/53k_SRT_ultra_full_map.jpg"),
    map_link: require("../../../images/11km.png"),
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
    // map_photo: require("../../../images/53k_SRT_ultra_full_map.jpg"),
    map_link:require("../../../images/25kgpx_img_srt_ultra.png"),
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
    // map_photo: require("../../../images/53k_SRT_ultra_full_map.jpg"),
    post_notes: "Intermediate Cut Off Time: (8 hours) At Km 34 - Aid Station no. 4",
    map_link: require("../../../images/53_srt_utla_gpx.png"),
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
      this.setState({ activeSRTNo: (this.state.activeSRTNo + 1) % 3 })
    }, 12000)
  }

  _callNext = () => {
    this.setState({ activeSRTNo: (this.state.activeSRTNo + 1) % 3 })
  }

  _callPrev = () => {
    let activeDiv = (this.state.activeSRTNo - 1) % 3

    if (activeDiv < 0) {
      activeDiv = SRT_DATA.length - 1
    }

    this.setState({ activeSRTNo: activeDiv })
  }

  _renderActiveSRTDiv = () => {
    const { activeSRTNo } = this.state
    switch (activeSRTNo) {
      case 0:
        return (
          <SRTUltra
            bgImage={BG_IMG}
            title={SRT_DATA[0].title}
            data={SRT_DATA[0].data}
            map_link={SRT_DATA[0].map_link}
            overlayImage={SRT_DATA[0].map_photo}
            callNext={this._callNext}
            callPrev={this._callPrev}
          />
        )

      case 1:
        return (
          <SRTUltra
            bgImage={BG_IMG}
            title={SRT_DATA[1].title}
            data={SRT_DATA[1].data}
            map_link={SRT_DATA[1].map_link}
            overlayImage={SRT_DATA[1].map_photo}
            callNext={this._callNext}
            callPrev={this._callPrev}
          />
        )

      case 2:
        return (
          <SRTUltra
            bgImage={BG_IMG}
            title={SRT_DATA[2].title}
            data={SRT_DATA[2].data}
            map_link={SRT_DATA[2].map_link}
            post_notes={SRT_DATA[2].post_notes}
            overlayImage={SRT_DATA[2].map_photo}
            callNext={this._callNext}
            callPrev={this._callPrev}
          />
        )

      default:
        break
    }
  }

  render() {
    const { activeSRTNo } = this.state
    return (
      <div className={style.heading} id="SRT">
        {/* <h2 className={"m-0"}>SRT ULTRA EVENT</h2> */}

        <div className={style.heading}>
          <div className={style.detailsContainer}>
            <img src={SRT_LOGO} height="150px"></img>

            <h2 className={"m-0"}>SRT ULTRA MARATHON</h2>
            <p>
              SRT stands for Sinhagad Rajgad Torna!
              <br></br>
              Introducing an Ultra Marathon on the ancient route which connects
              the Sinhagad-Rajgad-Torna forts, more popularly known today as
              “SRT”. This legendary route is the magnum opus of trail and
              mountain running marathon routes of Pune's Sahyadri ranges. The
              SRT route has been used in the past as a catalyst in commuting,
              trading, and farming apart from being the battleground for many
              kings who ruled these mountains.
            </p>
         
            <p>
              The SRT is a now a heritage walk, with the magnificent Sinhagad,
              Rajgad and Torna forts that stand tall in between this route,
              telling the stories of the rich and glorious past of Pune.
              <br></br>
              In this day and age, a new stage is set - a battle to conquer
              these monumental Sinhagad-Rajgad-Torna forts in the form of an
              endurance filled Pune's first mountain running marathon!
            </p>
          </div>
          <div className={style.detailsContainer}>
            <h3>Marathon Details</h3>
            <p>
              The beauty of the SRT Ultra Marathon course is that it is a
              point-to-point route, without any loops. So every moment will be a
              new experience in the heart of the Sahyadri mountains. Runners
              will pass through evergreen mountains, dense forests with
              abundance of flora and fauna.
            </p>
            <p>
              SRT Ultra is highly challenging in the sense that almost 70% of
              the marathon route comprises of technical trails, rocks, mud,
              scree, grass & roots, at an average altitude of 1000 metres. The
              SRT Ultra not just involves mountain running, but also
              considerable amount of climbing, which is encountered while
              ascending as well as descending one of the most pristine locations
              in Pune.
            </p>
          </div>
          <div style={{marginTop: "50px"}}>
            <h4 style={{ textAlign: "center" }}>
              Below are the three Categories of Marathons that you can race in:
            </h4>
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
