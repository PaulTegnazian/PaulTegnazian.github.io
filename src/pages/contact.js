import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default function Contact ({ data }) {
  return (
    <Layout>
      <h1>Contact {data.site.siteMetadata.title}</h1>
      <p>
        Reach out to me at tegnazianpaul@gmail.
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
