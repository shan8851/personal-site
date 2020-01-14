import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "../images/code.png"
export default function Header() {
  return (
    <Nav>
      <div>
        <Link to="/">
          <NavLogo src={Logo} />
        </Link>
      </div>
      <div>
        <NavLink activeStyle={activeStyles} to="/">
          Home
        </NavLink>
        <NavLink activeStyle={activeStyles} to="/blog">
          Blog
        </NavLink>
        <NavLink activeStyle={activeStyles} to="/about">
          About
        </NavLink>
        <NavLink activeStyle={activeStyles} to="/contact">
          Contact
        </NavLink>
        <NavLink activeStyle={activeStyles} to="/uses">
          Uses
        </NavLink>
        <NavLink activeStyle={activeStyles} to="/projects">
          Projects
        </NavLink>
      </div>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  margin: 20px 20px;
  justify-content: space-between;
  align-items: center;
`

const NavLink = styled(props => <Link {...props} />)`
  font-family: Montserrat;
  font-weight: 800;
  margin: 0 10px;
  text-decoration: none;
  color: #000000;
  & :active {
    color: #fff;
  }
  & :hover {
    color: #fff;
  }
`

//active styles
const activeStyles = {
  color: "#fffff0",
  borderBottom: "4px solid black",
}

const NavLogo = styled.img`
  height: 10vh;
  margin: 0;
`
