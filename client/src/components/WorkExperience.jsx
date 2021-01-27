import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import SectionHeader from './SectionHeader.jsx';

const WorkExperience = () => {
  return (
    <StyledWrap>
      <a id="workexp" />
      <SectionHeader text="work experience" />
      <div className="workexp-container">
        <div className="job-container">
          <ul className="job-title">Product Development Engineer
            <li className="dates">2016-2020</li>
            <li className="company">Ford Motor Company - eDrive Applications</li>
          </ul>
        </div>
        <div className="job-container">
          <ul className="job-title">Process Engineer
            <li className="dates">2013-2016</li>
            <li className="company">Ford Motor Company - KCAP Transit Body</li>
          </ul>
        </div>
      </div>
        <div className="dl-container">
          <div className="dl-button">
            <a className="dl-link" href="https://zc-portfolio.s3-us-west-1.amazonaws.com/Zach-Chan_Resume.pdf" download="zach-chan_resume">
              <FontAwesomeIcon className="dl-icon" icon={faDownload} />
              download resume
            </a>
          </div>
        </div>
    </StyledWrap>
  )
}

const StyledWrap = styled.div`
  border-bottom: 2px solid #dfd4bf;
  & #workexp {
    position: relative;
    top: -160px;
    visibility: hidden;
    @media (max-width: 768px) {
      top: -102px;
    }
    @media (max-width: 425px) {
      top: -58px;
    }
  }
  & ul {
    padding-inline-start: 0;
  }
  & .workexp-container {
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
      display: block;
    }
  }
  & .job-container {
    display: flex;
    justify-content: center;
  }
  & .job-title {
    font-family: 'Work Sans', sans-serif;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.5rem;
    color: #312f2b;
    margin: 1rem 2rem;
    padding: 0 2rem;
    @media (max-width: 425px) {
      font-size: 1rem;
      padding: 0;
    }
  }
  & .dates {
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    color: #cf8a0c;
    list-style-type: none;
    @media (max-width: 425px) {
      font-size: 0.875rem;
    }
  }
  & .company {
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    list-style-type: none;
    @media (max-width: 425px) {
      font-size: 0.875rem;
    }
  }
  & .dl-container {
    text-align: center;
  }
  & .dl-button {
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
  }
  & .dl-link {
    text-decoration: none;
    text-transform: uppercase;
    color: #fff;
    &:hover {
      color: #fff;
      text-decoration: none;
    }
  }
  & .dl-icon {
    color: #fff;
    font-size: 1rem;
    margin-right: 0.5rem;
  }
`;

export default WorkExperience;
