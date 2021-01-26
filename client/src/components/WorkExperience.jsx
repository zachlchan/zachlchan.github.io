import React from 'react';
import styled from 'styled-components';
import SectionHeader from './SectionHeader.jsx';

let ulFontSize;
let liFontSize;

const WorkExperience = ({ width }) => {
  width < 426 ? ulFontSize = '1rem' : ulFontSize = '1.25rem';
  width < 426 ? liFontSize = '.875rem' : liFontSize = '1rem';

  return (
    <div id="workexp">
      <SectionHeader text="work experience" />
      <StyledSection>
        <StyledUl>Product Development Engineer
          <Date>2016-2020</Date>
          <Description>Ford Motor Company - eDrive Applications</Description>
        </StyledUl>
        <StyledUl>Process Engineer
          <Date>2013-2016</Date>
          <Description>Ford Motor Company - KCAP Transit Body</Description>
        </StyledUl>
      </StyledSection>
    </div>
  )
}

const StyledSection = styled.section`
  // border-top: 2px solid #dfd4bf;
  border-bottom: 2px solid #dfd4bf;
`;
const StyledUl = styled.ul`
  font-family: 'Work Sans', sans-serif;
  font-size: ${() => ulFontSize};
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

export default WorkExperience;
