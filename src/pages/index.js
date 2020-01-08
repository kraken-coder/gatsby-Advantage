import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/Layout/seo"
import TopSection from "../components/Layout/TopSection"
import Section_2 from "../components/Layout/Section_2"
import Styled from 'styled-components'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <TopSection />
     <Container>
       <Section_2 />
     </Container>
    </div>
  </Layout>
)


const  Container = Styled.div`  
margin: 0 auto;
max-width: 90%

`
export default IndexPage
