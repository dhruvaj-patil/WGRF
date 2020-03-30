import React, { Component } from "react"
import style from "../../../css/gallery.module.scss";


export default class GallerySection extends Component {
  render() {
    return (
      <>
        <div className={style.galleryContainer}>
          <h2 className={style.heading}>
            Gallery
          </h2>

          <div className={style.gallery}>

            <div className={style.galleryItem}>
                <img src={require("../../../images/bg_img1.jpg")} className={style.galleryImage}></img>
            </div>
            <div className={style.galleryItem}>
                <img src={require("../../../images/bg_img1.jpg")} className={style.galleryImage}></img>
            </div>
            <div className={style.galleryItem}>
                <img src={require("../../../images/bg_img1.jpg")} className={style.galleryImage}></img>
            </div>
            <div className={style.galleryItem}>
                <img src={require("../../../images/bg_img1.jpg")} className={style.galleryImage}></img>
            </div>
            <div className={style.galleryItem}>
                <img src={require("../../../images/bg_img1.jpg")} className={style.galleryImage}></img>
            </div>
            <div className={style.galleryItem}>
                <img src={require("../../../images/bg_img1.jpg")} className={style.galleryImage}></img>
            </div>

          </div>
        </div>
      </>
    )
  }
}

