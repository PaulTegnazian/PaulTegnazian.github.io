/**
 * Configure your Gatsby site with this file.
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = 
{
  siteMetadata: 
  {
    title: 'Paul Tegnazian'
  },
  plugins:
  [
    'gatsby-transformer-remark',
    'gatsby-plugin-emotion',
    // 'gatsby-plugin-react-helmet', not found in node_modules
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
  ]
}
