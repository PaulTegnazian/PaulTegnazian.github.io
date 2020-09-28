import React from 'react'
import { css } from '@emotion/core'
import {
  useStaticQuery,
  Link,
  graphql
} from 'gatsby'
import { rhythm } from '../utils/typography'

export default function Header ({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            # icon # testing, i want to grab the favicon icon or pass my image
          }
        }
      }
    `
  )
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 800px;
        padding: ${rhythm(0)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={'/'}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title} 
        </h3>
      </Link>
      <Link
        to={'/contact/'}
        css={css`
          float: right;
        `}
      >
        Contact
      </Link>
      <Link
        to={'/about/'}
        css={css`
          float: right;
        `}
      >
        About
      </Link>
      <Link
        to={'/blog/'}
        css={css`
          float: right;
        `}
      >
        Blog
      </Link>

      {children}
    </div>
  )
}
