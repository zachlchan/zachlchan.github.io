import React from 'react';
import styled from 'styled-components';

let displayValue;

const Navigation = ({ width }) => {
  width < 768 ? displayValue = 'none' : displayValue = 'table';

  return (
    <StyledNav>
      <StyledUl>
        <StyledLi><StyledA href="#about">About</StyledA></StyledLi>
        <StyledLi><StyledA href="#projects">Projects</StyledA></StyledLi>
        <StyledLi><StyledA href="#skills">Skills</StyledA></StyledLi>
        <StyledLi><StyledA href="#workexp">Work Experience</StyledA></StyledLi>
        <StyledLi><StyledA href="#education">Education</StyledA></StyledLi>
        <StyledLi><StyledA href="#contact">Contact</StyledA></StyledLi>
      </StyledUl>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  font-family: 'Work Sans', sans-serif;
  text-transform: uppercase;
  letter-spacing: .085rem;
  display: ${() => displayValue};
  margin: 0 auto;
  padding-top: 0.625rem;
`;
const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding 0;
`;
const StyledLi = styled.li`
  display: inline;
  list-style-type: none;
  padding-left: .875rem;
  padding-right: .875rem;
`;
const StyledA = styled.a`
  position: relative;
  text-decoration: none;
  color: #312f2b;
  &:hover {
    color: #312f2b;
  }
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #312f2b;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
  &:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

export default Navigation;
