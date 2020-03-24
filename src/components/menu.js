import React, { Component } from "react"

import style from "../css/menu.module.scss"
import { Link,  } from "gatsby"

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
            <div className={style.linkContainer} >
              <Link onClick={() => this.setState({openMenu: false})} to={LINKS.home.landing}>Home</Link>
            </div>
            <div className={style.linkContainer}>
              <Link onClick={() => this.setState({openMenu: false})} to={LINKS.home.landing}>Home</Link>
            </div>
            <div className={style.linkContainer}>
              <Link onClick={() => this.setState({openMenu: false})} to={LINKS.home.landing}>Home</Link>
            </div>
            <div className={style.linkContainer}>
              <Link onClick={() => this.setState({openMenu: false})} to={LINKS.home.landing}>Home</Link>
            </div>
            <div className={style.linkContainer}>
              <Link onClick={() => this.setState({openMenu: false})} to={LINKS.courses}>Courses</Link>
            </div>

          </div>
        )}
      </>
    )
  }
}
