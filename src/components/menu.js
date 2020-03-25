import React, { Component } from "react"

import style from "../css/menu.module.scss"
<<<<<<< HEAD
import { Link } from "gatsby"
import { Image } from "react-bootstrap"
=======
import { Link,  } from "gatsby"
>>>>>>> 4af5c209a45f0e31a9515547477e02e437c73c76

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
<<<<<<< HEAD
=======
        onClick={() => this.setState({ openMenu: true })}
>>>>>>> 4af5c209a45f0e31a9515547477e02e437c73c76
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
<<<<<<< HEAD
        {this._renderMenuTitle()}
  
        {this._renderMenuToggler()}
=======
          {this._renderMenuTitle()}

          {this._renderMenuToggler()}
>>>>>>> 4af5c209a45f0e31a9515547477e02e437c73c76
        </div>
        {openMenu && (
          <div
            onMouseLeave={() => this.setState({ openMenu: false })}
            className={style.menu}
          >
<<<<<<< HEAD
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
=======
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

>>>>>>> 4af5c209a45f0e31a9515547477e02e437c73c76
          </div>
        )}
      </>
    )
  }
}
