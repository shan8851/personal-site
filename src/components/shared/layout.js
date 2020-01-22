import React from "react"
import PropTypes from "prop-types"
import Header from "../header"
import Footer from "../footer"
import styled from "styled-components"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1260,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          flex: 1,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
