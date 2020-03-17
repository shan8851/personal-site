import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo"
import Img from "gatsby-image"
import Layout from "../components/layout"

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
        <HomeLink style={{ marginTop: 10 }}>Go Home</HomeLink>
        <IndexWrapper>
          <Heading>All Posts</Heading>

          {posts.map(({ node }) => {
            const title = node.frontmatter.title
            return (
              <div key={node.frontmatter.title}>
                <div>
                  <Title to={node.frontmatter.path}>{title}</Title>
                  <Date>
                    {node.frontmatter.date}, {node.fields.readingTime.text}
                  </Date>

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
                  <Excerpt
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
        <HomeLink style={{ marginBottom: 10 }}>Go Home</HomeLink>
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
          fields {
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`
const IndexWrapper = styled.div`
  padding: 50px;
`
const Heading = styled.h1`
  font-size: 6rem;
  margin-bottom: 0;
`

const HomeLink = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-family: YKBold;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
`
const Title = styled(Link)`
  color: rgba(255, 255, 255, 0.4);
  font-family: YKBold;
  font-size: 4rem;
`

const Date = styled.p`
  font-family: YKReg;
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.4);
  margin: 1rem 0;
`

const Excerpt = styled.p`
  font-family: YKReg;
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
`
