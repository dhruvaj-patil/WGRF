import React, { Component } from "react"

import style from "../css/menu.module.scss"
import { Link } from "gatsby"

const CLOSE_IMG = require("../images/close.svg")
// TODO:
// 1. Home
// 2. About Us
// 3. SRT Marathon
// 4. SET Marathon
// 5. FAQ
// 6. Contact Us
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

export default class Menu extends Component {
  constructor(props) {
    super()
    this.state = {
      openMenu: false,
    }
  }

  _renderMenuToggler() {
    return (
      <div
        onMouseEnter={() => this.setState({ openMenu: true })}
        onClick={() => this.setState({ openMenu: true })}
        className={style.navTogglerContainer}
      >
        <div className={style.menuBlock}>
          <hr></hr>
          <hr></hr>
          <hr></hr>
        </div>
      </div>
    )
  }

  _renderMenuTitle() {
    return (
      <div className={style.titleContainer}>
        <h4 className={style.title}>WGRF</h4>
      </div>
    )
  }

  _renderMenuLinks() {
    return (
      <div
        onMouseLeave={() => this.setState({ openMenu: false })}
        className={style.menu}
      >
        <div className={style.closeContainer}>
          <img
            className={style.closeButton}
            src={CLOSE_IMG}
            height={50}
            width={50}
            onMouseDown={() => this.setState({ openMenu: false })}
          ></img>
        </div>
        {MENU_ITEMS.map((item, index) => {
          return (
            <div className={style.linkContainer} key={item.title}>
              <Link
                onClick={() => this.setState({ openMenu: false })}
                to={item.url}
              >
                {item.title}
              </Link>
            </div>
          )
        })}
      </div>
    )
  }

  // _renderLogo() {
  //     return (
  //       <div>
  //       <Image></Image>
  //   </div>
  //     )
  // }
  render() {
    const { openMenu } = this.state
    return (
      <>
        <div>
          {this._renderMenuTitle()}

          {this._renderMenuToggler()}
        </div>
        {openMenu && this._renderMenuLinks()}
      </>
    )
  }
}

{
  /* <div
            onMouseLeave={() => this.setState({ openMenu: false })}
            className={style.menu}
          >
            <div className={style.closeContainer}>
              <img
                className={style.closeButton}
                src={CLOSE_IMG}
                height={50}
                width={50}
                onMouseDown={() => this.setState({ openMenu: false })}
              ></img>
            </div>
            <div className={style.linkContainer}>
              <Link
                onClick={() => this.setState({ openMenu: false })}
                to={LINKS.home.landing}
              >
                Home
              </Link>
            </div>
            <div className={style.linkContainer}>
              <Link
                to={`${LINKS.home.landing}#SET`}
                onClick={() => {
                  console.log("clicked")
                  // scrollTo("#SET")
                  this.setState({ openMenu: false })
                }}
              >
                SET Marathon
              </Link>
            </div>
            <div className={style.linkContainer}>
              <Link
                onClick={() => this.setState({ openMenu: false })}
                to={`${LINKS.home.landing}#SRT`}
              >
                SRT Marathon
              </Link>
            </div>
            <div className={style.linkContainer}>
              <Link
                onClick={() => this.setState({ openMenu: false })}
                to={`${LINKS.home.landing}#location`}
              >
                Location
              </Link>
            </div>
            <div className={style.linkContainer}>
              <Link
                onClick={() => this.setState({ openMenu: false })}
                to={`${LINKS.home.landing}#FAQ`}
              >
                FAQ
              </Link>
            </div>
            <div className={style.linkContainer}>
              <Link
                onClick={() => this.setState({ openMenu: false })}
                to={`${LINKS.marathons}#gallery`}
              >
                Gallery
              </Link>
            </div>
            <div className={style.linkContainer}>
              <Link
                onClick={() => {
                  this.setState({ openMenu: false })
                }}
                to={`${LINKS.marathons}#contact-us`}
              >
                Contact Us
              </Link>
            </div>
          </div> */
}
