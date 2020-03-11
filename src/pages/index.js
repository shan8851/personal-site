import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <SEO title="Home Page" />

        <Name>asam shan</Name>
        <Links>
          <Linky>
            <ClickLink to="/blog">blog</ClickLink>
          </Linky>
          <Linky>
            <ClickA href="https://twitter.com/shan8851">twitter</ClickA>
          </Linky>
          <Linky>
            <ClickA href="https://www.linkedin.com/in/asamshan/">
              linkedin
            </ClickA>
          </Linky>
          <Linky>
            <ClickA href="mailto:asamshan456@gmail.com">email</ClickA>
          </Linky>
        </Links>
      </div>
    </Layout>
  )
}

export default IndexPage

const Name = styled.h1`
  font-size: 30vw;
  color: white;
  margin-bottom: 0;
  line-height: 0.8;
  font-family: YKBold;
  background: linear-gradient(to right, #2274a5, #fa198b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 708px) {
    font-size: 29vw;
  }
`

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  width: 98%;
  margin: auto;
`

const Linky = styled.h3`
  font-size: 12vw;
  font-family: YKBold;
  color: rgba(255, 255, 255, 0.1);
  @media (max-width: 755px) {
    font-size: 11vw;
  }
`

const ClickLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: rgba(255, 255, 255, 0.4);
  }
`

const ClickA = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: rgba(255, 255, 255, 0.4);
  }
`
