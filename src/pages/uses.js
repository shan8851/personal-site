import React from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/seo"
import { StyledLink, Heading } from "../components/shared/Shared"

export default function Uses() {
  return (
    <Layout>
      <SEO title="Uses" />
      <Heading>Uses</Heading>
      <p>
        Seems all the cool kids have a uses page these days, so I figured I
        would join the club, I'll hopefully get to add to this list on a regular
        basis as I aquire more bits and pieces :)
      </p>
      <h3>
        {" "}
        <span role="img" aria-label="office">
          🏢
        </span>
        Work
      </h3>
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
      <h3>
        {" "}
        <span role="img" aria-label="home">
          🏠
        </span>
        Home Office
      </h3>
      <p>
        For now my home office is the kitchen table{" "}
        <span role="img" aria-label="smiley">
          🤣
        </span>
        , but this is about to change, a dedicated home office is in the works
        and I have my eye on many a gadget to pimp it out. Remote working is
        somethign I fully support, so I intend to do a good job of the home
        office.
      </p>
      <p>
        It will likely conists of a standing desk, some art work, desk fan,
        plant and a whatever else takes my fancy, hopefully next time you visit
        I will have some pics.
      </p>
      <h3>
        <span role="img" aria-label="dev">
          👨🏼‍💻
        </span>{" "}
        Software
      </h3>
      <ul>
        <li>VS Code</li>
        <li>ZSH</li>
        <li>Hyper</li>
        <li>Alfred</li>
        <li>Google Chrome</li>
        <li>
          Dotfiles? <StyledLink>HERE</StyledLink>
        </li>
      </ul>
      <h3>
        <span role="img" aria-label="headphones">
          🎧
        </span>{" "}
        Electronics
      </h3>
      <ul>
        <li>iPhone XR</li>
        <li>Apple Watch</li>
        <li>AKG Y-50 Headphones</li>
      </ul>
    </Layout>
  )
}
