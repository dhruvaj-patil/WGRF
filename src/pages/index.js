import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo";
import { LadingSection } from "../components/index_page_sections/ladingSection";


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LadingSection></LadingSection>
    <Link to="/courses/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
