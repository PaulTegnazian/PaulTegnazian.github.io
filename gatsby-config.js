/**
 * Configure your Gatsby site with this file.
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = 
{
  siteMetadata: 
  {
    title: 'Paul Tegnazian'
    description: 'A site dedicated to Paul Tegnazian\'s musings.'
    author: 'Paul Tegnazian'
  },
  plugins:
  [
    {
      resolve: 'gatsby-plugin-typography',
      options:
      {
        pathToConfigModule: 'src/utils/typography'
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: 
      {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: 
      {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#5e565e`,
        theme_color: `#5e565e`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-emotion',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
  ]
}
