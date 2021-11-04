require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Western Ghat Running Foundation`,
    description: `Western Ghat Running Foundation. Host of Epic Trails and SRT Ultra Marathons on Sinhagad.`,
    author: `Dhruvaj Patil`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 90,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Western Ghat Running Foundation`,
        short_name: `WGRF Website`,
        start_url: `/`,
        background_color: `#ff7917`,
        theme_color: `#ff7917`,
        display: `minimal-ui`,
        icon: `src/images/wgrf-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
