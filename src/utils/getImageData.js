import { getImageData } from "gatsby-plugin-image"

export function getImages({ image, ...props }) {
  return getImageData({
    baseUrl: image.url,
    sourceWidth: image.width,
    sourceHeight: image.height,
    urlBuilder,
    pluginName: "gatsby-source-example",
    // If your host supports auto-format/content negotiation, pass this as the formats array
    formats: ["auto"],
    ...props,
  })
}