import React from "react"
import styled from "styled-components"
import "../components/layout.css"
import "../../static/fonts/font.css"

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Inner>{children}</Inner>
    </Wrapper>
  )
}

export default Layout

const Wrapper = styled.div`
  display: flex;
  min-height: 96vh;
  background: linear-gradient(to right, #2274a5, #fa198b);
  padding: 25px;
  @media (max-width: 640px) {
    padding: 20px;
  }
`

const Inner = styled.div`
  display: flex;
  background-color: #222;
  flex: 1;
  padding: 5px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
