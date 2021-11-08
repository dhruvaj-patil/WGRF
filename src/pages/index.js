import React from "react"

import Layout from "../components/layout"
import { LandingSection } from "../components/common_components/landing_section/landingSection"
import FaqSection from "../components/index_page_sections/FAQ_section/faqSection"
import SEO from "../components/seo"
import LocationSection from "../components/index_page_sections/location_section/locationSection"
import ParallaxComponent from "../components/common_components/parallaxComponent/parallaxComponent"
import SETSection from "../components/courses_page_sections/SETSection/SETSection"
import SRTUltraSection from "../components/courses_page_sections/SRTUltraSection/SRTUltraSection"

const LANDING_BUTTON_DATA = [
  {
    overText: "Epic Trails",
    underText: "Register",
    link: "",
  },
  {
    overText: "SRT Ultra",
    underText: "Register",
    link: "https://www.townscript.com/e/srt-ultra-2021-341013",
  },
]

const ACCORDION_DATA = [
  {
    title: "Any Rules & Regulation I should keep in Mind ?",
    description: [
      "Participants must abide by the rules and regulations of Sinhagad Epic Trail. The Race Director’s and other associates of WGRF’s decision is final in any case.",
      "Participants of Half Marathon and SkyRace must have completed 18 years of age on or before 30th June of the Current year. All participants of 10Km must have completed 15 years of age on or before 30th June of the Current Year",
      "Participants must understand and participate in Sinhagad Epic Trail at their own personal risk.",
      "All participants must be physically fit and mentally able to participate in Sinhagad Epic Trail. Medical certificate is a must for all participants, you will email us the medical certificate at wgrf50@gmail.com",
      "You release and waive WGRF, their volunteers, and partners from liability for all losses, damages, injury, claims, demands, expenses, and any other liability, physical, psychological, or otherwise, directly or indirectly arising out of your participation in Sinhagad Epic Trail.",
      "You will be present at the pre-race briefing meet where you will be collecting your marathon bib on time. Marathon bib will strictly not be provided any time after the meet.",
      "While collecting your bib and number, you will produce a photo identity proof like Aadhar card/ passport and your receipt of registration at the bib collection counter for verification purpose. ID proof can be in digital form.",
      "Individual numbered bibs will be provided to each and every participant, which should be worn and visible in the front part of every runners body. Do not hide your bib numbers with clothing.",
      "On race day all participants must arrive and report at the venue 1 hour prior to the start of Sinhagad Epic Trail.",
      "All participants must possess all the necessary gear for mountain and trail running with them during the marathon. The list of items include mobile phone with our helpline number saved, trail running shoes and socks, choice of running apparel, bandana (buff), gloves, wind proof jacket, sunglasses, sunscreen lotion, minimum 1 litre of water, electrolyte powder or tablet, headlamp, also trekking poles (if necessary), 1 or 2 fruits, energy bar/gels.",
      "You must be aware that the property you will be running on is the property of Maharashtra State Forest Department, Maharashtra State Archeology Department, Maharashtra State Public Works Department, Village Gram Panchayat limits, and that you will respect the environment you are passing through at all times.",
      "You will deal with any difficulties that arise during the run by yourself, without outside help, with regards to changes in climatic and geographical conditions at high altitude.",
      "You will manage yourself with physical and mental problems that arise from small injuries, muscle and articular pains, fatigue, nausea, digestive problems. Be totally aware that WGRF will not be able to help you manage these problems.",
      "We reiterate that you will be present in a very fragile eco-system, we require you to have prior mountain running training/experience to have the required presence of mind during the marathon.",
      "All participants must stay on the official marked course during their run of the marathon.",
      "The entire course will be well marked, ensure to keep an eye on the stewards stationed at various points who will caution you to go slow. There are points where the soil is very loose, so in order to avoid accidents it is mandatory for the runners to look before you proceed.",
      "There are special check points where chains and bolting have been done, please tread carefully in this area.",
      "The course is marked on the route, summits, passes, forks, junctions, hazardous locations. Keep your eyes open for marked signs along the way.",
      "The course is filled with beautiful single track trails, and breathtaking single track mountain ridges. Strictly no overtaking in these areas, watch out for no overtaking signs. We do not want you or your fellow participants to risk your safety.",
      "In case of emergency or injury to you or fellow participant, contact our helpline numbers and mention your current location and type of assistance required.",
      "Usage of trekking poles is optional, but if you are using them, you will have to make sure you are not getting them in fellow runner’s way, and protect them from the points of the poles.",
      "Participants must not throw trash/rubbish/garbage outside of 50m radius of an aid station. There will be a penalty of 60 minutes loss in timing for throwing trash/rubbish/garbage that you possess anywhere on the marathon route.",
      "There will be disqualification from the marathon if you shortcut the route by not following the signage, voluntarily or involuntarily.",
      "There will be disqualification if you do not pass through compulsory check points.",
      "There will be a straight disqualification from the marathon if you have caused physical harm and injury to any of the fellow participants.",
      "You will give your full consent to the medical staff for providing you medical treatment during the marathon.",
      "Competitors must give assistance to fellow participants who may be injured or distressed. We will take into account the time spent on this assistance taking into consideration the type of assistance.",
      "Any retirement (self or forced) from Sinhagad Epic Trail must take place only at an Aid Station unless in extreme situations. If you think you cannot go any further, we strongly recommend you to take retirement, albeit sportingly, and come back stronger in the next edition, there will always be another time.",
      "You agree to pay the registration fees in full at the time of registration, and understand there will not be any refund for paid amount in any circumstance.",
      "You agree that there will be no transfer of registration to any other person apart from you, in any circumstance.",
      "It is illegal to throw garbage/rubbish anywhere on the marathon course. Throwing of plastic bags, empty gel tubes, paper, wrappers, cloth, or any other rubbish anywhere on the course is strictly prohibited. Trash bins are available at every aid stations / refreshment posts, so make use of them to dispose off your rubbish. All participants must keep rubbish and wrappers with them until they reach the next aid station / refreshment post to dispose it off.",
      "We do not want you to play loud music on your phone or play songs on bluetooth speakers in your bag and disturb fellow runners and the local wildlife. The beauty is to run in the heart of the forest, experience its grandeur, hear the waters low, birds chirp, feel the air. You can always hit your music when you reach home. We encourage you to conserve your phone battery in case of emergency.",
    ],
    opened: false,
  },
  {
    title:
      "It's my first time, which Marathon Should I choose ? (Sinhagad Epic Trail)",
    description: [
      "11 K.M. -> This category aims to introduce mountain and trail running to traditional 5K & 10K runners and to those getting started at trail running altogether. Eligibility: 15 years+ on date of marathon",
      "22 K.M. -> This category will attract traditional half marathon runners who are seeking a more challenging and exciting route filled with more mountains and some breathtaking views in the Ghera of Sinhagad with beautiful villages surrounding the valley. Eligibility: 18 years+ on date of marathon",
      "32 k.m -> This category adds a 10km extra loop of the Mengjai mountain ridge to the 22km route, making it a tough 32 Km distance with more mountain trails, and breathtaking views in the Ghera of Sinhagad with beautiful villages surrounding the valley. Eligibility: 18 years+ on date of marathon",
      "42 KM. -> This category will take you to the most unexplored trails of Sinhagad and is specifically suited for seasoned full marathon runners, ultra runners, mountain runners, mountain climbers, and sky runners who really want to test their running potential to the limit! Eligibility: 18 years+ on date of marathon",
      "All races will start and end at Kondhana Guesthouse, Atkarwadi, Ghera Sinhagad.",
    ],
    opened: false,
  },
  {
    title:
      "It's my first time, which Marathon Should I choose ? (SRT Ultra Marathon)",
    description: [
      "11 K.M. : This category aims to introduce mountain and trail running to traditional 10K runners and to those getting started at trail running altogether. Eligibility: 15 years+ on date of marathon. The race will start and end at Golewadi square, Sinhagad Ghat road junction.",
      "25 K.M. : This category will attract traditional half marathon runners who are seeking a more challenging and exciting route filled with more mountains and some breathtaking views in surroundings of Sinhagad and Rajgad with beautiful villages on the way. Eligibility: 18 years+ on date of marathon. Start point will be Golewadi Square and Finish point will be near the base village of Rajgad fort.",
      "53 K.M. : This category is the magnum opus specifically suited for seasoned full marathon runners, ultra runners, mountain runners, mountain climbers, and sky runners who want to relive the history of valour and conquest! Eligibility: 18 years+ on date of marathon. Start point will be Golewadi Square and Finish point will be near the base village of Torna fort.",
    ],
    opened: false,
  },
  {
    title: "Timings and Deadlines.",
    description: [
      "It is very important to note that the entire marathon is a timed event. As per the guidelines of the Pune Forest Department, all running activities must begin at 6 am IST and halted at 6 pm IST. The maximum hours of running the marathon is 12 hours. Last 1 hour is kept for evacuating runners who have a DNF in the final stage. All decisions are in accordance with Pune forest department, Pune Rural Police Department, and WGRF volunteers. There will be no change whatsoever in this decision.",
    ],
    opened: false,
  },
]

const IndexPage = () => (
  <Layout>
    <SEO title="WGRF" />

    <LandingSection
      title="WGRF"
      subtitle="Western Ghat Running Foundation"
      buttonData={LANDING_BUTTON_DATA}
    ></LandingSection>

    {/* get both race details section on main page */}
    <div id="About-WGRF">
      <SRTUltraSection></SRTUltraSection>
      <ParallaxComponent
        height="400px"
        bgImg={require("../images/parallax/valley.jpg")}
      ></ParallaxComponent>

      <SETSection></SETSection>
    </div>
    <ParallaxComponent
      height="400px"
      bgImg={require("../images/parallax/parallax_1.jpg")}
    ></ParallaxComponent>

    <LocationSection></LocationSection>
    <FaqSection accordionData={ACCORDION_DATA}></FaqSection>
    {/* <Link to="/courses/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
