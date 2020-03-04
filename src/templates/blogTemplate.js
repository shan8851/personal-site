import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/shared/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Img from "gatsby-image"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html, fields } = markdownRemark

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <BlogPostWrapper>
        <h1 style={{ marginBottom: 0 }}>{frontmatter.title}</h1>
        <p style={{ marginBottom: 10 }}>{fields.readingTime.text}</p>
        <Date>{frontmatter.date}</Date>
        {frontmatter.featuredImage && (
          <Img
            style={{
              maxHeight: 300,
              maxWidth: 600,
              margin: "auto",
              marginBottom: 30,
            }}
            fluid={frontmatter.featuredImage.childImageSharp.fluid}
          />
        )}
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <BackLink to="/blog/">Back to index</BackLink>
      </BlogPostWrapper>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD, MM, YYYY")
        path
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
const BlogPostWrapper = styled.div`
  margin: 50px 0;
`

const BackLink = styled(Link)`
  color: #33b284;
  text-decoration: none;
  font-family: bold;
  font-size: 1.2rem;
  border-bottom: 4px solid black;
`

const Date = styled.p`
  font-family: bold;
  font-size: 1.4rem;
  color: #33b284;
`
