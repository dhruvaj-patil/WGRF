import React from "react"
import SEO from "../components/seo"
import WGRFSection from "../components/index_page_sections/Courses_section/WGRFSection"
import SRTUltra from "../components/index_page_sections/Courses_section/SRTUltra"
import Layout from "../components/layout"
import style from "../css/courses.module.scss"
import InfoDiagonalSection from "../components/index_page_sections/Courses_section/InfoDiagonalSection"
import { LandingSection } from "../components/common_components/landing_section/landingSection"
import SetSection from "../components/index_page_sections/Courses_section/SET_section/setSection"

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
]

const RACES_DATA = [
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

export default class Courses extends React.Component {
  constructor(props) {
    super()
    this.state = {
      showDesc: true,
      activeNo: 0,
    }
    this.toggle = this.toggle.bind(this)
  }

  _renderActiveDiv = () => {
    const { activeNo } = this.state
    switch (activeNo) {
      case 0:
        return (
          <WGRFSection
            bgImage={require("../images/bg_img4.jpg")}
            title={RACES_DATA[0].title}
            data={RACES_DATA[0].data}
            map_link={RACES_DATA[0].map_link}
            overlayImage={require("../images/map_1.png")}
          />
        )

      case 1:
        return (
          <WGRFSection
            bgImage={require("../images/bg_img4.jpg")}
            title={RACES_DATA[1].title}
            data={RACES_DATA[1].data}
            map_link={RACES_DATA[1].map_link}
            overlayImage={require("../images/map_1.png")}
          />
        )

      case 2:
        return (
          <WGRFSection
            bgImage={require("../images/bg_img4.jpg")}
            title={RACES_DATA[2].title}
            data={RACES_DATA[2].data}
            map_link={RACES_DATA[2].map_link}
            post_notes={RACES_DATA[2].post_notes}
            overlayImage={require("../images/map_1.png")}
          />
        )

      default:
        break
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ showDesc: !this.state.showDesc })
    }, 8000)
  }

  toggle() {
    this.setState({ showDesc: !this.state.showDesc })
  }

  render() {
    const { showDesc, activeNo } = this.state
    return (
      <Layout>
        <SEO title="Marathons" />
        <LandingSection
          title="Marathons"
          subtitle={`Sinhagad Running Trail | Sinhagad Epic Trail`}
          landingBackgroundHeight="50vh"
          ofCourses={true}
        ></LandingSection>

        <div className={style.heading}>
          <h2 className={"m-0"}>Sinhagad Epic Trail </h2>
          <div className={style.detailsContainer}>
            <h3>Course Details</h3>
            <p>
              The beautiful route of the Sinhagad Epic Trail race is a point to
              point route, without any loops. Runners will experience new
              surroundings and a variety of technical as well as normal terrain
              in the course of the race. The race will be conducted within the
              limits of Sinhagad Ghera.
            </p>
            <p>
              All the 3 categories is that all of the races will be held in
              month of June, and that there will rain, and wind during the race
              timings. So be prepared to get wet, muddy, and dirty in the forest
              trails.
            </p>
            <p>You can participate in the following races:</p>
          </div>
          <div className={style.buttonTabsContainer}>
            <div
              onClick={() => this.setState({ activeNo: 0 })}
              className={`${style.buttonTabs} ${
                activeNo == 0 ? style.active : ""
              }`}
            >
              <h3>11 km</h3>
            </div>

            <div
              onClick={() => this.setState({ activeNo: 1 })}
              className={`${style.buttonTabs} ${
                activeNo == 1 ? style.active : ""
              }`}
            >
              <h3>25 km</h3>
            </div>

            <div
              onClick={() => this.setState({ activeNo: 2 })}
              className={`${style.buttonTabs} ${
                activeNo == 2 ? style.active : ""
              }`}
            >
              <h3>53 km</h3>
            </div>
          </div>
          {this._renderActiveDiv()}
          {/* <SetSection></SetSection> */}
          <InfoDiagonalSection inverse={true} />
        </div>

        <div className={style.heading}>
          {/* <h2 className={"m-0"}>SRT ULTRA EVENT</h2> */}
          <h3>Course Details</h3>
          <SRTUltra
            images={images}
            toggle={() => this.toggle()}
            showDesc={showDesc}
          />
          <InfoDiagonalSection inverse={false} />
        </div>
      </Layout>
    )
  }
}
