import React from 'react'
import { css } from '@emotion/core'
import {
  useStaticQuery,
  Link,
  graphql
} from 'gatsby'
import { rhythm } from '../utils/typography'
import styled from "styled-components"
import logo from "../../static/icon.svg"

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
  const Container = styled.div`
    margin: 0rem auto;
    max-width: 800px;
    padding: ${rhythm(-2)};
    padding-top: ${rhythm(1.5)};
    background: #303437;
  `
  const Logo = styled.img`
  `
  const LinkToIndex = props => (
    <>
      <Link to='/'>
        <Logo 
          src={logo}
          style={{
            margin: 0,
            height: 36
          }}
        />
        {/* <Logo src={props.logo} alt={data.site.siteMetadata.title} /> */}
      </Link>
    </>
)
  return (
    <Container>
      <LinkToIndex/>
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
    </Container>
  )
}
