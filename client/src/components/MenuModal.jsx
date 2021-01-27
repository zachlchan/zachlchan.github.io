import React from 'react';
import styled from 'styled-components';

let displayValue;
let widthVal;
let heightVal;

const MenuModal = ({ visible, width, height, click }) => {
  visible ? displayValue = 'block' : displayValue = 'none';
  if (width < 769) {
    widthVal = `${width}px`;
    heightVal = `${height}px`;
   } else {
    widthVal = '600px';
    heightVal = 'auto';
   }

  return (
    <div>
      <StyledDiv>
        <StyledCloseBTN onClick={click}>
          <StyledSVG viewBox="0 0 24 24">
            <StyledLine x1="24" y1="0" y2="24" strokeMiterlimit="10"/>
            <StyledLine x1="24" y1="24" y2="0" strokeMiterlimit="10"/>
          </StyledSVG>
        </StyledCloseBTN>
        <StyledNav>
          <StyledUl>
            <StyledLi><StyledA href="#about" onClick={click}>About</StyledA></StyledLi>
            <StyledLi><StyledA href="#projects" onClick={click}>Projects</StyledA></StyledLi>
            <StyledLi><StyledA href="#skills" onClick={click}>Skills</StyledA></StyledLi>
            <StyledLi><StyledA href="#workexp" onClick={click}>Work Experience</StyledA></StyledLi>
            <StyledLi><StyledA href="#education" onClick={click}>Education</StyledA></StyledLi>
            <StyledLi><StyledA href="#contact" onClick={click}>Contact</StyledA></StyledLi>
          </StyledUl>
        </StyledNav>
      </StyledDiv>
      <Overlay onClick={click}></Overlay>
    </div>
  )
}

const StyledDiv = styled.div`
  display: ${() => displayValue};
  position: sticky;
  background-color: #fff;
  opacity: 0.95;
  width: ${() => `${widthVal}`};
  height: ${() => `${heightVal}`};
  max-width: 100%;
  max-height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 22;
`;
const StyledCloseBTN = styled.div`
  float: right;
  width: 1.5rem;
  margin: 20px;
`;
const StyledLine = styled.line`
  stroke: #000
`;
const StyledSVG = styled.svg`
  vertical-align: bottom;
  stroke-width: 1.5;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;
const StyledNav = styled.nav`
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: .085rem;
  margin: 0 auto;
  padding: 15%;
`;
const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding 0;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
const StyledLi = styled.li`
  list-style-type: none;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;
const StyledA = styled.a`
  position: relative;
  text-decoration: none;
  color: #312f2b;
  &:hover {
    color: #312f2b;
    text-decoration: none;
  }
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #312f2b;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    transform-origin: 0 50%;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin:0 50%;
  }
`;
const Overlay = styled.div`
  display: ${() => displayValue};
  z-index: 21;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.75;
`;

export default MenuModal;
