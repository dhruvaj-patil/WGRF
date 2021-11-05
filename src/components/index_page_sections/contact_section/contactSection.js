import React, { Component } from "react"
import style from "../../../css/contact.module.scss"
import TeamComponent from "./teamComponent"

const teamData = [
  {
    id: 1,
    name: "Dighvijay Jedhe",
    skills: ["Mountain runner", "Trail runner"],
    desc: "Loves to do heavy workout & power lifting.",
    fbLink: "https://www.facebook.com/amar.dhumal.50",
    img: require("../../../images/team/Digvijay_Jhede_1.jpg"),
  },
  {
    id: 2,
    name: "Amar Dhumal",
    skills: ["Trail runner", "trekking expert"],
    desc: "Works in Information Technology sector.",
    fbLink: "https://www.facebook.com/amar.dhumal.50",
    img: require("../../../images/team/amar_dhumal_1.jpg"),
  },
  {
    id: 3,
    name: "Shripal Oswal",
    skills: ["Trail runner", "climbing", "trekking"],
    desc: "Expert in glass related business.",
    fbLink: "https://www.facebook.com/amar.dhumal.50",
    img: require("../../../images/team/Shripad_1.jpg"),
  },
  {
    id: 4,
    name: "Maruti Gole",
    skills: ["Wrestler", "Advocate"],
    desc:
      "Has walked from Agra to Rajgad fort commemorating the escape of Chhatrapati Shivaji Maharaj.",
    fbLink: "https://www.facebook.com/amar.dhumal.50",
    img: require("../../../images/team/maruti_gole_1.jpg"),
  },
  {
    id: 5,
    name: "Anil Pawar",
    skills: ["Farmer", "Social engineering"],
    desc:
      "Expert knowhow of Pune's Sahyadri Mountains, & surrounding villages. Explorer of historical architecture.",
    fbLink: "https://www.facebook.com/amar.dhumal.50",
    img: require("../../../images/team/Anil_Pawar_1.jpg"),
  },
  {
    id: 6,
    name: "Kunal Bedarkar",
    skills: ["Mountaineering", "Triathlons"],
    desc:
      "Specialist in the sport of alpine climbing, un-supported climbing, slack-lining, etc.",
    fbLink: "https://www.facebook.com/amar.dhumal.50",
    img: require("../../../images/team/kunal_bedarkar_1.jpg"),
  },
  {
    id: 7,
    name: "Mandar Mate",
    skills: ["Trail runner", "Nature person"],
    desc:
      "He is climbing on Sinhagad fort every weekend more than last 2 decades.",
    fbLink: "https://www.facebook.com/amar.dhumal.50",
    img: require("../../../images/team/mandar_mate_1.jpg"),
  },
  {
    id: 8,
    name: "Sujeet Takawane",
    skills: ["Photography", "Videography"],
    desc: "Specialist in the field of Event videography.",
    fbLink: "https://www.facebook.com/amar.dhumal.50",
    img: require("../../../images/team/sujeet_takawane_1.jpg"),
  },
  {
    id: 9,
    name: "Mahesh Malusare",
    skills: ["Cyclist", "Dhol-Tasha"],
    desc:
      "Founder of Sahyadri Trekkers Club & Sahyadri Garjana Dhol-Tasha Pathak.",
    fbLink: "https://www.facebook.com/amar.dhumal.50",
    img: require("../../../images/team/mahesh_malusare_1.jpg"),
  },
  {
    id: 10,
    name: "Harish Gawai",
    skills: ["Banking", "Trekking"],
    desc:
      "Banker by profession, but does not forget to run the trails before heading for office.",
    fbLink: "https://www.facebook.com/amar.dhumal.50",
    img: require("../../../images/team/harsh_gawai.jpg"),
  },
  {
    id: 11,
    name: "Harshad Rao",
    skills: ["Trail runner", "Multi-sport athlete"],
    desc:
      "Mt.Everest Summiteer 2016, Mt.Kanchenjunga Summiteer 2018. Former Software Professional.",
    fbLink: "https://www.facebook.com/amar.dhumal.50",
    img: require("../../../images/team/harshad_rao_1.jpg"),
  },
  {
    id: 12,
    name: "Aditya Shinde",
    skills: ["Mountainerring", "Trekking expert"],
    desc:
      "Expert in outdoor & endurance sports. Works full time in a leading sports brand.",
    fbLink: "https://www.facebook.com/amar.dhumal.50",
    img: require("../../../images/team/aditya_shinde_1.jpg"),
  },
]

export class ContactSection extends Component {
  render() {
    return (
      <>
        <div className={style.contact}>
          <div>
            <h2 style={{ textAlign: "center" }} id="WGRF-Team">
              Our Team
            </h2>
            <h4 style={{ textAlign: "center" }}>
              Email us at{" "}
              <a href="mailto:wgrf50@gmail.com" style={{ color: "red" }}>
                wgrf50@gmail.com
              </a>{" "}
              or contact any of our members on Facebook
            </h4>
          </div>

          <div className={style.contactContainer}>
            {teamData.map((player, index) => {
              return (
                <TeamComponent
                  index={player.name + index}
                  playerData={player}
                ></TeamComponent>
              )
            })}
            {/* <TeamComponent title={teamData[0].name} skills={teamData[0].skills} desc={teamData[0].desc} faceBookLink={teamData[0].fbLink} img={teamData[0].img}></TeamComponent> */}
          </div>
        </div>
      </>
    )
  }
}

export default ContactSection
