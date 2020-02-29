import styled from "styled-components"
import { Link } from "gatsby"

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: bold;
  font-weight: 900;
  color: #33b284;
  border-bottom: 4px solid black;
`
export const StyledA = styled.a`
  text-decoration: none;
  font-family: bold;
  font-weight: 900;
  color: #33b284;
  border-bottom: 4px solid black;
`
export const Heading = styled.h1`
  margin-top: 100px;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1.45rem;
`

export const NarrowPage = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  flex: 1;
`
