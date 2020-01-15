import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi, my name is Asam.</h1>
    <p>Welcome to my site, glad to have you here.</p>
    <p>
      I am a software developer from the UK, I'm passionate about all things
      JavaScript, expecially React, open source software and am particular fond
      of the Jamstack!
    </p>
    <p>
      This site was built with Gatsby, styled using Styled-Components and hosted
      on Netlify.
    </p>
    <p>
      I like to write a bit, check out my blog{" "}
      <HomeLink to="/blog">HERE</HomeLink>.
    </p>
    <p>
      Want to know more about me? Go <HomeLink to="/about">HERE</HomeLink>.
    </p>
    <p>
      I love connecting with other like minded folk,so if you would like to work
      together, chat or anything else then you can contact me{" "}
      <HomeLink to="/about">HERE</HomeLink>.
    </p>
  </Layout>
)

export default IndexPage

const HomeLink = styled(Link)`
  text-decoration: none;
  font-family: Montserrat;
  font-weight: 900;
  color: #fffff0;
  border-bottom: 4px solid black;
`
