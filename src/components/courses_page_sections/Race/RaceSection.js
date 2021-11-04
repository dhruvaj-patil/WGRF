import React from "react"
import RaceComponent from "./RaceComponent"
import style from "../../../css/races.module.scss"

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
                  <a href={`/marathons#${race.id}`}>{race.title}</a>
                </div>
              )
            })}
          </div>
        </div>

        {/* <div style={{ marginTop: "50px" }}>
          <h4 style={{ textAlign: "center" }}>
            Below are the four Categories of Marathons that you can race in:
          </h4>
          <div
            className={`${style.buttonTabsContainer} ${style.buttonTabsInverse}`}
          >
            <div
              //   onClick={() => this.setState({ activeSETNo: 0 })}
              className={`${style.buttonTabs}`}
            >
              <h3>11 km</h3>
            </div>

            <div
              //   onClick={() => this.setState({ activeSETNo: 1 })}
              className={`${style.buttonTabs}`}
            >
              <h3>22 km</h3>
            </div>

            <div
              //   onClick={() => this.setState({ activeSETNo: 2 })}
              className={`${style.buttonTabs}`}
            >
              <h3>32 km</h3>
            </div>
            <div
              //   onClick={() => this.setState({ activeSETNo: 3 })}
              className={`${style.buttonTabs}`}
            >
              <h3>42 km</h3>
            </div>
          </div>
        </div> */}

        {/* Race Section with all the data & image */}
        <div>
          {races.map((race, index) => {
            let isInverted = index % 2 == 0 ? true : false
            return (
              <RaceComponent
                bgImage={BG_IMG}
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
