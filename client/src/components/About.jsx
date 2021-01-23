import React from 'react';
import styled from 'styled-components';

let topbotMargin;
let imgWidth;

const About = ({ width }) => {
  width < 768 ? topbotMargin = '10px' : topbotMargin = '75px';
  width > 425 ? imgWidth = '75%' : imgWidth = '100%';

  return (
    <div>
      <StyledImg src='https://zc-portfolio.s3-us-west-1.amazonaws.com/profile-photo.jpeg' alt="profile photo" />
    </div>
  )
}

const StyledImg = styled.img`
  display: block;
  width: ${() => imgWidth};
  margin: ${() => topbotMargin} auto ${() => topbotMargin} auto;
`;

export default About;
