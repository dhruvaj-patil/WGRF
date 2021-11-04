import React, { Component } from "react"
import style from "../../../css/gallery.module.scss"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const RenderSETGallery = () => {
  const setQuery = useStaticQuery(graphql`
    query MysetQuery {
      allFile(filter: { relativeDirectory: { eq: "gallery/set" } }) {
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

  const setImages = setQuery.allFile.edges
  // const setImages = setQuery.allFile.edges

  return (
    <>
      <div className={style.galleryContainer} id="gallery/set">
        <div className={style.gallery}>
          {setImages.map((node, index) => {
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

export default RenderSETGallery
