/**
 * Configure your Gatsby site with this file.
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = 
{
  siteMetadata: 
  {
    title: 'Paul Tegnazian',
    description: 'A civil engineer blogging about life.',
    author: 'Paul Tegnazian',
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
        name: `Paul Tegnazian`,
        short_name: `Paul Tegnazian`,
        start_url: `/`,
        background_color: `#5e565e`,
        theme_color: `#5e565e`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `minimal-ui`,
        icon: `static/icon.svg`, // This path is relative to the root of the site.
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-emotion',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
  ]
}
