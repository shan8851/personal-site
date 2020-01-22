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
      <p>There is nothing here yet...</p>
      <p>This section will be updated soon.</p>
      <Grid />
      <StyledLink>Go Home</StyledLink>
    </Layout>
  )
}
