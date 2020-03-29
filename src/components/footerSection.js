import React, { Component } from "react"
import style from "../css/footer.module.scss"

export class FooterSection extends Component {
  render() {
    return (
      <footer className={style.siteFooter}>
        {/* Top Container */}
        <div className={style.contentContainer}>
          <div className={style.aboutContainer}>
            <h3>About WGRF</h3>
            <p style={{textIndent: "1rem"}}>
              WGRF is a not-for-profit foundation having a goal of creating
              awareness of nature, its conservation protecting natural habitat.
              We are committed towards creating social awareness towards our
              environment by hosting trail and mountain running marathons and
              races.
            </p>
            <p  style={{textIndent: "1rem"}}>
                  Our stage is the Sahyadri mountain range of Western Ghats, in
              Maharashtra. The funds that will be generated through our trail
              running and mountain running marathons will go towards protecting
              and conserving the mountains and forest trails of the Western
              Ghats.
            </p>
            <p style={{textIndent: "1rem"}}>
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
                <a>SRT Ultra</a>
              </p>
              <p  className={style.alignContent}>
                <a>Sinhagad Epic Trail</a>
              </p>
            </div>
            <div style={{ flex: 1 }}>
              <h3>Quick Links</h3>
              <p  className={style.alignContent}>
                <a>Home</a>
              </p>
              <p  className={style.alignContent}>
                <a>Courses</a>
              </p>
              <p  className={style.alignContent}>
                <a>Location</a>
              </p>
              <p  className={style.alignContent}>
                <a>Gallery</a>
              </p>
              <p  className={style.alignContent}>
                <a>FAQ</a>
              </p>
              <p  className={style.alignContent}>
                <a>Get In Touch</a>
              </p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className={style.legalsContainer}>
          <div className={style.copyRightsContainer}>
            <p>Copyright &copy; 2019 All Rights Reserved by <a href="http://exientmedia.com/">Exient Media</a>.</p>
          </div>
          <div className={style.socialLinksContainer}>
            <p>Social Links</p>
          </div>
        </div>
      </footer>
    )
  }
}
