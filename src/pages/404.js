import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"
const NotFoundPage = () => (
  <Wrapper>
    <SEO title="404: Not found" />
    <Inner>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Inner>
  </Wrapper>
)

export default NotFoundPage

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 1rem;
  position: relative;
  background: linear-gradient(to right, red, purple);
  padding: 25px;
  @media (max-width: 640px) {
    padding: 20px;
  }
`

const Inner = styled.div`
  display: flex;
  background-color: #222;
  min-height: 95vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
