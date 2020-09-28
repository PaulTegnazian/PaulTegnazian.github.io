import React from "react"
import { graphql } from "gatsby"
import BlogLink from "../components/blog-link"
import Layout from '../components/layout'

const BlogPosts = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <BlogLink key={edge.node.id} post={edge.node} />)
  return (
  <Layout>
    <div>
      {posts}
    </div>
  </Layout>
  )
}

export default BlogPosts

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            author
            slug
            title
            date
            description
          }
        }
      }
    }
  }
`