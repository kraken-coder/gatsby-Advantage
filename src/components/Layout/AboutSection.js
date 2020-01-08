import React from 'react';
// importing Styled components
import Styled from 'styled-components';
import About from '../Img/AboutImg';
import { device } from '../../Util/Utilities';

const AboutSection = () => {
  return (
    <SectionContainer>
      <About className='mb-4' />
      <div className='container mt-4'>
        <h2 className='text-center mb-4'>About</h2>
        <p className='lead'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam,
          nemo numquam. Temporibus vitae iure veniam, aut pariatur illo impedit.
          Beatae eveniet laborum iusto. Assumenda nihil unde maiores ab. Amet,
          iure. Nulla hic alias iure ad. Maxime quod earum accusamus sit!
        </p>
      </div>
    </SectionContainer>
  );
};

const SectionContainer = Styled.div.attrs({ className: 'bg-grey' })`

padding: 10px 15px;
  @media ${device.laptopS} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  },

 
`;

export default AboutSection;
