import React from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/seo"
import { StyledLink, Heading, Row } from "../components/shared/Shared"
import Bald from "../images/BaldPeep.svg"
import { FaPenAlt, FaInfo, FaRocketchat } from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading>Hi, my name is Asam.</Heading>
    <div style={{ display: "flex" }}>
      <img src={Bald} />
      <div>
        <p>Welcome to my site, glad to have you here.</p>
        <p>
          I am a software developer from the UK, I'm passionate about all things
          JavaScript, expecially React, open source software and am particularly
          fond of the Jamstack!
        </p>
        <p>
          This site was built with Gatsby, styled using Styled-Components and
          hosted on Netlify.
        </p>
      </div>
    </div>
    <Row>
      <FaPenAlt color="#33B284" size={40} />

      <p style={{ marginBottom: 0, marginLeft: 15 }}>
        I love to ramble, check out my blog
        <StyledLink to="/blog"> HERE</StyledLink>.
      </p>
    </Row>
    <Row>
      <FaInfo color="#33B284" size={40} />

      <p style={{ marginBottom: 0, marginLeft: 15 }}>
        Want to know more about me? Go
        <StyledLink to="/about"> HERE</StyledLink>.
      </p>
    </Row>
    <Row>
      <FaRocketchat color="#33B284" size={40} />

      <p style={{ marginBottom: 0, marginLeft: 15 }}>
        It's good to talk, so if you would like to work together, chat or
        anything else then you can contact me
        <StyledLink to="/contact"> HERE</StyledLink>.
      </p>
    </Row>
  </Layout>
)

export default IndexPage
