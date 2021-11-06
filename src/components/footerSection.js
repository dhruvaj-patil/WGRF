import React, { Component } from "react"
import style from "../css/footer.module.scss"
import { Link } from "gatsby"

const MENU_ITEMS = [
  {
    url: "/",
    title: "HOME",
  },
  {
    url: "/#About-WGRF",
    title: "About MARATHONS",
  },
  {
    url: "/marathons#SRT",
    title: "SRT MARATHON",
  },
  {
    url: "/marathons#SET",
    title: "SET MARATHON",
  },

  {
    url: "/#WGRF-location",
    title: "How to reach",
  },
  {
    url: "#FAQ",
    title: "F.A.Q.",
  },
  {
    url: "/marathons#WGRF-Team",
    title: "Our Team",
  },
]

export class FooterSection extends Component {
  _renderFooterContent(title, url) {
    console.log("title => ", title)
    return (
      <p>
        <Link to={`${url}`}>{title}</Link>
      </p>
    )
  }

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
            {/* <div style={{ flex: 1 }}>
              <h3>Categories</h3>
              <p className={style.alignContent}>
                <Link to={`${LINKS.home.landing}#SRT`}>SRT Ultra</Link>
              </p>
              <p className={style.alignContent}>
                <Link to={`${LINKS.home.landing}#SET`}>
                  Sinhagad Epic Trail
                </Link>
              </p>
            </div> */}
            <div className={style.socialContainer}>
              <h3>Social Links</h3>

              <div>
                <ul>
                  <li>
                    <Link
                      to="https://www.facebook.com/westernghatsrunning"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={`${style.icon} ${style.facebook}`}></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className={`${style.icon} ${style.insta}`}></i>
                    </Link>
                  </li>
                  {/* <li>
                    <a href="#">
                      <i class="fab fa-linkedin-in icon"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-google-plus-g icon"></i>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <h3>Quick Links</h3>

              <div>
                {MENU_ITEMS.map(item => {
                  return this._renderFooterContent(item.title, item.url)
                })}
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className={style.legalsContainer}>
          <div className={style.copyRightsContainer}>
            <p>
              Copyright &copy; 2019 All Rights Reserved by{" "}
              <Link href="http://exient.media/">Exient Media</Link>.
            </p>
          </div>
        </div>
      </footer>
    )
  }
}
