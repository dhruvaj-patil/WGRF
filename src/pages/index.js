import React from "react"

import Layout from "../components/layout"
import { LandingSection } from "../components/common_components/landing_section/landingSection"
import FaqSection from "../components/index_page_sections/FAQ_section/faqSection"
import SEO from "../components/seo"
import LocationSection from "../components/index_page_sections/location_section/locationSection"
import GallerySection from "../components/index_page_sections/gallery_section/gallerySection"
import ContactSection from "../components/index_page_sections/contact_section/contactSection"

const LANDING_BUTTON_DATA = [
  {
    overText: "Epic Trails",
    underText: "View",
  },
  {
    overText: "SRT Ultra",
    underText: "View",
  },
]



const ACCORDION_DATA = [
  {
    title: 'Why is the moon sometimes out during the day?',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,asdasd asd asd asd  asd qwdqw x qwqwd  qwdq cx qw xqwdqe dqwdqwdewvrefcqwdqwqwdqwdqwdasdwqqd",
    opened: false
  },
  {
    title: 'Why is the moon sometimes out during the day?',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,asdasd asd asd asd  asd qwdqw x qwqwd  qwdq cx qw xqwdqe dqwdqwdewvrefcqwdqwqwdqwdqwdasdwqqd",
    opened: false
  },
  {
    title: 'Why is the moon sometimes out during the day?',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,asdasd asd asd asd  asd qwdqw x qwqwd  qwdq cx qw xqwdqe dqwdqwdewvrefcqwdqwqwdqwdqwdasdwqqd",
    opened: false
  },
  {
    title: 'Why is the moon sometimes out during the day?',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,asdasd asd asd asd  asd qwdqw x qwqwd  qwdq cx qw xqwdqe dqwdqwdewvrefcqwdqwqwdqwdqwdasdwqqd",
    opened: false
  },
  {
    title: 'Why is the moon sometimes out during the day?',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,asdasd asd asd asd  asd qwdqw x qwqwd  qwdq cx qw xqwdqe dqwdqwdewvrefcqwdqwqwdqwdqwdasdwqqd",
    opened: false
  }
]

const IndexPage = () => (
  <Layout>
    <SEO title="WGRF" />

    <LandingSection
      title="WGRF"
      subtitle="Western Ghat Running Foundation"
      buttonData={LANDING_BUTTON_DATA}
    ></LandingSection>

    <LocationSection></LocationSection>

    <GallerySection></GallerySection>

    <FaqSection accordionData={ACCORDION_DATA}></FaqSection>
    {/* <Link to="/courses/">Go to page 2</Link> */}
    <ContactSection></ContactSection>
  </Layout>
)

export default IndexPage
