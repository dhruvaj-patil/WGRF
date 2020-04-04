import React, { Component } from "react"
import style from "../../../css/contact.module.scss"
import TeamComponent from "./teamComponent"


const teamData = [{
  name: "Dighvijay Jedhe",
  skills: ["Trail runner", "trekking expert"],
  desc: "Loves to do heavy workout & power lifting. Works in Information Technology sector.",
  fbLink: "https://www.facebook.com/amar.dhumal.50",
  img: require("../../../images/bg_img2.jpg")
},
{
  name: "Amar Dhumal",
  skills: ["Trail runner", "trekking expert"],
  desc: "Loves to do heavy workout & power lifting. Works in Information Technology sector.",
  fbLink: "https://www.facebook.com/amar.dhumal.50",
  img: require("../../../images/bg_img2.jpg")
},
{
  name: "Shripal Oswal",
  skills: ["Trail runner", "trekking expert"],
  desc: "Loves to do heavy workout & power lifting. Works in Information Technology sector.",
  fbLink: "https://www.facebook.com/amar.dhumal.50",
  img: require("../../../images/bg_img2.jpg")
},
{
  name: "Maruti Gole",
  skills: ["Trail runner", "trekking expert"],
  desc: "Loves to do heavy workout & power lifting. Works in Information Technology sector.",
  fbLink: "https://www.facebook.com/amar.dhumal.50",
  img: require("../../../images/bg_img2.jpg")
}]

export class ContactSection extends Component {



  render() {
    return (
      <>
        <div className={style.contact}>
          <h2 style={{textAlign: 'center'}}>Get In Touch</h2>
          <div className={style.contactContainer}>
            <TeamComponent title={teamData[0].name} skills={teamData[0].skills} desc={teamData[0].desc} faceBookLink={teamData[0].fbLink} img={teamData[0].img}></TeamComponent>
            <TeamComponent title={teamData[0].name} skills={teamData[0].skills} desc={teamData[0].desc} faceBookLink={teamData[0].fbLink} img={teamData[0].img}></TeamComponent>
          </div>
        </div>
      </>
    )
  }
}

export default ContactSection
