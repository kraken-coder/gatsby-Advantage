import React from 'react';
import Layout from '../components/Layout/layout';
import SEO from '../components/Layout/seo';
import TopSection from '../components/Layout/TopSection';
import AboutSection from '../components/Layout/AboutSection';
import CardSection from '../components/Layout/CardSection';
import Styled from 'styled-components';
import { device } from '../Util/Utilities';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <div>
      <TopSection />
      <Cards>
        <CardSection />
      </Cards>
      <About>
        <AboutSection />
      </About>
    </div>
  </Layout>
);

const About = Styled.div`  
margin: 0 auto;
max-width: 90%
 @media ${device.laptopS} {
  position:absolute ;
  top:1100px;
  left: 5%
 }

`;

const Cards = Styled.div`  
margin: 0 auto;
max-width: 90%
@media ${device.laptopS} {
  position:absolute ;
  top: 400px;
  left: 5%
 }

`;
export default IndexPage;
