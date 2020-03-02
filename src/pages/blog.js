import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/shared/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { Heading } from "../components/shared/Shared"
import Img from "gatsby-image"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.title} title={siteTitle}>
        <SEO title="Blog" />
        <IndexWrapper>
          <Heading>All Posts</Heading>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title
            return (
              <div key={node.frontmatter.title}>
                <div>
                  <h3>
                    <Title to={node.frontmatter.path}>{title}</Title>
                  </h3>
                  <p style={{ fontWeight: 700 }}>{node.frontmatter.date}</p>
                  {node.frontmatter.featuredImage && (
                    <Img
                      style={{ width: 400, marginBottom: 10 }}
                      fluid={
                        node.frontmatter.featuredImage.childImageSharp.fluid
                      }
                    />
                  )}
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.excerpt,
                    }}
                  />
                </div>
              </div>
            )
          })}
        </IndexWrapper>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            path
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
const IndexWrapper = styled.div`
  margin: 50px 0;
`

const Title = styled(Link)`
  color: #000000;
`
