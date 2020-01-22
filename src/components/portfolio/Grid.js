import React from "react"
import styled from "styled-components"
import { StyledA } from "../shared/Shared.js"
const data = require("./data.json")
export default function Grid() {
  return (
    <GridContainer>
      {data.map(d => (
        <Item>
          <h2>{d.heading}</h2>
          <img src="https://picsum.photos/200" />
          <Blurb>{d.blurb}</Blurb>
          <Tech>{d.tech}</Tech>
          <LinkArea>
            <StyledA style={{ margin: "0 10px" }} href={d.repo}>
              Repo
            </StyledA>
            <StyledA style={{ margin: "0 10px" }} href={d.demo}>
              Demo
            </StyledA>
          </LinkArea>
        </Item>
      ))}
    </GridContainer>
  )
}

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 6px solid black;
  margin: 20px;
  padding: 20px;
`

const Tech = styled.p`
  font-weight: 900;
`

const Blurb = styled.p`
  font-weight: 700;
`

const LinkArea = styled.div`
  display: flex;
  justify-content: space-between;
`
