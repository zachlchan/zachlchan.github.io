import React from 'react';
import styled from 'styled-components';
import SectionHeader from './SectionHeader.jsx';

const Skills = () => {
  return (
    <StyledWrap>
      <a id="skills" />
      <SectionHeader text="skills" />
      <div className="lang-container">
        <ul className="skill-type">Programming Languages
          <li>JavaScript</li>
        </ul>
      </div>
      <div className="flex-grid">
        <div className="front-container">
          <ul className="skill-type">Front End
            <li>JavaScript</li>
            <li>React</li>
            <li>React Native</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>jQuery</li>
            <li>webpack</li>
          </ul>
        </div>
        <div className="back-container">
          <ul className="skill-type">Back End
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>PostgresQL</li>
            <li>MySQL</li>
          </ul>
        </div>
      </div>
    </StyledWrap>
  )
}

const StyledWrap = styled.div`
  border-bottom: 1px solid #dfd4bf;
  & #skills {
    position: relative;
    top: -160px;
    visibility: hidden;
    @media (max-width: 768px) {
      top: -82px;
    }
    @media (max-width: 425px) {
      top: -58px;
    }
  }
  & ul {
    padding-inline-start: 0;
  }
  & .skill-type {
    font-family: 'Work Sans', sans-serif;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.5rem;
    color: #312f2b;
    margin-bottom: 2rem;
    @media (max-width: 425px) {
      font-size: 1rem;
    }
  }
  & .skill-type > li {
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    list-style-type: none;
    @media (max-width: 425px) {
      font-size: 0.875rem;
    }
  }
  & .flex-grid {
    display: flex;
    align-items: start;
    justify-items: center;
    max-width: 768px;
    margin: 0 auto;
  }
  & .lang-container {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 20px;
  }
  & .front-container {
    flex: 1;
    display: flex;
    justify-content: center;
  }
  & .back-container {
    flex: 1;
    display: flex;
    justify-content: center;
  }
`;

export default Skills;