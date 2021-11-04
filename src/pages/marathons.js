import React from "react"
import SEO from "../components/seo"
// import SRTUltra from "../components/index_page_sections/Courses_section/SRTUltra"

import Layout from "../components/layout"
import { LandingSection } from "../components/common_components/landing_section/landingSection"
import ParallaxComponent from "../components/common_components/parallaxComponent/parallaxComponent"
import GallerySection from "../components/index_page_sections/gallery_section/gallerySection"
import ContactSection from "../components/index_page_sections/contact_section/contactSection"
import Race from "../components/courses_page_sections/Race/RaceSection"
import RaceSection from "../components/courses_page_sections/Race/RaceSection"

const RACE_DATA = [
  {
    id: "SET",
    title: "Sinhagad Epic Trail",
    description: [
      "The beautiful route of the Sinhagad Epic Trail race is a point to point route, without any loops. Runners will experience new surroundings and a variety of technical as well as normal terrain in the course of the race. The race will be conducted within the limits of Sinhagad Ghera.",
      "All the 3 categories is that all of the races will be held in month of June, and that there will rain, and wind during the race timings. So be prepared to get wet, muddy, and dirty in the forest trails.",
    ],
    races: [
      {
        id: "SET11km",
        title: "11 K.M.",
        data: {
          start_end_time: "6:15 am - 9:15 am",
          max_time: "3 Hours",
          ascent_descent: " 790~ metres - 780~ metres",
          high_low_point: "1296 metres - 739 metres",
          total_distance: "11 Km",
          aid_stations: "1",
        },
        // map_img: require("../images/11km.png"),
        map_link: require("../images/11km.png"),
      },
      {
        id: "SET22km",
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
        map_link: require("../images/22km_SET.png"),
      },
      {
        id: "SET32km",
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
        map_link: require("../images/32km_SET.png"),
      },
      {
        id: "SET42km",
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
        map_link: require("../images/42km_SET.png"),
      },
    ],
  },
  {
    id: "SRT",
    title: "SRT ULTRA",
    description: [
      "The beauty of the SRT Ultra Marathon course is that it is a point-to-point route, without any loops. So every moment will be a new experience in the heart of the Sahyadri mountains. Runners will pass through evergreen mountains, dense forests with abundance of flora and fauna.",
      "SRT Ultra is highly challenging in the sense that almost 70% of the marathon route comprises of technical trails, rocks, mud, scree, grass & roots, at an average altitude of 1000 metres. The SRT Ultra not just involves mountain running, but also considerable amount of climbing, which is encountered while ascending as well as descending one of the most pristine locations in Pune.",
    ],
    races: [
      {
        id: "SRT11km",
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
        map_link: require("../images/11km.png"),
      },
      {
        id: "SRT25km",
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
        map_link: require("../images/25kgpx_img_srt_ultra.png"),
      },
      {
        id: "SRT53km",
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
        post_notes:
          "Intermediate Cut Off Time: (8 hours) At Km 34 - Aid Station no. 4",
        map_link: require("../images/53_srt_utla_gpx.png"),
      },
    ],
  },
]

export default class Courses extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Marathons" />
        <LandingSection
          title="Marathons"
          subtitle={`Sinhagad Running Trail | Sinhagad Epic Trail`}
          landingBackgroundHeight="50vh"
          ofCourses={true}
        ></LandingSection>
        {/*TODO: 
        1. Add Race Component here 
        2. Make it a Gallery for SET
        */}
        <RaceSection
          title={RACE_DATA[0].title}
          description={RACE_DATA[0].description}
          races={RACE_DATA[0].races}
          sectionLink={RACE_DATA[0].id}
        ></RaceSection>
        <GallerySection race_name="SRT"></GallerySection>
        <ParallaxComponent
          bgImg={require("../images/parallax/fort.jpg")}
          height="40vh"
        ></ParallaxComponent>
        {/*TODO: 
        1. Create 1 More Gallery FOR SRT Section
        2. Add SRT Section Component Below  
        */}
        <RaceSection
          title={RACE_DATA[1].title}
          description={RACE_DATA[1].description}
          races={RACE_DATA[1].races}
          sectionLink={RACE_DATA[1].id}
        ></RaceSection>
        <GallerySection race_name="SET"></GallerySection>
        <ParallaxComponent
          bgImg={require("../images/parallax/fort.jpg")}
          height="40vh"
        ></ParallaxComponent>
        <ContactSection></ContactSection>
      </Layout>
    )
  }
}
