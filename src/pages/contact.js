import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/header'

export default function Contact ({ data }) {
  return (
    <Header>
      <h1>Contact {data.site.siteMetadata.title}</h1>
      <p>
        Reach out to me at tegnazianpaul@gmail.
      </p>
    </Header>
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
