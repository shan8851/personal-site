import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/shared/layout"
import styled from "styled-components"
import SEO from "../components/seo"
import { Heading, StyledLink } from "../components/shared/Shared"
import Img from "gatsby-image"

export default class BlogList extends React.Component {
  render() {
    //path: i === 0 ? `/blog` : `/blog/${i + 1}`,
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
      currentPage - 1 === 1 ? "/blog" : `/blog/${(currentPage - 1).toString()}`
    const nextPage = `/blog/${(currentPage + 1).toString()}`
    const posts = this.props.data.allMarkdownRemark.edges
    return (
      <Layout>
        <IndexWrapper>
          {console.log("HERE", currentPage)}
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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {!isFirst && (
              <StyledLink to={prevPage} rel="prev">
                ← Previous Page
              </StyledLink>
            )}
            {!isLast && (
              <StyledLink to={nextPage} rel="next">
                Next Page →
              </StyledLink>
            )}
          </div>
        </IndexWrapper>
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
  min-width: 50vw;
`

const Title = styled(Link)`
  color: #000000;
`
