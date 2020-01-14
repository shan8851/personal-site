import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { Link } from "gatsby"

export default function Uses() {
  return (
    <Layout>
      <SEO title="Uses" />
      <h1>Uses:</h1>
      <p>
        Seems all the cool kids have a uses page these days, so I figured I
        would join the club, I'll hopefully get to add to this list on a regular
        basis as I aquire more bits and pieces :)
      </p>
      <h3>🏢 Work</h3>
      <p>
        At work we have some pretty solid desks, some sweet chairs, that are a
        little too hot in the summer and 2x 28" Samsung monitors sat beside teh
        MacBook Pro
      </p>
      <p>
        My boss was kind enough to provide me with a Griffin laptop stand, a
        magic mouse and apple keyboard, but hopefully I can upgrade to a
        mechanical keyboard at some point to see what all the fuss is about.
      </p>
      <h3>🏠 Home Office</h3>
      <p>
        For now my home office is the kitchen table 🤣, but this is about to
        change, a dedicated home office is in the works and I have my eye on
        many a gadget to pimp it out. Remote working is somethign I fully
        support, so I intend to do a good job of the home office.
      </p>
      <p>
        It will likely conists of a standing desk, some art work, desk fan,
        plant and a whatever else takes my fancy, hopefully next time you visit
        I will have some pics.
      </p>
      <h3>👨🏼‍💻 Software</h3>
      <ul>
        <li>VS Code</li>
        <li>ZSH</li>
        <li>Hyper</li>
        <li>Alfred</li>
        <li>Google Chrome</li>
        <li>
          Dotfiles? <UsesLink>HERE</UsesLink>
        </li>
      </ul>
      <h3>🎧 Electronics</h3>
      <ul>
        <li>iPhone XR</li>
        <li>Apple Watch</li>
        <li>AKG Y-50 Headphones</li>
      </ul>
    </Layout>
  )
}

const UsesLink = styled(Link)`
  color: #fffff0;
  border-bottom: 4px solid black;
  text-decoration: none;
  font-weight: 900;
`
