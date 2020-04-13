import React from "react"
import style from "../../../css/courses.module.scss"
import container from "../../../css//location.module.scss"

const InfoDiagonalSection = ({ givePoints, getPoints, inverse }) => (
  <div>
    <section className={`${inverse ? style.inverse : ""}`}>
      <div
        className={`${inverse ? style.inverseleftContent : style.leftContent}`}
      >
        <div className={style.paddingContainer}>
          <h3>What We Give</h3>
          <ul>
            {givePoints.map((point, index) => {
              return <li key={index + point}>{point}</li>
            })}
          </ul>
        </div>
      </div>
      <div
        className={`${
          inverse ? style.inverserightContent : style.rightContent
        }`}
      >
        <div className={`${style.rightContentData} ${style.paddingContainer}`}>
          <h3>What You Get</h3>
          <ul style={{ width: "85%" }}>
            {getPoints.map((point, index) => {
              return <li key={index + point}>{point}</li>
            })}
          </ul>
        </div>
      </div>
    </section>
  </div>
)

export default InfoDiagonalSection
