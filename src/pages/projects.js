import React from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/seo"
import { StyledLink, Heading } from "../components/shared/Shared"
import Grid from "../components/portfolio//Grid"

export default function Projects() {
  return (
    <Layout>
      <SEO title="Projects" />

      <Heading>Projects</Heading>
      <p>A collection of things I have been working on past and present</p>
      <Grid />
      <StyledLink>Go Home</StyledLink>
    </Layout>
  )
}
