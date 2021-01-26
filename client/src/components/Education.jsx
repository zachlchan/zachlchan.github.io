import React from 'react';
import styled from 'styled-components';
import SectionHeader from './SectionHeader.jsx';

let schoolFontSize;
let liFontSize;

const Education = ({ width }) => {
  width < 426 ? schoolFontSize = '1rem' : schoolFontSize = '1.25rem';
  width < 426 ? liFontSize = '.875rem' : liFontSize = '1rem';

  return (
    <div id="education">
      <SectionHeader text="education" />
      <StyledSection>
        <StyledUl>Hack Reactor, San Francisco, California
          <Date>2021</Date>
          <Description>Advanced Software Engineering Immersive</Description>
        </StyledUl>
        <StyledUl>University of California, Los Angeles
          <Date>2016</Date>
          <Description>Master of Science, Mechanical Engineering</Description>
        </StyledUl>
        <StyledUl>The University of Texas at Austin
          <Date>2012</Date>
          <Description>Bachelor of Science, Mechanical Engineering</Description>
        </StyledUl>
      </StyledSection>
    </div>
  )
}

const StyledSection = styled.section`
  border-top: 2px solid #dfd4bf;
  border-bottom: 2px solid #dfd4bf;
`;
const StyledUl = styled.ul`
  font-family: 'Work Sans', sans-serif;
  font-size: ${() => schoolFontSize};
  font-weight: 500;
  line-height: 1.5rem;
  color: #312f2b;
  margin-bottom: 2rem;
`;
const Date = styled.li`
  font-family: 'Montserrat', sans-serif;
  font-size: ${() => liFontSize};
  color: #cf8a0c;
  list-style-type: none;
`;
const Description = styled.li`
  font-family: 'Montserrat', sans-serif;
  font-size: ${() => liFontSize};
  list-style-type: none;
`;

export default Education;