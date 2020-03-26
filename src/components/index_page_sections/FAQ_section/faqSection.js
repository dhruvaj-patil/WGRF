import React, { Component } from "react"
import style from "../../../css/faq.module.scss"
export class FaqSection extends Component {
  state = {
    accordionData: this.props.accordionData,
  }

  render() {
    const { accordionData } = this.state
    return (
      <div className={style.faqContainer}>
        <div>
          <h2 className={style.faqTitle}>Frequently Asked Questions</h2>
        </div>

        {accordionData.map((data, i) => {
          return (
            <div className={style.accordionContainer}>
              {this._accordionComponent(data, i)}
            </div>
          )
        })}
      </div>
    )
  }


  _openAccordion = (index) => {
    console.log(index)
    let accordionChanged = this.state.accordionData;

    accordionChanged[index].opened = !this.state.accordionData[index].opened

    console.log("changed data ===>", accordionChanged)

    this.setState({
      accordionData: accordionChanged
    }, console.log("changed state ==>", this.state.accordionData))
  }

  _accordionComponent = (data, index) => {
   console.log("index ==>", index)
    return (
      <div
        className={style.accordion}
        onClick={() =>
         this. _openAccordion(index)
        }
      >
        <div className="accordion-item">
          <div style={{ display: "flex" }}>
            <a>{data.title}</a>
            <span >
              <i
                className={`${style.icon} ${style.iconArrow} ${
                  data.opened ? style.active : ""
                }`}
              ></i>
            </span>
          </div>
          {data.opened && (
            <div className={`${style.content} ${style.active}`}>
              <p>{data.description}</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default FaqSection
