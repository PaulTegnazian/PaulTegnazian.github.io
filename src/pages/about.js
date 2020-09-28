import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/header'

export default function About ({ data }) {
  return (
    <Header>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        I'm a licensed professional engineer with a civil engineering background. Learning to build a website by programming it myself.
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
