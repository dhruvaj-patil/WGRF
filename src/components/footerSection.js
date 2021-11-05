import React, { Component } from "react"
import style from "../css/footer.module.scss"
import { Link } from "gatsby"


const LINKS = {
  home: {
    landing: "/",
    location: "/",
    

  },
  marathons: "marathons",
}

export class FooterSection extends Component {
  render() {
    return (
      <footer className={style.siteFooter}>
        {/* Top Container */}
        <div className={style.contentContainer}>
          <div className={style.aboutContainer}>
            <h3>About WGRF</h3>
            <p style={{ textIndent: "1rem" }}>
              WGRF is a not-for-profit foundation having a goal of creating
              awareness of nature, its conservation protecting natural habitat.
              We are committed towards creating social awareness towards our
              environment by hosting trail and mountain running marathons and
              races.
            </p>
            <p style={{ textIndent: "1rem" }}>
              Our stage is the Sahyadri mountain range of Western Ghats, in
              Maharashtra. The funds that will be generated through our trail
              running and mountain running marathons will go towards protecting
              and conserving the mountains and forest trails of the Western
              Ghats.
            </p>
            <p style={{ textIndent: "1rem" }}>
              The funds acquired through current and future events will be
              utilised for the conservation of forests controlled by Maharashtra
              State Forest Department, and conservation of the protected forts &
              monuments of Maharashtra State Archeology Department.
            </p>
          </div>
          {/* style row for big screens coloum for small screens */}
          <div className={style.linkContianer}>
            <div style={{ flex: 1 }}>
              <h3>Categories</h3>
              <p className={style.alignContent}>
                <Link to={`${LINKS.home.landing}#SRT`}>SRT Ultra</Link>
              </p>
              <p className={style.alignContent}>
                <Link to={`${LINKS.home.landing}#SET`}>Sinhagad Epic Trail</Link>
              </p>
            </div>
            <div style={{ flex: 1 }}>
              <h3>Quick Links</h3>
              <p className={style.alignContent}>
                <Link activeClassName={style.footerLink} to={LINKS.home.landing}>Home</Link>
              </p>
              <p className={style.alignContent}>
                <Link activeClassName={style.footerLink} to={LINKS.home.marathons}>Courses</Link>
              </p>
              <p className={style.alignContent}>
                <Link to={`${LINKS.home.landing}#location`}>Location</Link>
              </p>
              <p className={style.alignContent}>
                <Link to={LINKS.home.landing}>Gallery</Link>
              </p>
              <p className={style.alignContent}>
                <Link to={`${LINKS.home.landing}#FAQ`}>FAQ</Link>
              </p>
              <p className={style.alignContent}>
              <Link to={`${LINKS.marathons}#contact-us`}>Get In Touch</Link>
              </p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className={style.legalsContainer}>
          <div className={style.copyRightsContainer}>
            <p>
              Copyright &copy; 2019 All Rights Reserved by{" "}
              <Link href="http://exientmedia.com/">Exient Media</Link>.
            </p>
          </div>
          <div className={style.socialLinksContainer}>
          <div className={style.iconContainer}>
            <a>            
              <i className={`icon ${style.iconFb}`}></i>
            </a>
          </div>
          <div className={style.iconContainer}>
            <a>            
              <i className={`icon ${style.iconInsta}`}></i>
            </a>
          </div>
          </div>
        </div>
      </footer>
    )
  }
}
