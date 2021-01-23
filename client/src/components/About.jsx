import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <div>
      <StyledImg src='https://zc-portfolio.s3-us-west-1.amazonaws.com/profile-photo.jpeg' alt="profile photo" />
    </div>
  )
}

const StyledImg = styled.img`
  display: block;
  width: 90%;
  margin: 75px auto 75px auto;
`;

export default About;
