import React from 'react';
import Styled from 'styled-components';
import {device} from '../../Util/Utilities'

const Footer = () => {
  return (
    <FooterContainer>
      <footer className='bg-secondary py-4 text-white text-center'>
        © {new Date().getFullYear()}, By Siradji Awoual
        {''} Built with Gatsby
      </footer>
    </FooterContainer>
  );
};

const FooterContainer = Styled.div`
@media ${device.laptopS} {
  position: absolute;
top: 1850px;
width:100% ;

}

`;
export default Footer;
