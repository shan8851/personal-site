import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout.js"
import styled from "styled-components"
import Img from "gatsby-image"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html, fields } = markdownRemark

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <BlogPostWrapper>
        <Heading style={{ marginBottom: 0 }}>{frontmatter.title}</Heading>
        <Date>{frontmatter.date}</Date>
        <Date>{fields.readingTime.text}</Date>
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
          style={{ margin: "50px 0" }}
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <BackLink to="/blog/">← Back to index</BackLink>
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
  margin: 50px 50px;
`

const Heading = styled.h1`
  font-size: 6rem;
  margin-bottom: 0;
  font-family: YKBold;
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const BackLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-family: YKBold;
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Date = styled.p`
  font-family: YKBold;
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.4);
`
