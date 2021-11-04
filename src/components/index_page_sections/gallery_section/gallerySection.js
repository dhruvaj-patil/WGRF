import React from "react"
import RenderSETGallery from "./renderSETGallery"
import RenderSRTGallery from "./renderSRTGallery"

function gallerySection({ race_name }) {
  if (race_name === "SRT") {
    return <RenderSRTGallery></RenderSRTGallery>
  } else if (race_name === "SET") {
    return <RenderSETGallery></RenderSETGallery>
  } else {
    return <RenderSRTGallery></RenderSRTGallery>
  }
}

export default gallerySection
