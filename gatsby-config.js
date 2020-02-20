module.exports = {
  siteMetadata: {
    title: `#100DaysOfGatsby`,
    description: '#100DaysOfGatsby is a challenge in which you have to complete 100 tasks related to GatbyJS',
    author: 'Pedro Féo',
    siteUrl: 'https://feo-100daysofgatsby.surge.sh/'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `100DaysOfGatsbyFeo`,
        short_name: `GatsbyDays`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        display: `standalone`,
        icon: `src/assets/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}