import React, { Component } from "react"
import style from "../../../css/gallery.module.scss"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const RenderSRTGallery = () => {
  const srtQuery = useStaticQuery(graphql`
    query MysrtQuery {
      allFile(filter: { relativeDirectory: { eq: "gallery/srt" } }) {
        edges {
          node {
            base
            childImageSharp {
              fluid(quality: 70) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  //   const setQuery = useStaticQuery(graphql`
  //   query MysetQuery {
  //     allFile(filter: { relativeDirectory: { eq: "gallery/set" } }) {
  //       edges {
  //         node {
  //           base
  //           childImageSharp {
  //             fluid(quality: 70) {
  //               ...GatsbyImageSharpFluid
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  const srtImages = srtQuery.allFile.edges
  // const setImages = setQuery.allFile.edges

  return (
    <>
      <div className={style.galleryContainer} id="gallery">
        <div className={style.gallery}>
          {srtImages.map((node, index) => {
            return (
              <RenderGalleryItem
                img={node.node.childImageSharp.fluid}
                name={node.node.base}
                key={index + node.node.base}
              ></RenderGalleryItem>
            )
          })}
        </div>
      </div>
    </>
  )
}

const RenderGalleryItem = ({ img, name }) => {
  return (
    <div className={style.galleryItem}>
      <Img fluid={img} className={style.galleryImage} alt={name}></Img>
    </div>
  )
}

export default RenderSRTGallery
