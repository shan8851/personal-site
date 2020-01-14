import React from "react"
import styled from "styled-components"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaDev } from "react-icons/fa"

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterIcon href="https://www.instagram.com/samshan8/">
        <FaInstagram size={40} />
      </FooterIcon>
      <FooterIcon href="https://dev.to/shan5742">
        <FaDev size={40} />
      </FooterIcon>
      <FooterIcon href="https://twitter.com/shan8851">
        <FaTwitter size={40} />
      </FooterIcon>
      <FooterIcon href="https://github.com/shan5742">
        <FaGithub size={40} />
      </FooterIcon>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`

const FooterIcon = styled.a`
  margin: 0 10px;
  color: #000000;
`
