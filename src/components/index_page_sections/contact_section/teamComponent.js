import React, { Component } from "react"
import style from "../../../css/contact.module.scss"
export class TeamComponent extends Component {
  constructor(props) {
    super()
    this.state = {
      isActive: false,
    }
  }

  render() {
      const {isActive} = this.state
      const {title, skills, desc, faceBookLink, img} = this.props;
    return (
      <>
        <article
          className={`${style.tile} ${isActive ? style.active : ''}`}
          onMouseEnter={() => this.setState({ isActive: true })}
          onMouseLeave={() => this.setState({ isActive: false })}
          onClick={() => this.setState({ isActive: !isActive })}
        >
          <div className={`${style.tile__img} `}>
            <div className={`${style.imgWrapper} ${isActive ? style.active : ''}`}>
              <img className={`${isActive ? style.active : ''}`} src={img} alt="" />
            </div>
          </div>
          <div className={style.tile__content}>
            <div className={style.tile__metas}>
            {skills.map((skill, index) => {
              return (
                <span key={skill+index} className={`${style.meta} ${isActive ? style.active : ''} `}>{skill}</span>
              )
            })}
              
              {/* <span className={`${style.meta} ${isActive ? style.active : ''}`}>#2 meta</span>
              <span className={`${style.meta} ${isActive ? style.active : ''}`}>#3 meta</span> */}
            </div>
            <h3 className={`${style.tile__title} ${isActive ? style.active : ''} `}>{title}</h3>
            <div className={`${style.tile__body} ${isActive ? style.active : ''}`}>
              {desc}
            </div>
            <a href={faceBookLink} className={`${style.tile__btn} ${isActive ? style.active : ''}`}>
              Get in touch!
            </a>
          </div>
        </article>
      </>
    )
  }
}

export default TeamComponent
