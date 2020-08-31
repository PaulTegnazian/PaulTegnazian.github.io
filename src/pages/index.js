import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import '../global.css'

export default function Home () {
  return (
    <Layout>
      <Header headerText="Hello,  My Name is Paul Tegnazian" />
      <p>
        This is my first website using Gatsby. Please excuse the appearance as the page is under construction.
      </p>
      <p>
        A cleaner version can be found&nbsp;
        <a
          href="https://www.notion.so/paultegnazian/Paul-Tegnazian-s-Musings-af2ee005be83467b80ef192ecbcc4674"
        >here
        </a>, on my Notion.so site.
      </p>
      <p>
        Learn&nbsp;
        <a
          href="https://www.notion.so/paultegnazian/About-Paul-Tegnazian-f707ac725ac64f1e88b622547b0012e6"
        >About Me
        </a>.
      </p>
    </Layout>
  )
}
