import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { StyledLink } from "../components/shared/StyledLink"
import { StyledA } from "../components/shared/StyledA"

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact Me" />
      <Heading>Contact Me</Heading>
      <p>
        For better or worse I have spent a lot of time on the internet over the
        years. Mainly due to my time in online poker, if you want to here a
        little more about that then head over to my{" "}
        <StyledLink to="about">About</StyledLink> page. Anyway, over the years I
        have built a lot of great relationships online. So, yeah, in other
        words, I love meeting new people, online or in the flesh, so if you
        would like to get in touch then just email me{" "}
        <StyledA href="mailto:asamshan456@gmail.com">HERE.</StyledA>
      </p>
      <p>
        Seriously though, just hit the button and contact me. Be it about
        coding, anything you have read on the blog or anything else. I would be
        happy to shoot the{" "}
        <span role="img" aria-label="poo">
          💩
        </span>
        .
      </p>
    </Layout>
  )
}

const Heading = styled.h1`
  margin-top: 100px;
`
