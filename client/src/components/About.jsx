import React from 'react';
import styled from 'styled-components';
import SectionHeader from './SectionHeader.jsx';
import SectionParagraph from './SectionParagraph.jsx';

let topbotMargin;
let imgWidth;

const About = ({ width }) => {
  width < 768 ? topbotMargin = '10px' : topbotMargin = '50px';
  width > 425 ? imgWidth = '75%' : imgWidth = '100%';

  return (
    <div id="about">
      <StyledImg src="https://zc-portfolio.s3-us-west-1.amazonaws.com/profile-photo.jpeg" alt="profile photo" />
      <SectionHeader text="about" />
      <StyledSection>
        <SectionParagraph text={aboutText} width={width} />
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
  width: ${() => imgWidth};
  margin: ${() => topbotMargin} auto ${() => topbotMargin} auto;
`;

export default About;
