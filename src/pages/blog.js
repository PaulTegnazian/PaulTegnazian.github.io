import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default function Blog ({ data }) {
  return (
    <Layout>
      <h1>{data.site.siteMetadata.title}'s Blog</h1>
      <p>
        Placeholder text here!
      </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
