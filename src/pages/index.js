import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo";
<<<<<<< HEAD
import { LadingSection } from "../components/index_page_sections/ladingSection";
=======
import { LadingSection } from "../components/index_page_sections/landing_section/ladingSection";
>>>>>>> 4af5c209a45f0e31a9515547477e02e437c73c76


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LadingSection></LadingSection>
    <Link to="/courses/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
