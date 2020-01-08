import React from "react"
import Card from "../Card"
import img1 from '../../images/img-cap1.jpg'
import img2 from '../../images/img-cap2.jpg'
import img3 from '../../images/img-cap3.jpg'
import Styled from "styled-components"
import { device } from "../../Util/Utilities"




const Section_2 = () => {
  return (
    <CardContainer>
          <Card img={img1} title='Oppotunities' text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, voluptates.' btnText='Read More' url='/about'/>
      <Card img={img2} title='Growth' text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, voluptates.' btnText='Read More' url='/about'/>
      <Card img={img3} title='Profits' text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, voluptates.' btnText='Read More' url='/about' />
    </CardContainer>
  )
}


const CardContainer = Styled.div`
display: grid;
@media ${device.tablet} {
   
    grid-template-columns: 1fr 1fr 1fr;
   
    grid-gap:10px;

}
@media ${device.mobileS} {
    
    grid-template-columns: 1fr;
    grid-gap:10px;
    
}
`
export default Section_2
