import React from "react"
import styled from "styled-components"
import { StyledA } from "../shared/Shared.js"
const data = require("./data.json")

export default function Grid() {
  return (
    <GridContainer>
      {data.map(d => (
        <Item>
          <Heading>{d.heading}</Heading>
          <img style={{ height: 200 }} src={require(`./${d.image}`)} />
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
  justify-content: center;
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  justify-content: center;
  align-items: center;
  border: 6px solid black;
  margin: 20px;
  padding: 20px;
  @media (max-width: 1250px) {
    width: 40%;
  }
  @media (max-width: 950px) {
    width: 60%;
  }
  @media (max-width: 750px) {
    width: 80%;
  }
  @media (max-width: 650px) {
    width: 90%;
  }
`

const Heading = styled.h1`
  font-weight: 900;
  font-size: 36px;
  text-align: center;
`

const Tech = styled.p`
  font-weight: 900;
`

const Blurb = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
`

const LinkArea = styled.div`
  display: flex;
  justify-content: space-between;
`
