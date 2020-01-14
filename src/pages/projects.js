import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { Link } from "gatsby"

export default function Projects() {
  return (
    <Layout>
      <SEO title="Projects" />
      <div>
        <h1>Coming soon...</h1>
        <StyledLink>Go Home</StyledLink>
      </div>
    </Layout>
  )
}

const StyledLink = styled(Link)`
  color: #fffff0;
  text-decoration: none;
  border-bottom: 4px solid black;
  font-weight: 900;
`
