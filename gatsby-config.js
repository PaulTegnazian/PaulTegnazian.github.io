/**
 * Configure your Gatsby site with this file.
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = 
{
  siteMetadata: 
  {
    title: 'Paul Tegnazian',
    description: 'The blog of Paul Tegnazian, a civil engineer',
    author: 'Paul Tegnazian',
  },
  plugins:
  [  
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-emotion',
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-plugin-typography',
      options:
      {
        pathToConfigModule: 'src/utils/typography'
      },
    },
    {
      resolve: `gatsby-source-filesystem`, // ?
      options: 
      {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`, //markdown-posts
      options: 
      {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: 
      {
        name: `Paul Tegnazian`,
        short_name: `PTegnazian`,
        start_url: `/`,
        background_color: `#5e565e`, //figure out the proper colors
        theme_color: `#5e565e`, //figure out proper theme colors
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `minimal-ui`,
        icon: `static/icon.svg`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ]
}
