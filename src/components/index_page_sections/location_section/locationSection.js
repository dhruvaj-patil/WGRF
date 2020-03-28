import React from "react"

import style from "../../../css/location.module.scss"

export default class LocationSection extends React.Component {
  constructor(props) {
    super()
    this.state = {
      showTravel: true,
    }
  }

  componentDidMount() {
    // setInterval(() => {
    //     this.setState({ showTravel: !this.state.showTravel })
    //   }, 10000)
  }

  render() {
    const { showTravel } = this.state
    return (
      <div style={{ width: "100%", height: "100vh", display: "flex" }}>
        <div className={style.containerLeft}>
          <div style={{ flex: 1 }}>
            <h2 style={{ textAlign: "center" }}>Location</h2>
          </div>
          <div
            style={{ flex: 9, justifyContent: "center", alignItems: "center" }}
          >
            {showTravel && (
              <div
                className={`${style.dataContainer} ${
                  showTravel ? style.effectFadeIn : ""
                }`}
              >
                <h3>Travel</h3>
                <ul>
                  <li>
                    <b>BUS</b>: Direct. There is an hourly bus service direct
                    from Swargate, Jedhe square, that will drop you at the
                    location. Bus name: Swargate to Atkarwadi, Donaje. Location:
                    in front of Natraj Hotel.
                  </li>
                  <li>
                    <b>TRAIN</b>: 1 change. You will have to catch a bus from
                    Pune Railway Station to Swargate Bus Stand. Catch the direct
                    bus from Jedhe square to Atkarwadi.
                  </li>
                  <li>
                    <b>AIRPORT</b>: 2 changes. You will have to catch a bus from
                    Pune Airport to Pune Railway Station. From there to Swargate
                    Bus Stand. Catch the direct bus from Swargate Jedhe square
                    to Atkarwadi.
                  </li>
                  <li>
                    <b>BY ROAD</b>: Direct. Google Maps App is the best way to
                    reach the location. Set your destination to Kondhana Guest
                    House, where you will be guided to park your vehicle.
                  </li>
                </ul>

                <p style={{ textAlign: "center" }}>
                  P.S. We recommend you to contact Kondhana Guesthouse
                  management, if you are having any difficulty to reach the
                  venue. The Travel expenses and Accomodation expenses are to be
                  borne by the candidate
                </p>
              </div>
            )}

            {!showTravel && (
              <div
                className={`${style.dataContainer} ${
                  !showTravel ? style.effectFadeIn : ""
                }`}
              >
                <h3>Accomodation</h3>
                <p>
                  Host Hotel Kondhana Guesthouse is providing low cost
                  accommodation as well as camping per individual as well as
                  groups.
                </p>
                <p>
                  For Bookings Contact <b>Ketan</b> : {" "}Phone no{" "}-{" "}
                  <a
                    href="tel:9423012632 "
                  >
                    942-301-2632
                  </a>
               {" | "}WhatsApp{" "}-{" "}
                  <a
                    href="tel: 9545432929"
                  >
                    954-543-2929
                  </a>
                </p>
              </div>
            )}
            <div className={style.indicatorContainer}>
              <div
                onClick={() => this.setState({ showTravel: true })}
                className={`${style.indicator} ${
                  showTravel ? style.active : ""
                }`}
              ></div>
              <div
                onClick={() => this.setState({ showTravel: false })}
                className={`${style.indicator} ${
                  !showTravel ? style.active : ""
                }`}
              ></div>
            </div>
          </div>
        </div>
        <div className={style.containerRight}>
          <div className={style.imageContainer}>
            {/* <img
              src={require("../../../images/bg_img4.jpg")}
              width="auto"
              height="100%"
            ></img> */}

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15133.141408339388!2d73.83014335!3d18.51600285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfa63ce4d6bf%3A0xe1cb329390a70481!2sVetal%20Hill!5e0!3m2!1sen!2sin!4v1585317095165!5m2!1sen!2sin"
              className={style.map}
            ></iframe>
          </div>
        </div>
      </div>
    )
  }
}
