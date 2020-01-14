import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <BlogPostWrapper>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.date}</p>
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
      }
    }
  }
`
const BlogPostWrapper = styled.div`
  margin: 50px 0;
`

const BackLink = styled(Link)`
  color: #fffff0;
  text-decoration: none;
  font-weight: 900;
  border-bottom: 4px solid black;
`
