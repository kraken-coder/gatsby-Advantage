import React from "react"
import img from "../../images/workPlace-sm.jpg"
import { device } from "../../Util/Utilities"

import Styled from "styled-components"
// components

const TopSection = () => {
  return (
    <div>
      <SectionText>
        <Headline>Hello world</Headline>
        <Paragraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
          beatae?
        </Paragraph>
      </SectionText>
    </div>
  )
}

// Styled components

const SectionText = Styled.div`
background: url(${img});
background-size: cover ;
height:30vh;
@media ${device.tablet} {
  height:60vh;
  }

`
const Headline = Styled.h1.attrs({ className: "text-left, text-white" })`
padding-left:20px ;

@media ${device.tablet} {
    display: block;
}
`

const Paragraph = Styled.p.attrs({ className: "text-left, lead, text-white" })`
padding-left:20px;
display: none;
@media ${device.tablet} {
  display: block;
}
`
export default TopSection
