import React from 'react';
import styled from 'styled-components';
import SectionHeader from './SectionHeader.jsx';
import SectionParagraph from './SectionParagraph.jsx';


const About = () => {
  return (
    <div>
      <a id="about" style={{position: 'relative', top: '-192px', visibility: 'hidden'}} />
      <StyledImg src="https://zc-portfolio.s3-us-west-1.amazonaws.com/profile-photo.jpeg" alt="profile photo" />
      <SectionHeader text="about" />
      <StyledSection>
        <SectionParagraph text={aboutText} />
      </StyledSection>
    </div>
  )
}

const aboutText = 'I am a full stack software engineer with a passion for hands-on problem solving and great design. With my background in mechanical engineering I excel at navigating complex systems and thrive in fast-paced, demanding environments.';

const StyledSection = styled.section`
  background-color: #dfd4bf;
  color: #312f2b;
  padding: 2rem;
`;
const StyledImg = styled.img`
  display: block;
  width: 75%;
  margin: 0 auto 50px auto;
  @media (max-width: 768px) {
    margin: 10px auto 10px auto;
  }
  @media (max-width: 425px) {
    width: 100%
  }
`;

export default About;
