import React from 'react';
import styled from 'styled-components';

const StyledSVGcontainer = styled.div`
  position: relative;
  width: 1.5rem;
  top: 5%;
  left: 90%;
`;

const StyledLine = styled.line`
  stroke: #000
`;
const StyledSVG = styled.svg`
  vertical-align: bottom;
  stroke-width: 1.5;
`;
const StyledNav = styled.nav`
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: .085rem;
  margin: 0 auto;
  padding-top: 100px;
  padding-left: 15%;
`;
const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding 0;
`;
const StyledLi = styled.li`
  list-style-type: none;
  padding-left: .875rem;
  padding-right: .875rem;
  padding-top: 3rem;
`;
const StyledA = styled.a`
  text-decoration: none;
  color: #312f2b;
`;

let displayValue;

const StyledDiv = styled.div`
  display: ${() => displayValue};
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  opacity: 0.95;
  height: 100%;
  width: 100%;
  z-index: 9;
`;

const MenuModal = ({ visible, click }) => {
  if (visible) {
    displayValue = 'block';
  } else {
    displayValue = 'none';
  }
  return (
    <StyledDiv>
      <StyledSVGcontainer onClick={click}>
        <StyledSVG viewBox="0 0 24 24">
          <StyledLine x1="24" y1="0" y2="24" strokeMiterlimit="10"/>
          <StyledLine x1="24" y1="24" y2="0" strokeMiterlimit="10"/>
        </StyledSVG>
      </StyledSVGcontainer>
      <StyledNav>
        <StyledUl>
          <StyledLi><StyledA href="#projects">Projects</StyledA></StyledLi>
          <StyledLi><StyledA href="#skills">Skills</StyledA></StyledLi>
          <StyledLi><StyledA href="#workexp">Work Experience</StyledA></StyledLi>
          <StyledLi><StyledA href="#education">Education</StyledA></StyledLi>
          <StyledLi><StyledA href="#contact">Contact</StyledA></StyledLi>
        </StyledUl>
      </StyledNav>
    </StyledDiv>
  )
}

export default MenuModal;