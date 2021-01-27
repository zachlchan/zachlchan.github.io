import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import SectionHeader from './SectionHeader.jsx';

const WorkExperience = () => {
  return (
    <div>
      <a id="workexp" style={{position: 'relative', top: '-160px', visibility: 'hidden'}} />
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
        <StyledDiv>
          <DownloadDiv>
            <StyledA href="https://zc-portfolio.s3-us-west-1.amazonaws.com/Zach-Chan_Resume.pdf" download="zach-chan_resume">
              <StyledIcon icon={faDownload} />
              download resume
            </StyledA>
          </DownloadDiv>
        </StyledDiv>
      </StyledSection>
    </div>
  )
}

const StyledSection = styled.section`
  border-bottom: 2px solid #dfd4bf;
`;
const StyledUl = styled.ul`
  font-family: 'Work Sans', sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  // display: inline-block;
  line-height: 1.5rem;
  color: #312f2b;
  margin-bottom: 2rem;
  @media (max-width: 425px) {
    font-size: 1rem;
  }
`;
const Date = styled.li`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  color: #cf8a0c;
  list-style-type: none;
  @media (max-width: 425px) {
    font-size: 0.875rem;
  }
`;
const Description = styled.li`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  list-style-type: none;
  @media (max-width: 425px) {
    font-size: 0.875rem;
  }
`;
const StyledDiv = styled.div`
  text-align: center;
`;
const DownloadDiv = styled.div`
  font-family: 'Work Sans', sans-serif;
  display: inline-block;
  background-color: #cf8a0c;
  border-radius: 3px;
  padding: 0.5rem;
  margin: 1rem;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;
const StyledA = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  &:hover {
    color: #fff;
    text-decoration: none;
  }
`;
const StyledIcon = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 1rem;
  margin-right: 0.5rem;
`;

export default WorkExperience;
