import React, { Component } from "react"
import RacesComponent from "./racesComponent"
import style from "../../../../css/location.module.scss";

export default class SetSection extends Component {
  render() {
    return (
      <div className={`${style.locationContainer}`}>
        <div className={style.containerLeft}>

          <div > 

          
          </div>
          <div> for 25km</div>
          <div> for 53km</div>
        </div>
      </div>
    )
  }
}
