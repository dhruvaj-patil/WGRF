import React from "react"
import { Link } from "gatsby"
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/scss/image-gallery.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "../css/courses.module.scss"
import { Carousel, Row, Col, Container } from "react-bootstrap"

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

export default class Courses extends React.Component{
  constructor(props) {
    super()
    this.state = {
      showDesc: true,
    }
  }

  componentDidMount() {
    setInterval(() => {
        this.setState({ showDesc: !this.state.showDesc })
      }, 8000)
  }
  
  
  render(){
    const { showDesc } = this.state
    return(
      <div>
  <Layout>
    <SEO title="Page two" />
    <div className={style.coursecontainer}>
      <Row>
        <Col className={"mt-5"}>
          <img className={style.courseimage} src={require("../images/bg_img4.jpg")} />
          <div className={style.design}></div>

        </Col>
        <Col className={"mt-5"}>
          <div style={{ textAlign: "center" }} className={style.contentContainer}>
            <div className={style.contentHeading}>{showDesc?"Hello":"Gallery"}
                <div className={style.contentDescription}>
                  {showDesc && 
                  (
                  <div>
                  Lorem Ipsum
                Lorem Ipsum
                Lorem Ipsum
                Lorem Ipsum
                   </div>)
                  }
                  {!showDesc && (
                  <div>
                      <ImageGallery showPlayButton={false} items={images}/>
                  </div>
                  )
                  }
              </div>
            </div>
          </div>
          <div className={style.indicatorContainer}>
              <div
                onClick={() => this.setState({ showDesc: true })}
                className={`${style.indicator} ${
                  showDesc ? style.active : ""
                }`}
              ></div>
              <div
                onClick={() => this.setState({ showDesc: false })}
                className={`${style.indicator} ${
                  !showDesc ? style.active : ""
                }`}
              ></div>
            </div>
        </Col>
      </Row>
</div>
  </Layout >

<Layout>
<div className={style.inversecoursecontainer}>
  <Row>
    <Col className={"mt-5"}>
      <div style={{ textAlign: "center" }} className={style.inversecontentContainer}>
        <div className={style.inversecontentHeading}>{showDesc?"Hello":"Gallery"}
            <div className={style.inversecontentDescription}>
              {!showDesc && 
              (
              <div>
              Lorem Ipsum
            Lorem Ipsum
            Lorem Ipsum
            Lorem Ipsum
               </div>)
              }
              {showDesc && (
              <div>
                  <ImageGallery showPlayButton={false} items={images}/>
              </div>
              )
              }
          </div>
        </div>
      </div>
      <div style={{display:'inline-flex',float:'right'}} className={style.indicatorContainer}>
          <div
            onClick={() => this.setState({ showDesc: true })}
            className={`${style.indicator} ${
              showDesc ? style.active : ""
            }`}
          ></div>
          <div
            onClick={() => this.setState({ showDesc: false })}
            className={`${style.indicator} ${
              !showDesc ? style.active : ""
            }`}
          ></div>
        </div>
    </Col>
    <Col className={"mt-5"}>
      <img className={style.inversecourseimage} src={require("../images/bg_img4.jpg")} />
      <div className={style.inversedesign}></div>
    </Col>
  </Row>
</div>
</Layout>

<Layout>
  
<div>
  <section>
    <div className={style.leftContent}></div>
    <div className={style.rightContent}></div>
  </section>

</div>
</Layout>


</div>
  )
}
}

