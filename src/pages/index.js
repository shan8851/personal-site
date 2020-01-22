import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StyledLink } from "../components/shared/StyledLink"

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
      <StyledLink to="/blog">HERE</StyledLink>.
    </p>
    <p>
      Want to know more about me? Go <StyledLink to="/about">HERE</StyledLink>.
    </p>
    <p>
      I love connecting with other like minded folk,so if you would like to work
      together, chat or anything else then you can contact me{" "}
      <StyledLink to="/about">HERE</StyledLink>.
    </p>
  </Layout>
)

export default IndexPage
