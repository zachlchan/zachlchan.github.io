import React from 'react';
import styled from 'styled-components';
import SectionHeader from './SectionHeader.jsx';

const Education = () => {
  return (
    <StyledWrap id="education">
      <SectionHeader text="education" />
      <div className="schools-container">
        <div>
          <ul className="school">
            Hack Reactor, San Francisco, California
            <li className="degree">
              Advanced Software Engineering Immersive
            </li>
            <li className="date">2021</li>
          </ul>
          <ul className="school">
            University of California, Los Angeles
            <li className="degree">
              Master of Science, Mechanical Engineering
            </li>
            <li className="date">2016</li>
          </ul>
          <ul className="school">
            The University of Texas at Austin
            <li className="degree">
              Bachelor of Science, Mechanical Engineering
            </li>
            <li className="date">2012</li>
          </ul>
        </div>
      </div>
    </StyledWrap>
  )
}

const StyledWrap = styled.div`
  border-bottom: 2px solid #dfd4bf;
  & ul {
    padding-inline-start: 0;
  }
  & .schools-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  & .school {
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
  & .date {
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    color: #cf8a0c;
    list-style-type: none;
    @media (max-width: 425px) {
      font-size: 0.875rem;
    }
  }
  & .degree {
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    list-style-type: none;
    @media (max-width: 425px) {
      font-size: 0.875rem;
    }
  }
`;

export default Education;
