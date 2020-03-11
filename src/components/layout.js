import React from "react"
import styled from "styled-components"
import "../components/layout.css"
import "../../static/fonts/font.css"

const Layout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default Layout

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #222;
  min-height: 100vh;
  min-width: 100vw;
`
