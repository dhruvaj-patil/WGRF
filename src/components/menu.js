import React, { Component } from "react"

import style from "../css/menu.module.scss"
import { Link } from "gatsby"

const CLOSE_IMG = require("../images/close.svg")
const LINKS = {
  home: {
    landing: "/",
    location: "/",
  },
  marathons: "marathons",
}

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
        {openMenu && (
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
          </div>
        )}
      </>
    )
  }
}
