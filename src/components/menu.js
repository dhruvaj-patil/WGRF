import React, { Component } from "react"

import style from "../css/menu.module.scss"
import { Link } from "gatsby"
import { Image } from "react-bootstrap"

const LINKS = {
  home: {
    landing: "/",
  },
  courses: "courses",
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
            <Link to={LINKS.home.landing}>
              <p>Hi</p>
            </Link>
            <Link to="/">
              <p>Hi</p>
            </Link>

            <Link to="/">
              <p>Hi</p>
            </Link>

            <Link to="/">
              <p>Hi</p>
            </Link>

            <Link to={LINKS.courses}>
              <p>Hi</p>
            </Link>
          </div>
        )}
      </>
    )
  }
}
