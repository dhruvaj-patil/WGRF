import React from "react"
import SEO from "../components/seo"
import WGRFSection from "../components/index_page_sections/Courses_section/WGRFSection"
import SRTUltra from "../components/index_page_sections/Courses_section/SRTUltra"
import Layout from "../components/layout"
import style from "../css/courses.module.scss"
import InfoDiagonalSection from "../components/index_page_sections/Courses_section/InfoDiagonalSection"
import { LandingSection } from "../components/common_components/landing_section/landingSection"

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

export default class Courses extends React.Component {
  constructor(props) {
    super()
    this.state = {
      showDesc: true,
    }
    this.toggle = this.toggle.bind(this)
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
    const { showDesc } = this.state
    return (
      <Layout>
        <SEO title="Marathons" />
        <LandingSection
          title="Marathons"
          subtitle={`Sinhagad Running Trail | Sinhagad Epic Trail`} 
          landingBackgroundHeight="50vh"
        ></LandingSection>

        <div className={style.heading}>
          <h2 className={"m-0"}>WGRF EVENT</h2>
          <h3>Course Details</h3>
          <WGRFSection
            images={images}
            toggle={this.toggle}
            showDesc={showDesc}
          />
          <InfoDiagonalSection inverse={true} />
        </div>

        <div className={style.heading}>
          <h2 className={"m-0"}>SRT ULTRA EVENT</h2>
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
