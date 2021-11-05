import React from "react"
import RaceComponent from "./RaceComponent"
import style from "../../../css/races.module.scss"
import { Link } from "gatsby"

const BG_IMG = require("../../../images/bg_img4.jpg")

export default function RaceSection({
  title,
  description,
  races,
  sectionLink,
}) {
  return (
    <div>
      <div>
        <div className={`${style.heading}`}>
          <h2>{title}</h2>
          <div>
            {description.map(para => {
              return <p>{para}</p>
            })}
          </div>
        </div>

        {/* Buttons Section */}
        <div className={`${style.raceTypes}`} id={sectionLink}>
          <h4>Select which Marathon you want to participate in:</h4>
          <div
            className={`${style.buttonTabsContainer} ${style.buttonTabsInverse}`}
          >
            {races.map(race => {
              return (
                <div
                  //   onClick={() => this.setState({ activeSETNo: 0 })}
                  className={`${style.buttonTabs}`}
                >
                  <Link to={`/marathons#${race.id}`}>{race.title}</Link>
                </div>
              )
            })}
          </div>
        </div>

        {/* Race Section with all the data & image */}
        <div>
          {races.map((race, index) => {
            let isInverted = index % 2 == 0 ? true : false
            return (
              <RaceComponent
                bgImage={race.bg_img}
                title={race.title}
                data={race.data}
                map_link={race.map_link}
                overlayImage={race.map_link}
                inverted={isInverted}
                post_notes={race.post_notes}
                linkId={race.id}
              ></RaceComponent>
            )
          })}
        </div>
      </div>
    </div>
  )
}
