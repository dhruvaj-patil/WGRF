import React from "react"

import Layout from "../components/layout"
import { LandingSection } from "../components/common_components/landing_section/landingSection"
import FaqSection from "../components/index_page_sections/FAQ_section/faqSection"
import SEO from "../components/seo"
import LocationSection from "../components/index_page_sections/location_section/locationSection"
import ParallaxComponent from "../components/common_components/parallaxComponent/parallaxComponent"
import SETSection from "../components/courses_page_sections/SETSection/SETSection"
import SRTUltraSection from "../components/courses_page_sections/SRTUltraSection/SRTUltraSection"

const LANDING_BUTTON_DATA = [
  {
    overText: "Epic Trails",
    underText: "Register",
    link:"https://events.indiarunning.com/Event/Details/SINHAGADEPICTRAIL/3771"
  },
  {
    overText: "SRT Ultra",
    underText: "Register",
    link:"https://events.indiarunning.com/Event/Details/SRTULTRAMARATHON/3142"
  },
]



const ACCORDION_DATA = [
  {
    title: "Why is the moon sometimes out during the day?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,asdasd asd asd asd  asd qwdqw x qwqwd  qwdq cx qw xqwdqe dqwdqwdewvrefcqwdqwqwdqwdqwdasdwqqd",
    opened: false,
  },
  {
    title: "Why is the moon sometimes out during the day?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,asdasd asd asd asd  asd qwdqw x qwqwd  qwdq cx qw xqwdqe dqwdqwdewvrefcqwdqwqwdqwdqwdasdwqqd",
    opened: false,
  },
  {
    title: "Why is the moon sometimes out during the day?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,asdasd asd asd asd  asd qwdqw x qwqwd  qwdq cx qw xqwdqe dqwdqwdewvrefcqwdqwqwdqwdqwdasdwqqd",
    opened: false,
  },
  {
    title: "Why is the moon sometimes out during the day?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,asdasd asd asd asd  asd qwdqw x qwqwd  qwdq cx qw xqwdqe dqwdqwdewvrefcqwdqwqwdqwdqwdasdwqqd",
    opened: false,
  },
  {
    title: "Why is the moon sometimes out during the day?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,asdasd asd asd asd  asd qwdqw x qwqwd  qwdq cx qw xqwdqe dqwdqwdewvrefcqwdqwqwdqwdqwdasdwqqd",
    opened: false,
  },
]

const IndexPage = () => (
  <Layout>
    <SEO title="WGRF" />

    <LandingSection
      title="WGRF"
      subtitle="Western Ghat Running Foundation"
      buttonData={LANDING_BUTTON_DATA}
    ></LandingSection>

    {/* get both race details section on main page */}
    <SETSection></SETSection>
    <SRTUltraSection></SRTUltraSection>
    <ParallaxComponent
      height="400px"
      bgImg={require("../images/parallax/valley.jpg")}
    ></ParallaxComponent>
    <LocationSection></LocationSection>
    <FaqSection accordionData={ACCORDION_DATA}></FaqSection>
    {/* <Link to="/courses/">Go to page 2</Link> */}
   
  </Layout>
)

export default IndexPage
