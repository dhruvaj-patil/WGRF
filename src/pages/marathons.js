import React from "react"
import SEO from "../components/seo"
// import SRTUltra from "../components/index_page_sections/Courses_section/SRTUltra"

import Layout from "../components/layout"
import { LandingSection } from "../components/common_components/landing_section/landingSection"
import ParallaxComponent from "../components/common_components/parallaxComponent/parallaxComponent"
import GallerySection from "../components/index_page_sections/gallery_section/gallerySection"
import ContactSection from "../components/index_page_sections/contact_section/contactSection"



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
        
        <GallerySection></GallerySection> {/* Put on next page */}
        <ParallaxComponent
          bgImg={require("../images/parallax/fort.jpg")}
          height="40vh"
        ></ParallaxComponent>
       <ContactSection></ContactSection>  {/* Put on next page */}
      </Layout>
    )
  }
}
