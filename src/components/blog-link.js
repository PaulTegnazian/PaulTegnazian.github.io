import React from "react"
import { Link } from "gatsby"

const BlogLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.slug}>
      {post.frontmatter.title} 
    </Link>
    <p>Published: {post.frontmatter.date}</p>
    <p>{post.frontmatter.description}</p> 
  </div>
)

export default BlogLink