import React from 'react';
import styled from 'styled-components';

const Navigation = () => {
  return (
    <StyledWrap>
      <nav className="horizontal-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#workexp">Work Experience</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#education">Education</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </StyledWrap>
  )
}

const StyledWrap = styled.div`
  & .horizontal-nav {
    font-family: 'Work Sans', sans-serif;
    text-transform: uppercase;
    letter-spacing: .085rem;
    display: table;
    margin: 0 auto;
    padding-top: 0.625rem;
  }
  & .nav-list {
    list-style-type: none;
    margin: 0;
    padding 0;
  }
  & .nav-item {
    display: inline-block;
    list-style-type: none;
  }
  & .nav-link {
    position: relative;
    text-decoration: none;
    color: #312f2b;
    margin: 0.5rem 1rem;
    padding: 0;
  }
  & .nav-link:hover {
    color: #312f2b;
    font-weight: 500;
    text-decoration: none;
  }
  & .nav-link:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #556b2f;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    transform-origin: 50% 0%;
  }
  & .nav-link:hover:after {
    transform: scaleX(1);
    transform-origin: 50% 0%;
  }
  @media (max-width: 768px) {
    & .horizontal-nav {
      display: none;
    }
  }
`;

export default Navigation;
