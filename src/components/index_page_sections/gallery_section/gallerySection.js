import React, { Component } from "react"
import style from "../../../css/gallery.module.scss"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const GallerySection = () => {
  const query = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
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

  const images = query.allFile.edges

  return (
    <>
      <div className={style.galleryContainer}>
        <h2 className={style.heading}>Gallery</h2>

        <div className={style.gallery}>
          {images.map((node, index) => {
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

export default GallerySection
