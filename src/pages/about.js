import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { StyledA } from "../components/shared/StyledA"

export default function About() {
  return (
    <Layout>
      <SEO title="About Me" />
      <Heading>About</Heading>
      <p>Hey! Thanks for stopping by</p>
      <p>
        You either have a hello of a lot of time on your hands or a vaugue
        interest in me...
      </p>
      <p>
        In case you haven't yet figured it out, my name is Asam, I'm a software
        engineer from the UK. I have had a fairy unique (or so I thought) entry
        into the industry. It seems this is more common than I thought, but I
        have no CompSci degree, no degree at all in fact. I came into
        developemnt after almost every job under the sun.
      </p>
      <p>
        Growing up it seemed my Dad had a new business idea every week and after
        I left school I just joined in with whatever venture was going on. So
        over the years I have worked in vehicle leasing, a gym, a takeaway and
        spent most of my time in a relatively large taxi firm. Each business I
        was involved in pretty much all aspcts and roles, which was good and
        bad.
      </p>
      <h2>The Good</h2>
      <p>
        The good side of that was exposing myself to lots of roles, industries
        whicj inevitably meant trying a lot of stuff, picking up a lot of skills
        and dealing with a lot of people.
      </p>
      <p>
        I soon become the tech and marketing guy for all businesses, which is
        where my love for computing and the web was born.
      </p>
      <h2>The Bad</h2>
      <p>
        The negative side was that I never really had time to focus on myself,
        my own education and dreams or whatever. Not that I would change
        anything, but it is worth mentioning
      </p>
      <h2>Poker!</h2>
      <p>
        In my youth I fell in love with some silly card game. Little did I know
        just how much of an impact it would have on my life.
      </p>
      <p>
        I had been playing with friends and my Dad here and there and as soon as
        I hit 18 I went straight to the casino to play. Pretty quickly I
        realised I had some natural intuition and ability at the game and I was
        makign a few quid! From there the next logical step was online poker,
        you could play 24/7 without even leaving the bedrrom. What more could I
        want!?
      </p>
      <p>
        In my early 20s I supported myself from poker for around 2 years and I
        guess I would consider myself a semi professional for a couple of years
        either side of that. I absolutely loved it. I have learnt so much, my
        attitude wowards risk, knowing the value of hard work and my love of
        meeting/connecting with people from all over the world.
      </p>
      <h2>Dev</h2>
      <p>
        Over the years poker got tougher, the game get a little repetitive and
        less interesting and I realised I would need to move on. After
        evaluating my skills, interests and everythign else I ended up enroute
        to being a software developer.
      </p>
      <p>
        So, after some research I got cracking, learning and networking as much
        as I could. After around a year I landed my first job and have never
        looked back.
      </p>
      <p>
        I still miss the working from home, but luckily for me the dev world can
        offer that remote life. I usually work a day or two a week from home at
        the moment and I am definitely looking to increase that as time goes by.
      </p>
      <h2>The End</h2>
      <p>
        Ok, I have rambled on enough, if there is anything else you would like
        to know then shoot me an email{" "}
        <StyledA href="mailto:asamshan456@gmail.com">HERE</StyledA>{" "}
      </p>
    </Layout>
  )
}

const Heading = styled.h1`
  margin-top: 100px;
`
