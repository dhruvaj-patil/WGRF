import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "../css/courses.module.scss"
import { Carousel, Row, Col, Container } from "react-bootstrap"

const SecondPage = () => (

  <Layout>
    <SEO title="Page two" />
    <Container fluid>
      <Row>
        <Col>
          <img className={style.courseimage} src={require("../images/bg_img4.jpg")} />
          <div className={style.design}></div>

        </Col>
        <Col>
          <div style={{ textAlign: "center" }} className={style.carousel}>
            <Carousel className={style.carouselIndicators}>
              <Carousel.Item>
                <div className={style.carouselItem}>
                  <p>EPIC TRAILS</p>
                </div>

              </Carousel.Item>
              <Carousel.Item>
                <div className={style.carouselItem}>
                  <p>SRT</p>
                </div>
              </Carousel.Item>
            </Carousel>

          </div>

        </Col>
      </Row>

    </Container>





    <Link to="/">Go back to the homepage</Link>
  </Layout >
)

export default SecondPage
