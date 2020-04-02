import React from 'react';
import style from "../../../css/courses.module.scss"
import container from '../../../css//location.module.scss'

const InfoDiagonalSection = (props) =>(


<div >
  <section className={`${props.inverse ?  style.inverse:''}`}>
    <div className={`${props.inverse ? style.inverseleftContent: style.leftContent}`}>
    <h3>What We Give</h3>
                <ul style={{width:'85%'}}>
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
                  <li>
                    <b>BY ROAD</b>: Direct. Google Maps App is the best way to
                    reach the location. Set your destination to Kondhana Guest
                    House, where you will be guided to park your vehicle.
                  </li>
                  <li>
                    <b>BY ROAD</b>: Direct. Google Maps App is the best way to
                    reach the location. Set your destination to Kondhana Guest
                    House, where you will be guided to park your vehicle.
                  </li>
                </ul>
    </div>
    <div className={`${props.inverse ?  style.inverserightContent: style.rightContent}`}>
    <h3>What You Get</h3>
                <ul style={{width:'85%'}}>
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
                  <li>
                    <b>BY ROAD</b>: Direct. Google Maps App is the best way to
                    reach the location. Set your destination to Kondhana Guest
                    House, where you will be guided to park your vehicle.
                  </li>
                  <li>
                    <b>BY ROAD</b>: Direct. Google Maps App is the best way to
                    reach the location. Set your destination to Kondhana Guest
                    House, where you will be guided to park your vehicle.
                  </li>
                </ul>
    </div>
  </section>
</div>
)


export default InfoDiagonalSection;